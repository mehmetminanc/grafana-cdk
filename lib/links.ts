import {PanelType} from "./panels/panel";


export interface ExternalLinkProps {
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

export interface DashboardLinkProps {
    dashboard: string;
    uri: string;
    keepTime?: boolean;
    title?: string;
    type?: PanelType;
}

export class DashboardLink {
    dashboard: string;
    uri: string;
    keepTime: boolean;
    title?: string;
    type: PanelType;

    constructor({dashboard, uri, keepTime = true, title, type = 'dashboard'}: DashboardLinkProps) {
        this.dashboard = dashboard;
        this.uri = uri;
        this.keepTime = keepTime;
        this.title = title;
        this.type = type;
    }
}

export type Link = ExternalLink | DashboardLink;
