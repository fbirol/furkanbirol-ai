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

        {/* Sosyal Medya Bağlantıları */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/furkan-birol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-lg">LinkedIn</span>
          </a>

          <a
            href="https://github.com/fbirol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-800 hover:text-gray-900 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.82-.255.82-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.96-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.34 1.23-3.135-.12-.3-.54-1.485.12-3.09 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.605.24 2.79.12 3.09.765.795 1.23 1.83 1.23 3.135 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span className="text-lg">GitHub</span>
          </a>
        </div>

        <footer className="mt-12 text-gray-500 text-sm">
          Powered by Google Gemini • Built with Next.js & Vercel
        </footer>
      </div>
    </div>
  );
}