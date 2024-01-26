import { Redis } from "@upstash/redis";

import { redis } from "@/configs/default";

export const redisClient = new Redis({
  url: redis.baseUrl,
  token: redis.token,
});
