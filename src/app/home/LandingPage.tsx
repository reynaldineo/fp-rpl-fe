import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export default function LandingPage() {
  return (
    <section
      className={clsxm(
        'min-h-screen bg-base-500',
        'flex flex-col items-center justify-center lg:flex-row',
        'px-10 md:px-20 lg:px-32',
        'space-y-20 lg:space-y-0',
      )}
    >
      <section className='z-10 basis-1/2'>
        <Typography
          as='h2'
          variant='h2'
          weight='bold'
          className='text-[32px] leading-9'
        >
          Save the Planet Together
        </Typography>
        <Typography
          as='p'
          variant='p'
          weight='regular'
          className='mt-4 text-justify text-base'
        >
          Bersama kita menjaga kelestarian planet dengan langkah-langkah praktis
          untuk mengurangi jejak karbon dan mempromosikan gaya hidup yang ramah
          lingkungan.
        </Typography>
        <ButtonLink
          href='#about-us'
          className='mt-8 w-full px-2 py-1.5 text-lg'
        >
          Tentang Kami
        </ButtonLink>
      </section>
      <section className='z-10 flex basis-1/2 items-center justify-center'>
        <NextImage
          src='/home/save-the-planet.svg'
          alt='logo'
          width={500}
          height={500}
          className='w-[70%]'
        />
      </section>
      {/* Decoration */}
      <NextImage
        src='/home/left-up.png'
        alt='decor left top'
        width={529}
        height={485}
        className='absolute left-0 top-0 w-[45%] md:w-[35%] lg:w-[30%]'
      />
      <NextImage
        src='/home/left-bottom.png'
        alt='decor left bottom'
        width={319}
        height={207}
        className='absolute bottom-0 left-0 hidden w-[20%]  lg:block'
      />
      <NextImage
        src='/home/right.png'
        alt='decor right'
        width={595}
        height={699}
        className='absolute bottom-0 right-0 w-[85%] md:w-[50%] lg:w-[40%]'
      />
    </section>
  );
}
