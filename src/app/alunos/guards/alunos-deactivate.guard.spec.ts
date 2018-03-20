import { TestBed, inject } from '@angular/core/testing';

import { AlunosDeactivateGuard } from './alunos-deactivate.guard';
describe('AlunosDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunosDeactivateGuard]
    });
  });

  it('should be created', inject([AlunosDeactivateGuard], (service: AlunosDeactivateGuard) => {
    expect(service).toBeTruthy();
  }));
});
