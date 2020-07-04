import {Link} from "../links";
import {Panel} from "./panel";

export type TextModeType = "markdown" | "html" | "text";

export interface TextProps {
    id?: number;
    content: string;
    editable?: boolean;
    error?: boolean;
    height?: number;
    links?: Array<Link>;
    mode?: TextModeType;
    span?: any;
    title?: string;
    transparent?: boolean;
}

export class Text extends Panel {
    content: string;
    editable: boolean;
    error: boolean;
    height?: number;
    links: Array<Link>;
    mode: TextModeType;
    span: any; // FIXME: type.
    title: string;
    transparent: boolean;


    constructor({
                    id, content, editable = true, error = false, height, links = [], mode = 'markdown', span,
                    title = "", transparent = false
                }: TextProps) {
        super('text', id);
        this.content = content;
        this.editable = editable;
        this.error = error;
        this.height = height;
        this.links = links;
        this.mode = mode;
        this.span = span;
        this.title = title;
        this.transparent = transparent;
    }
}
