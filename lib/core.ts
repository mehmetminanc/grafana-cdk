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


export const GREY1 = new RGBA(216, 200, 27, 0.27);
export const GREY2 = new RGBA(234, 112, 112, 0.22);
export const BLUE_RGBA = new RGBA(31, 118, 189, 0.18);
export const BLUE_RGB = new RGB(31, 120, 193);
export const GREEN = new RGBA(50, 172, 45, 0.97);
export const ORANGE = new RGBA(237, 129, 40, 0.89);
export const RED = new RGBA(245, 54, 54, 0.9);
export const BLANK = new RGBA(0, 0, 0, 0.0);

export const INDIVIDUAL = 'individual';
export const CUMULATIVE = 'cumulative';
export type ValueType = 'individual' | 'cumulative';

export const NULL_CONNECTED = 'connected';
export const NULL_AS_ZERO = 'null as zero';
export const NULL_AS_NULL = 'null';

export type NullPointModeType = "connected" | "null as zero" | "null";

export const FLOT = 'flot';

export const ABSOLUTE_TYPE = 'absolute';
export const DASHBOARD_TYPE = 'dashboard';
export const GRAPH_TYPE = 'graph';
export const SINGLESTAT_TYPE = 'singlestat';
export const TABLE_TYPE = 'table';
export const TEXT_TYPE = 'text';
export const ALERTLIST_TYPE = "alertlist";
export const BARGAUGE_TYPE = "bargauge";
export const GAUGE_TYPE = "gauge";
export const HEATMAP_TYPE = "heatmap";
export const STATUSMAP_TYPE = "flant-statusmap-panel";

export const DEFAULT_FILL = 1;
export const DEFAULT_REFRESH = '10s';
export const DEFAULT_ROW_HEIGHT = new Pixels(250);
export const DEFAULT_LINE_WIDTH = 2;
export const DEFAULT_POINT_RADIUS = 5;
export const DEFAULT_RENDERER = FLOT;
export const DEFAULT_STEP = 10;
export const DEFAULT_LIMIT = 10;
export const TOTAL_SPAN = 12;

export const DARK_STYLE = 'dark';
export const LIGHT_STYLE = 'light';

export type StyleType = 'dark' | 'light';

export const UTC = 'utc';
export type TimezoneType = 'utc' | 'browser';

export const SCHEMA_VERSION = 12;

// Y Axis formats
export const DURATION_FORMAT = "dtdurations";
export const NO_FORMAT = "none";
export const OPS_FORMAT = "ops";
export const PERCENT_UNIT_FORMAT = "percentunit";
export const DAYS_FORMAT = "d";
export const HOURS_FORMAT = "h";
export const MINUTES_FORMAT = "m";
export const SECONDS_FORMAT = "s";
export const MILLISECONDS_FORMAT = "ms";
export const SHORT_FORMAT = "short";
export const BYTES_FORMAT = "bytes";
export const BITS_PER_SEC_FORMAT = "bps";
export const BYTES_PER_SEC_FORMAT = "Bps";

// Alert rule state
export const STATE_NO_DATA = "no_data";
export const STATE_ALERTING = "alerting";
export const STATE_KEEP_LAST_STATE = "keep_state";
export const STATE_OK = "ok";

export type AlertStateType = "no_data" | "alerting" | "keep_state" | "ok";

// Evaluator
export const EVAL_GT = "gt";
export const EVAL_LT = "lt";
export const EVAL_WITHIN_RANGE = "within_range";
export const EVAL_OUTSIDE_RANGE = "outside_range";
export const EVAL_NO_VALUE = "no_value";

// Reducer Type
// avg/min/max/sum/count/last/median/diff/percent_diff/count_non_null
export const RTYPE_AVG = "avg";
export const RTYPE_MIN = "min";
export const RTYPE_MAX = "max";
export const RTYPE_SUM = "sum";
export const RTYPE_COUNT = "count";
export const RTYPE_LAST = "last";
export const RTYPE_MEDIAN = "median";
export const RTYPE_DIFF = "diff";
export const RTYPE_PERCENT_DIFF = "percent_diff";
export const RTYPE_COUNT_NON_NULL = "count_non_null";

