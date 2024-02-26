import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";


export function buildPlugins(options:BuildOptions):Configuration['plugins']{
    const  isDev =options.mode ==='development';
    const {paths} = options;

    const plugins:Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template:paths.html,
        }),
    ]

    if(isDev){
        plugins.push(new webpack.ProgressPlugin())//прогресс бар сборки
    }else{
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })); // плагин для выноса css кода из сборки в отдельные css файлы)
    }

    return plugins;
}