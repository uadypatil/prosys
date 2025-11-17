// src/components/GlobalStyles.jsx
import { useEffect } from 'react';

export default function GlobalStyles() {
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
      /* AMBER THEME CUSTOM SCROLLBAR */
      ::-webkit-scrollbar { width: 12px; }
      ::-webkit-scrollbar-track { 
        background: #fffbeb; 
        border-left: 1px solid #fde68a; 
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #f59e0b, #d97706);
        border-radius: 6px;
        border: 2px solid #fffbeb;
        box-shadow: 0 4px 12px rgba(251, 146, 60, 0.4);
      }
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #f97316, #c2410c);
        box-shadow: 0 6px 20px rgba(251, 146, 60, 0.6);
      }

      /* BUTTON GLOW MAGIC */
      .btn-amber {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        position: relative;
        overflow: hidden;
      }
      .btn-amber::before {
        content: '';
        position: absolute;
        top: 0; left: -100%;
        width: 100%; height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        transition: left 0.7s;
      }
      .btn-amber:hover::before { left: 100%; }
      .btn-amber:hover {
        transform: translateY(-4px) scale(1.05) !important;
        box-shadow: 0 20px 40px -10px rgba(251, 146, 60, 0.6) !important;
      }

      /* SMOOTH SCROLL */
      html { scroll-behavior: smooth; }
    `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    return null;
}