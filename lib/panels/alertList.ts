import {Panel} from "./panel";
import {Link} from "../links";
import {DisplaySortOrder} from "../common";

export const DEFAULT_LIMIT = 10;

export type AlertListShowType = "current" | "changes";
export type AlertStateFilterOptions = "ok" | "paused" | "no_data" | "execution_error" | "alerting";

export interface AlertListProps {
    id?: number;
    description?: string;
    limit?: number;
    links?: Array<Link>;
    onlyAlertsOnDashboard?: boolean;
    show?: AlertListShowType;
    sortOrder?: DisplaySortOrder;
    span?: number;
    stateFilter?: Array<AlertStateFilterOptions>;
    title?: string;
    transparent?: boolean;
}

export class AlertList extends Panel {
    description: string;
    limit: number;
    links: Array<Link>;
    onlyAlertsOnDashboard: boolean;
    show: AlertListShowType;
    sortOrder: DisplaySortOrder;
    span: number;
    stateFilter: Array<AlertStateFilterOptions>;
    title: string;
    transparent: boolean;

    constructor({
                    id, description = "", limit = DEFAULT_LIMIT, links = [], onlyAlertsOnDashboard = true,
                    show = "current", sortOrder = DisplaySortOrder.SORT_ASC, span = 6, stateFilter = [], title = "",
                    transparent = false
                }: AlertListProps) {
        super("alertlist", id);
        this.description = description;
        this.limit = limit;
        this.links = links;
        this.onlyAlertsOnDashboard = onlyAlertsOnDashboard;
        this.show = show;
        this.sortOrder = sortOrder;
        this.span = span;
        this.stateFilter = stateFilter;
        this.title = title;
        this.transparent = transparent;
    }
}
