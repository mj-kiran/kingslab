import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicesService } from '../dataServices/data-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private ds:DataServicesService) { }

  ngOnInit(): void {
  }

}
