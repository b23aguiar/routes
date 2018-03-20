import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';

import { AlunosService } from '../alunos.service';

import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  aluno: Aluno;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService) { }

  ngOnInit() {
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.aluno = this.alunosService.getAluno(this.id);

        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    );*/

    this.inscricao = this.route.data.subscribe(
      (info) => {
        this.aluno = info.aluno;
      }
    );
  }

  editarAluno() {
    this.router.navigate(['/alunos', this.aluno.id, 'edit']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
