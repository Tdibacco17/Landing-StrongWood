interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
};

const faq_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      showAnswer: false,
      title: "Where should I incorporate my business?",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
   },
   {
      id: 2,
      page: "home_2",
      showAnswer: false,
      title: "How can I safely use files?",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
   },
   {
      id: 3,
      page: "home_2",
      showAnswer: true,
      title: "What is included in your services?",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
   },
   {
      id: 4,
      page: "home_2",
      showAnswer: false,
      title: "What type of company is measured?",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
   },
];

export default faq_data;