module.exports = {
  apps : [{
    name: 'movie-archive-frontend',
    script: 'app.js',
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};