import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicesService } from '../dataServices/data-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acno=""

  

  pswd=""


  

  constructor(private router:Router, private ds:DataServicesService) { }

  ngOnInit(): void {
  }

  acnoChange(event:any){

    this.acno=event.target.value
    console.log(this.acno); 
    
        
      }
    
      pswdChange(event:any){
    
        this.pswd=event.target.value
        console.log(this.pswd);
        
            
    }

    login(){
      var acno=this.acno
      var password=this.pswd

      let result =this.ds.login(acno,password)
      if(result){
        alert("login successfull")
    this.router.navigateByUrl('dashboard')
        }
        // else{
        //   alert("incorrect password")
        // }
      
      else{
        alert("invalid credentials")
      }
    }

  }
