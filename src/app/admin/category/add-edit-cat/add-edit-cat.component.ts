import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-cat',
  templateUrl: './add-edit-cat.component.html',
  styleUrls: ['./add-edit-cat.component.css']
})
export class AddEditCatComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() cat:any;
  CategoryID: any;
  CategoryName:any;
  Description:any;

  ngOnInit(): void {
    this.CategoryID=this.cat.CategoryID;
    this.CategoryName=this.cat.CategoryName;
    this.Description=this.cat.Description;

  }
  addCategory(){
    var val = {
      CategoryID:this.CategoryID,
      CategoryName:this.CategoryName,
      Description:this.Description
    };
    this.service.addCategory(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCategory(){
    var val = {CategoryID:this.CategoryID,
      CategoryName:this.CategoryName,
      Description:this.Description,
};
    this.service.updateCategory(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}

