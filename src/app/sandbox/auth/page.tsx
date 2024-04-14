'use client';

import withAuth from '@/components/hoc/withAuth';
import MainLayout from '@/components/layout/MainLayout';

export default withAuth(SandboxAuthPage);
function SandboxAuthPage() {
  return (
    <MainLayout withNavbar withFooter>
      <section className='min-h-screen bg-base-500'></section>
    </MainLayout>
  );
}
