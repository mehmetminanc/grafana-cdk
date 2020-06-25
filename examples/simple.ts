import {
    Alert,
    AlertCondition,
    Dashboard,
    Graph, GreaterThan, OP_AND,
    OPS_FORMAT,
    Row, RTYPE_SUM,
    SHORT_FORMAT,
    Target, TimeRange,
    YAxes,
    YAxis
} from "../lib/core";

let dashboard = new Dashboard(
    {
        title: "Frontend Stats",
        rows: [new Row({
            panels: [
                new Graph(
                    {
                        title: "Frontend QPS",
                        dataSource: "My Prometheus",
                        targets: [new Target({
                            expr: 'sum(irate(nginx_http_requests_total{job="default/frontend",status=~"1.."}[1m]))',
                            legendFormat: "1xx",
                            refId: "A"
                        })],
                        yAxes: new YAxes({
                            left: new YAxis({format: OPS_FORMAT}),
                            right: new YAxis({format: SHORT_FORMAT})
                        }),
                        alert: new Alert(
                            {
                                name: "Too many 500s on Nginx",
                                message: "More than 5 QPS of 500s on Nginx for 5 minutes",
                                conditions: [
                                    new AlertCondition({
                                        operator: OP_AND,
                                        reducerType: RTYPE_SUM,
                                        target: new Target({
                                            expr: 'sum(irate(nginx_http_requests_total{job="default/frontend",status=~"5.."}[1m]))',
                                            legendFormat: "5xx",
                                            refId: "A"
                                        }),
                                        timeRange: new TimeRange("5m", "now"),
                                        evaluator: GreaterThan(5)
                                    })
                                ]
                            }
                        )
                    }
                )
            ],
        })],
    }
);

console.log(JSON.stringify(dashboard));