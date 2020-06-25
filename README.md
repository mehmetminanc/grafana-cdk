# Summary

This is a TypeScript port of [grafanalib](https://github.com/weaveworks/grafanalib) which in turn aims to define your dashboards as code.
I reckon it will be complementary to AWS CDK, you can ultimately code your infrastructure, application and Grafana dashboard in a single language and environment.

# WIP
I have just started working on this and there is still work to be done:

## TODO

* Top priority: Around half of the core classes are missing.
* Some extensions provided in the original are missing.
* Well, tests
* More and non-trivial examples
* Build & publish pipeline

For later:
* Provide tooling to update a dashboard given a Grafana instance, in an idempotent way. I love that word. 
* Grafana expressions can be cryptic and are very information-dense, there could be a type-safe expression builder for various data sources.

# Getting started

* For now, take a look at [example/simple.ts](https://github.com/mehmetminanc/grafana-cdk/blob/master/grafana-cdk/examples/simple.ts)

# Goals

* Don't give up on type-safety.
* Have sensible and functioning defaults.

