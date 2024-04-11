import AboutUsPage from '@/app/home/AboutUsPage';
import LandingPage from '@/app/home/LandingPage';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout withNavbar withFooter>
      <LandingPage />
      <AboutUsPage />
    </MainLayout>
  );
}
