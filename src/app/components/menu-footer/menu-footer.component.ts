import { Component, OnInit } from '@angular/core';
import { AuthService } from '../acess/service/auth.service';

@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.scss']
})
export class MenuFooterComponent implements OnInit {

  edited: boolean = false;
  mostrarMenu: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {


  }

  fazerLogi(){
   this.edited = true;
   this.mostrarMenu = false;

  }
  fazerLog(){
    this.mostrarMenu = true;
    this.edited = false;

   }

   fazerLo(){
    this.mostrarMenu = false;
    this.edited = false;

   }


}
