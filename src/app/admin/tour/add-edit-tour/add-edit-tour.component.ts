import { Component, Input, OnInit } from '@angular/core';

import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-add-edit-tour',
  templateUrl: './add-edit-tour.component.html',
  styleUrls: ['./add-edit-tour.component.css']
})
export class AddEditTourComponent implements OnInit{
  constructor(private service:SharedService) { }
  @Input() to:any;
  TourID: any;
  TourName:any;
  CategoryID:any;
  PlaceID:any;
  Description:any;
  Price:any;
  PriceDiscount:any;
  Image:any;
  PlaceName:any;
  Time:any


  ngOnInit(): void {
    this.TourID=this.to.TourID;
    this.TourName=this.to.TourName;
    this.CategoryID=this.to.CategoryID;
    this.PlaceID=this.to.PlaceID;
    this.Description=this.to.Description;
    this.Price=this.to.Price;
    this.PriceDiscount=this.to.PriceDiscount;
    this.Image=this.to.Image;
    this.PlaceName=this.to.PlaceName;
    this.Time=this.to.Time
  }
  addTour(){
    var val = {
      TouurID:this.TourID,
      TourName:this.TourName,
      CategoryID:this.CategoryID,
      PlaceID:this.PlaceID,
      Description:this.Description,
      Price:this.Price,
      PriceDiscount:this.PriceDiscount,
      Image:this.Image,
      PlaceName:this.PlaceName,
      Time:this.Time

    };
    this.service.addTour(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTour(){
    var val = {TouurID:this.TourID,
      TourName:this.TourName,
      CategoryID:this.CategoryID,
      PlaceID:this.PlaceID,
      Description:this.Description,
      Price:this.Price,
      PriceDiscount:this.PriceDiscount,
      Image:this.Image,
      PlaceName:this.PlaceName,
      Time:this.Time
};
    this.service.updateTour(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}

