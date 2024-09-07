import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FarmerModuleBase } from "./base/farmer.module.base";
import { FarmerService } from "./farmer.service";
import { FarmerController } from "./farmer.controller";
import { FarmerResolver } from "./farmer.resolver";

@Module({
  imports: [FarmerModuleBase, forwardRef(() => AuthModule)],
  controllers: [FarmerController],
  providers: [FarmerService, FarmerResolver],
  exports: [FarmerService],
})
export class FarmerModule {}
