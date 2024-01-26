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
  isNew: optional(boolean()),
  name: string(),
  price: string(),
  priceNew: optional(string()),
  priceOld: optional(string()),
  category: array(string()),
  balance: string(),
  net: optional(string()),
});
export type ProductSchema = Output<typeof ProductSchema>;
