import { logger } from "./logger";
import { drplogger  } from "./customLogger";
import { Query } from "./query";
import { DemoGet, DemoPost } from "./http";

export class MySDK {
    constructor() {
        logger.info("sdk consturctor.")
        drplogger.info("hello MySDK constructor.")
        let query = new Query();
        query.query();
    }

    hello() {
        logger.debug("method: hello().")
        drplogger.debug("hello hello hello.")
        const obj = {
            a: "11",
            b: 2,
            s: true,
            o: {
                ff: "123",
                ss: "ss"
            }
        }
        drplogger.info("132131", "1231312", "1231312", "12313123123", obj);
        return "Hello form the SDK";
    }

    http() {
        drplogger.info("http method");
        DemoPost("/hello", "").then(data => {
            drplogger.info(data);
        }).catch(error => {
            drplogger.error(error);
        })
    }
}

