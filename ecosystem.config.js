module.exports = {
  apps: [
    {
      name: 'ElcinAkpinarWebProject',
      script: 'node server.js',
      watch: true,
      ignore_watch: ['node_modules', 'client'],
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};