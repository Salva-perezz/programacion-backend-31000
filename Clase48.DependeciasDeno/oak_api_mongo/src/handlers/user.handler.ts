import { Context, helpers, v1 } from "../../depts.ts";
import { User, Uuid } from "../types/user.type.ts";
import db from "../db/dbConn.ts";

const User = db.collection<User>("user");

const findUser = async (ctx: Context): Promise<void> => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  const user = await User.findOne({ uuid: userId });

  if (user) {
    ctx.response.status = 200;
    ctx.response.body = {
      status: "Succes",
      data: user,
    };
  } else {
    ctx.response.status = 404;
    ctx.response.body = {
      status: "Not found",
      data: {},
    };
  }
};

const createUser = async (ctx: Context): Promise<void> => {
  try {
    const { name, birthDate } = await ctx.request.body().value;

    if (name && birthDate) {
      const uuid: Uuid = String(v1.generate());
      const userToCreate: User = { name, birthDate: new Date(birthDate), uuid };

      User.insertOne(userToCreate).then(() => {
        ctx.response.status = 201;
        ctx.response.body = {
          status: "Created",
          data: userToCreate,
        };
      });
    } else {
      ctx.response.status = 400;
      ctx.response.body = {
        status: "Missing data",
        data: {},
      };
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (ctx: Context): Promise<void> => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  const deletedUser = await User.deleteOne({ uuid: userId });

  ctx.response.status = 200;
  ctx.response.body = {
    status: "Deleted",
    data: deletedUser,
  };
};

const updateUser = async (ctx: Context): Promise<void> => {
  try {
    const { uuid, name, birthDate } = await ctx.request.body().value;
    await User.updateOne({ uuid }, { name, birthDate });

    ctx.response.status = 200;
    ctx.response.body = {
      status: "Updated",
      data: { uuid, name, birthDate },
    };
  } catch (err) {
    console.log(err);
    ctx.response.status = 500;
    ctx.response.body = {
      status: "Internal server error",
      data: {},
    };
  }
};

export default { findUser, createUser, deleteUser, updateUser };
