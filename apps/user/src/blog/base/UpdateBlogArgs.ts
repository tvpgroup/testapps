/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { BlogWhereUniqueInput } from "./BlogWhereUniqueInput";
import { BlogUpdateInput } from "./BlogUpdateInput";

@ArgsType()
class UpdateBlogArgs {
  @Field(() => BlogWhereUniqueInput, { nullable: false })
  where!: BlogWhereUniqueInput;
  @Field(() => BlogUpdateInput, { nullable: false })
  data!: BlogUpdateInput;
}

export { UpdateBlogArgs as UpdateBlogArgs };
