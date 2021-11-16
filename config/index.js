exports.config = {
  port: process.env.PORT,
  redis: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    DB: process.env.REDIS_DB,
  }
};
