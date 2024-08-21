module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'dpg-cqbuo20gph6c73c87ed0-a.oregon-postgres.render.com',
        user: 'accommodate_user',
        password: 'zG0DiSjLzLytbHD1dkmvIyNinBSq4wEh',
        database: 'accommodate',
        ssl: { rejectUnauthorized: false } 
      },
      migrations: {
        directory: './migrations'
      },
      seeds: {
        directory: './seeds'
      },
    },
  };
  
  // Database Connection Details 
  //Name of Database=====================:postgresql://accommodate_user
  
  //Password of Database=================:zG0DiSjLzLytbHD1dkmvIyNinBSq4wEh

  //DataBase Host========================:@dpg-cqbuo20gph6c73c87ed0-a.oregon-postgres.render.com

  //Render ServiceName =================:accommodate