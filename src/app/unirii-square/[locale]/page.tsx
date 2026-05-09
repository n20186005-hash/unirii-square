import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/unirii-square/Header';
import Hero from '@/components/unirii-square/Hero';
import Intro from '@/components/unirii-square/Intro';
import BasicInfo from '@/components/unirii-square/BasicInfo';
import HoursSection from '@/components/unirii-square/HoursSection';
import TicketsSection from '@/components/unirii-square/TicketsSection';
import TransportSection from '@/components/unirii-square/TransportSection';
import InfoSection from '@/components/unirii-square/InfoSection';
import RouteSection from '@/components/unirii-square/RouteSection';
import PhotoSpotsSection from '@/components/unirii-square/PhotoSpotsSection';
import HotelsSection from '@/components/unirii-square/HotelsSection';
import Gallery from '@/components/unirii-square/Gallery';
import Reviews from '@/components/unirii-square/Reviews';
import MapEmbed from '@/components/unirii-square/MapEmbed';
import Recommendations from '@/components/unirii-square/Recommendations';
import Footer from '@/components/unirii-square/Footer';

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
