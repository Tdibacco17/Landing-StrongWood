"use client"

const TestimonialForm = () => {
   return (
      <form onSubmit={(e)=>e.preventDefault()}>
         <div className="row">
            <div className="col-lg-12">
               <div className="contact__from-input mb-20">
                  <label>Your Name</label>
                  <input type="text" placeholder="Ralph Edwards" />
               </div>
            </div>
            <div className="col-lg-6">
               <label>Your Email</label>
               <div className="contact__from-input mb-20">
                  <input type="text" placeholder="info@example.com" />
               </div>
            </div>
            <div className="col-lg-6">
               <label>Your Phone</label>
               <div className="contact__from-input mb-20">
                  <input type="tel" placeholder="+1253 457 7840" />
               </div>
            </div>
            <div className="col-lg-6">
               <label>Location</label>
               <div className="contact__select mb-20">
                  <select>
                     <option value="0">Select</option>
                     <option value="2">Location-1</option>
                     <option value="3">Location-2</option>
                     <option value="1">Location-3</option>
                  </select>
               </div>
            </div>
            <div className="col-lg-6">
               <label>Date</label>
               <div className="contact__from-input mb-20">
                  <input type="date" />
               </div>
            </div>
            <div className="col-12">
               <div className="testimonials_btn text-center">
                  <button type="submit" className="primary-btn-4 btn-hover">
                     Submit Request
                     <span style={{ top: "147.172px", left: "108.5px" }}></span>
                  </button>
               </div>
            </div>
         </div>
      </form>
   )
}

export default TestimonialForm
