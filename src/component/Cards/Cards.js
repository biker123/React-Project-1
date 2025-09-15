import React, {useState} from 'react';
import '../Cards/Cards.css';
import Button from '../Button/Button';

export default function Cards(parameter) {
    const { cardProps } = parameter;
    const [activeCard, setActiveCard] = useState(null);
    const toggleCardDetails = (id) => {
        setActiveCard(activeCard === id ? null : id);
    };
    return (
        <React.Fragment>
            {
                cardProps.map((element, key) => (
                    <article className="card" key={element.id}>
                        <div className="card-img">
                            <img src={element.cardImg} /> 
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{element.cardTitle}</h3>
                            <div className="card-meta">{element.cardMeta}</div>
                            <Button btnText = {element.cardLinkText} onClick={()=>toggleCardDetails(element.id)}></Button>
                            {/* // Details show click to buttons // */}
                            {activeCard === element.id && (
                            <div className="card-details">
                                <p>{element.cardTitle}</p>
                                <p>{element.detailsCards}</p>
                            </div>
                            )}
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
//            <p>Box Component</p>
//         </div>
//     )
// }