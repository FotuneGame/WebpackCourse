import {PluginItem} from "@babel/core";

//используем babel для отчистки js кода от тестовых команд

//Краткая суть бежим по дереву в поисках объектов чью имена вкдючены в список запрещённых пропсов и удалаем путь до этого объекта
export function removeDataTestBabelPlugin() :PluginItem{
    return {
        visitor:{
            Program(path,state){
                const forbiddenProps = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current){
                        const nodeName = current.node.name;
                        if(forbiddenProps.includes(nodeName)){
                            current.parentPath.remove();
                        }
                    }
                })
            }
        }
    }
}