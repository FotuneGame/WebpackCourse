import {lazy} from "react";

export const AboutLazy = lazy( () => import('./About'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.