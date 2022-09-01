import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  time: any = {
    nome: '',
    escudo: '',
    pontos: 0
  }

  times: any = [];

  constructor() { }

  ngOnInit() { // executado ao carregar a tela
    this.times = JSON.parse(localStorage.getItem('times'));
  }

  criar() {
    this.times.push(Object.assign({}, this.time));
    localStorage.setItem('times', JSON.stringify(this.times)) // salva informações
  }

}
