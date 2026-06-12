# Bolão Copa Mercado Sofia

Sistema web interno e recreativo para funcionários registrarem palpites dos jogos da Copa 2026.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Firebase Authentication
- Firestore Database

## Rotas

- `/login`
- `/cadastro`
- `/dashboard`
- `/jogos`
- `/meus-palpites`
- `/ranking`
- `/admin`

## Configuração

1. Instale as dependências:

```bash
npm install
```

2. Copie `.env.example` para `.env` e preencha as variáveis do Firebase.

3. Rode o projeto:

```bash
npm run dev
```

## Firebase

O arquivo `src/lib/firebase.ts` já inicializa:

- `auth` para Firebase Authentication
- `db` para Firestore Database

As telas estão preparadas como base visual e funcional para conectar os fluxos reais de login, cadastro, jogos, palpites, ranking e administração.
