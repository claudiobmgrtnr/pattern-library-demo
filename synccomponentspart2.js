const frontifyApi = require("@frontify/frontify-api");

(async () => {
  await frontifyApi.syncPatterns({
      access_token: "7c2fda15d672937a34a7edb8b3bed921e3dd535c",
      project: "5064",
      baseUrl: "https://demo.frontify.com"
    }, ['part-2/patterns/**/*.json']).catch(function(err) {
        console.error(err);
    });
})();

