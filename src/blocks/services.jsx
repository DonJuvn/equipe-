import React from "react";
import Title from "../components/title";
import RevealOnScroll from "../components/reveal";
import Service from "../components/service";

export default function Services() {
   const servicesData = [
      {
         title: "Лендинг",
         text: "одностраничный сайт для презентации продукта или услуги. Конверсия в заявки и продажи.",
         price: "от 100,000 KZT",
         img: "./img/landing.svg",
      },
      {
         title: "Многостраничный сайт",
         text: "сайт с разделами: о компании, услугах, проектах и контактах.",
         price: "от 200,000 KZT",
         img: "./img/multipage.svg",
      },
      {
         title: "Интернет-магазины",
         text: "e-commerce с каталогом, корзиной, оплатой и интеграцией CRM.",
         price: "от 270,000 KZT",
         img: "./img/shop.svg",
      },
      {
         title: "Маркетплейсы",
         text: "платформы, объединяющие продавцов и покупателей с личными кабинетами и аналитикой.",
         price: "от 645,000 KZT",
         img: "./img/marketplace.svg",
      },
      {
         title: "Корпоративные сайты",
         text: "имиджевые сайты для компаний, организаций и брендов.",
         price: "от 645,000 KZT",
         img: "./img/cor.svg",
      },
      {
         title: "Продуктовый дизайн",
         text: "делаем дизайн приложений, сайтов и SaaS-платформ: от прототипа до готового интерфейса.",
         price: "от 270,000 KZT",
         img: "./img/design.svg",
      },
   ];

   return (
         <div id="services">
            <div className="container">
               <Title text={"Услуги"} />
               <div className="services">
                  {servicesData.map((service, index) => (
                     <Service
                        key={index}
                        title={service.title}
                        text={service.text}
                        price={service.price}
                        img={service.img}
                     />
                  ))}
               </div>
            </div>
         </div>
   );
}
