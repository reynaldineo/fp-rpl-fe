import MainLayout from '@/components/layout/MainLayout';

export default function SanboxLayout() {
  return (
    <MainLayout withNavbar withFooter>
      <section className='min-h-screen bg-base-500'></section>
      <section className='min-h-screen bg-secondary-500'></section>
    </MainLayout>
  );
}
