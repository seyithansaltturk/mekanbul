var mongoose = require("mongoose");
var dbUrl =
    "mongodb+srv://seyithan:Seyit.739@mekanbul.w6je8ez.mongodb.net/?retryWrites=true&w=majority";
require("./mekansema");
mongoose.connect(dbUrl);

mongoose.connection.on("connected", function () {
    console.log(dbUrl + "Adresindeki veri tabanına bağlandi");
});

mongoose.connection.on("error", function () {
    console.log("Bağlantı hatası");
});

mongoose.connection.on("disconnected",  function () {
    console.log("Bağlantı kesildi");
});

function kapat(msg, callback) {
    mongoose.connection.close(function  () {
        console.log(msg);
        callback();
    });
}
process.on("SIGINT",    function () {
    kapat("Uygulama kapatıldı", function () {
        process.exit(0);
    });
});