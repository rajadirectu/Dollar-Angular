import { Component, OnInit } from '@angular/core';
import { BusinessLicenseService } from 'src/app/business-license.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [BusinessLicenseService]
})
export class ListComponent implements OnInit {
  businessLicenseData:any = [];
  constructor(private blservice: BusinessLicenseService) { 
    this.blservice.getData().subscribe(data=>{
      console.warn(data), 
      this.businessLicenseData = data
    });
  }
  
  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[]; 

  getInfoFromService1(){
    this.infoReceived1 = this.blservice.getInfo1();
  }
  getInfoFromService2(){
    this.infoReceived2 = this.blservice.getInfo2()
  }
  getInfoFromService3(){
    this.infoReceived3 = this.blservice.getInfo3()
  }  

  ngOnInit(): void {
  }

}
