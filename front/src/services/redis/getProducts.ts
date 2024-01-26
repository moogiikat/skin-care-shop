import { array, safeParse, any } from "valibot";
import { redisClient } from "./redis_client";
import { ProductSchema } from "@/app/schemas/product";

export const getProducts = async () => {
  const response = await redisClient.json.get("products");

  // const parsedData = safeParse(array(ProductSchema), response);

  // if (!parsedData.success) {
  //   throw Error("INVALID_REDIS_DATA");
  // }

  // return parsedData.output;
  return response;
};
