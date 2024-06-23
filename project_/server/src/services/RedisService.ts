import { Redis } from "ioredis";
import { REDIS_PORT } from "src/config/env.var";

export default class RedisService {
  private _redis: Redis;

  constructor() {
    this._redis = new Redis({ port: REDIS_PORT });
  }

  get client() {
    return this._redis;
  }
}
