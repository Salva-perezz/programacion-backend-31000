import { Context, helpers, v1 } from "../../depts.ts";
import { User, Uuid } from "../types/user.type.ts";

const users: User[] = [];

const findUser = (ctx: Context): void => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  const user = users.find((usr: User) => usr.uuid === userId);

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
  const { name, birthDate } = await ctx.request.body().value;

  if (name && birthDate) {
    const uuid: Uuid = String(v1.generate());
    const userToCreate: User = { name, birthDate, uuid };

    users.push(userToCreate);

    ctx.response.status = 201;
    ctx.response.body = {
      status: "Created",
      data: userToCreate,
    };
  } else {
    ctx.response.status = 400;
    ctx.response.body = {
      status: "Missing data",
      data: {},
    };
  }
};

const deleteUser = (ctx: Context): void => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  const userIndex = users.findIndex((user) => {
    user.uuid === userId;
  });
  const deletedUser = users[userIndex];

  users.splice(userIndex, 1);

  ctx.response.status = 200;
  ctx.response.body = {
    status: "Deleted",
    data: deletedUser,
  };
};

const updateUser = async (ctx: Context): Promise<void> => {
  try {
    const { uuid, name, birthDate } = await ctx.request.body().value;

    const userIndex = users.findIndex((user) => {
      user.uuid === uuid;
    });

    users.splice(userIndex, 1, { uuid, name, birthDate });

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
