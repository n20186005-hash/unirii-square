import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/polemokotowskie/Header';
import Hero from '@/components/polemokotowskie/Hero';
import Intro from '@/components/polemokotowskie/Intro';
import BasicInfo from '@/components/polemokotowskie/BasicInfo';
import HoursSection from '@/components/polemokotowskie/HoursSection';
import TicketsSection from '@/components/polemokotowskie/TicketsSection';
import TransportSection from '@/components/polemokotowskie/TransportSection';
import InfoSection from '@/components/polemokotowskie/InfoSection';
import RouteSection from '@/components/polemokotowskie/RouteSection';
import PhotoSpotsSection from '@/components/polemokotowskie/PhotoSpotsSection';
import HotelsSection from '@/components/polemokotowskie/HotelsSection';
import Gallery from '@/components/polemokotowskie/Gallery';
import Reviews from '@/components/polemokotowskie/Reviews';
import MapEmbed from '@/components/polemokotowskie/MapEmbed';
import Recommendations from '@/components/polemokotowskie/Recommendations';
import Footer from '@/components/polemokotowskie/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <HoursSection />
        <TicketsSection />
        <TransportSection />
        <InfoSection />
        <RouteSection />
        <PhotoSpotsSection />
        <HotelsSection />
        <Gallery />
        <Reviews />
        <MapEmbed />
        <Recommendations />
      </main>

      <Footer />
    </>
  );
}
