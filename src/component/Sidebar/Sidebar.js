import React from 'react';
import "../Sidebar/Sidebar.css";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    // <!-- Sidebar -->
    <aside className="sidebar">
      <Link to="/" className="brand">
        <div className="logo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l8 5v10l-8 5-8-5V7l8-5z" fill="white" opacity="0.9"/>
          </svg>
        </div>
        <span>APP</span>
      </Link>
      <nav className="side-nav">
        <Link to="/" className="side-link active">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 10.5l8-6 8 6V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z"/></svg>
          <span>Dashboard</span>
        </Link>
        <Link to="buy-sell" className="side-link">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>
          <span>Buy & Sell</span>
        </Link>
        <Link to="swap" className="side-link">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zm1 9.5V7h-2v7h5v-2h-3z"/></svg>
          <span>Swap</span>
        </Link>
        <Link to="my-favorites" className="side-link">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.003 6.003 0 0122 9c0 3.31-2.69 6-6 6h-1v3l-3-2.65z"/></svg>
          <span>My Favorites</span>
        </Link>
      </nav>
      <div className="help">
        <a className="side-link" href="#">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm2.07-7.75l-.9.92A2.5 2.5 0 0013 12h-2v-.5c0-.83.34-1.58.88-2.12l1.24-1.26A1.5 1.5 0 0012 5.5c-.83 0-1.5.67-1.5 1.5H8A3 3 0 0111 4a3 3 0 012.07 5.25z"/></svg>
          <span>Need Help?</span>
        </a>
      </div>
    </aside>
  )
}
