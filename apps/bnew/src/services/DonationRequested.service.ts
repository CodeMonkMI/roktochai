import { BaseService } from "@/lib/core/service/BaseService";
import { DonationRequestedRepository } from "@/repository/DonationRequested.repository";
import { DonationRequestedSelector } from "@/selectors/DonationRequested.selector";
import { Prisma } from "@prisma/client";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class DonationRequestedService extends BaseService<Prisma.DonationRequestedDelegate> {
  constructor(repository: DonationRequestedRepository, selector: DonationRequestedSelector) {
    super(repository, selector);
  }
}

export const DonationRequestedServiceToken = Symbol("DonationRequestedServiceToken");
