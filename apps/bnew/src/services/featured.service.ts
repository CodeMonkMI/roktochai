import { BaseService } from "@/lib/core/service/BaseService";
import { FeaturedRepository } from "@/repository/featured.repository";
import { FeaturedSelector } from "@/selectors/featured.selector";
import { Prisma } from "@prisma/client";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class FeaturedService extends BaseService<Prisma.FeaturedDelegate> {
  constructor(repository: FeaturedRepository, selector: FeaturedSelector) {
    super(repository, selector);
  }
}

export const FeaturedServiceToken = Symbol("FeaturedServiceToken");
