import { Controller } from "@/lib/core/decorator/controller.decorator";
import { GET, POST } from "@/lib/core/decorator/router.decorator";
import { FeaturedService } from "@/services/featured.service";
import { NextFunction, Request, Response } from "express";
import { autoInjectable } from "tsyringe";

@autoInjectable()
@Controller("/featured")
export class FeaturedController {
  constructor(readonly featuredService: FeaturedService) {}

  @GET("/")
  async find(_req: Request, res: Response, _next: NextFunction) {
    const data = await this.featuredService.find();
    return res.status(200).json(data);
  }

  @POST("/")
  async create(req: Request, res: Response, _next: NextFunction) {
    const newData = await this.featuredService.create(req.body);
    return res.status(200).json(newData);
  }
}

export const FeaturedControllerToken = Symbol("FeaturedControllerToken");
