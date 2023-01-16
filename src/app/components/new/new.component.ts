import { Component, Injector, OnInit } from '@angular/core';
import { NewModel } from 'src/app/admin/models/new.model';
import { NewService } from 'src/app/services/new.service';
import { BaseComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent extends BaseComponent implements OnInit {

  constructor(inject: Injector, private service: NewService) { super(inject) }
  newList: NewModel[] = [];
  ngOnInit(): void {
    this.getAllNew();
  }
  totalLength:number = 0;
  page=1;
  getAllNew() {
    this.service.getAll().subscribe({
      next: (value) => {
        this.newList = value;
      }
    })
  }
  pageChange(newPage: number) {
		this.page = newPage;

	}
  viewDetail(id:number){
        this.router?.navigateByUrl('/detail/'+id)
  }

}
