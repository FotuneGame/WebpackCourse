import {lazy} from "react";

export const OtherLazy = lazy(()=>import('./Other'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.