module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/mynotes'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};