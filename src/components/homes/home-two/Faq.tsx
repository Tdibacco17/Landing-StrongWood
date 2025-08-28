"use client";
import { useEffect, useState } from "react";
import Image from "next/image"
import faq_data from "@/data/FaqData"

import faq_thumb from "@/assets/imgs/resources/faq-1.png"

interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
};

const Faq = () => {

   const [faqData, setFaqData] = useState<DataType[]>([]);

   useEffect(() => {
      setFaqData(faq_data);
   }, []);

   const toggleAnswer = (faqId: number) => {
      setFaqData((prevFaqData) =>
         prevFaqData.map((faq) =>
            faq.id === faqId
               ? { ...faq, showAnswer: !faq.showAnswer }
               : { ...faq, showAnswer: false }
         )
      );
   };

   return (
      <section className="faq-section bg-color-1 p-relative mb-20">
         <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/bg/faq-bg.png)` }}></div>
         <div className="shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-47.png)` }}></div>
         <div className="shape-3" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-48.png)` }}></div>
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-7">
                  <div className="faq-wrapper pr-50">
                     <div className="faq-container section-space">
                        <div className="title-box mb-25 wow fadeInLeft" data-wow-delay=".5s">
                           <span className="section-sub-title no-border">FAQ</span>
                           <h3 className="section-title mt-10">Frequently Asked Questions?</h3>
                        </div>
                        <div className="bd-faq">
                           <div className="accordion" id="accordionExample-st-2">
                              <div className="bd-faq-group">
                                 {faqData.filter((items) => items.page === "home_2").map((item) => (
                                    <div key={item.id} className="accordion-item">
                                       <h2 className="accordion-header" id={`heading-st-2-${item.id}`}>
                                          <button className={`accordion-button ${item.showAnswer ? "" : "collapsed"}`} type="button" onClick={() => toggleAnswer(item.id)} >
                                             {item.title}
                                          </button>
                                       </h2>
                                       <div className={`accordion-collapse collapse ${item.showAnswer ? "show" : ""}`} >
                                          <div className="accordion-body">{item.desc}</div>
                                       </div>
                                    </div>

                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xxl-5 mt-auto">
                  <div className="faq-image-area p-relative">
                     <figure className="image">
                        <Image src={faq_thumb} alt="" />
                     </figure>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Faq
