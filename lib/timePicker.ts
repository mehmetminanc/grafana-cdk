export interface TimePickerProps {
    refreshIntervals?: Array<string>;
    timeOptions?: Array<string>;
}

export class TimePicker {
    refreshIntervals: string[];
    timeOptions: string[];

    constructor({
                    refreshIntervals = ["5s", "10s", "30s", "1m", "5m", "15m", "30m", "1h", "2h", "1d"],
                    timeOptions = ["5m", "15m", "1h", "6h", "12h", "24h", "2d", "7d", "30d"]
                }: TimePickerProps) {
        this.refreshIntervals = refreshIntervals;
        this.timeOptions = timeOptions;
    }

    toJSON = () => {
        return {"refresh_intervals": this.refreshIntervals, "time_options": this.timeOptions};
    };
}
