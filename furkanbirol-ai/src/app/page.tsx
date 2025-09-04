'use client';

import { useState, useEffect } from 'react';
import MainLayout from './components/MainLayout';

export default function Home() {
  const [language, setLanguage] = useState<'tr' | 'en' | null>(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedLang = (localStorage.getItem('language') as 'tr' | 'en') || 'tr';
    setLanguage(savedLang);
  }, []);

  // Dil henüz yüklenmediyse, boş bir layout göster
  if (language === null) {
    return (
      <MainLayout>
        <div className="p-8 text-center text-gray-600">Yükleniyor...</div>
      </MainLayout>
    );
  }

  const t = {
    tr: {
      askTitle: 'Sor Furkan\'a',
      askSubtitle: 'AI destekli kişisel asistanım, CV’m, kariyerim ve projelerim hakkında her şeyi cevaplıyor.',
      quickQuestions: 'Hemen sor bakalım:',
      noAnswer: 'AI asistanım, CV\'m, deneyimlerim ve projelerim hakkında sorularınıza cevap verebilir. Yukarıdan bir soru seçin veya kendiniz yazın.',
      send: 'Gönder',
      thinking: 'Düşünüyor...',
      source: 'Kaynak: CV, LinkedIn, Projeler',
    },
    en: {
      askTitle: 'Ask Furkan',
      askSubtitle: 'My AI assistant answers your questions about my resume, career, and projects.',
      quickQuestions: 'Try asking:',
      noAnswer: 'My AI assistant can answer your questions about my resume, experience, and projects. Pick a question above or type your own.',
      send: 'Send',
      thinking: 'Thinking...',
      source: 'Source: Resume, LinkedIn, Projects',
    },
  }[language];

  const ask = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');

    const langPrompt = language === 'tr' ? 'Lütfen Türkçe cevap ver.' : 'Please answer in English.';
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: `${question} (${langPrompt})` }),
    });

    const data = await res.json();
    setAnswer(data.answer);
    setLoading(false);
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto p-8 mt-10">
        <div className="text-center mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-3xl font-bold text-gray-800">{t.askTitle}</h1>
          <p className="text-gray-600 mt-2 text-base">{t.askSubtitle}</p>
        </div>

        {/* Quick Questions */}
        <div className="mt-6 text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
                  ask();
                }}
                className="text-blue-500 hover:underline text-sm bg-blue-50 px-2 py-1 rounded"
              >
                {q[language]}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-6">
          {/* AI Response */}
          <div className="mb-4 p-4 bg-gray-50 rounded-lg min-h-40 text-gray-700 text-base leading-relaxed">
            {answer ? (
              <>
                {answer}
                <div className="text-xs text-gray-400 mt-2 flex items-center space-x-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>{t.source}</span>
                </div>
              </>
            ) : (
              t.noAnswer
            )}
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex items-center space-x-2 text-gray-500 text-sm mb-4">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
              <span>{t.thinking}</span>
            </div>
          )}

          {/* Input */}
          <div className="flex gap-3">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !loading && ask()}
              placeholder={language === 'tr' ? 'Furkan\'a ne sormak istersin?' : 'What would you like to ask Furkan?'}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
              disabled={loading}
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
    </MainLayout>
  );
}