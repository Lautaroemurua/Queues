const { barEntrance } = require('../../queues');
module.exports = {
  entrance: async (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) return res.send('El nombre y la edad son requeridos'); 
    await barEntrance.add({ name, age });
    res.send(`${name} agregado con exito en la entrance queue`);
  }
};