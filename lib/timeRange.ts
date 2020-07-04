export class TimeRange {
    constructor(public from_time: string, public to_time: string) {
    }

    toJSON = () => [this.from_time, this.to_time]
}
