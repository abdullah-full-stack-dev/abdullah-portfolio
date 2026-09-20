import transporter from "../config/mail.js";
import ContactModel from "../model/contact.js";

const contactMe = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.send({
                success: false,
                message: "Please fill out all required fields!"
            })
        }

        const contact = await ContactModel.create({
            name,
            email,
            subject,
            message
        })

        // Sending mail to user
        await transporter.sendMail({
            from: `"Abdullah Khan | Full Stack Developer" <${process.env.MAIL_FROM}>`,
            to: email,
            subject: "Thanks for contacting Abdullah Khan",

            html: `
                <div style="
                    font-family: Arial, sans-serif;
                    max-width: 600px;
                    margin: auto;
                    padding: 30px;
                    background: #f8fafc;
                    color: #111827;
                ">
        
                    <div style="
                        background: #111827;
                        padding: 20px;
                        text-align: center;
                        border-radius: 10px 10px 0 0;
                    ">
                        <h1 style="
                            margin: 0;
                            color: #ffffff;
                            font-size: 24px;
                        ">
                            ABDULLAH KHAN
                        </h1>
        
                        <p style="
                            margin: 6px 0 0;
                            color: #a5b4fc;
                            font-size: 14px;
                        ">
                            Full Stack Developer
                        </p>
                    </div>
        
                    <div style="
                        background: #ffffff;
                        padding: 30px;
                        border-radius: 0 0 10px 10px;
                    ">
        
                        <h2 style="margin-top: 0;">
                            Thanks for reaching out, ${name}! 👋
                        </h2>
        
                        <p style="line-height: 1.6;">
                            Hi ${name},
                        </p>
        
                        <p style="line-height: 1.6;">
                            Thank you for reaching out to me through my portfolio.
                            I've received your message successfully and will get back
                            to you as soon as possible.
                        </p>
        
                        <div style="
                            margin: 25px 0;
                            padding: 15px;
                            background: #f1f5f9;
                            border-left: 4px solid #6366f1;
                            border-radius: 5px;
                        ">
                            <p style="margin: 0; line-height: 1.6;">
                                <strong>Your message has been received.</strong>
                            </p>
                        </div>
        
                        <p style="line-height: 1.6;">
                            Best regards,<br>
                            <strong>Abdullah Khan</strong><br>
                            Full Stack Developer
                        </p>
        
                    </div>
        
                    <p style="
                        text-align: center;
                        color: #6b7280;
                        font-size: 12px;
                        margin-top: 20px;
                    ">
                        This is an automated confirmation email from Abdullah Khan's portfolio.
                    </p>
        
                </div>
            `
        });

        // Sending mail to myself
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.MAIL_FROM}>`,
            to: process.env.MAIL_FROM,

            subject: `New Contact Message — ${name}`,

            html: `
                <div style="
                    font-family: Arial, sans-serif;
                    max-width: 650px;
                    margin: auto;
                    color: #111827;
                ">
        
                    <div style="
                        background: #111827;
                        padding: 20px;
                        border-radius: 10px 10px 0 0;
                    ">
                        <h2 style="
                            margin: 0;
                            color: white;
                        ">
                            New Portfolio Contact
                        </h2>
                    </div>
        
                    <div style="
                        padding: 25px;
                        background: #f8fafc;
                    ">
        
                        <p>
                            <strong>Name:</strong> ${name}
                        </p>
        
                        <p>
                            <strong>Email:</strong> ${email}
                        </p>
        
                        <p>
                            <strong>Message:</strong>
                        </p>
        
                        <div style="
                            background: white;
                            padding: 18px;
                            border-radius: 8px;
                            border: 1px solid #e5e7eb;
                            line-height: 1.6;
                        ">
                            ${message}
                        </div>
        
                    </div>
        
                </div>
            `
        });


        res.send({
            success: true,
            message: "Your enquiry has been submitted successfully!",
            contact
        })

    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}

export { contactMe };