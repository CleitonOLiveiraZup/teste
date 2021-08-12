import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Usuario } from './posto';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.scss']
})
export class PostLoginComponent implements OnInit {

  loginForm!: FormGroup;
  usuario: Usuario = new Usuario();


 constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

 ngOnInit(): void {
   this.loginForm = this.formBuilder.group({
     userName: ['', Validators.required],
     password: ['', Validators.required]
 });
 }
 fazerLogin(){
   this.authService.fazerLogin(this.usuario);
}

}
