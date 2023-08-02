

export default function BookList() {
   let pageTitle = "My Favotite Books";
   let book1 = "https://pictures.abebooks.com/isbn/9781400079988-us.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51HSkTKlauL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
   let book3 = "https://target.scene7.com/is/image/Target/GUEST_0d92d1a4-2ad5-4371-bbf5-670c4e9eaa4f?wid=1000&hei=1000&fit=constrain&qlt=80&fmt=webp";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} width="100" height="120" alt="War and Piece by Leo Tolstoy" />
         <img src={book2} width="100" height="120" alt="Harry Potter by J.K.Rowling" />
         <img src={book3} width="100" height="120" alt="It by Stephen King" />
      </div>      
   );
}