import MainLayout from './layout/MainLayout';
import ButtonLink from './links/ButtonLink';
import Typography from './Typography';

export default function NotPermitted() {
  return (
    <MainLayout withNavbar withFooter>
      <section className='flex  min-h-screen items-center justify-center bg-base-500 px-5 md:px-40'>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <Typography as='h4' variant='h4' weight='bold' className='text-3xl'>
            Akses Tidak di Izinkan
          </Typography>
          <Typography as='h6' variant='h6' className='text-center text-xl'>
            Maaf, Anda tidak diizinkan untuk mengakses halaman ini. Silakan
            periksa kembali apakah anda sudah masuk dengan akun yang benar.
          </Typography>
          <div className='flex flex-col items-center justify-center gap-5 md:flex-row'>
            <ButtonLink
              href='/'
              variant='outline-primary'
              className='px-2 py-1 text-lg '
            >
              Kembali ke beranda
            </ButtonLink>
            <ButtonLink
              href='/login'
              variant='primary'
              className='px-2 py-1 text-lg '
            >
              Masuk Ke Akun Anda
            </ButtonLink>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
