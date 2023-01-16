import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { cleanDataForm } from 'src/app/core/interceptor/core/utils/common-functions';
import { validateAllFormFields } from 'src/app/core/utils/common-functions';
import { CustomerService } from 'src/app/services/customer.service';
import { BaseComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BaseComponent {
  constructor(inject: Injector, private service: CustomerService) {
    super(inject);
  }
  form = this.fb!.group({
    customerEmail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  login() {
    const data = cleanDataForm(this.form);
    if (this.form.status === 'INVALID') {
      validateAllFormFields(this.form!);
      return;
    }
    this.service.login(data).subscribe({
      next: (value) => {
        if (value.code === 999) {
          this.messageService?.error('Tài khoản hoặc mật khẩu chưa đúng');
        } else this.router?.navigateByUrl('');
      },
      error: () => {
        this.messageService?.error('Hệ thống đang lỗi');
      },
    });
  }
  logout() {
    this.service.logout();
  }
}
