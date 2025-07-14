'use client';
import { useState } from 'react';

export default function QueryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    title: '',
    query: '',
  });

  const handleChange =async (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));


 

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); 
    
    
    try {
      const result = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.query,
          mobile:formData.mobile,
          title:formData.title
        }),
      });

      if (result.ok) {
        const data = await result.json();
        alert("Contact form submitted successfully!");
      } else {
        console.error("Error:", result.statusText);
        alert('error something went wrong')
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
    }// Replace with API call or toast notification
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f3f04b] px-4 py-12 w-full">
     <div className='flex-col justify-center items-center w-full max-w-[1225px]'>
         <div className="bg-[#144b1d] text-white border border-yellow-400 rounded-xl shadow-md w-full  p-6">
        <h2 className="text-2xl font-semibold text-[#f9c74f] mb-6 text-center tracking-wide">
          Submit Your Query
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-3 rounded-md bg-white text-black placeholder-gray-600 outline-none"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 rounded-md bg-white text-black placeholder-gray-600 outline-none"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile No"
            required
            className="w-full p-3 rounded-md bg-white text-black placeholder-gray-600 outline-none"
            value={formData.mobile}
            onChange={handleChange}
          />

          <input
            type="text"
            name="title"
            placeholder="Query Title (optional)"
            className="w-full p-3 rounded-md bg-white text-black placeholder-gray-600 outline-none"
            value={formData.title}
            onChange={handleChange}
          />

          <textarea
            name="query"
            placeholder="Write your query..."
            rows={5}
            required
            className="w-full p-3 rounded-md bg-white text-black placeholder-gray-600 outline-none resize-none"
            value={formData.query}
            onChange={handleChange}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-[#f9c74f] text-black font-semibold py-3 px-6 rounded-xl hover:bg-[#e0ac3b] transition-all"
          >
            Submit Query
          </button>
        </form>
      </div>
     </div>
    </section>
  );
}
