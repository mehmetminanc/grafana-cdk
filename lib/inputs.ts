export interface DataSourceInputProps {
    name: string;
    label: string;
    pluginId: string;
    pluginName: string;
    description?: string;
}

export class DataSourceInput {
    name: string;
    label: string;
    pluginId: string;
    pluginName: string;
    description: string;
    readonly type: string = "datasource";


    constructor({name, label, pluginId, pluginName, description = ""}: DataSourceInputProps) {
        this.name = name;
        this.label = label;
        this.pluginId = pluginId;
        this.pluginName = pluginName;
        this.description = description;
    }
}

export interface ConstantInputProps {
    name: string;
    label: string;
    value: string;
    description?: string;
}

export class ConstantInput {
    name: string;
    label: string;
    value: string;
    description: string;
    readonly type: string = "datasource";


    constructor({name, label, value, description = ""}: ConstantInputProps) {
        this.name = name;
        this.label = label;
        this.value = value;
        this.description = description;
    }
}

export type Input = ConstantInput | DataSourceInput;
