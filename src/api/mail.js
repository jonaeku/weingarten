const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.PUBLIC_SENDGRID_API);

const mail = async (req, res) => {
  const body = JSON.parse(req.body);
  await sgMail.send({
    to: "hello@ionae.de",
    from: "Terminanfrage@ionae.de",
    templateId: "d-d42f0b71b8bb4cd8bcc66b507e948f6f",
    dynamicTemplateData: {
      subject: `Terminanfrage Planwagenfahrt von ${body.email}`,
      name: "André",
      nameRequest: body.name,
      email: body.email,
      personCount: body.personCount,
      date: body.date,
      time: body.time,
      text: body.message,
    },
  });

  res.status(200).json({ status: "Ok" });
};

export default mail;