/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { Public } from "../../decorators/public.decorator";
import { CreateBlogArgs } from "./CreateBlogArgs";
import { UpdateBlogArgs } from "./UpdateBlogArgs";
import { DeleteBlogArgs } from "./DeleteBlogArgs";
import { BlogFindManyArgs } from "./BlogFindManyArgs";
import { BlogFindUniqueArgs } from "./BlogFindUniqueArgs";
import { Blog } from "./Blog";
import { BlogService } from "../blog.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Blog)
export class BlogResolverBase {
  constructor(
    protected readonly service: BlogService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _blogsMeta(
    @graphql.Args() args: BlogFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @Public()
  @graphql.Query(() => [Blog])
  async blogs(@graphql.Args() args: BlogFindManyArgs): Promise<Blog[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Blog, { nullable: true })
  async blog(@graphql.Args() args: BlogFindUniqueArgs): Promise<Blog | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => Blog)
  async createBlog(@graphql.Args() args: CreateBlogArgs): Promise<Blog> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @Public()
  @graphql.Mutation(() => Blog)
  async updateBlog(@graphql.Args() args: UpdateBlogArgs): Promise<Blog | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.Mutation(() => Blog)
  async deleteBlog(@graphql.Args() args: DeleteBlogArgs): Promise<Blog | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
