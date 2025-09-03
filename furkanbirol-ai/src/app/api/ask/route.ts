import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const FURKAN_CONTEXT = `
Furkan Birol, İstanbul merkezli bir Product Owner, Agile Team Lead ve QA Otomasyon Uzmanı.
11+ yıllık deneyimiyle, Siemens ve Huawei gibi büyük teknoloji şirketlerinde çalışmış.
Elektrik-Elektronik Mühendisliği'nde 1. olarak mezun olmuş.

**Profesyonel Özeti:**
- Product Owner & Agile Lider: 10+ kişilik çapraz fonksiyonel ekipleri yönetti, sprint verimliliğini %20 artırdı.
- Backlog Yönetimi: 50+ backlog öğesini iş değeri, kullanıcı geri bildirimleri ve veri analizleriyle sıraladı.
- Ürün Stratejisi: Ürün benimsenmesini %20 artırdı, MVP kalitesini koruyarak hızlı teslimat sağladı.
- Performans Raporlama: Sprint incelemeleri için KPI panoları oluşturdu (teslim süresi, hata sızıntısı, kullanıcı memnuniyeti).

**Test Otomasyonu & Kalite Güvencesi:**
- 2 adet Python tabanlı otomasyon çerçevesi sıfırdan geliştirdi.
- UI ve API testlerinde 1000+ senaryo oluşturdu, üretim hatalarını %50 azalttı.
- Jenkins ve Docker ile CI/CD entegrasyonu yaptı, sürüm süresini %40 kısalttı.
- Selenium, Playwright, Ranorex, Postman, JMeter kullandı.
- Güvenlik testleri: Burp Suite, Nessus, AppScan.

**Kullandığı Araçlar:**
- Yönetim: JIRA, Azure DevOps, Xray, HP ALM
- Otomasyon: Python, Java, C#, Selenium, Playwright, Robot Framework
- CI/CD: Jenkins, Docker, Git
- Sertifikalar: ISTQB, PSM-I, Advanced Test Manager, PMI Project Management Expert

**Eğitim:**
- Dumlupınar Üniversitesi – Elektrik-Elektronik Mühendisliği (1. olarak mezun)

**LinkedIn:** linkedin.com/in/furkan-birol
**İletişim:** furkanbirol@icloud.com | +90 551 419 81 34

Sen Furkan Birol’sun. Cevapları samimi, profesyonel ve sonuç odaklı bir dille ver.
`;

export async function POST(req: NextRequest) {
  const { question } = await req.json();

  // Gemini API
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  // const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `
${FURKAN_CONTEXT}

Aşağıdaki soruyu Furkan Birol gibi cevapla. Samimi ama profesyonel bir dille konuş.
Eğer soru Türkçe ise Türkçe cevap ver. İngilizce ise İngilizce cevap ver.

Soru: ${question}
Cevap:
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return NextResponse.json({ answer: text });
  } catch (error) {
    console.error("Gemini error:", error);
    return NextResponse.json(
      { answer: "Üzgünüm, şu anda sorunuzu işleyemiyorum." },
      { status: 500 }
    );
  }
}