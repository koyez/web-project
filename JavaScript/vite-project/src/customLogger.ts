import { Logger, ILogObj, IMeta} from "tslog";
import { getDynamicParam } from "./dynamicParam";

interface CusJson {
    [key: string]: any;
  }


class DrpLogger {
    private logger: Logger<unknown>;
    constructor() {
        this.logger = new Logger({ name: "[drp]"});
        this.logger.attachTransport((logObj: ILogObj) => {
            // console.log("AttachTransport: " + JSON.stringify(logObj));
            console.log("meta:" + (logObj._meta as IMeta).logLevelName);
            const formatted: CusJson = {}
            for (let key in logObj) {
                if (key.startsWith('_meta')) {
                    // console.log("11");
                    continue;
                } else if (typeof logObj[key] === 'object') {
                    formatted[key] = JSON.stringify(logObj[key]); 
                } else {
                    formatted[key] = logObj[key];
                }
            }
            console.log("formatted" + JSON.stringify(formatted));
            
        })
    }

    trace(...args: unknown[]) {
        this.logger.trace("[Hello]", ...args);
    }

    debug(...args: unknown[]) {
        this.logger.debug(...args);
    }

    info(...args: unknown[]) {

        // let argsCopy = args as IArguments;
        let newArgs: unknown[] =  [
            "[dynamic:"+ getDynamicParam() + "]",
            ...args
        ];

        console.log("newParam: " + newArgs.join(" "));
        
        // this.logger.info("[dynamic:"+ getDynamicParam() + "]", ...args);
        this.logger.info(...newArgs);
    }

    warn(...args: unknown[]) {
        this.logger.warn(...args);
    }

    error(...args: unknown[]) {
        this.logger.error(...args);
    }

}


export const drplogger = new DrpLogger();