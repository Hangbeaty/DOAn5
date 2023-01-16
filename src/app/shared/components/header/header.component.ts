import {
  Component,
  OnInit,
  Injector,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/admin/models/category.model';
import { TourModel } from 'src/app/admin/models/tour.model';
import { CustomerService } from 'src/app/services/customer.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent extends BaseComponent implements OnInit {
  constructor(inject: Injector, private service: CustomerService) {
    super(inject);
  }
  @Output() refreshData: EventEmitter<string> = new EventEmitter();

  itemRequest: CategoryModel | undefined;
  name: string = '';
  ngOnInit(): void {
    const categoryId: any = this.route!.snapshot.paramMap.get('categoryId'); //lấy value từ url
    this.service.findById(categoryId).subscribe({
      next: (value) => {
        this.itemRequest = value || null;
      },
    });
  }
  logout() {
    this.messageService?.confirm().subscribe((isConfirm) => {
      if (isConfirm) {
        this.service.logout();
        setTimeout(() => {
          this.router?.navigateByUrl('/login');
        }, 0);
      }
    });
  }
  search(name: string) {
    this.name = name;
    this.refreshData.emit(this.name);
  }
}
