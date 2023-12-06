import { Logger } from "tslog";

export const logger = new Logger({name: "drp"});


// logger.trace("I am a trace log.");
// logger.debug("I am a debug log.");
// logger.info("I am an info log.");
// logger.warn("I am a warn log with a json object:", { foo: "bar" });
// logger.error("I am an error log.");
// logger.fatal(new Error("I am a pretty Error with a stacktrace."));
