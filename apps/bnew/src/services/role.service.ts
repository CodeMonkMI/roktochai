import { BaseService } from "@/lib/core/service/BaseService";

import { RoleRepository } from "@/repository/role.repository";
import { RoleSelector } from "@/selectors/role.selector";
import { Prisma } from "@prisma/client";
import { autoInjectable } from "tsyringe";

type RoleDelegate = Prisma.RoleDelegate;

@autoInjectable()
export class RoleService extends BaseService<Prisma.RoleDelegate> {
  constructor(repository: RoleRepository, selector: RoleSelector) {
    super(repository, selector);
  }
  createMany(
    data: { name: string; role: string }[]
  ): Promise<Prisma.Args<RoleDelegate, "createMany">["data"]> {
    try {
      const creation = data.map(async (item) => {
        return await this.create(item);
      });
      return Promise.all(creation);
    } catch (error) {
      throw new Error(`[Base service] Create - failed `);
    }
  }
}

export const RoleServiceToken = Symbol("RoleServiceToken");
