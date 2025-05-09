import nodemailer from "nodemailer"

const sendEmail = async (options) => {

    const transporter = nodemailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        service: process.env.SMPT_SERVICE,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASS,
        },
    });

    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.FROM_MAIL}>`, // for custom name(optional)
        to: options.email,
        subject: options.subject,
        html: options.html || options.text, // Use `html` if provided, else fallback to `text`
    }

    await transporter.sendMail(mailOptions);

}

export default sendEmail
