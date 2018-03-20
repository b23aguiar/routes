import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/RX';

import { AlunosService } from '../alunos.service';

import { FormCanDeactivate } from '../../guards/forms-candeactivate.guard';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, FormCanDeactivate {

  id: number;
  inscricao: Subscription;
  aluno: any = {};
  formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.aluno = this.alunosService.getAluno(this.id);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }

  canChangeRoute() {
    if (this.formMudou) {
      return confirm('Deseja sair?');
    }
    return true;
  }

  isAllowed() {
    return this.canChangeRoute();
  }

}
