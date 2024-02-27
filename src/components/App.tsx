import React, {useState} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";

import foto1JPG from "../assets/1.jpg";
import foto2PNG from "../assets/2.png";
import Foto3SVG from "../assets/3.svg";

export const App = () => {

    const [count,setCount] = useState<number>(0);

    const increment = () => setCount(prevState => prevState + 1);
    const decrement = () => setCount(prevState => prevState - 1);

    return (
        <div data-testid={'App.DataTestId'}>
            <h1 data-testid={'Platform'}>Платформа на текущий момент (задана env):{__PLATFORM__}</h1>
            <Link to={"/about"}>about</Link>
            <br/>
            <Link to={"/other"}>other</Link>
            <h1>Hello world: {count}</h1>
            <button className={classes.wow} onClick={increment}>+ <span>Increment</span></button>
            <button className={classes.wow} onClick={decrement}>- <span>Decrement</span></button>
            <Outlet/>

            <div>
                <img width={100} height={100} src={foto1JPG} alt={foto1JPG}/>
                <img width={100} height={100} src={foto2PNG} alt={foto2PNG}/>
               <Foto3SVG width={200} height={200}/>
            </div>
        </div>
    );
};