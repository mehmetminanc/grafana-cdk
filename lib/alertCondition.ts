import {Target} from "./target";
import {Evaluator} from "./evaluator";
import {TimeRange} from "./timeRange";

export type OpType = "and" | "or";
export type ReducerType = "avg" | "min" | "max" | "sum" | "count" | "last" | "median" | "diff" | "percent_diff"
    | "count_non_null";
export type CombinerType = "query";

export interface AlertConditionProps {
    target: Target;
    evaluator: Evaluator;
    timeRange: TimeRange;
    operator: OpType;
    reducerType: ReducerType;
}

export class AlertCondition {
    target: Target;
    evaluator: Evaluator;
    timeRange: TimeRange;
    operator: OpType;
    reducerType: ReducerType;
    readonly type: CombinerType = "query";

    constructor({target, evaluator, timeRange, operator, reducerType}: AlertConditionProps) {
        this.target = target;
        this.evaluator = evaluator;
        this.timeRange = timeRange;
        this.operator = operator;
        this.reducerType = reducerType;
    }

    toJSON = () => {
        return {
            "evaluator": this.evaluator,
            "operator": {
                "type": this.operator
            },
            "query": {
                "model": this.target,
                "params": [this.target.refId, this.timeRange.from_time, this.timeRange.to_time]
            },
            "reducer": {
                "params": [],
                "type": this.reducerType
            },
            "type": this.type
        }
    }
}
