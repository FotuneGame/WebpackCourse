import {calc} from "./test";
console.log("ecma import и export не работают node => необходим bundle создоваемый webpack. Результат:",calc(1,1));

import {createRoot} from "react-dom/client";
import {App} from './components/App';

const root = document.getElementById('root');

if(!root){
    throw new Error('div with id root not found');
}

const container = createRoot(root);

container.render(<App/>);