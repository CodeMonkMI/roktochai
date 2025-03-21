import { Controller } from "@/lib/core/decorator/controller.decorator";
import { GET, POST } from "@/lib/core/decorator/router.decorator";
import { RoleSelector } from "@/selectors/role.selector";
import { RoleService } from "@/services/role.service";
import { NextFunction, Request, Response } from "express";
import { autoInjectable } from "tsyringe";

@autoInjectable()
@Controller("/role")
export class RoleController {
  constructor(
    readonly roleService: RoleService,
    public selector: RoleSelector
  ) {}

  @GET("/")
  async find(_req: Request, res: Response, _next: NextFunction) {
    console.log({ a: this.selector });
    const data = await this.roleService.find();
    return res.status(200).json(data);
  }

  @POST("/")
  async create(req: Request, res: Response, _next: NextFunction) {
    const newData = await this.roleService.createMany(DummyRoles);
    return res.status(200).json(newData);
  }
}

export const RoleControllerToken = Symbol("RoleControllerToken");

const DummyRoles = [
  {
    name: "User",
    role: "user",
  },
  {
    name: "Admin",
    role: "admin",
  },
  {
    name: "Super Admin",
    role: "super_admin",
  },
];
