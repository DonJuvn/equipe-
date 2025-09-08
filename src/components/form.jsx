import React from "react";
export default function ContactForm() {
   return (
      <div id="form">
         <div className="container">
            <h2>Заполните заявку, и мы свяжемся с вами в ближайшее время</h2>

            <form>
               <div>
                  <input type="text" placeholder="Напишите ФИО" />
               </div>
               <div>
                  <input type="text" placeholder="Напишите номер" />
               </div>
                  <button type="submit">Отправить</button>
            </form>
         </div>
      </div>
   );
}
