module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'atthemat',
    user: process.env.DB_USER || 'atthemat',
    password: process.env.DB_PASS || 'atthemat',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './atthemat.sqlite'      
    }
  }
}
