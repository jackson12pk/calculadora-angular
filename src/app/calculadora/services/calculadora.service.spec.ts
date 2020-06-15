import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('Deve garantir que 1 + 4 = 5', () => {
    let soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  });
  
  it('Deve garantir que 1 - 4 = -3', () => {
    let subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(-3);
  });
  
  it('Deve garantir que 4 / 2 = 2', () => {
    let divisao = service.calcular(4, 2, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(2);
  });
  
  it('Deve garantir que 1 * 4 = 4', () => {
    let multiplicacao = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(4);
  });
  
  it('Deve retornar 0 quando operação for inválida', () => {
    let operacaoInvalida = service.calcular(1, 4, "%");
    expect(operacaoInvalida).toEqual(0);
  });
  
  
  
});
