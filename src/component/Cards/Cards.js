import React from 'react';
import '../Cards/Cards.css';

export default function Cards(props) {
    const { bikram } = props;
    return (
        <React.Fragment>
            {
                bikram.map((element, key) => (
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

export function Box() {

    return (
        <div className="card-img">
           <p>sfhuisfhuhufdu</p>
        </div>
    )
}