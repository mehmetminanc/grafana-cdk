import {RGB, RGBA} from "./common";
import {BLUE_RGB, BLUE_RGBA} from "./constants";

export interface SparkLineProps {
    fillColor?: RGBA;
    full?: boolean;
    lineColor?: RGB;
    show?: boolean;
}

export class SparkLine {
    fillColor: RGBA;
    full: boolean;
    lineColor: RGB;
    show: boolean;

    constructor({fillColor = BLUE_RGBA, full = false, lineColor = BLUE_RGB, show = false}: SparkLineProps) {
        this.fillColor = fillColor;
        this.full = full;
        this.lineColor = lineColor;
        this.show = show;
    }
}
