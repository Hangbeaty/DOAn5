import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-add-edit-cus',
  templateUrl: './add-edit-cus.component.html',
  styleUrls: ['./add-edit-cus.component.css']
})
export class AddEditCusComponent implements OnInit{
  constructor(private service:SharedService) { }
  @Input() cus:any;
  CustomerID: any;
  CustomerName:any;
  CustomerEmail:any;
  CustomerPhone:any;
  CustomerAdress:any;

  ngOnInit(): void {
    this.CustomerID=this.cus.CustomerID;
    this.CustomerName=this.cus.CustomerName;
    this.CustomerEmail=this.cus.CustomerEmail;
    this.CustomerPhone=this.cus.CustomerPhone;
    this.CustomerAdress=this.cus.CustomerAdress;
  }
  addCustomer(){
    var val = {
      CustomerID:this.CustomerID,
      CustomerName:this.CustomerName,
      CustomerEmail:this.CustomerEmail,
      CustomerPhone:this.CustomerPhone,
      CustomerAdress:this.CustomerAdress
    };
    this.service.addCustomer(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCustomer(){
    var val = { CustomerID:this.CustomerID,
      CustomerName:this.CustomerName,
      CustomerEmail:this.CustomerEmail,
      CustomerPhone:this.CustomerPhone,
      CustomerAdress:this.CustomerAdress
};
    this.service.updateCustomer(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}

