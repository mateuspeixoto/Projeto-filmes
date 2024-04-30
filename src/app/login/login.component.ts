import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMsg = '';
  constructor() {
    // Este é o construtor da classe LoginComponent
    // Aqui você pode inicializar propriedades e realizar outras tarefas de configuração
  }

  ngOnInit() {
    // Este é o lugar perfeito para colocar a lógica de inicialização
    console.log(
      'O componente LoginComponent está totalmente inicializado e pronto para uso!'
    );
  }

  login() {
    if (this.username.length === 0) {
      this.errorMsg = 'O campo de usuário está vazio.';
    } else if (this.password.length === 0) {
      this.errorMsg = 'O campo de senha está vazio.';
    } else {
      this.errorMsg = '';
    }
  }
}
