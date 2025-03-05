Academia Responsiva
Descrição
Este é um site totalmente responsivo de uma academia, desenvolvido com React e Vite para o frontend, e Node.js com Nodemailer para o backend. O projeto permite que usuários enviem dúvidas sobre a academia diretamente pelo site, utilizando um formulário de contato que dispara um email através do Nodemailer. Além disso, o site é integrado com bibliotecas como Axios para requisições HTTP e Toastify para exibir notificações de maneira prática e interativa.

Tecnologias Utilizadas

Frontend:

React
Vite
Axios
Toastify
CSS (para design responsivo)

Backend:

Node.js
Nodemailer

Funcionalidades
Formulário de Contato: Permite que os usuários enviem dúvidas sobre a academia, com envio de email via Nodemailer.

Design Responsivo: O site é responsivo e se adapta a diferentes tamanhos de tela, proporcionando uma boa experiência de usuário em dispositivos móveis e desktop.

Notificações Interativas: Utilização do Toastify para mostrar mensagens de sucesso ou erro durante a interação com o site.

screenshots do projeto:

![Desktop](assets/screenshots/screenDesktop.jpg)
![Mobile](assets/screenshots/screenMobile.jpg)


Como Rodar o Projeto

Pré-requisitos
Node.js (versão >= 14)
npm ou yarn

Passos
1- Clone este repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio


2- Instale as dependências para o frontend:
cd frontend
npm install


3-Instale as dependências para o backend:
cd backend
npm install

4-Para rodar o backend:
node server.js

5-Para rodar o frontend:
cd frontend
npm run dev

6- Acesse o site em http://localhost:3000 no seu navegador, ou se estiver usando vite, http://localhost:5173

Licença
Este projeto está sob a licença MIT.


