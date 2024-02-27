import webpack, {Configuration, DefinePlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsCheckerWebpackPlugin from  "fork-ts-checker-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

import {BundleAnalyzerPlugin} from  "webpack-bundle-analyzer"
import {BuildOptions} from "./types/types";


export function buildPlugins(options:BuildOptions):Configuration['plugins']{
    const  isDev =options.mode ==='development';
    const {paths,analyzer,platform} = options;

    const plugins:Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template:paths.html,
            favicon:paths.icon,
        }),
        new DefinePlugin({
           __PLATFORM__: JSON.stringify(platform),
        }), //Заменяет переменные в вашем коде другими значениями или выражениями во время компиляции (связь env и react)
        new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.locales_output },
            ],
        }), // перенос статических файлов в итоговую сборку
    ]

    if(isDev){
        plugins.push(new webpack.ProgressPlugin())//прогресс бар сборки
        plugins.push(new ForkTsCheckerWebpackPlugin()) // плагин проверки ts ошибок)
    }else{
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })); // плагин для выноса css кода из сборки в отдельные css файлы)
    }

    if(analyzer)
        plugins.push(new BundleAnalyzerPlugin());//  анализ итоговой сборки (открывает html страницу анализа)


    return plugins;
}