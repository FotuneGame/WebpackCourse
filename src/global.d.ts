//для нахождения typescript ом таких файлов как *.module.scss (.module.css/scss хеширует все имена селекторов в css)
//Cannot find module './App.module.scss' or its corresponding type declarations.
declare module '*.module.scss'{
    interface IClassNames{
        [className:string]:string,
    }
    const className:IClassNames;
    export = className;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg'{
    import React from 'react';
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __PLATFORM__: 'mobile' | 'desktop';