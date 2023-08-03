export default function BookList() {
   let pageTitle = "Radical Reads";
   let book1 = "https://www.topshelfcomix.com/catalog/covers/they-called-us-enemy-cover-150dpi_lg.jpg";
   let book2 = "https://cdn.imagecomics.com/assets/i/releases/984996/magic-order-4-6-of-6_975a33fffc.jpg";
   let book3 = "https://cdn.imagecomics.com/assets/i/releases/999526/plush-tp-mr_dafeb5dd3e.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="They Called Us Enemy" />
         <img src={book2} alt="Magic Order" />
         <img src={book3} alt="Plush" />
      </div>      
   );
}