export type ReducerType = "avg" | "min" | "max" | "sum" | "count" | "last" | "median" | "diff" | "percent_diff"
    | "count_non_null";

// Condition Type
export const CTYPE_QUERY = "query";

export type CombinerType = "query";

// Operator
export const OP_AND = "and";
export const OP_OR = "or";

export type OpType = "and" | "or";

// Text panel modes
export const TEXT_MODE_MARKDOWN = "markdown";
export const TEXT_MODE_HTML = "html";
export const TEXT_MODE_TEXT = "text";

export type TextModeType = "markdown" | "html" | "text";

// Datasource plugins
export const PLUGIN_ID_GRAPHITE = "graphite";
export const PLUGIN_ID_PROMETHEUS = "prometheus";
export const PLUGIN_ID_INFLUXDB = "influxdb";
export const PLUGIN_ID_OPENTSDB = "opentsdb";
export const PLUGIN_ID_ELASTICSEARCH = "elasticsearch";
export const PLUGIN_ID_CLOUDWATCH = "cloudwatch";

// Target formats
export const TIME_SERIES_TARGET_FORMAT = "time_series";
export const TABLE_TARGET_FORMAT = "table";

export type TargetFormat = "time_series" | "table";

// Table Transforms
export const AGGREGATIONS_TRANSFORM = "timeseries_aggregations";
export const ANNOTATIONS_TRANSFORM = "annotations";
export const COLUMNS_TRANSFORM = "timeseries_to_columns";
export const JSON_TRANSFORM = "json";
export const ROWS_TRANSFORM = "timeseries_to_rows";
export const TABLE_TRANSFORM = "table";

// AlertList show selections
export const ALERTLIST_SHOW_CURRENT = "current";
export const ALERTLIST_SHOW_CHANGES = "changes";

// AlertList state filter options
export const ALERTLIST_STATE_OK = "ok";
export const ALERTLIST_STATE_PAUSED = "paused";
export const ALERTLIST_STATE_NO_DATA = "no_data";
export const ALERTLIST_STATE_EXECUTION_ERROR = "execution_error";
export const ALERTLIST_STATE_ALERTING = "alerting";

// Display Sort Order
export const SORT_ASC = 1;
export const SORT_DESC = 2;
export const SORT_IMPORTANCE = 3;

// Template
export const REFRESH_NEVER = 0;
export const REFRESH_ON_DASHBOARD_LOAD = 1;
export const REFRESH_ON_TIME_RANGE_CHANGE = 2;
export const SHOW = 0;
export const HIDE_LABEL = 1;
export const HIDE_VARIABLE = 2;

export const SORT_DISABLED = 0;
export const SORT_ALPHA_ASC = 1;
export const SORT_ALPHA_DESC = 2;
export const SORT_NUMERIC_ASC = 3;
export const SORT_NUMERIC_DESC = 4;
export const SORT_ALPHA_IGNORE_CASE_ASC = 5;
export const SORT_ALPHA_IGNORE_CASE_DESC = 6;

export type SortOrderType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

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

class Mapping {

    constructor(public name: string, public value: number) {
    }
}


export const MAPPING_TYPE_VALUE_TO_TEXT = 1;
export const MAPPING_TYPE_RANGE_TO_TEXT = 2;

export const MAPPING_VALUE_TO_TEXT = new Mapping("value to text", MAPPING_TYPE_VALUE_TO_TEXT);
export const MAPPING_RANGE_TO_TEXT = new Mapping("range to text", MAPPING_TYPE_RANGE_TO_TEXT);


// Value types min/max/avg/current/total/name/first/delta/range
export const VTYPE_MIN = "min";
export const VTYPE_MAX = "max";
export const VTYPE_AVG = "avg";
export const VTYPE_CURR = "current";
export const VTYPE_TOTAL = "total";
export const VTYPE_NAME = "name";
export const VTYPE_FIRST = "first";
export const VTYPE_DELTA = "delta";
export const VTYPE_RANGE = "range";
export const VTYPE_DEFAULT = VTYPE_AVG;

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

    toJson() {
        let values = !!this.values ? this.values : (this.avg || this.current || this.max || this.min);

        return {
            'avg': this.avg,
            'current': this.current,
            'max': this.max,
            'min': this.min,
            'show': this.show,
            'total': this.total,
            'values': values,
            'alignAsTable': this.alignAsTable,
            'hideEmpty': this.hideEmpty,
            'hideZero': this.hideZero,
            'rightSide': this.rightSide,
            'sideWidth': this.sideWidth,
            'sort': this.sort,
            'sortDesc': this.sortDesc,
        }

    }
}

