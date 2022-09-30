const infoCollector = require("./infoCollector");
const tplReplacer = require("./tplReplacer");
const makeRouter = require('./makeRouter')
async function run() {
  const meta = await infoCollector();
  tplReplacer(meta);
  makeRouter();
}

run();
