import { BaseService } from "@/lib/core/service/BaseService";
import { OtpRecordsRepository } from "@/repository/otpRecords.repository";
import { OtpRecordsSelector } from "@/selectors/otpRecords.selector";
import { Prisma } from "@prisma/client";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class OtpRecordsService extends BaseService<Prisma.OtpRecordsDelegate> {
  constructor(repository: OtpRecordsRepository, selector: OtpRecordsSelector) {
    super(repository, selector);
  }
}

export const OtpRecordsServiceToken = Symbol("OtpRecordsServiceToken");
