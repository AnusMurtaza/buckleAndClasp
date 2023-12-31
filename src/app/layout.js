import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Providers } from '../redux/provider';
import { ToastContainer } from './nextToast';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BootstrapClient from './components/BootstrapClients';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.0/slicknav.min.css" integrity="sha512-MVXhwgzug/vd2/6CjhEI2KY7Hl60+LM3alGwzQAnlOifbQqEbiUb8nfQHonBMDJUT8J/AT6xoWv07G96TL7fFQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.0/jquery.slicknav.js" integrity="sha512-DPQx/CONfKUHRqCgc6mz0/Jc+dBmBpmbDdSUY/IF2TLmIZ8l12ImNkaaL1ApppB6ZgtiflZWw+rVw2y1XbIoRw==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <link rel="stylesheet" href="https://unpkg.com/@icon/elegant-icons/elegant-icons.css"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/themify-icons/0.1.2/css/themify-icons.css"></link>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-zoom/1.6.1/jquery.zoom.min.js" integrity="sha512-xhvWWTTHpLC+d+TEOSX2N0V4Se1989D03qp9ByRsiQsYcdKmQhQ8fsSTX3KLlzs0jF4dPmq0nIzvEc3jdYqKkw==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      
      </head>
      <body className={inter.className}>
        <Providers>
        <Header/>
          {children}
        <Footer/>
          </Providers>
      <ToastContainer />

      <BootstrapClient />
        </body>
    </html>
  )
}
