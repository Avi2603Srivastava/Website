// Import necessary libraries
import React, { useState } from 'react';


export default function FaqPage(){


  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const faqs = [
    {
      question: 'How do I apply for an event?',
      answer: 'Go to the Events page, select the event you are interested in, and click on the "Apply" button. Fill in the required details and submit your application.'
    },
    {
      question: 'Can I track my application status?',
      answer: 'Yes, go to your dashboard and click on "My Applications" to see the status of your applications.'
    },
    {
      question: 'What if I forget my password?',
      answer: 'Click on the "Forgot Password" link on the login page and follow the instructions to reset your password.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="faq-help-page">
      <h1>FAQ / Help</h1>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <h2>Contact Support</h2>
        {formSubmitted ? (
          <p>Thank you for reaching out! We will get back to you shortly.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </section>
    </div>
  );
};


// import React, { useState } from 'react'

// export default function Faq() {
//   const [data,setData] = useState({name:"",email:"",message:""})
//   const[formSubmitted,setFormSubmitted] = useState(false)
//   const query = [
//     {
//       question:"How do I apply for an Event ?",
//       answer:"Go to the Events page , select the event you are interested in , and click on the Apply Button."
//   },{
//     question:"How do I apply for an Event ?",
//       answer:"Go to the Events page , select the event you are interested in , and click on the Apply Button."
//   },
//   {
//     question:"How do I apply for an Event ?",
//       answer:"Go to the Events page , select the event you are interested in , and click on the Apply Button."
//   }
//   ]
//   function handleChange(e){
//    const {name,value} = e.target
//    setData({...data,[name]:value})
//   }
//   function handleSubmit(e){
//     e.preventDefault();
//     setFormSubmitted(true)
//   }
//   return (
//     <>
//     <ul>
//     {
//       query.map((faq,index)=>(
//         <li key={index}>
//             <p>{faq.question}</p>
//             <p>{faq.answer}</p>
//           </li>
//       ))
//     }
//     </ul>
//     {
//       formSubmitted?(<p>Thanks for submitting the form</p>):(
    
//     <form onSubmit={handleSubmit}>
//     <label>Name*</label>
//       <input type="text" name="name" placeholder='Full Name' value={data.name} onChange={handleChange} />
//     <label>Email*</label>
//     <input type="email" name="email" placeholder='Email' value={data.email} onChange={handleChange} />
//     <label>Message</label>
//     <textarea name="message" id="" placeholder='Message' value={data.message} onChange={handleChange}/>
//    <button type="submit">Apply</button>
//     </form>
//       )
//     }
//     </>
//   )
// }
