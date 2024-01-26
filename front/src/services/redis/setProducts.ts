import { ProductSchema } from "@/app/schemas/product";

import { redisClient } from "./redis_client";

export const setProducts = async (posts: any[]) => {
  return await redisClient.json.set("products", "$", posts);
};
