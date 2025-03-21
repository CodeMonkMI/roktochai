import { BaseRepository } from "@/lib/core/repository/BaseRepository";
import { DatabaseClientPool } from "@/lib/db/DatabaseClientPool";
import { Prisma } from "@prisma/client";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class Reset_passwordRepository extends BaseRepository<Prisma.Reset_passwordDelegate> {
  constructor(database: DatabaseClientPool) {
    super(database, "reset_password");
  }
}
