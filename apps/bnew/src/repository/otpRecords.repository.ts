import { BaseRepository } from "@/lib/core/repository/BaseRepository";
import { DatabaseClientPool } from "@/lib/db/DatabaseClientPool";
import { Prisma } from "@prisma/client";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class OtpRecordsRepository extends BaseRepository<Prisma.OtpRecordsDelegate> {
  constructor(database: DatabaseClientPool) {
    super(database, "otpRecords");
  }
}
