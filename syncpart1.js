const fs = require("fs");
const frontifyApi = require("@frontify/frontify-api");
const globby = require("globby");
const concat = require("concat");
(async () => {
  const cssPaths = await globby(["part-1/components/**/*.css"]);

  console.log("Concatenate CSS-files");
  await concat(cssPaths).then(result => {
    fs.writeFile("part-1/assets/css/main.css", result, function(err) {
      if (err) {
        return console.log(err);
      }
    });
  });
  
  console.log("Sync Patterns with Pattern Libray");
  await frontifyApi.syncPatterns({
      access_token: "e085a9f443e59da252ac00ab673e08c1c6a4c364",
      project: "12",
      baseUrl: "http://app.local-frontify.com"
    },
    ["part-1/components/**/*.html"]
  ).catch(function(err) {
    console.error(err);
  });

  console.log("Upload Assets");
  await frontifyApi.syncAssets({
      access_token: "e085a9f443e59da252ac00ab673e08c1c6a4c364",
      project: "12",
      baseUrl: "http://app.local-frontify.com",
      cwd: ""
    }, ['part-1/assets/**/*.*']).catch(function(err) {
        console.error(err);
    });
})();

