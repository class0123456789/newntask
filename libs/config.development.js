/**
 * Created by M.C on 2017/9/15.
 */
import logger from "./logger.js"

module.exports = {
  username: "root",
  password: "jingmen0724",
  database: "ntask",
  host: "127.0.0.1",

    params: {
        dialect: "mysql",

        logging: (sql) => {
            "use strict";
            logger.info(`${new Date()} ${sql}`);
        },
        define: {
            underscored: true
        }
    },
    //jwtSecret: "asdfsafsafsafsafsafsafsafd",
    //jwtSession: {session: false}
};
