import React from 'react';

function WhatsAppLink() {
  const phoneNumber = "+918788584847"; // Replace with the number
  const message = "Hello! I'd like to get in touch with you."; // Optional message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Chat with us on WhatsApp
    </a>
  );
}

export default WhatsAppLink;
