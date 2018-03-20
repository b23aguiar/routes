import { TestBed, inject } from '@angular/core/testing';

import { AlunosGuard } from './alunos.guard';

describe('AlunosGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunosGuard]
    });
  });

  it('should be created', inject([AlunosGuard], (service: AlunosGuard) => {
    expect(service).toBeTruthy();
  }));
});
