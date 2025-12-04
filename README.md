# Banking Portal - Portfolio Management System

A specialized banking interface built with Next.js, featuring portfolio management, transaction tracking, and Supabase integration. The interface includes modern ecommerce-themed UI with smooth hover effects and animations.

## Features

- 🏦 **Banking Dashboard** - Overview of total balance and account summary
- 💼 **Portfolio Management** - Track multiple asset types (Bank Accounts, Stocks, Cryptocurrency)
- 📊 **Transaction History** - View recent transactions with credit/debit indicators
- 🎨 **Ecommerce Theme** - Modern UI with gradient effects and smooth animations
- ✨ **Hover Effects** - Interactive elements with CSS transitions
- 🔌 **Supabase Integration** - Ready for database_portfolio table connection

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (optional - app works with mock data if not configured)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up Supabase (Optional):

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase Setup

To connect to your Supabase database:

1. Create a table named `database_portfolio` in your Supabase project
2. Add the following columns:
   - `id` (uuid, primary key)
   - `asset_name` (text)
   - `asset_type` (text)
   - `quantity` (numeric)
   - `value` (numeric)
   - `change_percent` (numeric)
   - `created_at` (timestamp)

3. Update `app/page.tsx` to use real Supabase queries:
   ```typescript
   const { data, error } = await supabase.from('database_portfolio').select('*')
   ```

Currently, the app uses mock data for demonstration purposes.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
