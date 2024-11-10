import bootImg from '../images/bussiness_handshake.png';
import './Contact.css'; // Import the CSS file

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="contact-container">
      {/* Left Side - Animated Character */}
      <div className="animated-character">
        <h2 className="text-3xl mb-4">How can Acroyna help you today?</h2>
        <img 
          src={bootImg} 
          alt="Animated Character" 
          className="w-3/4"
        />
      </div>

      {/* Right Side - Contact Form */}
      <div className="form-container">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          {/* Pair of Fields: First Name and Last Name */}
          <div className="form-field flex">
            <div className="flex-1 mr-2">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                required 
                placeholder="Enter First Name"
                className="line-input"
              />
            </div>
            <div className="flex-1 ml-2">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                required 
                placeholder="Enter Last Name"
                className="line-input"
              />
            </div>
          </div>
          {/* Pair of Fields: Email and Phone Number */}
          <div className="form-field flex">
            <div className="flex-1 mr-2">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                required 
                placeholder="Enter Email ID"
                className="line-input"
              />
            </div>
            <div className="flex-1 ml-2">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                required 
                placeholder="Enter Phone Number"
                className="line-input"
              />
            </div>
          </div>
          {/* Pair of Fields: Company Name and Designation */}
          <div className="form-field flex">
            <div className="flex-1 mr-2">
              <label htmlFor="company">Company Name</label>
              <input 
                type="text" 
                id="company" 
                required 
                placeholder="Enter Company Name"
                className="line-input"
              />
            </div>
            <div className="flex-1 ml-2">
              <label htmlFor="designation">Designation</label>
              <input 
                type="text" 
                id="designation" 
                required 
                placeholder="Enter Designation"
                className="line-input"
              />
            </div>
          </div>
          {/* Description Field */}
          <div className="form-field">
            <label htmlFor="description">How can Acroyna help you?</label>
            <textarea 
              id="description" 
              rows="4" 
              required 
              placeholder="Describe how Acroyna can help you..."
              className="line-input"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
