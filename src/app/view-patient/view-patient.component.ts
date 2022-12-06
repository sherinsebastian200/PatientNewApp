import { Component } from '@angular/core';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent { 
  constructor(private api:ApiService){
  api.fetchPatients().subscribe(
    (response)=>
    {
      this.patients=response
    }
  )
}

 patients:any=[]
}