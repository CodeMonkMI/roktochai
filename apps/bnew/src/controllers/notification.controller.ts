import { Controller } from "@/lib/core/decorator/controller.decorator";
import { GET, POST } from "@/lib/core/decorator/router.decorator";
import { NotificationService } from "@/services/notification.service";
import { NextFunction, Request, Response } from "express";
import { autoInjectable } from "tsyringe";

@autoInjectable()
@Controller("/notification")
export class NotificationController {
  constructor(readonly notificationService: NotificationService) {}

  @GET("/")
  async find(_req: Request, res: Response, _next: NextFunction) {
    const data = await this.notificationService.find();
    return res.status(200).json(data);
  }

  @POST("/")
  async create(req: Request, res: Response, _next: NextFunction) {
    const newData = await this.notificationService.create(req.body);
    return res.status(200).json(newData);
  }
}

export const NotificationControllerToken = Symbol("NotificationControllerToken");
