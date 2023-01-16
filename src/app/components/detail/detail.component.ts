import { Component, Injector, OnInit } from '@angular/core';
import { TourModel } from 'src/app/admin/models/tour.model';
import { TourService } from 'src/app/services/tour.service';
import { BaseComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends BaseComponent implements OnInit {
  constructor(inject: Injector, private service: TourService) {
    super(inject);
  }
  itemRequest: TourModel | undefined;
  ngOnInit(): void {
    const tourId: any = this.route!.snapshot.paramMap.get('tourId');//lấy value từ url
    this.service.findById(tourId).subscribe({
      next: (value) => {
        this.itemRequest = value || null;
      },

    })
  }
  getUrlByOrder(id:number){
    this.router?.navigateByUrl('/order/'+id)

  }

}
