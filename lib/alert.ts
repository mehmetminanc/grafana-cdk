import {AlertCondition} from "./alertCondition";

export type AlertStateType = "no_data" | "alerting" | "keep_state" | "ok";

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
                    name, message, conditions, executionErrorState = "alerting", frequency = "60s", handler = 1,
                    noDataState = "no_data", notifications = [], gracePeriod = "5m"
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
