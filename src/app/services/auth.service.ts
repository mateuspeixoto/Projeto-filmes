import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * Construtor da classe AuthService.
   * 
   * @param auth O serviço de autenticação.
   */
  constructor() {}

  /**
   * Autentica um usuário com o nome de usuário e senha fornecidos.
   * @param uname - O nome de usuário do usuário.
   * @param pword - A senha do usuário.
   * @returns O código de status indicando o resultado da autenticação.
   *          - 200: Autenticação bem-sucedida.
   *          - 403: Autenticação falhou.
   */

  login(uname: string, pword: string): number {
    if (uname === 'mateus' && pword === '1234') {
      return 200;
    } else {
      return 403;
    }
  }
}
