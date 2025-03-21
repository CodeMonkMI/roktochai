import { Controller } from "@/lib/core/decorator/controller.decorator";
import { GET, POST } from "@/lib/core/decorator/router.decorator";
import { OtpRecordsService } from "@/services/otpRecords.service";
import { NextFunction, Request, Response } from "express";
import { autoInjectable } from "tsyringe";

@autoInjectable()
@Controller("/otpRecords")
export class OtpRecordsController {
  constructor(readonly otpRecordsService: OtpRecordsService) {}

  @GET("/")
  async find(_req: Request, res: Response, _next: NextFunction) {
    const data = await this.otpRecordsService.find();
    return res.status(200).json(data);
  }

  @POST("/")
  async create(req: Request, res: Response, _next: NextFunction) {
    const newData = await this.otpRecordsService.create(req.body);
    return res.status(200).json(newData);
  }
}

export const OtpRecordsControllerToken = Symbol("OtpRecordsControllerToken");
