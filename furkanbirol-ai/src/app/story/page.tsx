'use client';

import MainLayout from '../components/MainLayout';

export default function Story() {
  const language = typeof window !== 'undefined' ? (localStorage.getItem('language') as 'tr' | 'en') || 'tr' : 'tr';

  const content = {
    tr: {
      title: 'Hikayem',
      p1: 'Dumlupınar Üniversitesi’nde Elektrik-Elektronik Mühendisliği’ni 1. olarak bitirdim.',
      p2: 'Huawei ve Siemens’te 11 yıl boyunca, yazılım kalitesini teknolojiyle birleştirdim.',
      p3: 'Bugün, hem bir Product Owner hem de QA Otomasyon Uzmanı olarak, ekiplerin hem hızlı hem de güvenilir ürün geliştirmesini sağlıyorum.',
    },
    en: {
      title: 'My Story',
      p1: 'I graduated first in class in Electrical & Electronics Engineering from Dumlupınar University.',
      p2: 'For 11 years at Huawei and Siemens, I combined software quality with technology.',
      p3: 'Today, as both a Product Owner and QA Automation Expert, I help teams deliver fast and reliable products.',
    },
  }[language];

  return (
    <MainLayout>
      <div className="p-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{content.title}</h1>
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
          <p>{content.p1}</p>
          <p>{content.p2}</p>
          <p>{content.p3}</p>
        </div>
      </div>
    </MainLayout>
  );
}