const Arena = require('bull-arena');
const Bull = require('bull');
const barRoutes = require('./src/bar/routes');
const barEntranceRoutes = require('./src/barEntrance/router');

module.exports = (app, port, queues) => {

  const arenaConfig = Arena(
    {
      Bull,
      queues,
    },
    {
      basePath: '/arena',
      disableListen: true,
    }
  );

  app.use('/', arenaConfig);
  barEntranceRoutes(app);

  app.listen(port, () => {
    console.log('Server ejecutandose en el puerto', port);
  });
}