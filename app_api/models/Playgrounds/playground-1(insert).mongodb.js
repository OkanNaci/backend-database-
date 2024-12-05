// 'venues' koleksiyonuna birden fazla belge ekleme
db.getCollection("venues").insertMany([
  {
    name: "Restoranımız",
    address: "Ankara, Türkiye",
    rating: 4.7,
    foodanddrink: ["Pizza", "Makarna"],
    coordinates: [32.8597, 39.9334],
    hours: [
      {
        days: "Pazartesi-Cuma",
        open: "10:00",
        close: "20:00",
        isClosed: false,
      },
    ],
    comments: [
      {
        author: "Ayşe",
        rating: 4,
        text: "Lezzetli yemekler, ama servis biraz yavaş.",
        date: new Date(),
      },
    ],
  },
  {
    name: "Kafemiz",
    address: "İzmir, Türkiye",
    rating: 4.2,
    foodanddrink: ["Kahve", "Kurabiye"],
    coordinates: [27.1384, 38.4237],
    hours: [
      {
        days: "Pazartesi-Cuma",
        open: "08:00",
        close: "18:00",
        isClosed: false,
      },
      {
        days: "Cumartesi-Pazar",
        open: "09:00",
        close: "20:00",
        isClosed: false,
      },
    ],
    comments: [
      {
        author: "Mehmet",
        rating: 5,
        text: "Mükemmel kahve ve harika manzara!",
        date: new Date(),
      },
    ],
  },
]);
