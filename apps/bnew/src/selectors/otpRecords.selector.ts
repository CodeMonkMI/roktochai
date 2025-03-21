import { BaseSelector } from "@/lib/core/selector/BaseSelector";
import { Prisma } from "@prisma/client";
import { singleton } from "tsyringe";

@singleton()
export class OtpRecordsSelector extends BaseSelector<Prisma.OtpRecordsDelegate> {
  initializeWithTrue(): any {
    return {
      id: true,
      name: true,
      role: true,
      createdAt: true,
    };
  }
}
