import { BaseService } from "@/lib/core/service/BaseService";
import { NotificationRepository } from "@/repository/notification.repository";
import { NotificationSelector } from "@/selectors/notification.selector";
import { Prisma } from "@prisma/client";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class NotificationService extends BaseService<Prisma.NotificationDelegate> {
  constructor(repository: NotificationRepository, selector: NotificationSelector) {
    super(repository, selector);
  }
}

export const NotificationServiceToken = Symbol("NotificationServiceToken");
