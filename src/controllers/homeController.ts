import { inject, injectable } from "inversify";
import { api, apiController, apiOperation, apiResponse, Controller, GET, ILogger, LogFactory, noAuth} from "ts-lambda-api";
import { BaseController } from "./baseController";

@apiController("/")
@api("Home API", "Hola mundo")
@injectable()
export class HomeController extends BaseController {

    public constructor() {
        super();
    }

    @GET("/")
    @apiOperation({ name: "saludar", description: "saludar" })
    @apiResponse(200, {
        type: "string",
    })
    @noAuth
    public async helloWorld() {
        try {
            return  "hello world!!";
        } catch (err) {
            console.log(err);
        }
    }

    
}
