/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Farmer } from "./Farmer";
import { FarmerCountArgs } from "./FarmerCountArgs";
import { FarmerFindManyArgs } from "./FarmerFindManyArgs";
import { FarmerFindUniqueArgs } from "./FarmerFindUniqueArgs";
import { CreateFarmerArgs } from "./CreateFarmerArgs";
import { UpdateFarmerArgs } from "./UpdateFarmerArgs";
import { DeleteFarmerArgs } from "./DeleteFarmerArgs";
import { ProduceFindManyArgs } from "../../produce/base/ProduceFindManyArgs";
import { Produce } from "../../produce/base/Produce";
import { FarmerService } from "../farmer.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Farmer)
export class FarmerResolverBase {
  constructor(
    protected readonly service: FarmerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Farmer",
    action: "read",
    possession: "any",
  })
  async _farmersMeta(
    @graphql.Args() args: FarmerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Farmer])
  @nestAccessControl.UseRoles({
    resource: "Farmer",
    action: "read",
    possession: "any",
  })
  async farmers(@graphql.Args() args: FarmerFindManyArgs): Promise<Farmer[]> {
    return this.service.farmers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Farmer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Farmer",
    action: "read",
    possession: "own",
  })
  async farmer(
    @graphql.Args() args: FarmerFindUniqueArgs
  ): Promise<Farmer | null> {
    const result = await this.service.farmer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Farmer)
  @nestAccessControl.UseRoles({
    resource: "Farmer",
    action: "create",
    possession: "any",
  })
  async createFarmer(@graphql.Args() args: CreateFarmerArgs): Promise<Farmer> {
    return await this.service.createFarmer({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Farmer)
  @nestAccessControl.UseRoles({
    resource: "Farmer",
    action: "update",
    possession: "any",
  })
  async updateFarmer(
    @graphql.Args() args: UpdateFarmerArgs
  ): Promise<Farmer | null> {
    try {
      return await this.service.updateFarmer({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Farmer)
  @nestAccessControl.UseRoles({
    resource: "Farmer",
    action: "delete",
    possession: "any",
  })
  async deleteFarmer(
    @graphql.Args() args: DeleteFarmerArgs
  ): Promise<Farmer | null> {
    try {
      return await this.service.deleteFarmer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Produce], { name: "produces" })
  @nestAccessControl.UseRoles({
    resource: "Produce",
    action: "read",
    possession: "any",
  })
  async findProduces(
    @graphql.Parent() parent: Farmer,
    @graphql.Args() args: ProduceFindManyArgs
  ): Promise<Produce[]> {
    const results = await this.service.findProduces(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
