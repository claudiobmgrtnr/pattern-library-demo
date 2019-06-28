const fs = require("fs");
const frontifyApi = require("@frontify/frontify-api");
const globby = require("globby");
const concat = require("concat");
(async () => {
  await frontifyApi.syncAssets({
      access_token: "e085a9f443e59da252ac00ab673e08c1c6a4c364",
      project: "12",
      baseUrl: "http://app.local-frontify.com",
      cwd: ""
    }, ['part-2/assets/**/*.*']).catch(function(err) {
        console.error(err);
    });
})();

