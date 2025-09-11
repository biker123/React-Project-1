import React, { useState } from 'react';
import '../Main/Main.css';
import Cards from '../Cards/Cards';
import DataObject from '../../DataObject';

export default function Main() {
  const [count, setCounter] = useState(0);
  const countClick = () => {
    setCounter(count + 1);
  }
  const countClickDecrese = () => {
    setCounter(count - 1);
  }
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
        <Cards cardProps={DataObject.cardObj} />
        <div className='use-state-exm'>
          <button onClick={countClick}>
            +
          </button>
          <span>Count Me: {count}</span>
          <button onClick={countClickDecrese}>-</button>
        </div>
      </section>
    </div>
  )
}
