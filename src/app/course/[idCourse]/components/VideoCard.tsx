import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import { getCourseType } from '@/types/course';

export default function VideoCard({
  index,
  videoCardData,
}: {
  index: number;
  videoCardData: getCourseType;
}) {
  return (
    <div>
      <div className='p-1 md:p-3'>
        <div className='flex rounded-2xl bg-white hover:bg-primary-200'>
          <div className='h-[130px] w-[350px] rounded-xl p-4 md:h-[130px] md:w-[290px]'>
            <NextImage
              useSkeleton
              serverStaticImg
              src={videoCardData.img_cover}
              alt='Videocourse Image'
              width={410}
              height={210}
              className='h-full w-full rounded-lg object-cover'
              imgClassName='h-full w-full rounded-lg object-fill'
            />
          </div>
          <div className='w-full space-y-1 py-4 pr-4'>
            <Typography
              as='h6'
              variant='p'
              weight='semibold'
              className=' text-lg'
            >
              {videoCardData.title.slice(0, 40)}
              {videoCardData.title.length > 40 && '...'}
            </Typography>
            <Typography
              as='p'
              variant='btn'
              weight='regular'
              className='text-wrap text-justify text-sm'
            >
              {videoCardData.caption.slice(0, 80)}
              {videoCardData.caption.length > 100 && '...'}
            </Typography>
          </div>
        </div>
      </div>
      {index < 3 && <div className='border-neutral-20 mx-5 border-b-2' />}
    </div>
  );
}
