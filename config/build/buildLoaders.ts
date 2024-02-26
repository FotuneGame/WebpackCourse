import {ModuleOptions} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export function buildLoaders(options:BuildOptions):ModuleOptions['rules']{
    const  isDev =options.mode ==='development';

    const CssLoaderModules = {
        loader: "css-loader",
        options: {
            // настройка для .module.scss/css хеширование селектора при релизе и при разработке вывод путя
            modules: {
                localIdentName: isDev ? '[path].[name]__[local]' : '[name].[hash:base64:8]',
            }
        },
    }

    const CssAndScssLoader ={
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJSS
                CssLoaderModules,
                // Compiles Sass to CSS
                "sass-loader",
            ],
        };
    const TypeScriptLoader = {
            //ts-loader умеет работать с jsx
            //Если бы не он, то необходимо было бы настравать babel-loader
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        };

    // важен порядок с низу в вверх
    return[
        CssAndScssLoader,
        TypeScriptLoader,
    ]

}