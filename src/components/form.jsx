import React from "react";

export default function ContactForm() {
   return (
      <div id="form">
         <div className="container">
            <h2>Заполните заявку, и мы свяжемся с вами в ближайшее время</h2>

            <form 
               action="https://getform.io/f/bvrmprzb" 
               method="POST"
            >
               <div>
                  <input 
                     type="text" 
                     name="name"
                     placeholder="Напишите ФИО" 
                     required 
                  />
               </div>
               <div>
                  <input 
                     type="text" 
                     name="phone"
                     placeholder="Напишите номер" 
                     required 
                  />
               </div>

               {/* Honeypot для защиты от ботов */}
               <input 
                  type="hidden" 
                  name="_gotcha" 
                  style={{ display: "none" }} 
               />

               <button type="submit">Отправить</button>
            </form>
         </div>
      </div>
   );
}
