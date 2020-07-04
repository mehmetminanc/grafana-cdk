export type EvaluatorType = "gt" | "lt" | "within_range" | "outside_range" | "no_value";

export class Evaluator {
    type: EvaluatorType;
    params: Array<number>;

    constructor(type: EvaluatorType, params: Array<any>) {
        this.type = type;
        this.params = params;
    }
}

export function GreaterThan(value: number) {
    return new Evaluator("gt", [value]);
}

export function LowerThan(value: number) {
    return new Evaluator("lt", [value]);
}

export function WithinRange(from_value: number, to_value: number) {
    return new Evaluator("within_range", [from_value, to_value]);
}

export function OutsideRange(from_value: number, to_value: number) {
    return new Evaluator("outside_range", [from_value, to_value]);
}

export function NoValue() {
    return new Evaluator("no_value", [])
}
