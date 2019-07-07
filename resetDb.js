const { sequelize } = require('./model.js');

async function main() {
    await sequelize.sync({ force: true });
  process.exit();
}

main();
