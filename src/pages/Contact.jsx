import React from "react";

export const Contact = () => {
  const handleFormSubmit = (formData) => { //formData is given by React19, its just like a new api function 
    //console.log(formData.entries()); //returns an itrator of key value pairs from the Form Data
    const formInputData = Object.fromEntries(formData.entries()); //yha se object ki form me input data ko extract kr lia 
    // console.log(formInputData);
    
  }
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="container contact-wrapper">
        <form action={handleFormSubmit}>
          <input
            type="text"
            name="username"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your name"
          />
          <input
            type="email"
            name="email"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your email"
          />
          <textarea
            rows="10"
            name="message"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your message"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
