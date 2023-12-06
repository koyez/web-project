import { drplogger } from "./customLogger";

export class Query {
    constructor() {
        drplogger.info("Query constructor.");
    }

    query() {
        drplogger.info("query qeury query.");
        return "query query query.";
    }
}