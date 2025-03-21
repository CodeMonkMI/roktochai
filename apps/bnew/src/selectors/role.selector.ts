import { BaseSelector } from "@/lib/core/selector/BaseSelector";
import { Prisma } from "@prisma/client";
import { singleton } from "tsyringe";

@singleton()
export class RoleSelector extends BaseSelector<Prisma.RoleDelegate> {
  initializeWithTrue(): any {
    return {
      name: true,
      role: true,
    };
  }
}
