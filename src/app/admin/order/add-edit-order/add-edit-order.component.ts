import { Component,Input } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-order.component.html',
  styleUrls: ['./add-edit-order.component.css']
})
export class AddEditOrderComponent {
  constructor(private service:SharedService) { }
  @Input() to:any;
  OrderID: any;
  OrderName:any;
  OrderEmail:any;
  OrderAdress:any;
  OrderPhone:any;
  OrderDate:any;
  CategoryName:any;
  PlaceName:any;
  TourName:any;
  StartDate:any;
  Note:any


  ngOnInit(): void {

  }

  updateOrder(){
    var val = {OrderID:this.OrderID,
      OrderName:this.OrderName,
      OrderEmail:this.OrderEmail,
      OrderPhone:this.OrderPhone,
      OrderAdress:this.OrderAdress,
      OrderDate:this.OrderDate,
      CategoryName:this.CategoryName,
      PlaceName:this.PlaceName,
      TourName:this.TourName,
      StartDate:this.StartDate,
      Note:this.Note
};
    this.service.updateTour(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}


