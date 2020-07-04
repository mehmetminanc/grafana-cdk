import {DEFAULT_ROW_HEIGHT} from "./constants";
import {Pixels} from "./common";
import {Panel} from "./panels/panel";

export interface RowProps {
    panels?: Array<Panel>;
    collapse?: boolean;
    editable?: boolean;
    height?: Pixels;
    showTitle?: boolean;
    title?: string;
    repeat?: string | null;
}

export class Row {
    panels: Array<Panel>;
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
