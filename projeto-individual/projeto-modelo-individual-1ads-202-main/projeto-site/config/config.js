module.exports = {
  production: {
    username: 'administrador', 
    password: '1507Mudar',
    database: 'projetoindividual',
    host: 'projetoindividual01.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
