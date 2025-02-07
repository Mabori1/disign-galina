module.exports = {
  apps: [
    {
      name: "design-gm.ru",
      script: "node_modules/next/dist/bin/next",
      args: "-p 3030",
      exec_mode: "cluster",
      instances: "max",
    },
  ],
};
