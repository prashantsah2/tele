"use client";

export default function MyMap() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.4105870523086!2d78.1441901!3d26.19691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5cfc0bb062f%3A0xfe42a8bc202bbe18!2sMaharaj%20Bada%2C%20Gwalior%2C%20Madhya%20Pradesh%20474001!5e0!3m2!1sen!2sin!4v1720341100000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
