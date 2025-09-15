import React from 'react';
import { useState } from 'react';
import '../Counter/Counter.css';

export default function Counter() {
    const [count, setCounter] = useState(0);
    const countClick = () => {
        setCounter(count + 1);
    }
    const countClickDecrese = () => {
        setCounter(count - 1);
    }
    return (
        <div className='use-state-exm'>
            <button className='plus-btn cmn-btn-counter' onClick={countClick}>
                +
            </button>
            <span>Count Me: {count}</span>
            <button className='minus-btn cmn-btn-counter' onClick={countClickDecrese}>-</button>
        </div>
    )
}
