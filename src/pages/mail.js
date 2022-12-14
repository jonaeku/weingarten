import sgMail from "@sendgrid/mail";
sgMail.setApiKey(import.meta.env.PUBLIC_SENDGRID_API);

export async function post({ request }) {
  const data = await request.json()
  await sgMail.send({
    to: "Lukas.fruth@googlemail.com",
    from: "Terminanfrage@ionae.de",
    templateId: "d-2ccd4d493c8d476b8aaeb104bc8dc3ae",
    dynamicTemplateData: {
      subject: `Terminanfrage von ${data.email}`,
      name: "Lukas & Sonja",
      nameRequest: data.name,
      email: data.email,
      personCount: data.personCount,
      date: data.date,
      time: data.time,
      text: data.message,
    },
  });
  return new Response(JSON.stringify({ successful: true }), { status: 200 });
};
