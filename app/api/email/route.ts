import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const transPort = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });

  const mailOptions = {
    from: "ポートフォリオサイト",
    to: "kishi8755@gmail.com",
    subject: "ポートフォリオサイトからのお問い合わせ",
    text: `お名前: ${name} \n メールアドレス: ${email} \n お問い合わせ内容: ${message}`,
  };

  try {
    await transPort.sendMail(mailOptions);
    return NextResponse.json({ message: "success", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "failed", status: 500 });
  }
}
