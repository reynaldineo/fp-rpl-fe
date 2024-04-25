import Chips from '@/components/form/Chips';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import { getCourseType } from '@/types/course';

export default function CourseCard({
  courseVideoCard,
}: {
  courseVideoCard: getCourseType;
}) {
  return (
    <div
      className={clsxm(
        'h-full min-h-[360px] min-w-[350px] md:min-h-[400px] md:w-[410px]',
        'rounded-2xl bg-white hover:bg-slate-100 hover:shadow-lg',
      )}
    >
      <div className='h-[210px] w-full rounded-t-lg bg-[#D9D9D9] md:w-[410px]'>
        <NextImage
          serverStaticImg
          src={courseVideoCard.img_cover}
          alt='Videocourse Image'
          width={410}
          height={210}
          className='h-full w-full max-w-[410px] rounded-t-lg object-cover'
          imgClassName='h-full w-full max-w-[410px] rounded-t-lg object-fill'
          useSkeleton
        />
      </div>
      <div className='flex flex-col justify-between space-y-4 px-5 pb-6 pt-4'>
        <div className='space-y-1 md:space-y-3'>
          <Typography
            as='h6'
            variant='h6'
            weight='semibold'
            className='text-clip text-wrap text-justify text-2xl'
          >
            {courseVideoCard.title.slice(0, 30)}
            {courseVideoCard.title.length > 30 && '...'}
          </Typography>
          <Typography
            as='p'
            variant='p'
            weight='regular'
            className='text-justify text-base'
          >
            {courseVideoCard.caption.slice(0, 50)}
            {courseVideoCard.caption.length > 50 && '...'}
          </Typography>
        </div>

        <Chips>{courseVideoCard.label}</Chips>
      </div>
    </div>
  );
}
