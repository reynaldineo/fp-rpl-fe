import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

export default function VideoCard({ index }: { index: number }) {
  return (
    <div>
      <div className='p-1 md:p-3'>
        <div className='flex rounded-2xl bg-white hover:bg-primary-200'>
          <div className='h-[130px] w-[350px] rounded-xl p-4 md:h-[130px] md:w-[290px]'>
            <NextImage
              src='/videocourse.jpg'
              alt='Videocourse Image'
              width={410}
              height={210}
              className='h-full w-full rounded-lg object-cover'
              imgClassName='h-full w-full rounded-lg object-fill'
            />
          </div>
          <div className='space-y-1 py-4 pr-4'>
            <Typography
              as='h6'
              variant='h6'
              weight='medium'
              className='text-lg'
            >
              Recomended Video
            </Typography>
            <Typography
              as='p'
              variant='btn'
              weight='regular'
              className='text-justify text-sm'
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              ipsa!
            </Typography>
          </div>
        </div>
      </div>
      {index < 3 && <div className='border-neutral-20 mx-5 border-b-2' />}
    </div>
  );
}
