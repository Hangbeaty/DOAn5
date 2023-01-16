import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NotificationMessageService } from './core/services/message.service';
import { ConfirmDialogComponent } from './shared/components';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'DoAn5';
  constructor(
    private service: NotificationMessageService,
    private messageService: MessageService,
    public dialogService: DialogService,
   // private loadingService: LoadingService,
    private ref: ChangeDetectorRef
  ) {
    this.subscription.push(
      this.service.subjectMessage.subscribe((notify) => {
        this.messageService.add(notify);
      })
    );
    this.subscription.push(
      this.service.subjectDialog.subscribe((data) => {
        this.showConfirm(data.key);
      })
    );
  }
  loading = false;
  subscription: Subscription[] = [];
  classNameLayout = 'layout-wrapper layout-menu-light';

  showConfirm(key: string) {
    if (key === 'confirm') {
      const option: DynamicDialogConfig = {
        header: 'Confirm',
        width: '400px',
        baseZIndex: 10000,
      };
      const ref: DynamicDialogRef = this.dialogService.open(ConfirmDialogComponent, option);
      ref.onClose.subscribe((isConfirm: boolean) => {
        this.service.subjectDialog.next({ key: isConfirm ? 'accept' : 'reject' });
      });
    }
  }

  onStaticMenu(isLock: boolean) {
    this.classNameLayout = isLock
      ? 'layout-wrapper layout-menu-light layout-wrapper-static'
      : 'layout-wrapper layout-menu-light';
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  //mới
  // ngAfterContentChecked() {
  //   this.loadingService.showLoading.subscribe((res: boolean) => {
  //     this.loading = res;
  //   });
  //   this.ref.detectChanges();
  // }
}
