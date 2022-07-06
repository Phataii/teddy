const router = require("express").Router();
const auth = require("../middleware/auth");
const { validateRequest } = require("../middleware/validate");
const { param } = require("express-validator");
const Ticket = require("../models/ticketModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//Apply for Ticket
//This code is meant to create new ticket for a user.
router.post("/", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);
    const decodedUser = await jwt.decode(token);
    const user = await User.findById(decodedUser.user);

    const {
      name,
      location,
      destination,
      departureDate,
      nextOfKin,
      nextOfKinPhone,
      company,
      price,
      type,
      ticketNo,
    } = req.body;

    const newTicket = new Ticket({
      userId: user._id,
      name,
      location,
      destination,
      departureDate,
      nextOfKin,
      nextOfKinPhone,
      company,
      price,
      type,
      ticketNo,
    });

    newTicket.save();

    res.json(newTicket);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//Update Ticket using Ticket ID
router.put("/:id", async (req, res) => {
  try {
    const T = await Ticket.findById(req.params.id);
    await T.updateOne({ $set: req.body });
    res.status(200).json("Successful");
  } catch (err) {
    res.status(500).json("error");
  }
});

//Show all tickets
router.get("/", async (req, res) => {
  try {
    const T = await Ticket.find();
    res.json(T);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//Show ticket for the logged in user
router.get("/user", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);
    const decodedUser = await jwt.decode(token);
    const user = await User.findById(decodedUser.user);
    const T = await Ticket.find({ userId: user._id });
    res.json(T);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//Check if Ticket number is valid
router.post("/ticket", async (req, res) => {
  const { ticketNo } = req.body;
  const existingTicket = await Ticket.findOne({ ticketNo });
  if (!existingTicket)
    return res.status(401).json({ errorMessage: "No ticket found" });
  res.status(200).json(existingTicket);
});

//Search for Ticket
router.get(
  "/:id",
  param("id").isMongoId().withMessage("Enter a valid Ticket Number"),
  validateRequest,
  async (req, res) => {
    try {
      const post = await Ticket.findById(req.params.id);

      if (!post) return res.status(404).json("Invalid Ticket");

      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = router;
