import {Target} from "../target";
import {Panel} from "./panel";
import {Color, Mapping, MappingType, Percent, ValueType,} from "../common";
import {Gauge} from "../gauge";
import {Link} from "../links";
import {NullPointMode} from "./graph";
import {RangeMap} from "../rangeMap";
import {SparkLine} from "../sparkLine";
import {ValueMap} from "../valueMap";
import {DEFAULT_VALUE_TYPE, GREEN, MAPPING_RANGE_TO_TEXT, MAPPING_VALUE_TO_TEXT, ORANGE, RED} from "../constants";

export interface SingleStatProps {
    id?: number;
    datasource: string;
    targets: Array<Target>;
    title: string;
    cacheTimeout?: number;
    colors?: Array<Color>;
    colorBackground?: boolean;
    colorValue?: boolean;
    description?: string;
    decimals?: number;
    editable?: boolean;
    format?: string;
    gauge?: Gauge;
    height?: number;
    hideTimeOverride?: boolean;
    interval?: number;
    links?: Array<Link>;
    mappingType?: MappingType;
    mappingTypes?: Array<Mapping>;
    maxDataPoints?: number;
    minSpan?: number;
    nullText?: string;
    nullPointMode?: NullPointMode;
    postfix?: string;
    postfixFontSize?: Percent;
    prefix?: string;
    prefixFontSize?: Percent;
    rangeMaps?: Array<RangeMap>;
    repeat?: string;
    span?: number;
    sparkLine?: SparkLine;
    thresholds?: string;
    transparent?: boolean;
    valueFontSize?: Percent;
    valueName?: ValueType;
    valueMaps?: Array<ValueMap>;
    timeFrom?: any;
}

export class SingleStat extends Panel {
    datasource: string;
    targets: Array<Target>;
    title: string;
    cacheTimeout?: number;
    colors: Array<Color>;
    colorBackground: boolean;
    colorValue: boolean;
    description?: string;
    decimals?: number;
    editable: boolean;
    format: string;
    gauge: Gauge;
    height?: number;
    hideTimeOverride: boolean;
    interval?: number;
    links: Array<Link>;
    mappingType: MappingType;
    mappingTypes: Array<Mapping>;
    maxDataPoints: number;
    minSpan?: number;
    nullText?: string;
    nullPointMode: NullPointMode;
    postfix: string;
    postfixFontSize: Percent;
    prefix: string;
    prefixFontSize: Percent;
    rangeMaps: Array<RangeMap>;
    repeat?: string;
    span: number;
    sparkLine: SparkLine;
    thresholds: string;
    transparent: boolean;
    valueFontSize: Percent;
    valueName: ValueType;
    valueMaps: Array<ValueMap>;
    timeFrom?: any;

    constructor({
                    id, datasource, targets, title, cacheTimeout, colors = [GREEN, ORANGE, RED],
                    colorBackground = false, colorValue = false, description, decimals, editable = true,
                    format = "none", gauge = new Gauge({}), height, hideTimeOverride = false, interval,
                    links = [], mappingType = MappingType.MAPPING_TYPE_VALUE_TO_TEXT,
                    mappingTypes = [MAPPING_VALUE_TO_TEXT, MAPPING_RANGE_TO_TEXT],
                    maxDataPoints = 100, minSpan, nullText, nullPointMode = "connected",
                    postfix = "", postfixFontSize = new Percent(50),
                    prefix = "", prefixFontSize = new Percent(50),
                    rangeMaps = [], repeat, span = 6, sparkLine = new SparkLine({}), thresholds = "",
                    transparent = false, valueFontSize = new Percent(80),
                    valueName = DEFAULT_VALUE_TYPE, valueMaps = [], timeFrom
                }: SingleStatProps) {
        super("singlestat", id);

        this.datasource = datasource;
        this.targets = targets;
        this.title = title;
        this.cacheTimeout = cacheTimeout;
        this.colors = colors;
        this.colorBackground = colorBackground;
        this.colorValue = colorValue;
        this.description = description;
        this.decimals = decimals;
        this.editable = editable;
        this.format = format;
        this.gauge = gauge;
        this.height = height;
        this.hideTimeOverride = hideTimeOverride;
        this.interval = interval;
        this.links = links;
        this.mappingType = mappingType;
        this.mappingTypes = mappingTypes;
        this.maxDataPoints = maxDataPoints;
        this.minSpan = minSpan;
        this.nullText = nullText;
        this.nullPointMode = nullPointMode;
        this.postfix = postfix;
        this.postfixFontSize = postfixFontSize;
        this.prefix = prefix;
        this.prefixFontSize = prefixFontSize;
        this.rangeMaps = rangeMaps;
        this.repeat = repeat;
        this.span = span;
        this.sparkLine = sparkLine;
        this.thresholds = thresholds;
        this.transparent = transparent;
        this.valueFontSize = valueFontSize;
        this.valueName = valueName;
        this.valueMaps = valueMaps;
        this.timeFrom = timeFrom;
    }
}
