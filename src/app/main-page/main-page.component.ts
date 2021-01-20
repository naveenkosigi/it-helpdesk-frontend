import { loginService } from './../services/loginService';
import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public loginService:loginService,private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  showLoginPage(content):void{
    this.modalService.open(content,{centered:true});
  }

}
