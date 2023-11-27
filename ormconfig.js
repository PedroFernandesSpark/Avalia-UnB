module.exports = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ['dist/**/*.entity.js'],
  //subscribers: ['dist/**/*.subscriber.js'],
  migrationsTableName: 'migrations',
  logging: process.env.TYPEORM_LOGGING === 'false' ? false : true,
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  ssl: {
    ca: process.env.SSL_CERT,
  },
  "ssl": true,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  },
  synchronize: false,
};
