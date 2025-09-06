import React from "react";
import Title from "../components/title";
import Counter from "../components/about-counter";

export default function AboutUs() {
   const counters = [
      { value: "+2 Лет", label: "на рынке" },
      { value: "+30 Более", label: "проектов" },
      { value: "+30 Более", label: "довольных клиентов" },
   ];

   return (
      <div id="about">
         <div className="container">
            <Title text={"О нас"} />
            <h1>
               Equipe – это команда профессионалов, объединённых одной целью:
               создавать уникальные и эффективные цифровые решения для вашего
               бизнеса
            </h1>
            <div className="about">
               {counters.map((item, index) => (
                  <Counter
                     key={index}
                     value={item.value}
                     label={item.label}
                     duration={3000} // 3 seconds
                  />
               ))}
            </div>
         </div>
      </div>
   );
}
