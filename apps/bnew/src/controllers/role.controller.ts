import { Controller } from "@/lib/core/decorator/controller.decorator";
import { GET, POST } from "@/lib/core/decorator/router.decorator";
import { RoleService } from "@/services/role.service";
import { NextFunction, Request, Response } from "express";
import { autoInjectable } from "tsyringe";

@autoInjectable()
@Controller("/role")
export class RoleController {
  constructor(readonly roleService: RoleService) {}

  @GET("/")
  async find(_req: Request, res: Response, _next: NextFunction) {
    const data = await this.roleService.find();
    return res.status(200).json(data);
  }

  @POST("/")
  async create(req: Request, res: Response, _next: NextFunction) {
    const newData = await this.roleService.create(req.body);
    return res.status(200).json(newData);
  }
}

export const RoleControllerToken = Symbol("RoleControllerToken");
