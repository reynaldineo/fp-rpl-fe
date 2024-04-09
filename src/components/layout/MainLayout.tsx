import Footer from '@/components/layout//Footer';
import Navbar from '@/components/layout/Navbar';

export default function MainLayout({
  children,
  withNavbar = false,
  withFooter = false,
}: {
  children: React.ReactNode;
  withNavbar?: boolean;
  withFooter?: boolean;
}) {
  return (
    <main>
      {withNavbar && <Navbar />}
      {children}
      {withFooter && <Footer />}
    </main>
  );
}
