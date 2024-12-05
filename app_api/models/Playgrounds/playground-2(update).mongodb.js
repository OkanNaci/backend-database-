// 'venues' koleksiyonundaki tüm 'Kafemiz' belgelerini güncelleme
db.getCollection("venues").updateMany(
  { name: "Kafemiz" },
  {
    $set: { rating: 4.9 }, // Tüm 'Kafemiz' belgelerinin rating değerini güncelleme
  }
);