export interface TargetProps {
    expr?: string;
    format?: "time_series" | "table";
    legendFormat?: string;
    interval?: string;
    intervalFactor?: number;
    metric?: string;
    refId?: string;
    step?: number;
    target?: string;
    instant?: boolean;
    datasource?: string;
}

export class Target {
    expr: string;
    format: TargetFormat;
    legendFormat: string;
    interval: string;
    intervalFactor: number;
    metric: string;
    refId: string;
    step: number;
    target: string;
    instant: boolean;
    datasource: string;


    constructor({
                    expr = "", format = TIME_SERIES_TARGET_FORMAT, legendFormat = "", interval = "", intervalFactor = 2,
                    metric = "", refId = "", step = DEFAULT_STEP, target = "", instant = false, datasource = ""
                }: TargetProps) {
        this.expr = expr;
        this.format = format;
        this.legendFormat = legendFormat;
        this.interval = interval;
        this.intervalFactor = intervalFactor;
        this.metric = metric;
        this.refId = refId;
        this.step = step;
        this.target = target;
        this.instant = instant;
        this.datasource = datasource;
    }
}

export interface TooltipProps {
    msResolution?: boolean;
    shared?: boolean;
    sort?: SortOrderType;
    valueType?: ValueType;
}

export class Tooltip {
    msResolution: boolean;
    shared: boolean;
    sort: SortOrderType;
    value_type: ValueType;

    constructor({msResolution = true, shared = true, sort = SORT_DISABLED, valueType = CUMULATIVE}: TooltipProps) {
        this.msResolution = msResolution;
        this.shared = shared;
        this.sort = sort;
        this.value_type = valueType;
    }
}

export type XAxisModes = "time" | "series";

interface XAxisProps {
    mode?: "time" | "series";
    name?: string;
    values?: Array<any>;
    show?: boolean;
}

export class XAxis {
    mode: XAxisModes;
    name?: string;
    values: Array<number>; // FIXME: type.
    show: boolean;


    constructor({mode = "time", name, values = [], show = true}: XAxisProps) {
        this.mode = mode;
        this.name = name;
        this.values = values;
        this.show = show;
    }

    toJSON = () => {
        return {'show': this.show}
    }
}

export type YAxisFormats =
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

interface YAxisProps {
    decimals?: number | null;
    format?: YAxisFormats;
    label?: string | null;
    logBase?: number;
    max?: number | null;
    min?: number;
    show?: boolean;
}

export class YAxis {
    decimals?: number | null;
    format?: YAxisFormats;
    label?: string | null;
    logBase: number;
    max?: number | null;
    min: number;
    show: boolean;


    constructor({decimals = null, format, label = null, logBase = 1, max = null, min = 0, show = true}: YAxisProps) {
        this.decimals = decimals;
        this.format = format;
        this.label = label;
        this.logBase = logBase;
        this.max = max;
        this.min = min;
        this.show = show;
    }
}

export interface YAxesProps {
    left: YAxis;
    right?: YAxis;
}

export class YAxes {
    left: YAxis;
    right?: YAxis;

    constructor({left = new YAxis({}), right = new YAxis({})}: YAxesProps) {
        this.left = left;
        this.right = right;
    }

    toJSON = () => [this.left, this.right]
}


export interface RowProps {
    panels?: Array<any>;
    collapse?: boolean;
    editable?: boolean;
    height?: Pixels;
    showTitle?: boolean;
    title?: string;
    repeat?: string | null;
}

export class Row {
    panels: Array<any>; // FIXME: type - parent for all panels. known Graph.
    collapse: boolean;
    editable: boolean;
    height: Pixels;
    showTitle?: boolean;
    title?: string;
    repeat?: string | null;

