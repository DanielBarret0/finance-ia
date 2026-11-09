# 💰 Finance IA

Aplicação web de gestão financeira pessoal. O usuário entra com sua conta, registra receitas, despesas e investimentos e acompanha o resumo do mês num dashboard.

## Funcionalidades

- **Login** com Clerk (cada usuário vê só as próprias transações)
- **Dashboard** com cards de resumo e filtro por mês
- **Transações**: criar e editar em um modal, com validação do formulário
  - Tipos: depósito, despesa e investimento
  - Categorias: moradia, transporte, alimentação, lazer, saúde, utilidades, salário, educação e outros
  - Métodos de pagamento: cartão de crédito, cartão de débito, transferência, boleto, dinheiro, Pix e outros
- **Tabela de transações** com badge por tipo, valores em reais e datas formatadas
- **Página de assinatura** (estrutura inicial)

## Stack

| Camada | Tecnologias |
|---|---|
| Front-end | Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui (Radix UI), lucide-react |
| Formulários | React Hook Form, Zod, react-number-format, react-day-picker, date-fns |
| Tabelas | TanStack Table |
| Back-end | Server Actions do Next.js, Prisma ORM, PostgreSQL |
| Autenticação | Clerk |
| Qualidade | ESLint, Prettier, Husky, lint-staged, commits padronizados |

## Modelo de dados

```prisma
model Transaction {
  id            String
  name          String
  type          TransactionType          // DEPOSIT | EXPENSE | INVESTMENT
  amount        Decimal                  // Decimal(10, 2)
  category      TransactionCategory
  paymentMethod TransactionPaymentMethod
  date          DateTime
  userId        String
}
```

## Como rodar

```bash
git clone https://github.com/DanielBarret0/finance-ia.git
cd finance-ia
npm install
```

Crie um arquivo `.env` com as variáveis:

```env
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

```bash
npx prisma migrate dev
npm run dev
```

Acesse http://localhost:3000.

---

Feito por [Daniel Barreto](https://www.linkedin.com/in/daniel-barreto-developer) · [Portfólio](https://portifoliodaniel.vercel.app/)
