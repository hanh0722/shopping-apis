import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_KEY!);

export const sendMailToUser = async <T extends object>(
  to: string,
  html: string,
  subject: string,
  text?: string,
  config?: T | any
) => {
  const message = {
    to: to,
    from: process.env.SENDER,
    subject: subject,
    text: text,
    html: html,
    ...config,
  };

  try {
    const sendMail = await sgMail.send(message);
    return sendMail;
  } catch (err: any) {
    console.log(err);
  }
};

export const generateOTP = () => {
    const value = Math.floor(1000 + Math.random() * 9000);
    return value;
}