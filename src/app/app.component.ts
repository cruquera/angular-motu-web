import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Compra } from './shared/models/compra.model';
import { Produto } from './shared/models/produto.model';
import { Recomendacao } from './shared/models/recomendacao.model';
import { MotuCoreService } from './shared/services/motu-core.service';

const ELEMENT_DATA: Produto[] = [
  {
    descricao: 'Deo Parfum Essencial Clássico Masculino',
    quantidade: 1,
    preco: 124.9,
  },
  {
    descricao: 'Sabonete Líquido em Gel Lima e Flor',
    quantidade: 2,
    preco: 61.8,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public customOptions: any = {
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    navText: ['Anterior', 'Próximo'],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
  public displayedColumns: string[] = ['descricao', 'qtd', 'preco'];
  public dataSource = ELEMENT_DATA;

  public idUsuario: number = 10;
  public compra: Compra = new Compra();
  public recomendacoes: Recomendacao[] = [];
  public flLoading = false;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private motuCoreService: MotuCoreService
  ) {
    iconRegistry.addSvgIcon(
      'logo',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icons/natura-logo.svg'
      )
    );
  }

  ngOnInit(): void {
    let produto = new Recomendacao();
    produto.descricao = 'Deo Parfum Essencial Elixir Masculino';
    produto.tags = ['Lançamento', 'Essencial'];
    this.recomendacoes.push(produto);
    let produtoDois = new Recomendacao();
    produtoDois.descricao = 'Deo Parfum Essencial Elixir Masculino';
    produtoDois.tags = ['Lançamento', 'Essencial'];
    this.recomendacoes.push(produtoDois);
    let produtoTres = new Recomendacao();
    produtoTres.descricao = 'Deo Parfum Essencial Elixir Masculino';
    produtoTres.tags = ['Lançamento', 'Essencial'];
    this.recomendacoes.push(produtoTres);
    let produtoQuatro = new Recomendacao();
    produtoQuatro.descricao = 'Deo Parfum Essencial Elixir Masculino';
    produtoQuatro.tags = ['Lançamento', 'Essencial'];
    this.recomendacoes.push(produtoQuatro);
    this.obterRecomendacoes();

    this.dataSource.forEach(
      (produto) => (this.compra.valorCompra += produto.preco)
    );
    this.compra.valorDesconto = this.compra.valorCompra * 0.3;
  }

  public obterRecomendacoes(): void {
    this.flLoading = true;
    this.motuCoreService.obterRecomendacoesUsuario(this.idUsuario).subscribe(
      (response) => {
        response.forEach((recomendacao) => {
          let recomendacaoAux = new Recomendacao();
          recomendacaoAux.descricao = recomendacao.product;
          recomendacaoAux.nota = recomendacao.notas;
          recomendacaoAux.tags = recomendacao.generos.split('|');
        });
        this.flLoading = false;
      },
      (error) => {
        console.log(error);
        this.flLoading = false;
      }
    );
  }

  public onClickCalcular() {
    this.flLoading = true;
    this.compra.valorEntrega = 20.5;
    this.flLoading = false;
  }
}
