import app from './server'

/*
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
    console.log(`App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`)
    console.log('  Press CTRL-C to stop\n')
})

export default server
