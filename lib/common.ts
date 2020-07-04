export class RGBA {
    constructor(public r: number, public g: number, public b: number, public a: number) {
    }

    toJSON = () => `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
}

export class RGB {
    constructor(public r: number, public g: number, public b: number) {
    }

    toJSON = () => `rgb(${this.r}, ${this.g}, ${this.b})`
}

export type Color = RGBA | RGB;

export class Pixels {
    constructor(public num: number) {
    }

    toJSON = () => `${this.num}px`
}

export class Percent {
    constructor(public num: number) {
    }

    toJSON = () => `${this.num}%`
}

export class Mapping {
    constructor(public name: string, public value: number) {
    }
}

export enum MappingType {
    MAPPING_TYPE_VALUE_TO_TEXT = 1,
    MAPPING_TYPE_RANGE_TO_TEXT
}

export enum DisplaySortOrder {
    SORT_ASC,
    SORT_DESC,
    SORT_IMPORTANCE
}

export type ValueType = "min" | "max" | "avg" | "current" | "total" | "name" | "first" | "delta" | "range";

export type Unit =
    "dtdurations"
    | "none"
    | "ops"
    | "percentunit"
    | "d"
    | "h"
    | "m"
    | "s"
    | "ms"
    | "short"
    | "bytes"
    | "bps"
    | "Bps";

export function isNotNullOrUndefined<T extends Object>(input: null | undefined | T): input is T {
    return input != null;
}

// FIXME: begone.
export const FLOT = 'flot';

// Datasource plugins
export const PLUGIN_ID_GRAPHITE = "graphite";
export const PLUGIN_ID_PROMETHEUS = "prometheus";
export const PLUGIN_ID_INFLUXDB = "influxdb";
export const PLUGIN_ID_OPENTSDB = "opentsdb";
export const PLUGIN_ID_ELASTICSEARCH = "elasticsearch";
export const PLUGIN_ID_CLOUDWATCH = "cloudwatch";


// Table Transforms
export const AGGREGATIONS_TRANSFORM = "timeseries_aggregations";
export const ANNOTATIONS_TRANSFORM = "annotations";
export const COLUMNS_TRANSFORM = "timeseries_to_columns";
export const JSON_TRANSFORM = "json";
export const ROWS_TRANSFORM = "timeseries_to_rows";
export const TABLE_TRANSFORM = "table";

// AlertList state filter options

// Display Sort Order
export const SORT_ASC = 1;
export const SORT_DESC = 2;
export const SORT_IMPORTANCE = 3;

export const GAUGE_CALC_LAST = "last";
export const GAUGE_CALC_FIRST = "first";
export const GAUGE_CALC_MIN = "min";
export const GAUGE_CALC_MAX = "max";
export const GAUGE_CALC_MEAN = "mean";
export const GAUGE_CALC_TOTAL = "total";
export const GAUGE_CALC_COUNT = "count";
export const GAUGE_CALC_RANGE = "range";
export const GAUGE_CALC_DELTA = "delta";
export const GAUGE_CALC_STEP = "step";
export const GAUGE_CALC_DIFFERENCE = "difference";
export const GAUGE_CALC_LOGMIN = "logmin";
export const GAUGE_CALC_CHANGE_COUNT = "changeCount";
export const GAUGE_CALC_DISTINCT_COUNT = "distinctCount";

export const ORIENTATION_HORIZONTAL = "horizontal";
export const ORIENTATION_VERTICAL = "vertical";

export const GAUGE_DISPLAY_MODE_BASIC = "basic";
export const GAUGE_DISPLAY_MODE_LCD = "lcd";
export const GAUGE_DISPLAY_MODE_GRADIENT = "gradient";
