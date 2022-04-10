
import 'reflect-metadata';
import * as path from "path";
import { ApiLambdaApp, ApiRequest, AppConfig } from "ts-lambda-api";
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import container from "./src/inversify.config";
import helmet = require("helmet");

const appConfig = new AppConfig();

if (appConfig.openApi) {
    appConfig.openApi.enabled = true;
    appConfig.openApi.useAuthentication = false
    appConfig.name ="Stars War";
    appConfig.version ="v1";
}

if (process.env.APP_ENV === 'development') {
    const logger = makeLoggerMiddleware();
    container.applyMiddleware(logger);
}

const controllersPath = [path.join(__dirname, "src/controllers")]
const app = new ApiLambdaApp(controllersPath, appConfig, container)

app.configureApi(api => {
    api.use('/*', (req, res, next) => {
        res.cors({});
        next();
    });
    api.options('/*', (req, res, next) => {
        return res.status(200).json({})
    });
}
)
export async function handler(event: ApiRequest, context: any) {
    return await app.run(event, context)
}
