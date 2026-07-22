# Controle de Gastos Residenciais

Sistema para gerenciamento de pessoas e transações financeiras.

A aplicação permite:

- Cadastro de pessoas
- Listagem de pessoas
- Exclusão de pessoas
- Cadastro de transações
- Listagem de transações
- Controle de receitas e despesas
- Consulta de totais financeiros

---

# Tecnologias utilizadas

## Backend

- .NET 8
- ASP.NET Core Web API
- Entity Framework Core
- SQLite
- Swagger

## Frontend

- React
- TypeScript
- Vite
- CSS

---

# Como executar

## 1. Clonar o projeto

```bash
git clone https://github.com/GbNymos/controle_de_gastos_residencial.git
```

Entrar na pasta:

```bash
cd controle_de_gastos_residencial
```

---

# Backend

## Requisitos

- .NET SDK 8+

Verificar:

```bash
dotnet --version
```

Caso necessário:


### Windows

```powershell
winget install Microsoft.DotNet.SDK.8
```

### Linux

```bash
sudo apt update
sudo apt install dotnet-sdk-8.0
```

---

## Executar API

Entrar na pasta do backend:

```bash
cd backend/Api
```

Restaurar dependências:

```bash
dotnet restore
```

Executar:

```bash
dotnet run
```

API disponível em:

```
http://localhost:5044
```

Swagger:

```
http://localhost:5044/swagger
```

O banco SQLite é criado automaticamente na primeira execução.

---

## Executar Frontend

### Requisitos

- Node.js 18+
- npm

Verificar instalação:

```bash
node -v
npm -v
```

---

Entrar na pasta do frontend:

```bash
cd frontend/controle-gastos-front
```

Instalar dependências:

```bash
npm install
```

Executar aplicação:

```bash
npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```
