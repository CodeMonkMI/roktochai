import { Controller } from "@/lib/core/decorator/controller.decorator";
import { GET, POST } from "@/lib/core/decorator/router.decorator";
import { Reset_passwordService } from "@/services/reset_password.service";
import { NextFunction, Request, Response } from "express";
import { autoInjectable } from "tsyringe";

@autoInjectable()
@Controller("/reset_password")
export class Reset_passwordController {
  constructor(readonly reset_passwordService: Reset_passwordService) {}

  @GET("/")
  async find(_req: Request, res: Response, _next: NextFunction) {
    const data = await this.reset_passwordService.find();
    return res.status(200).json(data);
  }

  @POST("/")
  async create(req: Request, res: Response, _next: NextFunction) {
    const newData = await this.reset_passwordService.create(req.body);
    return res.status(200).json(newData);
  }
}

export const Reset_passwordControllerToken = Symbol("Reset_passwordControllerToken");
