import {Target} from "../target";
import {Grid} from "../grid";
import {Legend} from "../legend";
import {Tooltip} from "../tooltip";
import {XAxis, YAxes, YAxis} from "../axis";
import {Alert} from "../alert";
import {DEFAULT_LINE_WIDTH, DEFAULT_POINT_RADIUS, DEFAULT_RENDERER} from "../constants";
import {Link} from "../links";
import {Panel} from "./panel";

export type NullPointMode = "connected" | "null as zero" | "null";

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
    nullPointMode?: NullPointMode;
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

export class Graph extends Panel {
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
    nullPointMode: NullPointMode;
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
    constructor({
                    title, targets, aliasColors = {}, bars = false, dataSource, description = null, editable = true,
                    error = false, fill = 1, grid = new Grid({}), id, isNew = true, legend = new Legend({}),
                    lines = true, lineWidth = DEFAULT_LINE_WIDTH, links = [], minSpan = null, nullPointMode = "connected",
                    percentage = false, pointRadius = DEFAULT_POINT_RADIUS, points = false, renderer = DEFAULT_RENDERER,
                    repeat = null, seriesOverrides = [], span, stack = false, steppedLine = false,
                    timeFrom = null, timeShift = null, tooltip = new Tooltip({}), transparent = false, xAxis = new XAxis({}),
                    yAxes = new YAxes({left: new YAxis({}), right: new YAxis({})}), alert
                }: GraphProps) {
        super('graph', id);

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
