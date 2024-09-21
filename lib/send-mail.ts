"use server";

const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_CLIENT_ID = process.env.SMTP_SERVER_CLIENT_ID;
const SMTP_SERVER_CLIENT_SECRET = process.env.SMTP_SERVER_CLIENT_SECRET;
const SMTP_SERVER_REFRESH_TOKEN = process.env.SMTP_SERVER_REFRESH_TOKEN;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

const oAuth2Client = new google.auth.OAuth2(
  SMTP_SERVER_CLIENT_ID,
  SMTP_SERVER_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground",
);

oAuth2Client.setCredentials({ refresh_token: SMTP_SERVER_REFRESH_TOKEN });

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    const SMTP_SERVER_ACCESS_TOKEN = await oAuth2Client.getAccessToken();
    // console.log("access token: ", SMTP_SERVER_ACCESS_TOKEN);

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: SMTP_SERVER_USERNAME,
        clientId: SMTP_SERVER_CLIENT_ID,
        clientSecret: SMTP_SERVER_CLIENT_SECRET,
        refreshToken: SMTP_SERVER_REFRESH_TOKEN,
        accessToken: SMTP_SERVER_ACCESS_TOKEN,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    const info = await transporter.sendMail({
      from: email,
      to: sendTo || SITE_MAIL_RECIEVER,
      subject,
      text,
      html: html ? html : "",
    });
    console.log("Message Sent", info.messageId);
    console.log("Mail sent to", SITE_MAIL_RECIEVER);

    return info;
  } catch (err) {
    console.log("error sending mail: ", err);
  }
}
