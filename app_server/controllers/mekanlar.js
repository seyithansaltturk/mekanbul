var express = require("express");
var router = express.Router();

// slash gördüğün zaman function çalışır
const anaSayfa = function (req, res, next) {
  res.render("anasayfa", {
    "baslik": "Anasayfa",
    "sayfaBaslik": {
      "siteAd": "Mekanbul",
      "slogan": "Civardaki Mekanları Keşfet!",
    },
    "mekanlar":[
      {
        "ad":"Bilgisayar Mühendisliği",
        "adres":"Sdü Batı Kampüsü",
        "puan":"4",
        "mesafe":"1km",
        "imkanlar":["Amfiler","Laboratuvarlar","Öğrenciler"]
      },
      {
        "ad":"Cam Kafe",
        "adres":"Sdü Batı Kampüsü",
        "puan":"5",
        "mesafe":"2km",
        "imkanlar":["Yemek","İçecek","Tavla"]
      }



    ]
  });
};

const mekanBilgisi = function (req, res, next) {
  res.render("mekanbilgisi",
  { "baslik": "Mekan Bilgisi",
   "mekanBaslik":"Bilgisayar Mühendisliği",
   "mekanDetay":{
      "ad":"Bilgisayar Mühendisliği",
      "adres":"Sdü Batı Kampüsü",
      "puan":"4",
      "saatler":[
        {
          "gunler":"  Pazartesi-Cuma",
          "acilis":"08:00",
          "kapanis":"19:00",
          "kapali": false
        },
        {
          "gunler":"  Cumartesi-Pazar",
          "kapali": true
        }
      ],
      "imkanlar":["Amfiler","Laboratuvarlar","Öğrenciler"],
      "koordinatlar":{
        "enlem":"37.829940049883014",
        "boylam":"30.52548581056265"
      },
      "yorumlar":[
        {
          "yorumYapan":"Seyithan",
          "puan":"3",
          "tarih":"20 Ekim 2022",
          "yorumMetni":"Kayboldum."
        },
        {
          "yorumYapan":"Seyithan",
          "puan":"2",
          "tarih":"20 Ekim 2022",
          "yorumMetni":"Hala bulamıyorum çıkışı."
        },
        {
          "yorumYapan":"Seyithan",
          "puan":"1",
          "tarih":"20 Ekim 2022",
          "yorumMetni":"Yardımmmm Edin."
        },
        {
          "yorumYapan":"Seyithan",
          "puan":"5",
          "tarih":"20 Ekim 2022",
          "yorumMetni":"Tamam tamam çıktım."
        }
      ]

   }





});
};

const yorumEkle = function (req, res, next) {
  res.render("yorumekle", { title: "Yorum Sayfası" });
};

module.exports = { anaSayfa, mekanBilgisi, yorumEkle };