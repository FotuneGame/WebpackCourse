import {BuildOptions} from "../types/types";
import {removeDataTestBabelPlugin} from "./removeDataTestBabelPlugin";

export function buildBabelLoader(options:BuildOptions){
    const  isDev =options.mode ==='development';

    const plugins = [];

    if(!isDev){
        //самописный плагин
        plugins.push(
            [
                removeDataTestBabelPlugin,
                {
                    props:['data-testid'],
                }
            ]
        );
    }

    return{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            //options : babel.config.json вынесен в корень проекта
            options: {
                presets: [
                        "@babel/preset-env",
                        "@babel/preset-typescript",
                        ["@babel/preset-react",{
                            runtime: isDev ? 'automatic' : 'classic',
                        }]
                ],
                //самописный плагин
                plugins: plugins.length ? plugins : undefined,
            }
        }
    }
}