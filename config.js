module.exports = {
database: 'mongodb://localhost:27017',
redis: 'redis://localhost:6379',
port: 3000,
logging: {
level: 'info',
file: './app.log',
security: {
jwtSecret: 'secret-key',
tokenExpiry: '24h'
}
}};