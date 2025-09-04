import React from 'react';
import '../Main/Main.css';
import Cards from '../Cards/Cards';

export default function Main() {
  return (
    <div className="content">
    <div className="section-title">
        <h2>Recently Added NFTs</h2>
        <div className="filters">
        <a className="pill" href="#">All</a>
        <a className="pill" href="#">Abstract</a>
        <a className="pill" href="#">Space</a>
        </div>
    </div>

    <section className="grid" aria-label="Card grid">
        <Cards />
    </section>
    </div>
  )
}
