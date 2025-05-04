import Link from 'next/link';
import InfoBoxes from '@/components/InfoBoxes';
import Hero from '@/components/Hero';
import HomeProperties from '@/components/HomeProperties';
import connectDB from '@/config/database';

const HomePage = () => {
  //console.log(process.env.MONGOBD_URL);
  // connectDB();

  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;
