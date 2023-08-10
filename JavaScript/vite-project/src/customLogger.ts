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
            console.log("AttachTransport: " + JSON.stringify(logObj));
            console.log("meta:" + (logObj._meta as IMeta).logLevelName);
            // 方式1
            // const formatted: CusJson = {}
            // for (let key in logObj) {
            //     if (key.startsWith('_meta')) {
            //         // console.log("11");
            //         continue;
            //     } else if (typeof logObj[key] === 'object') {
            //         formatted[key] = JSON.stringify(logObj[key]); 
            //     } else {
            //         formatted[key] = logObj[key];
            //     }
            // }
            // console.log("formatted" + JSON.stringify(formatted));

            const formatted: string[] = [];
            for (let key in logObj) {
                // if (key.startsWith('_meta')) {
                //     // console.log("11");
                //     continue;
                // } else if (typeof logObj[key] === 'object') {
                //     formatted.push(JSON.stringify(logObj[key])); 
                // } else {
                //     formatted.push(logObj[key] as string);
                // }

                if (key.startsWith('_meta')) {
                    // console.log("11");
                    continue;
                } else {
                    formatted.push(JSON.stringify(logObj[key])); 
                }
            }
            console.log("formatted::: " + formatted.join(" "));


            // 方式2
            // 过滤出数字key
            // const numKeys = Object.keys(logObj).filter(key => !isNaN(Number(key)));

            // // 按数字排序
            // numKeys.sort((a, b) => Number(a) - Number(b)); 

            // let formatted: string[] = [];
            // // 遍历输出value
            // for (let key of numKeys) {
            //     console.log(logObj[key]);
            //     formatted.push(logObj[key] as string);
            // }
            // console.log("formatted: " + JSON.stringify(formatted));

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