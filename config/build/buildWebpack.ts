import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";


export function buildWebpack(options:BuildOptions):webpack.Configuration{

    const  isDev =options.mode ==='development';
    const {mode,paths} = options;

    const config: webpack.Configuration = {
        mode: mode ?? "development",
        entry: {
            file1:paths.entry,
        },
        output: {
            path:paths.output,
            filename: "[name].[contenthash].js",
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            // важен порядок с низу в вверх
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map', //Код после билда можно прочесть по файлам (isDev==true)
        devServer: isDev ? buildDevServer(options): undefined,

    }
    return config;

}