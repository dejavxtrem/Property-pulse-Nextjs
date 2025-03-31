import '@/assets/styles/globals.css';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Property Pulse',
  description: 'find the perfect rental property',
  keywords: 'rental , property, real estate',
};

const MainLayOut = ({ children }) => {
  return (
    <html>
      <body>
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default MainLayOut;
