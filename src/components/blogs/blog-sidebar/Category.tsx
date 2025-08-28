import Link from "next/link";

interface DataType {
   id: number;
   title: string;
   count: string;
}

const cat_data: DataType[] = [
   {
      id: 1,
      title: "Roof Renovation",
      count: "1"
   },
   {
      id: 2,
      title: "Roof Installation",
      count: "4"
   },
   {
      id: 3,
      title: "Modified Roofing",
      count: "10"
   },
   {
      id: 4,
      title: "Modified Roofing",
      count: "9"
   },
   {
      id: 5,
      title: "Roof Repair",
      count: "11"
   },
];

const Category = () => {
   return (
      <div className="blog-widget-2 mb-30">
         <h5 className="blog-widget-title p-relative mb-45">Category</h5>
         <ul className="blog-categories-list">
            {cat_data.map((cat) => (
               <li key={cat.id}>
                  <Link href="#">
                     <span>{cat.title}</span>
                     <span>({cat.count})</span>
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Category
