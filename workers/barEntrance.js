module.exports = (job, done) => {
    const { bar } = require('../queues')
    try {
      const { name, age } = job.data;
      console.log(age);
      if (age < 18) throw new Error('No tienes acceso');
      bar.add({ name, age });
      done(null, job.data);
    } catch (error) {
      done(error);
    }
  }