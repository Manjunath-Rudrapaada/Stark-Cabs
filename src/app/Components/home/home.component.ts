import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
    
  }

  changeDetails() {
  
      let name1 = document.getElementById("details").innerHTML
      let name2 = document.getElementById("details").innerHTML = "VIEW LESS"
      let details = document.getElementById("detail").innerHTML
      document.getElementById("detail").innerHTML = details + "<br>" +"Stark travels provides Cheap Long-Term Car Rentals to Professionals, Foreign Travellers and Students in Bengaluru. We have been in the car rental business for over ten(10) years. Focusing on Daily, Weekly and Monthly Rentals" + "<br>" +"Stark travels provides Cheap Long-Term Car Rentals to Professionals, Foreign Travellers and Students in Bengaluru. We have been in the car rental business for over ten(10) years. Focusing on Daily, Weekly and Monthly Rentals"
      document.getElementById("details").addEventListener("click",()=>{
        document.getElementById("details").innerHTML = name1
        document.getElementById("detail").innerHTML = details
      })
    
  }


}
