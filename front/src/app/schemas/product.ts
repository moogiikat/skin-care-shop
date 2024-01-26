import {
  coerce,
  date,
  object,
  string,
  array,
  any,
  boolean,
  optional,
} from "valibot";
import type { Output } from "valibot";

export const ProductSchema = object({
  title: string(),
  description: string(),
  img: string(),
  isNew: boolean(),
  name: string(),
  price: string(),
  priceNew: string(),
  priceOld: string(),
  category: array(string()),
  balance: string(),
  net: string(),
});
export type ProductSchema = Output<typeof ProductSchema>;
