import {Row} from "./row";
import {Annotations} from "./annotations";
import {Input} from "./inputs";
import {Link} from "./links";
import {Templating} from "./templating";
import {Time} from "./time";
import {TimePicker} from "./timePicker";
import {DEFAULT_REFRESH, DEFAULT_TIME, DEFAULT_TIME_PICKER, SCHEMA_VERSION} from "./constants";
import {isNotNullOrUndefined} from "./common";

export type StyleType = 'dark' | 'light';

export type TimezoneType = "utc" | "browser";

export interface DashboardProps {
    title: string;
    rows: Array<Row>;
    annotations?: Annotations;
    description?: string;
    editable?: boolean;
    gnetId?: string | null;
    hideControls?: boolean;
    id?: number | null;
    inputs?: Array<Input>;
    links?: Array<Link>;
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
    inputs: Array<Input>;
    links: Array<Link>;
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
                    schemaVersion = SCHEMA_VERSION, sharedCrosshair = false, style = 'dark', tags = [],
                    templating = new Templating({}), time = DEFAULT_TIME, timepicker = DEFAULT_TIME_PICKER,
                    timezone = "utc", version = 0, uid = null
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

        this._init();
    }

    private _init() {
        const ids: Set<number> =
            new Set(this.rows
                .flatMap(row => row.panels)
                .map(panel => panel.id)
                .filter(isNotNullOrUndefined));

        function* generateId(): Generator<number, number, boolean> {
            for (let i = 1; ; i++) {
                if (ids.has(i)) {
                    continue;
                }
                yield i;
            }
        }

        let iter = generateId();

        this.rows
            .flatMap(row => row.panels)
            .forEach(panel => {
                if (panel.id === undefined || panel.id === null) {
                    panel.id = iter.next().value;
                }
            });
    }

    toJSON = () => {
        let clone: any = {...this, "__inputs": this.inputs};
        delete clone["inputs"];
        return clone;
    };
}
