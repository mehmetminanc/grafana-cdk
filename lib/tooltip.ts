import {DisplaySortOrder} from "./common";

export type TooltipValueType = 'individual' | 'cumulative';

export interface TooltipProps {
    msResolution?: boolean;
    shared?: boolean;
    sort?: DisplaySortOrder;
    valueType?: TooltipValueType;
}

export class Tooltip {
    msResolution: boolean;
    shared: boolean;
    sort: DisplaySortOrder;
    value_type: TooltipValueType;

    constructor({msResolution = true, shared = true, sort = DisplaySortOrder.SORT_ASC, valueType = "cumulative"}: TooltipProps) {
        this.msResolution = msResolution;
        this.shared = shared;
        this.sort = sort;
        this.value_type = valueType;
    }
}
