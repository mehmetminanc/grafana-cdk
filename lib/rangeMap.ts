export interface RangeMapProps {
    from: string;
    to: string;
    text: string;
}

export class RangeMap {
    from: string;
    to: string;
    text: string;

    constructor({from, to, text}: RangeMapProps) {
        this.from = from;
        this.to = to;
        this.text = text;
    }
}