    // FIXME: panel balance code.
    constructor({panels = [], collapse = false, editable = true, height = DEFAULT_ROW_HEIGHT, showTitle = false, title = "New row", repeat = null}: RowProps) {
        this.panels = panels;
        this.collapse = collapse;
        this.editable = editable;
        this.height = height;
        this.showTitle = showTitle;
        this.title = title;
        this.repeat = repeat;
    }
}

export class Annotations {
    list: Array<any>; // FIXME: type.


    constructor(list: Array<any>) {
        this.list = list;
    }
}

export interface DataSourceInputProps {
    name: string;
    label: string;
    pluginId: string;
    pluginName: string;
    description?: string;
}

export class DataSourceInput {
    name: string;
    label: string;
    pluginId: string;
    pluginName: string;
    description: string;
    readonly type: string = "datasource";


    constructor({name, label, pluginId, pluginName, description = ""}: DataSourceInputProps) {
        this.name = name;
        this.label = label;
        this.pluginId = pluginId;
        this.pluginName = pluginName;
        this.description = description;
    }
}


export interface ConstantInputProps {
    name: string;
    label: string;
    value: string;
    description?: string;
}

export class ConstantInput {
    name: string;
    label: string;
    value: string;
    description: string;
    readonly type: string = "datasource";


    constructor({name, label, value, description = ""}: ConstantInputProps) {
        this.name = name;
        this.label = label;
        this.value = value;
        this.description = description;
    }
}

export interface DashboardLinkProps {
    dashboard: string;
    uri: string;
    keepTime?: boolean;
    title?: string;
    type?: string;
}

export class DashboardLink {
    dashboard: string;
    uri: string;
    keepTime: boolean;
    title?: string;
    type: string;


    constructor({dashboard, uri, keepTime = true, title, type = DASHBOARD_TYPE}: DashboardLinkProps) {
        this.dashboard = dashboard;
        this.uri = uri;
        this.keepTime = keepTime;
        this.title = title;
        this.type = type;
    }
}


interface ExternalLinkProps {
    uri: string;
    title?: string;
    keepTime?: boolean;
}

export class ExternalLink {
    uri: string;
    title: string;
    keepTime: boolean;
    readonly type: string = 'link';

    constructor({uri, title = "", keepTime = false}: ExternalLinkProps) {
        this.uri = uri;
        this.title = title;
        this.keepTime = keepTime;
    }
}

export class Template {
    // FIXME: tough one.
}

export class Templating {
    list: Array<Template>;

    constructor(list: Array<Template>) {
        this.list = list;
    }
}

export class Time {
    constructor(public from: string, public to: string) {
    }
}

export const DEFAULT_TIME = new Time('now-1h', 'now');

export interface TimePickerProps {
    refreshIntervals?: Array<string>;
    timeOptions?: Array<string>;
}

export class TimePicker {
    refreshIntervals: string[];
    timeOptions: string[];

    constructor({
                    refreshIntervals = ["5s", "10s", "30s", "1m", "5m", "15m", "30m", "1h", "2h", "1d"],
                    timeOptions = ["5m", "15m", "1h", "6h", "12h", "24h", "2d", "7d", "30d"]
                }: TimePickerProps) {
        this.refreshIntervals = refreshIntervals;
        this.timeOptions = timeOptions;
    }

    toJSON = () => {
        return {"refresh_intervals": this.refreshIntervals, "time_options": this.timeOptions};
    };
}

export const DEFAULT_TIME_PICKER = new TimePicker({});

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
    return new Evaluator(EVAL_GT, [value]);
}

export function LowerThan(value: number) {
    return new Evaluator(EVAL_LT, [value]);
}

export function WithinRange(from_value: number, to_value: number) {
    return new Evaluator(EVAL_WITHIN_RANGE, [from_value, to_value]);
}

export function OutsideRange(from_value: number, to_value: number) {
    return new Evaluator(EVAL_OUTSIDE_RANGE, [from_value, to_value]);
}

export function NoValue() {
    return new Evaluator(EVAL_NO_VALUE, [])
}


export class TimeRange {
    constructor(public from_time: string, public to_time: string) {
    }

    toJson = () => [this.from_time, this.to_time]
}

export interface AlertConditionProps {
    target: Target;
    evaluator: Evaluator;
    timeRange: TimeRange;
    operator: OpType;
    reducerType: ReducerType;
}

