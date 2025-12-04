'use client'

import { useState, useEffect } from 'react'
import { supabase, PortfolioItem } from '@/lib/supabase'

export default function PortfolioWebsite() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPortfolio()
  }, [])

  const fetchPortfolio = async () => {
    try {
      setLoading(true)
      // For demo purposes, using mock data if Supabase is not configured
      // In production, replace with: const { data, error } = await supabase.from('database_portfolio').select('*')
      
      // Mock portfolio projects data
      const mockPortfolio: PortfolioItem[] = [
        {
          id: '1',
          asset_name: 'E-Commerce Platform',
          asset_type: 'Web Development',
          quantity: 1,
          value: 95,
          change_percent: 0
        },
        {
          id: '2',
          asset_name: 'Mobile Banking App',
          asset_type: 'React Native',
          quantity: 1,
          value: 88,
          change_percent: 0
        },
        {
          id: '3',
          asset_name: 'AI Dashboard',
          asset_type: 'Next.js & AI',
          quantity: 1,
          value: 92,
          change_percent: 0
        },
        {
          id: '4',
          asset_name: 'Blockchain Explorer',
          asset_type: 'Web3',
          quantity: 1,
          value: 90,
          change_percent: 0
        }
      ]

      setPortfolio(mockPortfolio)
    } catch (error) {
      console.error('Error fetching portfolio:', error)
    } finally {
      setLoading(false)
    }
  }

  const skills = [
    { name: 'React', level: 95, color: '#61DAFB' },
    { name: 'TypeScript', level: 90, color: '#3178C6' },
    { name: 'Next.js', level: 92, color: '#000000' },
    { name: 'Node.js', level: 88, color: '#339933' },
    { name: 'Python', level: 85, color: '#3776AB' },
    { name: 'Supabase', level: 87, color: '#3ECF8E' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/60 backdrop-blur-sm border-b-2 border-amber-200 sticky top-0 z-50 shadow-pixel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="pixel-logo">
                <span className="text-2xl font-bold">MJ</span>
              </div>
              <h1 className="text-3xl font-bold pixel-text-primary">
                Portfolio
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="pixel-nav-link">About</a>
              <a href="#projects" className="pixel-nav-link">Projects</a>
              <a href="#skills" className="pixel-nav-link">Skills</a>
              <a href="#contact" className="pixel-nav-link">Contact</a>
            </nav>
            <button className="pixel-button-primary">
              Get in Touch
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <div className="pixel-hero-card">
            <h2 className="text-6xl font-bold mb-4 pixel-text-hero">
              Seah Ming Jun
            </h2>
            <p className="text-2xl mb-6 pixel-text-secondary">
              Full Stack Developer & Creative Coder
            </p>
            <p className="text-lg max-w-2xl mx-auto pixel-text-tertiary mb-8">
              Building beautiful, pixel-perfect web experiences with modern technologies
              and a passion for clean code.
            </p>
            <div className="flex justify-center gap-4">
              <button className="pixel-button-primary-large">
                View Projects
              </button>
              <button className="pixel-button-secondary-large">
                Download CV
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-4xl font-bold mb-8 pixel-text-section">About Me</h2>
          <div className="pixel-card-large">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 pixel-text-primary">Who I Am</h3>
                <p className="pixel-text-paragraph mb-4">
                  I'm a passionate full-stack developer with expertise in modern web technologies.
                  I love creating interactive, user-friendly applications that combine functionality
                  with beautiful design.
                </p>
                <p className="pixel-text-paragraph">
                  My journey in tech started with curiosity and has evolved into a career focused
                  on building scalable solutions and pixel-perfect interfaces.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 pixel-text-primary">What I Do</h3>
                <ul className="space-y-3">
                  {['Web Development', 'UI/UX Design', 'API Development', 'Database Design', 'Cloud Deployment'].map((item, idx) => (
                    <li key={idx} className="pixel-list-item">
                      <span className="pixel-bullet">▸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold pixel-text-section">Featured Projects</h2>
            <button className="pixel-link-button">
              View All →
            </button>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="pixel-card skeleton"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolio.map((item) => (
                <div key={item.id} className="pixel-card pixel-card-hover">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 pixel-text-primary">{item.asset_name}</h3>
                      <p className="pixel-text-tertiary">{item.asset_type}</p>
                    </div>
                    <div className="pixel-badge">
                      {item.value}%
                    </div>
                  </div>
                  <p className="pixel-text-paragraph mb-4">
                    A modern web application built with cutting-edge technologies,
                    featuring responsive design and optimal performance.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {['React', 'TypeScript', 'Next.js'].map((tech) => (
                      <span key={tech} className="pixel-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button className="pixel-button-small">Live Demo</button>
                    <button className="pixel-button-small-secondary">GitHub</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-4xl font-bold mb-8 pixel-text-section">Skills & Expertise</h2>
          <div className="pixel-card-large">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="pixel-skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold pixel-text-primary">{skill.name}</span>
                    <span className="pixel-text-tertiary">{skill.level}%</span>
                  </div>
                  <div className="pixel-progress-bar">
                    <div 
                      className="pixel-progress-fill" 
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-4xl font-bold mb-8 pixel-text-section">Get In Touch</h2>
          <div className="pixel-card-large">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="pixel-contact-card">
                <div className="pixel-icon-box">📧</div>
                <h3 className="font-bold text-lg mb-2 pixel-text-primary">Email</h3>
                <p className="pixel-text-tertiary">john@portfolio.com</p>
              </div>
              <div className="pixel-contact-card">
                <div className="pixel-icon-box">💼</div>
                <h3 className="font-bold text-lg mb-2 pixel-text-primary">LinkedIn</h3>
                <p className="pixel-text-tertiary">linkedin.com/in/john</p>
              </div>
              <div className="pixel-contact-card">
                <div className="pixel-icon-box">🐙</div>
                <h3 className="font-bold text-lg mb-2 pixel-text-primary">GitHub</h3>
                <p className="pixel-text-tertiary">github.com/john</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-sm border-t-2 border-amber-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="pixel-text-tertiary">
            © 2025 John Portfolio. Built with Next.js & Supabase.
          </p>
        </div>
      </footer>
    </div>
  )
}
