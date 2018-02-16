const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'atthemat',
    user: process.env.DB_USER || 'atthemat',
    password: process.env.DB_PASS || 'atthemat',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../atthemat.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
