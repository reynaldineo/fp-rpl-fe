import Link from 'next/link';

import MainLayout from '@/components/layout/MainLayout';
import Typography from '@/components/Typography';
import { courseVideoCard } from '@/contents/courses/videoCard';
import clsxm from '@/lib/clsxm';

import VideoCard from './components/VideoCard';

export default function DetailVideoPage() {
  return (
    <MainLayout withNavbar withFooter>
      <section
        className={clsxm(
          'flex min-h-screen flex-col bg-base-500  md:flex-row',
          'px-5 py-28 md:px-10 md:pb-32 md:pt-40',
          'space-x-0 space-y-8 md:space-x-10 md:space-y-0',
        )}
      >
        {/* Video */}
        <section className='md:w-[60%]'>
          {/* Video Card full */}
          <section className='rounded-2xl bg-white px-5 pb-8 pt-4'>
            {/* Frame video */}
            <div>
              <iframe
                className='h-[220px] w-full rounded-2xl lg:h-[450px]'
                width='1000'
                height='1000'
                src='https://www.youtube.com/embed/cJnO-Y_YnFg?si=zkbIy_0a594GFy_j'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen={true}
              />
            </div>
            <Typography
              as='h5'
              variant='h5'
              weight='medium'
              className='mt-5 text-2xl'
            >
              Title Here
            </Typography>
            <Typography
              as='p'
              variant='t'
              weight='regular'
              className='mt-2 text-justify text-base'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quidem
              mollitia dolorum reprehenderit omnis necessitatibus eligendi
              laborum asperiores velit ut.
            </Typography>
          </section>
        </section>

        {/* Recomended Video */}
        <section className='md:w-[40%]'>
          <Typography
            as='h5'
            variant='h5'
            weight='medium'
            className='mb-5 text-xl'
          >
            Popular Courses
          </Typography>

          <div className='mt-2 w-full rounded-2xl bg-white md:mt-5 '>
            {courseVideoCard.slice(0, 4).map((video, index) => (
              <Link href={`/course/${video.id}`} key={index}>
                <VideoCard index={index} />
              </Link>
            ))}
          </div>
        </section>
      </section>
    </MainLayout>
  );
}
