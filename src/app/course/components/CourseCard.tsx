import Chips from '@/components/form/Chips';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import { CourseVideoCard } from '@/contents/courses/videoCard';
import clsxm from '@/lib/clsxm';

export default function CourseCard({
  courseVideoCard,
}: {
  courseVideoCard: CourseVideoCard;
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
          src='/videocourse.jpg'
          alt='Videocourse Image'
          width={410}
          height={210}
          className='h-full w-full rounded-t-lg object-cover'
          imgClassName='h-full w-full rounded-t-lg object-fill'
        />
      </div>
      <div className='flex flex-col justify-between space-y-4 px-5 pb-6 pt-4'>
        <div className='space-y-1 md:space-y-3'>
          <Typography
            as='h6'
            variant='h6'
            weight='semibold'
            className='text-justify text-2xl'
          >
            {courseVideoCard.title}
          </Typography>
          <Typography
            as='p'
            variant='p'
            weight='regular'
            className='text-justify text-base'
          >
            {courseVideoCard.description}
          </Typography>
        </div>

        <Chips>{courseVideoCard.tags}</Chips>
      </div>
    </div>
  );
}
