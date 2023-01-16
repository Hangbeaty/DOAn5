import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit{
  constructor(private service:SharedService) { }
  @Input() con:any;
  ID: any;
  Name:any;
  Email:any;
  Phone:any;
  Content:any;

  ngOnInit(): void {
    this.ID=this.con.ID;
    this.Name=this.con.Name;
    this.Email=this.con.Email;
    this.Phone=this.con.Phone;
    this.Content=this.con.Content;
  }
  addContact(){
    var val = {
      ID:this.ID,
      rName:this.Name,
      Email:this.Email,
      Phone:this.Phone,
      Content:this.Content
    };
    this.service.addcontomer(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateContact(){
    var val = { ID:this.ID,
      rName:this.Name,
      Email:this.Email,
      Phone:this.Phone,
      Content:this.Content
};
    this.service.updatecontomer(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
