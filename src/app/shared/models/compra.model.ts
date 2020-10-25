import { Produto } from './produto.model';

export class Compra {
  valorCompra: number = 0;
  valorDesconto: number = 0;
  valorEntrega: number = 0;
  produtos: Produto[];
  cep: string;

  constructor() {
    this.produtos = [];
  }
}
