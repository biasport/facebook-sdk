Package.describe({
  summary: "Facebook SDK packaged for Meteor",
  version: "0.2.3_1",
  name:"biasport:facebook-sdk",
  git: "https://github.com/biasport/facebook-sdk.git"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
    api.use(['jquery', 'spacebars', 'templating']);
    api.add_files(['sdk.js', 'templates.html'], 'client');
});
