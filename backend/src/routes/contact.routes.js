const express = require("express");

const {
  createContact,
  getMessages,
  updateMessageStatus,
  deleteMessage
} = require(
  "../controllers/contact.controller"
);

const router = express.Router();

router.post("/", createContact);

router.get("/", getMessages);

router.patch("/:id/status", updateMessageStatus);

router.delete("/:id", deleteMessage);

module.exports = router;