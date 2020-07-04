import {GREY1, GREY2} from "./constants";

import {RGBA} from "./common";

export interface GridProps {
    threshold1?: number | null;
    threshold1Color?: RGBA;
    threshold2?: number | null;
    threshold2Color?: RGBA;
}


export class Grid {

    public threshold1?: number | null;
    public threshold1Color: RGBA;
    public threshold2?: number | null;
    public threshold2Color: RGBA;

    constructor({threshold1 = null, threshold1Color = GREY1, threshold2 = null, threshold2Color = GREY2}: GridProps) {
        this.threshold2Color = threshold2Color;
        this.threshold2 = threshold2;
        this.threshold1Color = threshold1Color;
        this.threshold1 = threshold1;
    }
}