export class AlertCondition {
    target: Target;
    evaluator: Evaluator;
    timeRange: TimeRange;
    operator: OpType;
    reducerType: ReducerType;
    readonly type: CombinerType = "query";

    constructor({target, evaluator, timeRange, operator, reducerType}: AlertConditionProps) {
        this.target = target;
        this.evaluator = evaluator;
        this.timeRange = timeRange;
        this.operator = operator;
        this.reducerType = reducerType;
    }

    toJSON = () => {
        return {
            "evaluator": this.evaluator,
            "operator": {
                "type": this.operator
            },
            "query": {
                "model": this.target,
                "params": [this.target.refId, this.timeRange.from_time, this.timeRange.to_time]
            },
            "reducer": {
                "params": [],
                "type": this.reducerType
            },
            "type": this.type
        }
    }
}

export interface AlertProps {
    name: string;
    message: string;
    conditions: Array<AlertCondition>;
    executionErrorState?: AlertStateType
    frequency?: string;
    handler?: number;
    noDataState?: AlertStateType
    notifications?: Array<string>;
    gracePeriod?: string;
}

export class Alert {
    name: string;
    message: string;
    conditions: Array<AlertCondition>;
    executionErrorState: AlertStateType;
    frequency: string;
    handler: number;
    noDataState: AlertStateType;
    notifications: Array<string>;
    gracePeriod: string;

    constructor({
                    name, message, conditions, executionErrorState = STATE_ALERTING, frequency = "60s", handler = 1,
                    noDataState = STATE_NO_DATA, notifications = [], gracePeriod = "5m"
                }: AlertProps) {
        this.name = name;
        this.message = message;
        this.conditions = conditions;
        this.executionErrorState = executionErrorState;
        this.frequency = frequency;
        this.handler = handler;
        this.noDataState = noDataState;
        this.notifications = notifications;
        this.gracePeriod = gracePeriod;
    }

    toJSON = () => {
        let clone: any = {...this, "for": this.gracePeriod};
        delete clone['gracePeriod'];
        return clone;
    };
}

export interface DashboardProps {
    title: string;
    rows: Array<Row>;
    annotations?: Annotations;
    description?: string;
    editable?: boolean;
    gnetId?: string | null;
    hideControls?: boolean;
    id?: number | null;
    inputs?: Array<ConstantInput | DataSourceInput>;
    links?: Array<DashboardLink | ExternalLink>;
    refresh?: string;
    schemaVersion?: number;
    sharedCrosshair?: boolean;
    style?: StyleType;
    tags?: Array<any>;
    templating?: Templating;
    time?: Time;
    timepicker?: TimePicker;
    timezone?: TimezoneType;
    version?: number;
    uid?: string | null;
}

export class Dashboard {
    title: string;
    rows: Array<Row>;
    annotations: Annotations;
    description: string;
    editable: boolean;
    gnetId?: string | null;
    hideControls: boolean;
    id?: number | null;
    inputs: Array<ConstantInput | DataSourceInput>;
    links: Array<DashboardLink | ExternalLink>;
    refresh: string;
    schemaVersion: number;
    sharedCrosshair: boolean;
    style: StyleType;
    tags: Array<string>;
    templating: Templating;
    time: Time;
    timepicker: TimePicker;
    timezone: TimezoneType;
    version: number;
    uid?: string | null;

    constructor({
                    title, rows, annotations = new Annotations([]), description = "", editable = true,
                    gnetId = null, hideControls = false, id = null, inputs = [], links = [], refresh = DEFAULT_REFRESH,
                    schemaVersion = SCHEMA_VERSION, sharedCrosshair = false, style = DARK_STYLE, tags = [],
                    templating = new Templating(), time = DEFAULT_TIME, timepicker = DEFAULT_TIME_PICKER,
                    timezone = UTC, version = 0, uid = null
                }: DashboardProps) {
        this.title = title;
        this.rows = rows;
        this.annotations = annotations;
        this.description = description;
        this.editable = editable;
        this.gnetId = gnetId;
        this.hideControls = hideControls;
        this.id = id;
        this.inputs = inputs;
        this.links = links;
        this.refresh = refresh;
        this.schemaVersion = schemaVersion;
        this.sharedCrosshair = sharedCrosshair;
        this.style = style;
        this.tags = tags;
        this.templating = templating;
        this.time = time;
        this.timepicker = timepicker;
        this.timezone = timezone;
        this.version = version;
        this.uid = uid;
    }

