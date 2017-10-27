module.exports = {
    database: "ntask",
    username: "root",
    password: "jingmen0724",
    params: {
      host: "localhost",
      port: 3306,
      dialect: 'mysql',
      pool: {
        max: 5, // 连接池中最大连接数量
        min: 0, // 连接池中最小连接数量
        idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
     },
      define: {
          //字段名是否使用小划线
          underscored: true
      }
    }
}
