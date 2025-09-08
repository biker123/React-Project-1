import React from 'react';
import '../Cards/Cards.css';
import Button from '../Button/Button';

export default function Cards(props) {
    const { cardProps } = props;
    return (
        <React.Fragment>
            {
                cardProps.map((element, key) => (
                    <article className="card" key={element.cardTitle}>
                        <div className="card-img">
                            <img src={element.cardImg} />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{element.cardTitle}</h3>
                            <div className="card-meta">{element.cardMeta}</div>
                            <Button btnText = {element.cardLinkText}></Button>
                        </div>
                    </article>
                ))
            }
        </React.Fragment>
    )
}

//  naming export //
// export function Box() {

//     return (
//         <div className="card-img">
//            <p>sfhuisfhuhufdu</p>
//         </div>
//     )
// }