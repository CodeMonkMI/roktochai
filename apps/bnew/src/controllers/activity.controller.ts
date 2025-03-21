import { Controller } from "@/lib/core/decorator/controller.decorator";
import { GET, POST } from "@/lib/core/decorator/router.decorator";
import { ActivityService } from "@/services/activity.service";
import { NextFunction, Request, Response } from "express";
import { autoInjectable } from "tsyringe";

@autoInjectable()
@Controller("/activity")
export class ActivityController {
  constructor(readonly activityService: ActivityService) {}

  @GET("/")
  async find(_req: Request, res: Response, _next: NextFunction) {
    const data = await this.activityService.find();
    return res.status(200).json(data);
  }

  @POST("/")
  async create(req: Request, res: Response, _next: NextFunction) {
    const newData = await this.activityService.create(req.body);
    return res.status(200).json(newData);
  }
}

export const ActivityControllerToken = Symbol("ActivityControllerToken");
