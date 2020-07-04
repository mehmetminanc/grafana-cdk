export interface ValueMapProps {
    op: string;
    text: string;
    value: string;
}

export class ValueMap {
    op: string;
    text: string;
    value: string;

    constructor({op, text, value}: ValueMapProps) {
        this.op = op;
        this.text = text;
        this.value = value;
    }
}
