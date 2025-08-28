"use client"
const HelpForm = () => {
   return (
      <section className="help-3-form-section p-relative z-1">
         <div className="small-container">
            <div className="help-3-form-area p-relative">
               <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-44.png)` }}></div>
               <div className="shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-45.png)` }}></div>
               <h3 className="mb-30">Need Any Roofing Help?</h3>
               <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row p-relative">
                     <div className="col-lg-3">
                        <input type="text" placeholder="Your Name" required />
                     </div>
                     <div className="col-lg-3">
                        <input type="tel" placeholder="Your Phone" required />
                     </div>
                     <div className="col-lg-3">
                        <input type="text" placeholder="Message" required />
                     </div>
                     <div className="col-lg-3">
                        <button type="submit" className="primary-btn-1 btn-hover">
                           Submit Request
                           <span style={{ top: "147.172px", left: "108.5px" }}></span>
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </section>
   )
}

export default HelpForm
