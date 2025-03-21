import { BaseService } from "@/lib/core/service/BaseService";
import { Reset_passwordRepository } from "@/repository/reset_password.repository";
import { Reset_passwordSelector } from "@/selectors/reset_password.selector";
import { Prisma } from "@prisma/client";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class Reset_passwordService extends BaseService<Prisma.Reset_passwordDelegate> {
  constructor(repository: Reset_passwordRepository, selector: Reset_passwordSelector) {
    super(repository, selector);
  }
}

export const Reset_passwordServiceToken = Symbol("Reset_passwordServiceToken");
