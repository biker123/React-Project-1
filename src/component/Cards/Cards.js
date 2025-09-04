import React from 'react';
import '../Cards/Cards.css';

export default function Cards() {
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
        <React.Fragment>
            {
                cardObj.map((element, key) => (
                    <article className="card" key={element.cardTitle}>
                        <div className="card-img">
                            <img src={element.cardImg} />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{element.cardTitle}</h3>
                            <div className="card-meta">{element.cardMeta}</div>
                            <a className="card-link" href="#">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l18-9-9 18-2-7-7-2z" /></svg>
                                {element.cardLinkText}
                            </a>
                        </div>
                    </article>
                ))
            }
        </React.Fragment>
    )
}