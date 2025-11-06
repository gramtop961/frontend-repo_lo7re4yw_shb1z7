import React, { useEffect } from 'react';

export default function LiveChatWidget() {
  useEffect(() => {
    // Simulate third-party chat init (replace with Crisp/Intercom if needed)
    // We keep it accessible and lightweight
  }, []);

  return (
    <button
      aria-label="Ouvrir le chat"
      className="fixed bottom-5 right-5 z-40 h-12 w-12 rounded-full bg-[#000033] text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-200"
      onClick={() => alert('Chat en direct — Intégration live possible (Crisp, Intercom, Tidio).')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 mx-auto" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10Z"/></svg>
    </button>
  );
}
