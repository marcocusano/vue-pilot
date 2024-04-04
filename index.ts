import type { Config, ModelConfig } from "./library/interfaces/Config";
import { Default } from "./library/models/Default";

export class SDK {

    // Constructor

    private config:Config;
    constructor(baseURL:string) {
        const config:Config = {
            baseURL: baseURL,
            version: "v1"
        };
        this.config = config;
    }

    public default():Default {  return new Default(this.config); }
    
    private getModelConfig(endpoint:string, primary_value?:string|number, primary_key:string = 'id'):ModelConfig {
        return {
            ...this.config,
            endpoint: endpoint,
            primary_key: primary_key,
            primary_value: primary_value
        };
    }

    ////////////
    // Models //
    ////////////

    /**
     * Coming Soon, here is an example usage
     
    public exampleModel(id?:number):ExampleModel { return new ExampleModel(this.getModelConfig('/example', id)); }

    */
    
}

export default SDK;