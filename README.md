# 🚀 Automação de Testes E2E com WebdriverIO

[![WebdriverIO](https://img.shields.io/badge/WebdriverIO-8%2B-007ACC?style=for-the-badge&logo=webdriverio&logoColor=white)](https://webdriver.io/)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-8%2B-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📄 Descrição
Este projeto implementa testes automatizados de ponta a ponta (E2E) para o site Automation Exercise utilizando WebdriverIO. Ele cobre cenários como registro de usuários, manipulação de carrinho de compras e validação de produtos.

---

## 📂 Estrutura do Projeto
```
qa.automationexercise-web.webdriverio/
├── config/
├── src/
│   ├── data/
│   ├── utils/
├── test/
│   ├── specs/
│   ├── pageobjects/
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Configuração do Ambiente

### Pré-requisitos
- Node.js 16.x ou superior
- npm 8.x ou superior
- Navegador Google Chrome instalado

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/marcio-fs/qa.automationexercise-web.webdriverio.git
   cd qa.automationexercise-web.webdriverio
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

---

## ▶️ Execução dos Testes

### Comandos Disponíveis
- **Executar todos os testes**:
  ```bash
  npm test
  ```
- **Executar testes específicos**:
  ```bash
  npx wdio --spec ./test/specs/newUserRegistration.spec.js
  ```

---

## 🛠️ Funcionalidades Testadas
### Cenários Cobertos
1. **Registro de novo usuário**:
   - Preenchimento de formulário
   - Validação de mensagens de sucesso
2. **Manipulação de produtos**:
   - Busca de produtos
   - Adição ao carrinho
   - Alteração de quantidade
3. **Exclusão de conta**:
   - Validação de mensagens de exclusão

---

## 📊 Relatórios de Testes
Os relatórios Allure são gerados automaticamente após a execução dos testes. Para visualizar:
1. Execute os testes:
   ```bash
   npm test
   ```
2. Gere o relatório:
   ```bash
   allure generate allure-results --clean
   allure open
   ```

---

**Nota:** Este projeto é apenas para fins de avaliação técnica.
