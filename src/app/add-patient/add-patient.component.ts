import { Component } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  name=""
  pid=""
  address=""
  contact=""
  doa=""
  image=""
  dname=""
  constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={"name":this.name,"pid":this.pid,"address":this.address,"contact":this.contact,"doa":this.doa,"image":this.image,
    "dname":this.dname}
    console.log(data)
    this.api.addPatients(data).subscribe(
      (response :any)=>{
        console.log(response)
        
      
      }
    )
    
    }
    }