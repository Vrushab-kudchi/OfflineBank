const { NodeSSH } = require('node-ssh');
require('dotenv').config();

const ssh = new NodeSSH();

async function deploy() {
  try {
    const host = process.env.VPS_HOST; // IP address or domain name of your VPS
    const username = process.env.VPS_USERNAME; // Username for SSH login
    const privateKey = process.env.SSH_PRIVATE_KEY; // Path to your private SSH key

    // Connect to the VPS using SSH
    await ssh.connect({
      host,
      username,
      privateKey,
    });

    // Change to your Node.js application directory on the VPS
    await ssh.execCommand('cd /path/to/your/nodejs/project');

    // Pull the latest changes from GitHub
    await ssh.execCommand('git pull origin main');

    // Install/update dependencies and rebuild your Node.js application
    await ssh.execCommand('npm install && npm run build');

    // Use pm2 to start/restart your Node.js application
    await ssh.execCommand('pm2 restart OfflineBank');

    // Disconnect SSH connection
    ssh.dispose();

    console.log('Deployment successful!');
  } catch (err) {
    console.error('Deployment failed:', err);
  }
}

deploy();
