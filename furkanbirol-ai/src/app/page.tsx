'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState<'tr' | 'en'>('tr'); // Default: Türkçe

  // localStorage'dan dil tercihini yükle
  useEffect(() => {
    const savedLang = (localStorage.getItem('language') as 'tr' | 'en') || 'tr';
    setLanguage(savedLang);
  }, []);

  // Dil değiştir ve localStorage'a kaydet
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
      askTitle: 'AI Asistanıma Sor',
      askSubtitle: 'AI asistanım sayesinde CV’m, deneyimlerim ve projelerim hakkında her şeyi öğrenebilirsin.',
      quickQuestions: 'Denemek ister misin?',
      email: 'furkanbirol@icloud.com',
      phone: '+90 551 419 81 34',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      whatsapp: 'WhatsApp',
      contact: 'İletişim',
      achievements: 'Başarılar',
      sprintEfficiency: 'Sprint verimliliği: %20 artış',
      productionDefects: 'Üretim hataları: %50 azalma',
      releaseTime: 'Sürüm süresi: %40 kısalma',
      automationScope: 'Otomasyon kapsamı: %60 artış',
      productAdoption: 'Ürün benimsenmesi: %20 artış',
      competencies: 'Yetkinlikler',
      certifications: 'Sertifikalar',
      skills: 'Teknik Beceriler',
      noAnswer: 'AI asistanım, CV\'m, deneyimlerim ve projelerim hakkında sorularınıza cevap verebilir. Yukarıdan bir soru seçin veya kendiniz yazın.',
      send: 'Gönder',
      thinking: 'Düşünüyor...',
    },
    en: {
      title: 'Furkan Birol',
      subtitle: 'Product Owner • Agile Lead • QA Automation Expert',
      askTitle: 'Ask my AI Assistant',
      askSubtitle: 'Learn everything about my resume, experience, and projects through my AI assistant.',
      quickQuestions: 'Want to try?',
      email: 'furkanbirol@icloud.com',
      phone: '+90 551 419 81 34',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      whatsapp: 'WhatsApp',
      contact: 'Contact',
      achievements: 'Achievements',
      sprintEfficiency: 'Sprint efficiency: 20% increase',
      productionDefects: 'Production defects: 50% reduction',
      releaseTime: 'Release time: 40% decrease',
      automationScope: 'Automation scope: 60% increase',
      productAdoption: 'Product adoption: 20% increase',
      competencies: 'Core Competencies',
      certifications: 'Certifications',
      skills: 'Technical Skills',
      noAnswer: 'My AI assistant can answer your questions about my resume, experience, and projects. Pick a question above or type your own.',
      send: 'Send',
      thinking: 'Thinking...',
    }
  }[language];

  const ask = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');

    // Dil bilgisini prompt'a ekle
    const langPrompt = language === 'tr' 
      ? 'Lütfen Türkçe cevap ver.' 
      : 'Please answer in English.';

    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        question: `${question} (${langPrompt})` 
      }),
    });

    const data = await res.json();
    setAnswer(data.answer);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-106 bg-white shadow-sm border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto">
        <div className="p-6">
          {/* Logo / Avatar */}
          <div className="flex items-center mb-8">
            <img src="/furkan.png" alt="Furkan Birol" className="w-12 h-12 rounded-full mr-3" />
            <span className="text-xl font-bold text-gray-800">FB</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t.title}</h1>
          <p className="text-gray-600 text-base mb-6">{t.subtitle}</p>

          {/* Profile Image */}
          {/* <div className="mb-8">
            <img
              src="/furkan.png"
              alt="Furkan Birol"
              className="w-32 h-32 rounded-full mx-auto border-4 border-blue-200 shadow-lg"
            />
          </div> */}

          {/* Short Bio */}
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            {language === 'tr'
              ? '11+ yıllık deneyimle, Agile ekipleri yönetiyorum, ürün stratejileri geliştiriyorum ve kalite güvencesini CI/CD ile entegre ediyorum.'
              : 'With 11+ years of experience, I lead Agile teams, design product strategies, and integrate quality assurance into CI/CD pipelines.'
            }
          </p>

          {/* Core Competencies */}
          <div className="mb-8">
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
          <div className="mb-8">
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
          <div className="mb-8">
            <h3 className="text-base font-semibold text-gray-800 uppercase tracking-wider mb-3">{t.certifications}</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• ISTQB Certified Tester</li>
              <li>• PSM-I (Professional Scrum Master)</li>
              <li>• NGL (Next Generation Leaders)</li>
              <li>• PMI Project Management Expert</li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h3 className="text-base font-semibold text-gray-800 uppercase tracking-wider mb-3">{t.skills}</h3>
            <div className="flex flex-wrap gap-1">
              {["Python", "Java", "C#", "Selenium", "Playwright", "JIRA", "Azure DevOps", "Jenkins", "Docker", "Git"].map((tech) => (
                <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links - Tümü Tek Satırda */}
          <div className="flex space-x-6 mt-6 text-sm">
            {/* Email */}
            <a
              href="mailto:furkanbirol@icloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>Email</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/furkan-birol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm">{t.linkedin}</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/furkanbirol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-800 hover:text-gray-900 transition group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.82-.255.82-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.96-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.34 1.23-3.135-.12-.3-.54-1.485.12-3.09 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.605.24 2.79.12 3.09.765.795 1.23 1.83 1.23 3.135 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="text-sm">{t.github}</span>
            </a>
          </div>

        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-106">

        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
          <nav className="flex space-x-6">
            <a href="/" className="text-blue-600 font-medium hover:text-blue-800 transition text-base">{t.askTitle}</a>
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

        {/* Chat Area */}
        <div className="max-w-4xl mx-auto p-8 mt-10">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">{t.askTitle}</h1>
            <p className="text-gray-600 mt-2 text-base">{t.askSubtitle}</p>
          </div>

          {/* Quick Questions */}
          <div className="mt-6 text-sm text-gray-500">
            <strong>{t.quickQuestions}</strong>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                { tr: 'Agile ekibimi nasıl yönetiyorum?', en: 'How do I manage my Agile team?' },
                { tr: 'Test otomasyonu çerçevesi nasıl kurdum?', en: 'How did I build my test automation framework?' },
                { tr: 'Siemens\'de neler başardım?', en: 'What did I achieve at Siemens?' },
              ].map((q) => (
                <button
                  key={q.tr}
                  onClick={() => {
                    setQuestion(q[language]);
                    ask(); // Otomatik gönder
                  }}
                  className="text-blue-500 hover:underline text-sm bg-blue-50 px-2 py-1 rounded"
                >
                  {q[language]}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            {/* AI Response */}
            <div className="mb-4 p-4 bg-gray-50 rounded-lg min-h-40 text-gray-700 text-base leading-relaxed">
              {answer || t.noAnswer}
            </div>

            {/* Input Area */}
            <div className="flex gap-3">
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && ask()}
                placeholder={language === 'tr' ? 'Furkan\'a ne sormak istersin?' : 'What would you like to ask Furkan?'}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
              />
              <button
                onClick={ask}
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-xl"
              >
                {loading ? t.thinking : t.send}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}