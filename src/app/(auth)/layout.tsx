import NextImage from '@/components/NextImage';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex min-h-screen w-full'>
      <section className='hidden items-center justify-center bg-primary-500 md:flex md:w-[55%]'>
        <NextImage
          src='/auth/auth-img.png'
          className='flex w-[90%] items-center justify-center'
          alt='login-bg'
          width={500}
          height={500}
        />
      </section>
      <div className=' flex w-full items-center justify-center bg-base-500 md:w-[45%]'>
        {children}
      </div>
    </main>
  );
}
