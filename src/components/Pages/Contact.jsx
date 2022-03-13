import './contact.css';

export default function Contact() {

  const emptySubmit = (event) => {
    event.preventDefault();
    return false;
  }

  return (
    <main className="contact-page-container">
      <div className="contact-title-container bg-image">
        <h1 className="contact-title">Contact Us</h1>
      </div>
      <section className="contact-content-container">
        <div className="contact-time">
          <h3>Opening times</h3>
          <p>Mon-Fri: 11h - 22h</p>
          <p>Sat-Sun: 12h - 21h</p>
        </div>
        <div className="contact-book-table-container">
          <h3>Book a table</h3>
          <div className="form-container">
            <form onSubmit={emptySubmit} className="form-book-table">
              <span className="form-book-table-field">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder='Name' />
              </span>
              <span className="form-book-table-field">
                <label htmlFor="message">Message:</label>
                <input type="text" name="message" id="message" placeholder="Message" />
              </span>
              <input type="submit" value="submit" className="form-book-table-button" />
            </form>
          </div>
        </div>
        <div className="contact-address-container">
          <h3>Address</h3>
          <p>Drottningatan 111 36, Stockholm</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508.7163548248726!2d18.05960772926368!3d59.33520068283672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6715b1dc53%3A0xacc7262664c9794c!2sDANKO%20LANKO%20AB!5e0!3m2!1sen!2sse!4v1647149642051!5m2!1sen!2sse"
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section>
    </main>
  )
}