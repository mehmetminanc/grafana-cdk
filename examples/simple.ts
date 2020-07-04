import {Target} from "../lib/target";
import {YAxes, YAxis} from "../lib/axis";
import {Row} from "../lib/row";
import {GreaterThan} from "../lib/evaluator";
import {TimeRange} from "../lib/timeRange";
import {AlertCondition} from "../lib/alertCondition";
import {Alert} from "../lib/alert";
import {Dashboard} from "../lib/dashboard";
import {Graph} from "../lib/panels/graph";

const dashboard = new Dashboard(
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
                            left: new YAxis({format: 'ops'}),
                            right: new YAxis({format: 'short'})
                        }),
                        alert: new Alert(
                            {
                                name: "Too many 500s on Nginx",
                                message: "More than 5 QPS of 500s on Nginx for 5 minutes",
                                conditions: [
                                    new AlertCondition({
                                        operator: "and",
                                        reducerType: "sum",
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

console.log(JSON.stringify(dashboard, null, 4));