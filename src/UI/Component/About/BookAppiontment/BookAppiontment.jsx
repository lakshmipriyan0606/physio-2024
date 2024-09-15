import React from 'react';

function BookAppointment() {
  return (
    <div className="page-book-appointment">
      <div className="container">
        <div className="book-appointment-form">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">booking</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  <span>Book</span> Appointment
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="appointment-form wow fadeInUp">
                <form id="appointmentForm" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Enter Name"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone Number"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <select
                        name="services"
                        className="form-control form-select"
                        id="services"
                        required
                      >
                        <option value="" disabled selected>
                          Select Service
                        </option>
                        <option value="manual_therapy">manual therapy</option>
                        <option value="chronic_pain">chronic pain</option>
                        <option value="hand_therapy">hand therapy</option>
                        <option value="sports_therapy">sports therapy</option>
                        <option value="cupping_therapy">cupping therapy</option>
                        <option value="ultrasound_therapy">ultrasound therapy</option>
                        <option value="laser_therapy">laser therapy</option>
                        <option value="craniosacral_therapy">craniosacral therapy</option>
                      </select>
                      <div className="help-block with-errors" />
                    </div>

                    <div className="form-group col-md-12 mb-5">
                      <input
                        type="date"
                        name="date"
                        className="form-control"
                        id="date"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>

                    <div className="col-md-12 form-group">
                      <button type="submit" className="btn-default">
                        book appointment
                      </button>
                      <div id="msgSubmit" className="h3 hidden" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  // Add your form submission logic here
  console.log('Form submitted!');
}

export default BookAppointment;