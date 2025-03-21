import { BaseSelector } from "@/lib/core/selector/BaseSelector";
import { Prisma } from "@prisma/client";
import { singleton } from "tsyringe";

@singleton()
export class FeaturedSelector extends BaseSelector<Prisma.FeaturedDelegate> {
  initializeWithTrue(): any {
    return {
      id: true,
      name: true,
      role: true,
      createdAt: true,
    };
  }
}
