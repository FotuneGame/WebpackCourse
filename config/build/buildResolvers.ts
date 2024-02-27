import {Configuration} from "webpack";
import {BuildOptions} from "./types/types";

export  function buildResolvers(options:BuildOptions):Configuration['resolve']{
    return{
        extensions: ['.tsx', '.ts', '.js'],
        //Настройка алиасов (псевдонимы путей) чтобы не указывать ../../../a => @/a
        alias:{
            '@' : options.paths.src,
        }
    };
}