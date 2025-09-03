'use client';

import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');

    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setAnswer(data.answer);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white shadow-sm border-r border-gray-200 h-screen fixed left-0 top-0">
        <div className="p-6">
          {/* Logo / Avatar */}
          <div className="flex items-center mb-8">
            <img
              src="/furkan.png"
              alt="Furkan Birol"
              className="w-12 h-12 rounded-full mr-3"
            />
            <span className="text-xl font-bold text-gray-800">FB</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Furkan Birol</h1>
          <p className="text-gray-600 mb-6">Product Owner • Agile Lead • QA Automation Expert</p>

          {/* Profile Image */}
          {/* <div className="mb-8">
            <img
              src="/furkan.png"
              alt="Furkan Birol"
              className="w-32 h-32 rounded-full mx-auto border-4 border-blue-200 shadow-lg"
            />
          </div> */}

          {/* Short Bio */}
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            11+ yıllık deneyimle, Agile ekipleri yönetiyorum, ürün stratejileri geliştiriyorum ve kalite güvencesini CI/CD ile entegre ediyorum.
          </p>

          {/* Core Competencies */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-3">Yetkinlikler</h3>
            <ul className="space-y-1 text-xs text-gray-600">
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
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-3">Başarılar</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>✅ Sprint verimliliği: <strong>%20 artış</strong></li>
              <li>✅ Üretim hataları: <strong>%50 azalma</strong></li>
              <li>✅ Sürüm süresi: <strong>%40 kısalma</strong></li>
              <li>✅ Otomasyon kapsamı: <strong>%60 artış</strong></li>
              <li>✅ Ürün benimsenmesi: <strong>%20 artış</strong></li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-3">Sertifikalar</h3>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• ISTQB Certified Tester</li>
              <li>• PSM-I (Professional Scrum Master)</li>
              <li>• ISTQB Advanced Test Manager</li>
              <li>• PMI Project Management Expert</li>
            </ul>
          </div>

          {/* Technical Skills (Short) */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-3">Teknik Beceriler</h3>
            <div className="flex flex-wrap gap-1">
              {["Python", "Java", "C#", "Selenium", "Playwright", "JIRA", "Azure DevOps", "Jenkins", "Docker", "Git"].map((tech) => (
                <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4 mt-6 text-sm">
            {/* Email */}
            <a
              href="mailto:furkanbirol@icloud.com"
              className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>furkanbirol@icloud.com</span>
            </a>

            {/* Phone */}
            {/* <a
              href="tel:+905514198134"
              className="flex items-center space-x-2 text-gray-800 hover:text-green-600 transition group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V22c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.47.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>+90 551 419 81 34</span>
            </a> */}

            {/* Whatsapp */}
            {/* <a
              href="https://wa.me/905514198134"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 1.996-1.413.237-.694.237-1.289.162-1.413-.075-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-1.03 0-2.018-.197-2.93-.578-2.128-.9-3.788-2.562-4.688-4.69-.595-1.384-.893-2.882-.893-4.404 0-5.525 4.475-10 10-10s10 4.475 10 10c0 5.526-4.475 10-10 10m0-18.983c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9"/>
              </svg>
              <span>WhatsApp</span>
            </a> */}

            {/* LinkedIn & GitHub (Yan Yana) */}
            <div className="flex space-x-6">
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
                <span className="text-sm">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/fbirol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-800 hover:text-gray-900 transition group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.82-.255.82-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.96-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.34 1.23-3.135-.12-.3-.54-1.485.12-3.09 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.605.24 2.79.12 3.09.765.795 1.23 1.83 1.23 3.135 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>

        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-80">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <nav className="flex justify-end space-x-6">
            <a href="/" className="text-blue-600 font-medium hover:text-blue-800 transition">Home</a>
            {/* <a href="/articles" className="text-gray-600 hover:text-gray-800 transition">Articles</a>
            <a href="/videos" className="text-gray-600 hover:text-gray-800 transition">Videos</a> */}
          </nav>
        </header>

        {/* Chat Area */}
        <div className="max-w-4xl mx-auto p-8 mt-10">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Ask my AI Assistant about me</h1>
            <p className="text-gray-600 mt-2">Powered by AI to answer your questions about my career, skills, and projects.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            {/* AI Response */}
            <div className="mb-4 p-4 bg-gray-50 rounded-lg min-h-40 text-gray-700 text-sm leading-relaxed">
              {answer || "AI asistanım, CV'm, deneyimlerim ve projelerim hakkında sorularınıza cevap verebilir. Yukarıdan bir soru seçin veya kendiniz yazın."}
            </div>

            {/* Input Area */}
            <div className="flex gap-3">
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && ask()}
                placeholder="Furkan'a ne sormak istersin?"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={ask}
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? 'Düşünüyor...' : 'Gönder'}
              </button>
            </div>

            {/* Quick Questions */}
            <div className="mt-6 text-sm text-gray-500">
              <strong>Denemek ister misin?</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                <button
                  onClick={() => setQuestion('Agile ekibimi nasıl yönetiyorum?')}
                  className="text-blue-500 hover:underline text-xs bg-blue-50 px-2 py-1 rounded"
                >
                  Agile ekibimi nasıl yönetiyorum?
                </button>
                <button
                  onClick={() => setQuestion('Test otomasyonu çerçevesi nasıl kurdum?')}
                  className="text-blue-500 hover:underline text-xs bg-blue-50 px-2 py-1 rounded"
                >
                  Test otomasyonu çerçevesi nasıl kurdum?
                </button>
                <button
                  onClick={() => setQuestion('Siemens\'de neler başardım?')}
                  className="text-blue-500 hover:underline text-xs bg-blue-50 px-2 py-1 rounded"
                >
                  Siemens'de neler başardım?
                </button>
                <button
                  onClick={() => setQuestion('En çok kullandığım araçlar neler?')}
                  className="text-blue-500 hover:underline text-xs bg-blue-50 px-2 py-1 rounded"
                >
                  En çok kullandığım araçlar neler?
                </button>
                <button
                  onClick={() => setQuestion('Product Owner olarak yaklaşımım nedir?')}
                  className="text-blue-500 hover:underline text-xs bg-blue-50 px-2 py-1 rounded"
                >
                  Product Owner olarak yaklaşımım nedir?
                </button>
              </div>
            </div>
          </div>
        </div>    

      </main>
    </div>
  );
}