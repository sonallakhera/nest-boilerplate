import { registerAs } from '@nestjs/config';

export default registerAs('redis', () => ({
  host: process.env.REDIS_HOST_MAIN,
  port: process.env.REDIS_PORT_MAIN,
  password: process.env.REDIS_PASSWORD_MAIN,
}));
