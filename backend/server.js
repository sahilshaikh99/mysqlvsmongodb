const cluster = require('cluster');
const os = require('os');
const dotenv = require('dotenv');
const app = require('./src/app');

// Load environment variables
dotenv.config({ path: './src/config/.env' });
dotenv.config({ path: './api/config.env' });
const db = require('./src/config/db');


// Function to start the server
const startServer = () => {
  app.listen(process.env.PORT, () => {
    console.log(`Worker ${process.pid} started and listening on port ${process.env.PORT}`);
  });
};

// Cluster setup
if (cluster.isMaster) {
  const numCPUs = os.cpus().length;

  console.log(`Master process ${process.pid} is running`);

  // Fork workers equal to the number of CPU cores
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Handle worker process events
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    // Replace the dead worker only if it's the master process
    if (cluster.isMaster) {
      cluster.fork();
    }
  });
} else {
  // Worker processes run the application
  startServer();
}
