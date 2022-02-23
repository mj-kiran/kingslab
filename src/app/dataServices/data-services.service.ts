import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  currentUserName: any

  currentAcno: any

  users: any = {
    1000: { acno: 1000, uname: "Neer", password: "1000" },
    1001: { acno: 1001, uname: "Laisha", password: "1001"},
    1002: { acno: 1002, uname: "Vyom", password: "1002" }

  }

  constructor() { }

// to store in local storage
// saveDetails(){
//   if(this.users){
//     localStorage.setItem("db",JSON.stringify(this.users))
//   }
//   if(this.currentUserName){
//     localStorage.setItem("cUsername",JSON.stringify(this.currentUserName))
//   }

  register(acno:any,password:any,uname:any){
    let db=this.users
    if(acno in db){
      return false
      // alert("account already exist")
    }
    else{
      db[acno]={
        acno,
        uname,
        password
      }
      console.log(db);
      return true
      // this.saveDetails()
    }
}
login(acno:any,password:any){
  let db=this.users
if(acno in db){
  if(password==db[acno]["password"]){
    return true
  }
  else{
    return false
  }
}
else{
  return false
}
}

}

