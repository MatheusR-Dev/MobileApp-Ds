import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dado: number = 0;
  sorteado: boolean = false;
  constructor() {}

  async sortear() {
    for (let i = 0 ; i < 10; i++){
    this.sorteado = true;
    const numSorteado = Math.random();
    this.dado = Math.floor(numSorteado * 6 + 1);
    await new Promise(f => setTimeout(f, 200));
    }
    this.sorteado = false;
  }

}
