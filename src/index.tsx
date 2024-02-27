import {App} from '@/components/App';
import {createRoot} from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {About} from "@/pages/components/about/index";
import {Other} from "@/pages/components/other/index";
import {Suspense} from "react";


const root = document.getElementById('root');
if(!root)
    throw new Error('div with id root not found');


const container = createRoot(root);

//разбиваем общий бандл на чанки (доп загрузок lazy - при переходе по нужной ссылке)
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/other',
                element: <Suspense fallback={'Loading...'}><Other/></Suspense>
            },
        ],
    },
]);

container.render(<RouterProvider router={router} />);



import {calc} from "./test";
console.log("ecma import и export не работают node => необходим bundle создоваемый webpack. Результат:",calc(1,1));