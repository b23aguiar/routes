import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/RX';

import { AuthService } from '../../login/auth.service';

import { FormCanDeactivate } from '../../guards/forms-candeactivate.guard';

//import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';

@Injectable()
  export class AlunosDeactivateGuard implements CanDeactivate<FormCanDeactivate> {

  canDeactivate(
    component: FormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    //return component.canChangeRoute();
    return component.isAllowed();
  }

}
