import path from "path";
import webpack from 'webpack';
import {buildWebpack} from "./config/build/buildWebpack";

type Mode = 'production' | 'development';
interface  EnvVariables {
    mode:Mode,
    port: number
}

export default (env: EnvVariables) => {

    const config: webpack.Configuration = buildWebpack({
        mode: env.mode ?? "development",
        port: env.port ?? 3000,
        paths:{
            entry: path.resolve(__dirname,'src','index.tsx'),
            output:path.resolve(__dirname, 'build'),
            html:path.resolve(__dirname,'public','index.html')
        }
    });
    return config;
}
