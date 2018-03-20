import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';

import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(usuario: Usuario) {
    if (usuario.nome === '123' && usuario.senha === '123') {
      this.usuarioAutenticado = true;

      this.showMenuEmitter.emit(true);

      this.router.navigate(['/']);
    }else{
      this.usuarioAutenticado = false;

      this.showMenuEmitter.emit(false);
    }
  }

  isUsuarioAutenticado() {
    return this.usuarioAutenticado;
  }

}
