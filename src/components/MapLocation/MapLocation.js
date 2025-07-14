"use client";

export default function MyMap() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
     
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1712.3150173702636!2d81.45301064721058!3d26.912752752933624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39997d9d498f04c7%3A0x34f71e6db3f3b4ae!2sDariyabad-Safdarganj%20Rd!5e0!3m2!1sen!2sin!4v1752480206417!5m2!1sen!2sin"
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
