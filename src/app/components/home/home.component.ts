import { Component, Injector, OnInit } from '@angular/core';
import { TourModel } from 'src/app/admin/models/tour.model';
import { TourService } from 'src/app/services/tour.service';
import { BaseComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor(inject: Injector, private service: TourService) { super(inject) }
  tourList: TourModel[] = [];
  ngOnInit(): void {
    this.getAllTour();
  }
  params ={
    name:'',
  }
  totalLength:number = 0;
  page=1;
  getAllTour(first?:boolean) {
    if (first) {
      this.page =1;
    }
    this.service.get({...this.params}).subscribe({
      next: (value) => {
        this.tourList = value;
        this.totalLength=value.length;
      }
    })
  }
  pageChange(newPage: number) {
		this.page = newPage;

	}
  viewDetail(id:number){
        this.router?.navigateByUrl('/detail/'+id)
  }
  refresh(value: string) {
      this.params.name=value;
      this.getAllTour(true);
  }
}
