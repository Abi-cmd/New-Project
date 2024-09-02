import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProduceServiceBase } from "./base/produce.service.base";

@Injectable()
export class ProduceService extends ProduceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
