import React from "react";

const ContactInfo = ({
  email = "jecoton@gmail.com",
  phone = "+880 1611991039",
  whatsapp = "+880 1776263659", // optional, pass empty string or null if none
}) => {
  return (
    <section  className=" my-10 shadow-lg flex justify-center items-center ">
     <div>
         <h2 className=" font-bold mb-12 text-3xl">Contact Information</h2>
      
      <ul className="space-y-4 text-lg">
        {/* Email */}
        <li>
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${email}`}
            className="text-blue-500 hover:underline"
            aria-label="Send email"
          >
            {email}
          </a>
        </li>

        {/* Phone */}
        <li>
          <strong>Phone:</strong>{" "}
          <a
            href={`tel:${phone}`}
            className="text-blue-500  hover:underline"
            aria-label="Call phone number"
          >
            {phone}
          </a>
        </li>

        {/* WhatsApp (optional) */}
        {whatsapp && whatsapp.trim() !== "" && (
          <li>
            <strong>WhatsApp:</strong>{" "}
            <a
              href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500  hover:underline"
              aria-label="Chat on WhatsApp"
            >
              {whatsapp}
            </a>
          </li>
        )}
      </ul>
     </div>
    </section>
  );
};

export default ContactInfo;
