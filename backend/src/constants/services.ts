require("dotenv").config();
const passport = require("passport");
const nodemailer = require("nodemailer");

exports.isAuth = () => {
  return passport.authenticate("jwt");
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "sdas69629@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendMail = async ({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html: string;
}) => {
  let info = await transporter.sendMail({
    from: '"Nike" <sdas69629@gmail.com>',
    to,
    subject,
    text,
    html,
  });
  return info;
};
