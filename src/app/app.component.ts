import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from './shared/models/produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  customOptions: any = {
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

  public idUsuario: number = 0;
  public usuarioFormGroup: FormGroup;
  public produtos: Produto[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.usuarioFormGroup = this.formBuilder.group({
      idUsuario: ['', Validators.required],
      flRequestConcluida: ['', Validators.required],
    });

    let produto = new Produto();
    produto.id = 95554;
    produto.nome = 'Essencial Elixir Masculino';
    produto.descricao = 'Deo Parfum Essencial Elixir Masculino';
    produto.conteudo = '100ml';
    produto.marca = 'Essencial';
    produto.preco = 124.9;
    produto.tags = ['Lançamento', 'Essencial'];
    this.produtos.push(produto);
    let produtoDois = new Produto();
    produtoDois.id = 95554;
    produtoDois.nome = 'Essencial Elixir Masculino';
    produtoDois.descricao = 'Deo Parfum Essencial Elixir Masculino';
    produtoDois.conteudo = '100ml';
    produtoDois.marca = 'Essencial';
    produtoDois.preco = 124.9;
    produtoDois.tags = ['Lançamento', 'Essencial'];
    this.produtos.push(produtoDois);
    let produtoTres = new Produto();
    produtoTres.id = 95554;
    produtoTres.nome = 'Essencial Elixir Masculino';
    produtoTres.descricao = 'Deo Parfum Essencial Elixir Masculino';
    produtoTres.conteudo = '100ml';
    produtoTres.marca = 'Essencial';
    produtoTres.preco = 124.9;
    produtoTres.tags = ['Lançamento', 'Essencial'];
    this.produtos.push(produtoTres);
    let produtoQuatro = new Produto();
    produtoQuatro.id = 95554;
    produtoQuatro.nome = 'Essencial Elixir Masculino';
    produtoQuatro.descricao = 'Deo Parfum Essencial Elixir Masculino';
    produtoQuatro.conteudo = '100ml';
    produtoQuatro.marca = 'Essencial';
    produtoQuatro.preco = 124.9;
    produtoQuatro.tags = ['Lançamento', 'Essencial'];
    this.produtos.push(produtoQuatro);
  }

  public onClickObterRecomendacoes(): void {
    this.usuarioFormGroup.get('flRequestConcluida').setValue(true);
  }
}
