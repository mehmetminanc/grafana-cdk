interface GaugeProps {
    minValue?: number;
    maxValue?: number;
    show?: boolean;
    thresholdLabels?: boolean;
    thresholdMarkers?: boolean;
}

export class Gauge {
    minValue: number;
    maxValue: number;
    show: boolean;
    thresholdLabels: boolean;
    thresholdMarkers: boolean;

    constructor({minValue = 0, maxValue = 100, show = false, thresholdLabels = false, thresholdMarkers = true}: GaugeProps) {
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.show = show;
        this.thresholdLabels = thresholdLabels;
        this.thresholdMarkers = thresholdMarkers;
    }
}
