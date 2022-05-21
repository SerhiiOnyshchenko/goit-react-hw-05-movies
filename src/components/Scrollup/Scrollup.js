import s from './Scrollup.module.css';

export default function Scrollup() {
   //Get the button:
   const mybutton = document.getElementById('myBtn');

   // When the user scrolls down 20px from the top of the document, show the button
   window.onscroll = () => scrollFunction();

   function scrollFunction() {
      if (
         document.body.scrollTop > 40 ||
         document.documentElement.scrollTop > 40
      ) {
         mybutton.style.display = 'block';
      } else {
         mybutton.style.display = 'none';
      }
   }

   // When the user clicks on the button, scroll to the top of the document
   const onUp = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <button
         id="myBtn"
         type="button"
         className={s.Scrollup}
         onClick={onUp}
      ></button>
   );
}
