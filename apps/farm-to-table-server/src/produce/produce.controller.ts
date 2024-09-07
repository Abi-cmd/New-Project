import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProduceService } from "./produce.service";
import { ProduceControllerBase } from "./base/produce.controller.base";

@swagger.ApiTags("produces")
@common.Controller("produces")
export class ProduceController extends ProduceControllerBase {
  constructor(
    protected readonly service: ProduceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
