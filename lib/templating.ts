export enum TemplateRefreshMode {
    REFRESH_NEVER,
    REFRESH_ON_DASHBOARD_LOAD,
    REFRESH_ON_TIME_RANGE_CHANGE
}

export enum TemplateShowMode {
    SHOW,
    HIDE_LABEL,
    HIDE_VARIABLE
}

export enum TemplateSortMode {
    SORT_DISABLED,
    SORT_ALPHA_ASC,
    SORT_ALPHA_DESC,
    SORT_NUMERIC_ASC,
    SORT_NUMERIC_DESC,
    SORT_ALPHA_IGNORE_CASE_ASC,
    SORT_ALPHA_IGNORE_CASE_DESC
}

export type TemplateType = "query" | "interval" | "datasource" | "custom" | "constant" | "adhoc";


export interface TemplateProps {
    name: string;
    query: string;
    _default?: string;
    dataSource?: string;
    label?: string;
    allValue?: string;
    includeAll?: boolean;
    multi?: boolean;
    options?: Array<TemplateOptions>;
    regex?: string;
    useTags?: boolean;
    tagsQuery?: string;
    tagValuesQuery?: string;
    refresh?: TemplateRefreshMode;
    type?: "query" | "interval" | "datasource" | "custom" | "constant" | "adhoc";
    hide?: TemplateShowMode;
    sort?: TemplateSortMode;
}

export interface TemplateOptions {
    selected: boolean;
    text: string;
    value: string;
}

export class Template {
    name: string;
    query: string;
    current: any;
    default?: string;
    datasource?: string;
    label?: string;
    allValue?: string;
    includeAll: boolean;
    multi: boolean;
    options: Array<TemplateOptions>;
    regex?: string;
    useTags: boolean;
    tagsQuery?: string;
    tagValuesQuery?: string;
    refresh: TemplateRefreshMode;
    type: TemplateType;
    hide: TemplateShowMode;
    sort: TemplateSortMode;

    constructor({
                    name, query, _default, dataSource, label, allValue, includeAll = false, multi = false,
                    options = [], regex, useTags = false, tagsQuery, tagValuesQuery,
                    refresh = TemplateRefreshMode.REFRESH_ON_DASHBOARD_LOAD, type = "query",
                    hide = TemplateShowMode.SHOW, sort = TemplateSortMode.SORT_ALPHA_ASC
                }: TemplateProps) {
        this.name = name;
        this.query = query;
        this.default = _default;
        this.datasource = dataSource;
        this.label = label;
        this.allValue = allValue;
        this.includeAll = includeAll;
        this.multi = multi;
        this.options = options;
        this.regex = regex;
        this.useTags = useTags;
        this.tagsQuery = tagsQuery;
        this.tagValuesQuery = tagValuesQuery;
        this.refresh = refresh;
        this.type = type;
        this.hide = hide;
        this.sort = sort;

        this._init()
    }

    private _init() {
        if (this.type === "custom") {
            if (this.options?.length === 0) {
                this.query.split(",").forEach((value) => {
                    let isDefault = value === this.default;
                    let option = {selected: isDefault, text: value, value: value};
                    this.options.push(option);

                    if (isDefault) {
                        this.current = option;
                    }
                })
            } else {
                this.current = this.options.filter(option => option.selected)[0];
            }
        } else {
            this.current = {selected: this.default, text: this.default, value: this.default}
        }
    }
}

export interface TemplatingProps {
    list?: Array<Template>;
}

export class Templating {
    list: Array<Template>;

    constructor({list = []}: TemplatingProps) {
        this.list = list;
    }
}
