# Bytebank - Aplicação Principal (Root/Host)

Este é o projeto **root** (ou host) da aplicação Bytebank, desenvolvido como parte da pós-graduação em Front-End Engineering da FIAP! 🚀

Neste projeto, aplicamos o conceito de **Arquitetura de Micro-Frontends** utilizando **Webpack Module Federation**. Ele atua como a casca (shell) principal, orquestrando a integração e a exibição de todos os outros micro-frontends da aplicação.

---

### ✅ Status do projeto

🚧 Root App 🚀 Em construção... 🚧

---

### ❗ Sobre o Projeto

O **Root App** é a base da aplicação Bytebank. Ele é responsável por:

- Definir o layout principal da página.
- Gerenciar o roteamento entre as diferentes seções (Dashboard, Transferências, etc.).
- Carregar e integrar dinamicamente os micro-frontends remotos, como o cabeçalho (`appHeader`), o painel principal (`appDashboard`) e o extrato (`appTransactions`).

Ele consome os módulos federados expostos pelos outros micro-frontends e garante que dependências compartilhadas (como React, Material-UI e Zustand) sejam instanciadas como singletons, otimizando o desempenho e a consistência.

**Versão de produção:** **[bytebank](https://bytebank-tc2.vercel.app/)**

---

### ✔️ Funcionalidades

- [x] **Estrutura de Layout Principal**: Define as áreas para o cabeçalho e o conteúdo principal.
- [x] **Roteamento Centralizado**: Utiliza `react-router-dom` para navegar entre as páginas.
- [x] **Carregamento Dinâmico (Lazy Loading)**: Carrega os micro-frontends sob demanda usando `React.lazy` e `Suspense`, melhorando o tempo de carregamento inicial.
- [x] **Integração de Micro-Frontends**: Configurado para consumir `appHeader`, `appDashboard`, `appTransactions` e os utilitários (`utilUi`, `utilApi`, `utilStore`).
- [x] **Gerenciamento de Dependências Compartilhadas**: Garante que bibliotecas essenciais sejam carregadas apenas uma vez.
- [x] **Histórico de Navegação Compartilhado**: Integra-se com o `utilStore` para um histórico de navegação unificado entre todos os componentes.

---

### 💻 Layout da Aplicação

O layout é definido no `root` e organiza os micro-frontends em uma estrutura coesa.

```
+--------------------------------------------------+
|                 appHeader                        |
+--------------------------------+-----------------+
|                                |                 |
|         appDashboard           | appTransactions |
|                                |                 |
+--------------------------------+-----------------+
```

:computer: WEB Layout

<img width="502" height="745" alt="image" src="https://github.com/user-attachments/assets/f2dcbb9e-0399-4455-b0fe-61f9b227c180" />

---

📱 MOBILE Layout

<img width="190" height="860" alt="image" src="https://github.com/user-attachments/assets/00b378a5-e814-4dd6-9f85-f72a76b8399c" />

---

### 🛠️ Tecnologias

As tecnologias principais utilizadas no desenvolvimento deste projeto são:

- **React.js**
- **TypeScript**
- **React Router DOM**
- **Webpack (Module Federation)**
- **Material-UI** (via `utilUi`)
- **Zustand** (via `utilStore`)
- **Babel**
- **ESLint**
- **Prettier**

---

### 🚀 Como rodar localmente

#### Pré-requisitos

- **Node.js**
- **npm** ou **Yarn**
- Todos os outros micro-frontends do Bytebank devem estar em execução.

#### Passos

1. Clone o repositório (se ainda não o fez) e navegue até a pasta do projeto:

   ```bash
   # git clone <url-do-monorepo-bytebank>
   cd projects/root
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

A aplicação principal estará disponível em: **http://localhost:3000**

> ⚠️ **Atenção:** Este é o container principal e depende de outros serviços para funcionar corretamente. Certifique-se de que os seguintes serviços estejam rodando em suas respectivas portas, conforme configurado em `config/webpack.dev.js`:
>
> - **appHeader**: `http://localhost:3001`
> - **appDashboard**: `http://localhost:3002`
> - **appTransactions**: `http://localhost:3003`
> - **utilUi**: `http://localhost:8310`
> - **utilApi**: `http://localhost:8311`
> - **utilStore**: `http://localhost:8312`

---

### 📂 Estrutura do Projeto

```
📦root
 ┣ 📂config
 ┃ ┣ 📜getEnvVars.js
 ┃ ┣ 📜webpack.common.js
 ┃ ┣ 📜webpack.dev.js
 ┃ ┗ 📜webpack.prod.js
 ┣ 📂public
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂styles
 ┃ ┃ ┗ 📜style.css
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜declarations.d.ts
 ┃ ┗ 📜main.tsx
 ┣ 📜package.json
 ┗ 📜tsconfig.json
```

---

Feito com 💙 para fins educacionais.
