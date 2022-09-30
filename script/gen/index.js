const infoCollector = require("./infoCollector");
const tplReplacer = require("./tplReplacer");
const refershRouter = require('./refershRouter')
async function run() {
  const meta = await infoCollector();
  tplReplacer(meta);
  refershRouter();
}

run();
