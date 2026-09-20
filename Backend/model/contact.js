import mongoose from "mongoose";

const contactScehma = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
}, { timestamps: true })

const ContactModel = mongoose.model("Contact", contactScehma);
export default ContactModel;