'use client';

import MainLayout from '../components/MainLayout';

export default function Projects() {
  const language = typeof window !== 'undefined' ? (localStorage.getItem('language') as 'tr' | 'en') || 'tr' : 'tr';

  const projects = [
    {
      title: { tr: 'Siemens – Python Tabanlı UI/API Otomasyon Çerçevesi', en: 'Siemens – Python-based UI/API Automation Framework' },
      desc: { tr: '2 adet sıfırdan geliştirilen otomasyon çerçevesi ile test kapsamı %60 arttı.', en: 'Built 2 frameworks from scratch, increasing test coverage by 60%.' },
    },
    {
      title: { tr: 'Kişisel Proje – QA Assistant (AI Chatbot)', en: 'Personal Project – QA Assistant (AI Chatbot)' },
      desc: { tr: 'Bu site, bir QA Otomasyon Uzmanı ve Product Owner için AI destekli bir asistan.', en: 'This site is an AI assistant for a QA Automation Expert and Product Owner.' },
    },
  ];

  return (
    <MainLayout>
      <div className="p-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Projelerim</h1>
        <div className="space-y-8">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">{proj.title[language]}</h2>
              <p className="text-gray-700 mt-2">{proj.desc[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}