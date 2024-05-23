import Footer from '@/partials/footer/Footer';
import Header from '@/partials/header/Header';
import '../styles/styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='poition-relative'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}


export default RootLayout