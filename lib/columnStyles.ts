import {Color, MappingType, Unit} from "./common";
import {GREEN, ORANGE, RED} from "./constants";
import {ValueMap} from "./valueMap";
import {RangeMap} from "./rangeMap";

abstract class ColumnStyleType {
    protected constructor(readonly type: "date" | "number" | "string" | "hidden") {
        this.type = type;
    }
}

export interface DateColumnStyleTypeProps {
    dateFormat?: string;
}

export class DateColumnStyleType extends ColumnStyleType {
    dateFormat: string;

    constructor({dateFormat = "YYYY-MM-DD HH:mm:ss"}: DateColumnStyleTypeProps) {
        super("date");
        this.dateFormat = dateFormat;
    }
}

export interface NumberColumnStyleTypeProps {
    colorMode?: string;
    colors?: Array<Color>;
    thresholds?: Array<string>;
    decimals?: number;
    unit?: Unit;
}

export class NumberColumnStyleType extends ColumnStyleType {
    colorMode?: string;
    colors: Array<Color>;
    thresholds: Array<string>;
    decimals: number;
    unit: Unit;

    constructor({colorMode, colors = [GREEN, ORANGE, RED], thresholds = [], decimals = 2, unit = "short"}: NumberColumnStyleTypeProps) {
        super("number");
        this.colorMode = colorMode;
        this.colors = colors;
        this.thresholds = thresholds;
        this.decimals = decimals;
        this.unit = unit;
    }
}

export interface StringColumnStyleProps {
    decimals?: number;
    colorMode?: string;
    colors?: Array<Color>;
    thresholds?: Array<string>;
    preserveFormat?: boolean;
    sanitize?: boolean;
    unit?: Unit;
    mappingType?: MappingType;
    valueMaps?: Array<ValueMap>;
    rangeMaps?: Array<RangeMap>;
}

export class StringColumnStyleType extends ColumnStyleType {
    decimals: number;
    colorMode?: string;
    colors: Array<Color>;
    thresholds: Array<string>;
    preserveFormat: boolean;
    sanitize: boolean;
    unit: Unit;
    mappingType: MappingType;
    valueMaps: Array<ValueMap>;
    rangeMaps: Array<RangeMap>;


    constructor({
                    decimals = 2, colorMode, colors = [GREEN, ORANGE, RED], thresholds = [], preserveFormat = false,
                    sanitize = false, unit = "short", mappingType = MappingType.MAPPING_TYPE_VALUE_TO_TEXT,
                    valueMaps = [], rangeMaps = []
                }: StringColumnStyleProps) {
        super("string");
        this.decimals = decimals;
        this.colorMode = colorMode;
        this.colors = colors;
        this.thresholds = thresholds;
        this.preserveFormat = preserveFormat;
        this.sanitize = sanitize;
        this.unit = unit;
        this.mappingType = mappingType;
        this.valueMaps = valueMaps;
        this.rangeMaps = rangeMaps;
    }
}

export class HiddenColumnStyleType extends ColumnStyleType{

    constructor() {
        super("hidden");
    }
}
