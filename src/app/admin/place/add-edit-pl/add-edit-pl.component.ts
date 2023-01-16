import { Component, OnInit,Input, Injector } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-pl',
  templateUrl: './add-edit-pl.component.html',
  styleUrls: ['./add-edit-pl.component.css']
})
export class AddEditPlComponent  implements OnInit{
  constructor(private service:SharedService) { }
  @Input() pl:any;
  PlaceID: any;
  PlaceName:any;
  Description:any

  ngOnInit(): void {
    this.PlaceID=this.pl.PlaceID;
    this.PlaceName=this.pl.PlaceName;
    this.Description=this.pl.Description;

  }
  addPlace(){
    var val = {
      PlaceID:this.PlaceID,
      PlaceName:this.PlaceName,
      Description:this.Description,
    };
    this.service.addPlace(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePlace(){
    var val = { PlaceID:this.PlaceID,
      PlaceName:this.PlaceName,
      Description:this.Description,
};
    this.service.updatePlace(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}

