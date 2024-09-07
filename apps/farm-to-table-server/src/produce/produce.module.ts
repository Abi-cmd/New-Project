import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProduceModuleBase } from "./base/produce.module.base";
import { ProduceService } from "./produce.service";
import { ProduceController } from "./produce.controller";
import { ProduceResolver } from "./produce.resolver";

@Module({
  imports: [ProduceModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProduceController],
  providers: [ProduceService, ProduceResolver],
  exports: [ProduceService],
})
export class ProduceModule {}
