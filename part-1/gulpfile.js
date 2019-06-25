var gulp = require('gulp');
var frontifyApi = require('@frontify/frontify-api');

gulp.task('patterns', function() {
  frontifyApi.syncPatterns({access_token: 'e085a9f443e59da252ac00ab673e08c1c6a4c364', project: '12', baseUrl: 'http://app.local-frontify.com'}, ['patterns/**/*.json']).catch(function(err) {
      console.error(err);
  });
});

gulp.task('assets', function() {
    frontifyApi.syncAssets({access_token: 'bdfe6f6345f1f4da3aee1c9c55057264d1a48c98', project: '11', baseUrl: 'http://app.local-frontify.com', cwd: ''}, ['assets/**/*.*']).catch(function(err) {
        console.error(err);
    });
});

gulp.task('default', ['patterns']);
