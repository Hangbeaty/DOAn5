import { Component,Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-add-edit-new',
  templateUrl: './add-edit-new.component.html',
  styleUrls: ['./add-edit-new.component.css']
})
export class AddEditNewComponent implements OnInit{
  constructor(private service:SharedService) { }
  @Input() n:any;
  NewID: any;
  NewName:any;
  Description:any;
  Image:any;


  ngOnInit(): void {
    this.NewID=this.n.NewID;
    this.NewName=this.n.NewName;
    this.Description=this.n.Description;
    this.Image=this.n.Image
  }
  addNew(){
    var val = {
      NewID:this.NewID,
      NewName:this.NewName,
      Description:this.Description,
      Image:this.Image,

    };
    this.service.addNew(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatNew(){
    var val = {NewID:this.NewID,
      NewName:this.NewName,
      Description:this.Description,
      Image:this.Image,
};
    this.service.updateNew(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
