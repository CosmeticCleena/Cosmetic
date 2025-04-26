import QA_DATA from "../../configs/QuestionQA.json";
const QuestionQA = () => {
  return (
    <div className="w-[75%] mx-auto py-4 mt-6">
      <p className="font-magnificent text-4xl text-center">Câu hỏi Q&A</p>
      <div className="grid grid-cols-12 mt-6 gap-6">
        {QA_DATA.map((item, index) => (
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#F9F6ED] px-8 py-10 font-lato"
            key={index}
          >
            <div className="text-2xl font-bold relative inline-block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F1E9D0] rounded-full h-12 w-12 z-0"></div>
              <p className="relative z-10 text-center font-bold text-3xl">
                {item.id}
              </p>
            </div>
            <p className="text-[#0D0D0D] text-xl mt-6 md:h-22 lg:h-[82px] line-clamp-3">
              {item.question}
            </p>
            <p className="text-[#6A6A6A] text-xl mt-2 lg:mt-4">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionQA;
