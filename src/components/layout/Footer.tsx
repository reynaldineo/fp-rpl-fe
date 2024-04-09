import Link from 'next/link';

import Typography from '@/components/Typography';
import { footerLinks, socialMediaLinks } from '@/contents/footer';

export default function Footer() {
  return (
    <footer className='flex flex-col justify-between space-y-10 bg-primary-500 px-8 py-12 md:flex-row md:space-y-0 md:px-20 md:py-20'>
      <section className='space-y-10'>
        <div className='space-y-4'>
          <Typography as='h5' variant='h5' weight='bold' className='text-3xl'>
            EcoWise
          </Typography>
          <div>
            <Typography
              as='p'
              variant='bt'
              weight='regular'
              className='text-base'
            >
              Institut Teknologi Sepuluh Nopember Surabaya ITS,
            </Typography>
            <Typography
              as='p'
              variant='bt'
              weight='regular'
              className='text-base'
            >
              Sukolilo, Surabaya 60111, Indonesia
            </Typography>
          </div>
        </div>

        <Typography
          as='p'
          variant='bt'
          weight='regular'
          className='hidden md:block'
        >
          © Copyright EcoWise 2024. All Rights Reserved
        </Typography>
      </section>

      <section className='flex flex-col space-y-5 md:flex-row md:space-x-20 md:space-y-0 md:pr-20'>
        <section className='space-y-5'>
          <Typography as='p' variant='t' weight='semibold' className='text-xl'>
            Links:
          </Typography>
          <div className='space-y-3'>
            {footerLinks.map((link) => (
              <div key={link.name}>
                <Link href={link.name}>
                  <Typography
                    as='p'
                    variant='p'
                    weight='medium'
                    className='text-base hover:text-base-600 hover:underline'
                  >
                    {link.name}
                  </Typography>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className='space-y-6'>
          <Typography as='p' variant='t' weight='semibold' className='text-xl'>
            Temukan Kami di:
          </Typography>
          <div className='flex space-x-4'>
            {socialMediaLinks.map((link) => (
              <div key={link.name} className='hover:text-base-600'>
                <Link href={link.href} target='_blank'>
                  <link.icons size={25} />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </section>

      <Typography
        as='p'
        variant='bt'
        weight='regular'
        className='block pt-8 md:hidden'
      >
        © Copyright EcoWise 2024. All Rights Reserved
      </Typography>
    </footer>
  );
}
