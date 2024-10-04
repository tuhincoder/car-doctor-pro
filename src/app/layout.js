import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


export const metadata = {
  title: "Car Doctor Pro",
  description: "Car Reaper workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='cupcake' className='!scroll-smooth'>
      <body
        className=''
      >
        <Navbar />
        <div className='h-screen'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
