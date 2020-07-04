import {DEFAULT_STEP} from "./constants";

export type TargetFormat = "time_series" | "table";

export interface TargetProps {
    expr?: string;
    format?: "time_series" | "table";
    legendFormat?: string;
    interval?: string;
    intervalFactor?: number;
    metric?: string;
    refId?: string;
    step?: number;
    target?: string;
    instant?: boolean;
    datasource?: string;
}

export class Target {
    expr: string;
    format: TargetFormat;
    legendFormat: string;
    interval: string;
    intervalFactor: number;
    metric: string;
    refId: string;
    step: number;
    target: string;
    instant: boolean;
    datasource: string;


    constructor({
                    expr = "", format = "time_series", legendFormat = "", interval = "", intervalFactor = 2,
                    metric = "", refId = "", step = DEFAULT_STEP, target = "", instant = false, datasource = ""
                }: TargetProps) {
        this.expr = expr;
        this.format = format;
        this.legendFormat = legendFormat;
        this.interval = interval;
        this.intervalFactor = intervalFactor;
        this.metric = metric;
        this.refId = refId;
        this.step = step;
        this.target = target;
        this.instant = instant;
        this.datasource = datasource;
    }
}
