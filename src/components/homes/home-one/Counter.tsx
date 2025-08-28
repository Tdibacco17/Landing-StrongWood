import Count from "@/components/common/Count";

interface DataType {
   id: number;
   icon: string;
   number: number;
   title: string;
   number_text?: string;
}

const counter_data: DataType[] = [
   {
      id: 1,
      icon: "icon-home-1",
      number: 300,
      title: "Successfully Projects",
      number_text: "+"
   },
   {
      id: 2,
      icon: "icon-team",
      number: 450,
      title: "Company Staffs",
      number_text: "+"
   },
   {
      id: 3,
      icon: "icon-prize-box",
      number: 3150,
      title: "Tons of Products",
   },
   {
      id: 4,
      icon: "icon-team-1",
      number: 6561,
      title: "Satisfied Clients",
   },
];

interface PropType {
   style: boolean;
}

const Counter = ({ style }: PropType) => {
   return (
      <section className={`icon-box-counter-section section-space ${style ? "bg-color-3 is-dark" : ""}`}>
         <div className="small-container">
            <div className="row g-4">
               {counter_data.map((item) => (
                  <div key={item.id} className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                     <div className="icon-box-counter-area">
                        <div className="icon-box">
                           <i className={item.icon}></i>
                        </div>
                        <div className="content">
                           <h3><span className="counter"><Count number={item.number} /></span>{item.number_text}</h3>
                           <span className="text-1">{item.title}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Counter
