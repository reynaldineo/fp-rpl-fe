import Navbar from '@/components/layout/Navbar';

export default function MainLayout({
  children,
  withNavbar = false,
}: {
  children: React.ReactNode;
  withNavbar?: boolean;
  withFooter?: boolean;
}) {
  return (
    <main>
      {withNavbar && <Navbar />}
      {children}
    </main>
  );
}
