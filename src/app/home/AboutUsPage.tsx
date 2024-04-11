import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

type AboutStats = {
  title: string;
  value: string;
  symbol: string;
}[];

const aboutStats: AboutStats = [
  {
    title: 'Year Experience',
    value: '5',
    symbol: '+',
  },
  {
    title: 'Active Users',
    value: '40',
    symbol: 'k',
  },
  {
    title: 'Video Courses',
    value: '50',
    symbol: '+',
  },
  {
    title: 'Trusted Platform',
    value: '100',
    symbol: '%',
  },
];

export default function AboutUsPage() {
  return (
    <section
      id='about-us'
      className={clsxm(
        'min-h-screen bg-base-500 px-16 lg:px-32',
        'flex flex-row items-center justify-center lg:flex-col',
      )}
    >
      <div className='space-y-12 lg:space-y-20'>
        {/* Section atas, bakal kebagi 2 lagi */}
        <section className='flex flex-col-reverse lg:flex-row '>
          <section className='mt-6 flex basis-1/2 items-center justify-center lg:mt-0'>
            <NextImage
              src='/home/about-us.svg'
              alt='logo'
              width={532}
              height={523}
              className='w-[80%]'
            />
          </section>
          <section className='basis-1/2'>
            <Typography
              as='h3'
              variant='h3'
              weight='semibold'
              className='text-[32px]/9 '
            >
              Tentang Kami
            </Typography>
            <Typography
              as='h4'
              variant='h4'
              weight='medium'
              className='mt-3 text-[28px]/8 lg:mt-2 '
            >
              EcoWise
            </Typography>
            <Typography
              as='p'
              variant='t'
              weight='regular'
              className='mt-4 text-justify text-xs lg:mt-6'
            >
              EcoWise adalah aplikasi yang dirancang untuk membantu pengguna
              mengadopsi gaya hidup yang lebih ramah lingkungan. Dengan
              fitur-fitur seperti tips tentang penghematan energi, pengelolaan
              limbah, dan daur ulang, EcoWise memberikan saran praktis untuk
              mengurangi jejak karbon dan mempromosikan keberlanjutan. Motto
              aplikasi ini, &quot;Save the Planet Together&quot;, mencerminkan
              komitmennya untuk mengajak pengguna dari berbagai latar belakang
              untuk bersatu demi melestarikan planet kita.
            </Typography>
          </section>
        </section>

        {/* Section bawah, numeric status */}
        <section className='grid grid-cols-2 items-center justify-center gap-10 lg:grid-cols-4 lg:gap-0'>
          {aboutStats.map((stat) => (
            <div
              key={stat.value}
              className='flex flex-col items-center justify-center'
            >
              <Typography
                as='h3'
                variant='h3'
                weight='medium'
                className='text-[32px]/9'
              >
                {stat.value}
                <span className='text-primary-500'>{stat.symbol}</span>
              </Typography>
              <Typography
                as='p'
                variant='p'
                weight='medium'
                className='text-sm/[18px]'
              >
                {stat.title}
              </Typography>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
