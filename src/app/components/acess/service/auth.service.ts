
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { EventEmitter } from '@angular/core';
import { Usuario } from '../post-login/posto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAuntenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor( private router: Router) { }

  fazerLogin(usuario: Usuario): void{

    if(usuario.nome === '00.000.000/0000-00' && usuario.senha === '1234'){

     this.mostrarMenuEmitter.emit(true);
     this.usuarioAuntenticado = true;
     this.router.navigate(['/home'])

    }else{
      this.mostrarMenuEmitter.emit(false);
      this.usuarioAuntenticado = false;
      alert("Senha ou Usuario incorreto")
    }
  }
  usuarioEstaAunteticado(){
    return this.usuarioAuntenticado;
  }
}
