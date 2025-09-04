import React from 'react';
import '../Main/Main.css';
import Cards from '../Cards/Cards';

export default function Main() {

  let cardObj = [{
    cardImg: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
    cardTitle: "Universe",
    cardMeta: "Recommended • Multi-color",
    cardLinkText: "View Details"
  },
  {
    cardImg: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
    cardTitle: "Second Card",
    cardMeta: "Recommended • Multi-color",
    cardLinkText: "View Details"
  },
  {
    cardImg: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
    cardTitle: "Third Card",
    cardMeta: "Recommended • Multi-color",
    cardLinkText: "View Details"
  },
  {
    cardImg: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
    cardTitle: "Fourth Card",
    cardMeta: "Recommended • Multi-color",
    cardLinkText: "View Details"
  },
  {
    cardImg: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
    cardTitle: "Fifth Card",
    cardMeta: "Recommended • Multi-color",
    cardLinkText: "View Details"
  },
  {
    cardImg: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
    cardTitle: "Six Card",
    cardMeta: "Recommended • Multi-color",
    cardLinkText: "View Details"
  }
  ];

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
        <Cards bikram={cardObj} />
      </section>
    </div>
  )
}
