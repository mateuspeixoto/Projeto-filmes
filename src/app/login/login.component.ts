import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMsg = '';
  constructor(private auth: AuthService, private router: Router) {
    // Este é o construtor da classe LoginComponent
    // Aqui você pode inicializar propriedades e realizar outras tarefas de configuração
  }

  ngOnInit() {
    // Este é o lugar perfeito para colocar a lógica de inicialização
    console.log(
      'O componente LoginComponent está totalmente inicializado e pronto para uso!'
    );
  }

  // Função responsável por realizar o login
  login() {
    // Verifica se o campo de usuário está vazio
    if (this.username.length === 0) {
      this.errorMsg = 'O campo de usuário está vazio.';
      return;
    }
    // Verifica se o campo de senha está vazio
    if (this.password.length === 0) {
      this.errorMsg = 'O campo de senha está vazio.';
      return;
    }
    // Limpa a mensagem de erro
    this.errorMsg = '';
    // Realiza o login chamando o serviço de autenticação
    const res = this.auth.login(this.username, this.password);
    // Verifica o resultado do login
    switch (res) {
      case 200:
        // Redireciona para a página home em caso de sucesso
        this.router.navigate(['home']);
        break;
      case 403:
        // Exibe mensagem de erro em caso de usuário ou senha inválidos
        this.errorMsg = 'Usuário ou senha inválidos. Tente novamente.';
        break;
      default:
        // Exibe mensagem de erro genérica em caso de erro desconhecido
        this.errorMsg = 'Erro desconhecido. Por favor, tente novamente mais tarde.';
        break;
    }
  }
}
