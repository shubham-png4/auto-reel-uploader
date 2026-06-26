require('dotenv').config();
const { generateReel } = require('./generate');

async function main() {
  const result = await generateReel();
  console.log(result);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});