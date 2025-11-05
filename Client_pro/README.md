# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# nodemailer code 

// mailer.js
const nodemailer = require("nodemailer");

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or use host, port, auth for custom SMTP
  auth: {
    user: "your_email@gmail.com",
    pass: "your_app_password", // Use App Password, not your real Gmail password
  },
});

// Email options
const mailOptions = {
  from: "your_email@gmail.com",
  to: "receiver_email@example.com",
  subject: "Test Email using Nodemailer",
  text: "Hello! This is a test email sent using Node.js and Nodemailer.",
  // html: "<b>Hello!</b> This is a <i>test</i> email."
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent successfully:", info.response);
  }
});
