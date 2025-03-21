import { Controller } from "@/lib/core/decorator/controller.decorator";
import { GET, POST } from "@/lib/core/decorator/router.decorator";
import { DonationRequestedService } from "@/services/DonationRequested.service";
import { NextFunction, Request, Response } from "express";
import { autoInjectable } from "tsyringe";

@autoInjectable()
@Controller("/DonationRequested")
export class DonationRequestedController {
  constructor(readonly DonationRequestedService: DonationRequestedService) {}

  @GET("/")
  async find(_req: Request, res: Response, _next: NextFunction) {
    const data = await this.DonationRequestedService.find();
    return res.status(200).json(data);
  }

  @POST("/")
  async create(req: Request, res: Response, _next: NextFunction) {
    const newData = await this.DonationRequestedService.create(req.body);
    return res.status(200).json(newData);
  }
}

export const DonationRequestedControllerToken = Symbol("DonationRequestedControllerToken");
