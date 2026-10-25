import { env } from "./env";

// TODO 你需要自己申请并替换自己的数据库连接信息
const config = {
  development: {
    host: "127.0.0.1",
    port: "3306",
    username: "root",
    password: "123456",
    database: "lp_space",
  },
  test: {
    host: "127.0.0.1",
    port: "3306",
    username: "root",
    password: "123456",
    database: "lp_space",
  },
  production: {
    host: "127.0.0.1",
    port: "4767",
    username: "root",
    password: "123456",
    database: "lp_space",
  },
};

export default config[env];
