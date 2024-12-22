var mongoose = require("mongoose");
var Venue = mongoose.model("venue");

const createResponse = (res, status, content) => {
  res.status(status).json(content);
};

const listVenues = (req, res) => {
  createResponse(res, 200, { status: "success" });
};

const addVenue = async (req, res) => {
  // Renamed from addVenues to addVenue

  try {
    await Venue.create({
      ...req.body,
      coordinates: [req.body.lat, req.body.long],
      hours: [
        {
          days: req.body.days1,
          open: req.body.open1,
          close: req.body.close1,
          isClosed: req.body.isClosed1,
        },
        {
          days: req.body.days2,
          open: req.body.open2,
          close: req.body.close2,
          isClosed: req.body.isClosed2,
        },
      ],
    }).then(function (venue) {
      createResponse(res, "201", venue);
    });
  } catch (error) {
    createResponse(res, "400", error);
  }
};

const getVenues = async (req, res) => {
  try {
    await Venue.findById(req.params.venueid)
      .exec()
      .then(function (venue) {
        createResponse(res, "200", venue);
      });
  } catch (error) {
    createResponse(res, "404", { status: "Boyle bir mekan yok. " });
  }
};

const updateVenues = async function (req, res) {
  try {
    const updatedVenue = await Venue.findByIdAndUpdate(req.params.venueid, {
      ...req.body,
      coordinates: [req.body.lat, req.body.long],
      hours: [
        {
          days: req.body.day1,
          open: req.body.open1,
          close: req.body.close1,
          isClosed: req.body.isClosed1,
        },
        {
          days: req.body.day2,
          open: req.body.open2,
          close: req.body.close2,
          isClosed: req.body.isClosed2,
        },
      ],
    });
    createResponse(res, "201", updatedVenue);
  } catch (error) {
    createResponse(res, "400", { status: "Güncelleme başarısız." });
  }
};

const deleteVenues = (req, res) => {
  createResponse(res, 200, { status: "success" });
};

module.exports = {
  updateVenues,
  addVenue, // Updated here to match
  listVenues,
  deleteVenues,
  getVenues,
};
