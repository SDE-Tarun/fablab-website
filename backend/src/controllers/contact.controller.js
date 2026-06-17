const Contact = require(
  "../models/contact.model"
);

const {
  sendContactMail,
} = require(
  "../services/mail.service"
);

const { z } = require("zod");

const contactSchema = z.object({
  name: z
    .string()
    .min(2),

  email: z
  .string()
  .email("Please enter a valid email"),

  phone: z
    .string()
    .optional(),

  subject: z
    .string()
    .min(3),

  message: z
    .string()
    .min(10),
});

const createContact =
  async (req, res) => {
    try {

      const validated =
        contactSchema.parse(
          req.body
        );

      const contact =
        await Contact.create(
          validated
        );

      try {
        await sendContactMail(
          contact
        );
      } catch (mailError) {
        console.log(
          mailError.message
        );
      }

      return res.status(201).json({
        success: true,
        message:
          "Message submitted successfully",
        data: contact,
      });

    } catch (error) {

      if (
        error.name ===
        "ZodError"
      ) {
        return res.status(400).json({
          success: false,
          message:
            error.issues[0]
              .message,
        });
      }

      return res.status(500).json({
        success: false,
        message:
          "Internal Server Error",
      });
    }
  };

const getMessages =
  async (req, res) => {
    try {

      const messages =
        await Contact.find()
          .sort({
            createdAt: -1,
          });

      return res.status(200).json({
        success: true,
        data: messages,
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message:
          "Internal Server Error",
      });
    }
  };

  const updateMessageStatus =
  async (req, res) => {
    try {

      const message =
        await Contact.findByIdAndUpdate(
          req.params.id,
          {
            status:
              req.body.status,
          },
          {
            new: true,
          }
        );

      res.json({
        success: true,
        data: message,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });

    }
  };

const deleteMessage =
  async (req, res) => {
    try {

      await Contact.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });

    }
  };

module.exports = {
  createContact,
  getMessages,
  updateMessageStatus,
  deleteMessage
};