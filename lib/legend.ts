export interface LegendProps {
    avg?: boolean;
    current?: boolean;
    max?: boolean;
    min?: boolean;
    show?: boolean;
    total?: boolean;
    values?: any;
    alignAsTable?: boolean;
    hideEmpty?: boolean;
    hideZero?: boolean;
    rightSide?: boolean;
    sideWidth?: any;
    sort?: boolean | null;
    sortDesc?: boolean;
}

export class Legend {
    avg: boolean;
    current: boolean;
    max: boolean;
    min: boolean;
    show: boolean;
    total: boolean;
    values?: any[];
    alignAsTable: boolean;
    hideEmpty: boolean;
    hideZero: boolean;
    rightSide: boolean;
    sideWidth = null;
    sort?: boolean | null;
    sortDesc: boolean;

    constructor({
                    avg = false, current = false, max = false, min = false, show = true, total = false,
                    values = false, alignAsTable = false, hideEmpty = false, hideZero = false, rightSide = false,
                    sideWidth = null, sort = null, sortDesc = false
                }: LegendProps) {
        this.avg = avg;
        this.current = current;
        this.max = max;
        this.min = min;
        this.show = show;
        this.total = total;
        this.values = values;
        this.alignAsTable = alignAsTable;
        this.hideEmpty = hideEmpty;
        this.hideZero = hideZero;
        this.rightSide = rightSide;
        this.sideWidth = sideWidth;
        this.sort = sort;
        this.sortDesc = sortDesc;
    }

    toJSON() {
        return {...this, "values": !!this.values ? this.values : (this.avg || this.current || this.max || this.min)}
    }
}
