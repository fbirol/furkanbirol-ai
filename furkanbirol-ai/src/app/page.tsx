'use client'; 
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");

    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setAnswer(data.answer);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Hi, I’m Furkan Birol</h1>
        <p className="text-xl text-gray-600 mb-8">
          Product Owner • Agile Leader • QA Automation Expert
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Ask my AI assistant anything about my experience, projects, or approach to product and quality.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">💬 Ask My AI Assistant</h2>
          
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && ask()}
            placeholder="What would you like to know about Furkan?"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 text-lg"
          />
          
          <button
            onClick={ask}
            disabled={loading}
            className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl text-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Thinking..." : "Send Question"}
          </button>

          {answer && (
            <div className="mt-6 p-6 bg-gray-50 rounded-xl text-gray-800 text-left text-lg leading-relaxed animate-fade-in">
              <strong>AI:</strong> {answer}
            </div>
          )}
        </div>

        <footer className="mt-12 text-gray-500 text-sm">
          Powered by Google Gemini • Built with Next.js & Vercel
        </footer>
      </div>
    </div>
  );
}