import { Context } from "../../depts.ts";

const loggerMiddleware = async (
  ctx: Context,
  next: () => void
): Promise<void> => {
  next();

  const body = await ctx.request.body().value;

  console.log(
    `- ${ctx.request.method} request to ${ctx.request.url} with params ${JSON.stringify(body)}`
  );
};

export default loggerMiddleware