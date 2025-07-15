"use client";

export default function MyMap() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
     
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1752584472219!6m8!1m7!1s-ZRYIu1mGuEE4VcKBNyE9w!2m2!1d26.92235312051464!2d81.37509067257746!3f150.96619321886206!4f-4.208263207315184!5f1.7659023081855802"
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
