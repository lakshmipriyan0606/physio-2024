
const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="section-title">
        <h3 className="wow fadeInUp">contact us</h3>
        <h2 className="text-anime-style-2" data-cursor="-opaque">
          <span>Get</span> In Touch With Us
        </h2>
      </div>
      <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.25s">
        <div className="row">
          <div className="form-group col-md-6 mb-4">
            <input type="text" name="name" className="form-control" id="fullname" placeholder="Enter Name" required />
            <div className="help-block with-errors" />
          </div>
          <div className="form-group col-md-6 mb-4">
            <input type="email" name="email" className="form-control" id="email" placeholder="Enter Email" required />
            <div className="help-block with-errors" />
          </div>
          <div className="form-group col-md-6 mb-4">
            <input type="text" name="phone" className="form-control" id="phone" placeholder="Phone Number" required />
            <div className="help-block with-errors" />
          </div>
          <div className="form-group col-md-6 mb-4">
            <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" required />
            <div className="help-block with-errors" />
          </div>
          <div className="form-group col-md-12 mb-5">
            <textarea name="msg" className="form-control" id="msg" rows="5" placeholder="Your Message" required />
            <div className="help-block with-errors" />
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn-default disabled">send message</button>
            <div id="msgSubmit" className="h3 hidden" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
