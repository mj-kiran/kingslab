import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicesService } from '../dataServices/data-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname =""
  acno=""
  pswd=""

  currentUserName: any

  currentAcno: any

  users: any = {
    1000: { acno: 1000, uname: "Neer", password: "1000" },
    1001: { acno: 1001, uname: "Laisha", password: "1001"},
    1002: { acno: 1002, uname: "Vyom", password: "1002" }

  }

  

  constructor(  private router:Router, private ds:DataServicesService) { }

  ngOnInit(): void {

  }

  
  register(){

    var uname=this.uname
    var acno=this.acno
    var pswd=this.pswd
    let result=this.ds.register(acno,pswd,uname)
    if(result){
      alert("account created successfull")
      this.router.navigateByUrl('')
    
      
    }
    else{
      alert("account already exist")
      
      
    }
}
  

 
}