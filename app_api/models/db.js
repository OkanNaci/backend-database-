var mongoose = require("mongoose");
var dbURI =
  "mongodb+srv://okan28001:Okan.171525@cluster0.gby6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbURI);
mongoose.connection.on("connected", function () {
  console.log(dbURI + "baglandi");
});
mongoose.connection.on("disconnected", function () {
  console.log(dbURI + "baglantisi koptu");
});
process.on("SIGINT", function () {
  mongoose.connection.close();
  console.log("baglanti kapatildi");
  process.exit(0);
});
require("./venue");