    toJSON = () => {
        let clone: any = {...this, "__inputs": this.inputs};
        delete clone["inputs"];
        return clone;
    };
}

export type Link = ExternalLink | DashboardLink;

export interface GraphProps {
    title: string;
    targets: Array<Target>;
    aliasColors?: any;
    bars?: boolean;
    dataSource?: string;
    description?: string | null;
    editable?: boolean;
    error?: boolean;
    fill?: number;
    grid?: Grid;
    id?: number;
    isNew?: boolean;
    legend?: Legend;
    lines?: boolean;
    lineWidth?: number;
    links?: Array<Link>;
    minSpan?: number | null;
    nullPointMode?: "connected" | "null as zero" | "null";
    percentage?: boolean;
    pointRadius?: number;
    points?: boolean | null;
    renderer?: string;
    repeat?: string | null;
    seriesOverrides?: Array<string>;
    span?: number;
    stack?: boolean;
    steppedLine?: boolean;
    timeFrom?: string | null;
    timeShift?: string | null;
    tooltip?: Tooltip;
    transparent?: boolean;
    xAxis?: XAxis;
    yAxes?: YAxes;
    alert?: Alert;
}

export class Graph {
    title: string;
    targets: Array<Target>;
    aliasColors: any;
    bars: boolean;
    datasource?: string;
    description?: string | null;
    editable: boolean;
    error: boolean;
    fill: number;
    grid: Grid;
    id?: number;
    isNew: boolean;
    legend: Legend;
    lines: boolean;
    linewidth: number;
    links: Array<Link>;
    minSpan?: number | null;
    nullPointMode: NullPointModeType;
    percentage: boolean;
    pointradius: number;
    points: boolean | null;
    renderer: string;
    repeat?: string | null;
    seriesOverrides: Array<string>;
    span?: number;
    stack: boolean;
    steppedLine: boolean;
    timeFrom?: string | null;
    timeShift?: string | null;
    tooltip: Tooltip;
    transparent: boolean;
    xaxis: XAxis;
    yaxes: YAxes;
    alert?: Alert;
    readonly type = GRAPH_TYPE;

    constructor({
                    title, targets, aliasColors = {}, bars = false, dataSource, description = null, editable = true,
                    error = false, fill = 1, grid = new Grid({}), id, isNew = true, legend = new Legend({}),
                    lines = true, lineWidth = DEFAULT_LINE_WIDTH, links = [], minSpan = null, nullPointMode = NULL_CONNECTED,
                    percentage = false, pointRadius = DEFAULT_POINT_RADIUS, points = false, renderer = DEFAULT_RENDERER,
                    repeat = null, seriesOverrides = [], span, stack = false, steppedLine = false,
                    timeFrom = null, timeShift = null, tooltip = new Tooltip({}), transparent = false, xAxis = new XAxis({}),
                    yAxes = new YAxes({left: new YAxis({}), right: new YAxis({})}), alert
                }: GraphProps) {
        this.title = title;
        this.targets = targets;
        this.aliasColors = aliasColors;
        this.bars = bars;
        this.datasource = dataSource;
        this.description = description;
        this.editable = editable;
        this.error = error;
        this.fill = fill;
        this.grid = grid;
        this.id = id;
        this.isNew = isNew;
        this.legend = legend;
        this.lines = lines;
        this.linewidth = lineWidth;
        this.links = links;
        this.minSpan = minSpan;
        this.nullPointMode = nullPointMode;
        this.percentage = percentage;
        this.pointradius = pointRadius;
        this.points = points;
        this.renderer = renderer;
        this.repeat = repeat;
        this.seriesOverrides = seriesOverrides;
        this.span = span;
        this.stack = stack;
        this.steppedLine = steppedLine;
        this.timeFrom = timeFrom;
        this.timeShift = timeShift;
        this.tooltip = tooltip;
        this.transparent = transparent;
        this.xaxis = xAxis;
        this.yaxes = yAxes;
        this.alert = alert;
    }
}

