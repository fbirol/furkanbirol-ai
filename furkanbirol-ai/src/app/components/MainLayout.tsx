// src/app/components/MainLayout.tsx
'use client';

import { ReactNode, useState, useEffect } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');

  useEffect(() => {
    const savedLang = (localStorage.getItem('language') as 'tr' | 'en') || 'tr';
    setLanguage(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  // Çeviriler
  const t = {
    tr: {
      title: 'Furkan Birol',
      subtitle: 'Ürün Sahibi • Agile Lider • Test Otomasyon Uzmanı',
      askTitle: 'Sor Furkan\'a',
      story: 'Hikayem',
      projects: 'Projelerim',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      achievements: 'Başarılar',
      sprintEfficiency: 'Sprint verimliliği: %20 artış',
      productionDefects: 'Üretim hataları: %50 azalma',
      releaseTime: 'Sürüm süresi: %40 kısalma',
      automationScope: 'Otomasyon kapsamı: %60 artış',
      productAdoption: 'Ürün benimsenmesi: %20 artış',
      competencies: 'Yetkinlikler',
      certifications: 'Sertifikalar',
      skills: 'Teknik Beceriler',
      source: 'Kaynak: CV, LinkedIn, Projeler',
      thinking: 'Düşünüyor...',
    },
    en: {
      title: 'Furkan Birol',
      subtitle: 'Product Owner • Agile Lead • QA Automation Expert',
      askTitle: 'Ask Furkan',
      story: 'My Story',
      projects: 'Projects',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      achievements: 'Achievements',
      sprintEfficiency: 'Sprint efficiency: 20% increase',
      productionDefects: 'Production defects: 50% reduction',
      releaseTime: 'Release time: 40% decrease',
      automationScope: 'Automation scope: 60% increase',
      productAdoption: 'Product adoption: 20% increase',
      competencies: 'Core Competencies',
      certifications: 'Certifications',
      skills: 'Technical Skills',
      source: 'Source: Resume, LinkedIn, Projects',
      thinking: 'Thinking...',
    },
  }[language];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sabit Sidebar */}
      <aside className="w-96 bg-white shadow-sm border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto">
        <div className="p-6">
          {/* Logo / Avatar */}
          <div className="flex items-center mb-8">
            <img src="/furkan.png" alt="Furkan Birol" className="w-12 h-12 rounded-full mr-3" />
            <span className="text-xl font-bold text-gray-800">FB</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t.title}</h1>
          <p className="text-gray-600 text-base mb-6">{t.subtitle}</p>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6">
            <a href="mailto:furkanbirol@icloud.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition group">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>{t.email}</span>
            </a>
            <a href="https://linkedin.com/in/furkan-birol" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition group">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>{t.linkedin}</span>
            </a>
            <a href="https://github.com/birol" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-800 hover:text-gray-900 transition group">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.82-.255.82-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.96-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.34 1.23-3.135-.12-.3-.54-1.485.12-3.09 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.605.24 2.79.12 3.09.765.795 1.23 1.83 1.23 3.135 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>{t.github}</span>
            </a>
          </div>

          <br></br>

          {/* Short Bio */}
          <p className="text-gray-600 text-base leading-relaxed mb-8 opacity-0 animate-fade-in">
            {language === 'tr'
              ? '11+ yıllık deneyimle, Agile ekipleri yönetiyorum, ürün stratejileri geliştiriyorum ve kalite güvencesini CI/CD ile entegre ediyorum.'
              : 'With 11+ years of experience, I lead Agile teams, design product strategies, and integrate quality assurance into CI/CD pipelines.'
            }
          </p>

          {/* Core Competencies */}
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-base font-semibold text-gray-800 uppercase tracking-wider mb-3">{t.competencies}</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Agile Product Ownership</li>
              <li>• Test Automation Strategy</li>
              <li>• Scrum Facilitation</li>
              <li>• Cross-functional Leadership</li>
              <li>• API & UI Testing</li>
              <li>• CI/CD (Jenkins, Docker)</li>
              <li>• Stakeholder Communication</li>
              <li>• Risk-Based Testing</li>
            </ul>
          </div>

          {/* Key Achievements */}
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-base font-semibold text-gray-800 uppercase tracking-wider mb-3">{t.achievements}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✅ {t.sprintEfficiency}</li>
              <li>✅ {t.productionDefects}</li>
              <li>✅ {t.releaseTime}</li>
              <li>✅ {t.automationScope}</li>
              <li>✅ {t.productAdoption}</li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <h3 className="text-base font-semibold text-gray-800 uppercase tracking-wider mb-3">{t.certifications}</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• ISTQB Certified Tester</li>
              <li>• PSM-I (Professional Scrum Master)</li>
              <li>• NGL (Next Generation Leaders)</li>
              <li>• PMI Project Management Expert</li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-base font-semibold text-gray-800 uppercase tracking-wider mb-3">{t.skills}</h3>
            <div className="flex flex-wrap gap-1">
              {["Python", "Java", "C#", "Selenium", "Playwright", "JIRA", "Azure DevOps", "Jenkins", "Docker", "Git"].map((tech) => (
                <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </aside>

      {/* Ana İçerik */}
      <main className="flex-1 ml-96">

        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
          <nav className="flex space-x-6">
            <a href="/" className="text-blue-600 font-medium hover:text-blue-800 transition text-base">{t.askTitle}</a>
            <a href="/story" className="text-gray-600 hover:text-gray-800 transition text-base">{t.story}</a>
            <a href="/projects" className="text-gray-600 hover:text-gray-800 transition text-base">{t.projects}</a>
          </nav>

          {/* Dil Seçici */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition text-sm font-medium group"
            >
              {language === 'tr' ? (
                <>
                  <img src="/flags/en.svg" alt="English" className="w-5 h-4 rounded-sm group-hover:scale-105 transition" />
                  <span>EN</span>
                </>
              ) : (
                <>
                  <img src="/flags/tr.svg" alt="Türkçe" className="w-5 h-4 rounded-sm group-hover:scale-105 transition" />
                  <span>TR</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* İçerik (Değişir) */}
        {children}

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 text-center text-gray-500 text-sm shadow-t-lg z-10">
          <div className="flex items-center justify-center space-x-2">
            <span>Powered by Gemini</span>
            {/* <img src="/gemini-logo.svg" alt="Gemini" className="h-5" /> */}
            <span>• Built with Next.js & Vercel</span>
          </div>
        </footer>
      </main>

      {/* Animasyon Stili */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}