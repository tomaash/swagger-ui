var port = process.env.PORT || 3000;
var harp = require("harp");
console.log("Starting application on port " + port);
harp.server("./dist", {port: port});
