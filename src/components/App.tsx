import React, {useState} from 'react';
import classes from './App.module.scss'

export const App = () => {

    const [count,setCount] = useState<number>(0);

    const increment = () => setCount(prevState => prevState + 1);
    const decrement = () => setCount(prevState => prevState - 1);

    return (
        <div>
            <h1>Hello world: {count}</h1>
            <button className={classes.wow} onClick={increment}>+ <span>Increment</span></button>
            <button className={classes.wow} onClick={decrement}>- <span>Decrement</span></button>
        </div>
    );
};