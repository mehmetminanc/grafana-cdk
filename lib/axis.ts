import {Unit} from "./common";

export type XAxisModes = "time" | "series";

export interface XAxisProps {
    mode?: "time" | "series";
    name?: string;
    values?: Array<any>;
    show?: boolean;
}

export class XAxis {
    mode: XAxisModes;
    name?: string;
    values: Array<number>;
    show: boolean;


    constructor({mode = "time", name, values = [], show = true}: XAxisProps) {
        this.mode = mode;
        this.name = name;
        this.values = values;
        this.show = show;
    }

    toJSON = () => {
        return {'show': this.show}
    }
}

export interface YAxisProps {
    decimals?: number | null;
    format?: Unit;
    label?: string | null;
    logBase?: number;
    max?: number | null;
    min?: number;
    show?: boolean;
}

export class YAxis {
    decimals?: number | null;
    format?: Unit;
    label?: string | null;
    logBase: number;
    max?: number | null;
    min: number;
    show: boolean;


    constructor({decimals = null, format, label = null, logBase = 1, max = null, min = 0, show = true}: YAxisProps) {
        this.decimals = decimals;
        this.format = format;
        this.label = label;
        this.logBase = logBase;
        this.max = max;
        this.min = min;
        this.show = show;
    }
}

export interface YAxesProps {
    left: YAxis;
    right?: YAxis;
}

export class YAxes {
    left: YAxis;
    right?: YAxis;

    constructor({left = new YAxis({}), right = new YAxis({})}: YAxesProps) {
        this.left = left;
        this.right = right;
    }

    toJSON = () => [this.left, this.right]
}
