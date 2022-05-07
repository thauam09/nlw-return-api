import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bfe9cfcd0f6f2d",
    pass: "5ff9f586b1035c"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Thauã Martins <thauam_09martins@hotmail.com>',
      subject,
      html: body,
    });
  }
}