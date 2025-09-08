import React, { useRef, useState } from "react";
import Title from "../components/title";
import RevealOnScroll from "../components/reveal";
import FeedBack from "../components/feedback";

export default function Feedbacks() {
   const [active, setActive] = useState(null);

   const feedbacksData = [
   {
      rating: "5.0",
      name: "Алихан С.",
      post: "Основатель стартапа",
      description:
         "Работа с этим разработчиком была великолепной! Он учел все мои пожелания, предложил несколько отличных идей, которых я бы сам не придумал. Сайт получился современным и удобным для пользователей. Очень доволен результатом и буду рекомендовать его всем!",
   },
   {
      rating: "4.8",
      name: "Мария П.",
      post: "Маркетолог",
      description:
         "Работа с этим разработчиком была великолепной! Он учел все мои пожелания, предложил несколько отличных идей",
   },
   {
      rating: "4.6",
      name: "Данияр Т.",
      post: "Предприниматель",
      description:
         "Работа с этим разработчиком была великолепной! Он учел все мои пожелания, предложил несколько отличных идей, которых я бы сам не придумал",
   },
   {
      rating: "5.0",
      name: "Ольга К.",
      post: "HR-менеджер",
      description:
         "Команда не просто выполнила заказ, а помогла выстроить процессы так, что стало проще работать всей компании.",
   },
   {
      rating: "4.0",
      name: "Ержан Б.",
      post: "Директор по развитию",
      description:
         "Хороший результат за разумные деньги. Есть куда расти, но в целом доволен сотрудничеством.",
   },
];


   const containerRef = useRef(null);

   const scrollAmount = 480; // px per click

   const onPrev = () => {
      containerRef.current.scrollBy({
         left: -scrollAmount,
         behavior: "smooth",
      });
      setActive("prev");
   };

   const onNext = () => {
      containerRef.current.scrollBy({
         left: scrollAmount,
         behavior: "smooth",
      });
      setActive("next");
   };

   return (
      <section id="feedbacks">
         <div className="container">
            <RevealOnScroll>
               <div className="cases-title">
                  <Title text={"Отзывы"} />
                  <div className="nav-buttons">
                     <button
                        className={`nav-btn ${active === "prev" ? "active" : ""}`}
                        onClick={onPrev}
                     >
                        &#10094;
                     </button>
                     <button
                        className={`nav-btn ${active === "next" ? "active" : ""}`}
                        onClick={onNext}
                     >
                        &#10095;
                     </button>
                  </div>
               </div>
            </RevealOnScroll>

            <div className="cases" ref={containerRef}>
               {feedbacksData.map((item, index) => (
                  <FeedBack
                     key={index}
                     rating={item.rating}
                     name={item.name}
                     post={item.post}
                     description={item.description}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}
