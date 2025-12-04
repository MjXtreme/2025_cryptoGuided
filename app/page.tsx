'use client'

import { useState, useEffect } from 'react'
import { supabase, PortfolioItem } from '@/lib/supabase'

export default function BankingDashboard() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)
  const [totalBalance, setTotalBalance] = useState(0)

  useEffect(() => {
    fetchPortfolio()
  }, [])

  const fetchPortfolio = async () => {
    try {
      setLoading(true)
      // For demo purposes, using mock data if Supabase is not configured
      // In production, replace with: const { data, error } = await supabase.from('database_portfolio').select('*')
      
      // Mock portfolio data
      const mockPortfolio: PortfolioItem[] = [
        {
          id: '1',
          asset_name: 'Savings Account',
          asset_type: 'Bank Account',
          quantity: 1,
          value: 125000.50,
          change_percent: 2.5
        },
        {
          id: '2',
          asset_name: 'Investment Portfolio',
          asset_type: 'Stocks',
          quantity: 1,
          value: 87500.25,
          change_percent: -1.2
        },
        {
          id: '3',
          asset_name: 'Crypto Holdings',
          asset_type: 'Cryptocurrency',
          quantity: 1,
          value: 45200.75,
          change_percent: 5.8
        }
      ]

      setPortfolio(mockPortfolio)
      const total = mockPortfolio.reduce((sum, item) => sum + item.value, 0)
      setTotalBalance(total)
    } catch (error) {
      console.error('Error fetching portfolio:', error)
    } finally {
      setLoading(false)
    }
  }

  const recentTransactions = [
    { id: 1, description: 'Salary Deposit', amount: 5000, type: 'credit', date: '2025-01-15' },
    { id: 2, description: 'Grocery Store', amount: -125.50, type: 'debit', date: '2025-01-14' },
    { id: 3, description: 'Investment Transfer', amount: -2000, type: 'debit', date: '2025-01-13' },
    { id: 4, description: 'Freelance Payment', amount: 1500, type: 'credit', date: '2025-01-12' },
    { id: 5, description: 'Utility Bill', amount: -85.25, type: 'debit', date: '2025-01-11' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">$</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Banking Portal
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="nav-link">Dashboard</a>
              <a href="#" className="nav-link">Portfolio</a>
              <a href="#" className="nav-link">Transactions</a>
              <a href="#" className="nav-link">Settings</a>
            </nav>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              Profile
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Balance Card */}
        <div className="mb-8">
          <div className="balance-card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-white text-sm mb-1">Total Balance</p>
                <h2 className="text-4xl font-bold text-gray-900">
                  ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </h2>
              </div>
              <div className="text-right">
                <p className="text-green-600 text-sm font-semibold">+2.4%</p>
                <p className="text-white text-xs">This month</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <button className="action-btn-primary">
                <span>+</span> Add Funds
              </button>
              <button className="action-btn-secondary">
                Transfer
              </button>
              <button className="action-btn-secondary">
                Pay Bills
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Portfolio</h2>
            <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              View All →
            </button>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="portfolio-card skeleton"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map((item) => (
                <div key={item.id} className="portfolio-card">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.asset_name}</h3>
                      <p className="text-sm text-gray-500">{item.asset_type}</p>
                    </div>
                    <div className={`change-badge ${item.change_percent >= 0 ? 'positive' : 'negative'}`}>
                      {item.change_percent >= 0 ? '↑' : '↓'} {Math.abs(item.change_percent)}%
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-gray-900">
                      ${item.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Recent Transactions */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Transactions</h2>
            <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              View All →
            </button>
          </div>
          
          <div className="transactions-container">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="transaction-item">
                <div className="flex items-center space-x-4">
                  <div className={`transaction-icon ${transaction.type}`}>
                    {transaction.type === 'credit' ? '↑' : '↓'}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{transaction.description}</h4>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                  <div className={`transaction-amount ${transaction.type}`}>
                    {transaction.type === 'credit' ? '+' : ''}${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
