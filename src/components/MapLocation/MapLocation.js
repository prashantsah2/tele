"use client";

export default function MyMap() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
     
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3557.4098018535283!2d81.37514!3d26.922220000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU1JzIwLjAiTiA4McKwMjInMzAuNSJF!5e0!3m2!1sen!2sin!4v1752638428679!5m2!1sen!2sin"
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
