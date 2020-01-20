module.exports = app => {
    app.use(require('./user'))
    app.use(require('./blog'))
}