export type PanelType =
    'absolute'
    | 'dashboard'
    | 'graph'
    | 'singlestat'
    | 'table'
    | 'text'
    | 'alertlist'
    | 'bargauge'
    | 'gauge'
    | 'heatmap'
    | 'flant-statusmap-panel';

export abstract class Panel {
    readonly type: PanelType;
    id?: number;

    protected constructor(type: PanelType, id?: number) {
        this.type = type;
        this.id = id;
    }
}
