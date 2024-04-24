'use client';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import { FcLike } from 'react-icons/fc';

import VideoCard from '@/app/course/[idCourse]/components/VideoCard';
import Button from '@/components/buttons/Button';
import TextArea from '@/components/form/TextArea';
import withAuth from '@/components/hoc/withAuth';
import MainLayout from '@/components/layout/MainLayout';
import Loading from '@/components/Loading';
import NotPermitted from '@/components/NotPermitted';
import Typography from '@/components/Typography';
import HookGetCourse from '@/hooks/course/getCourse';
import HookGetCourseById from '@/hooks/course/getCourseById';
import HookPostComment from '@/hooks/course/postComment';
import clsxm from '@/lib/clsxm';
import useAuthStore from '@/stores/useAuthStore';

export default withAuth(DetailVideoPage);
function DetailVideoPage({ params }: { params: { idCourse: string } }) {
  const { isAuthed } = useAuthStore();

  //#region  //*=========== Form ===========
  const methods = useForm<{ comment: string }>({
    mode: 'onChange',
  });
  const { handleSubmit, reset } = methods;

  //#region  //*=========== Handle Submit Comment ===========
  const { commentMutation } = HookPostComment(params.idCourse);
  const onSubmit = (data: { comment: string }) => {
    commentMutation({ comment: data.comment }).then(() => refetch());
    reset();
  };

  //#region  //*=========== Get Course Detail ===========
  const { data: dataCourseDetail, refetch } = HookGetCourseById(
    params.idCourse,
  );

  //#region  //*=========== Get Popular Course ===========
  const { data: getCourseData } = HookGetCourse({
    page: 1,
    size: 9,
  });

  if (!isAuthed) return <NotPermitted />;

  const courseDetailData = dataCourseDetail?.data.data;
  if (!courseDetailData) return <Loading />;

  const coursePopularData = getCourseData?.data.data;
  if (!coursePopularData) return <Loading />;

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
                src={courseDetailData.url}
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
              {courseDetailData.title}
            </Typography>

            <div className='ju flex items-center space-x-2'>
              {/* {star.map((_, index) => (
                <span key={index}>
                  {index < courseDetailData.like_count ? '★' : '☆'}
                </span>
              ))} */}
              <FcLike size={20} />
              <span>{courseDetailData.like_count}</span>
            </div>

            <Typography
              as='p'
              variant='t'
              weight='regular'
              className='mt-2 text-justify text-base md:mt-4'
            >
              {courseDetailData.caption}
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
            {coursePopularData.slice(0, 4).map((video, index) => (
              <Link href={`/course/${video.id}`} key={index}>
                <VideoCard index={index} videoCardData={video} />
              </Link>
            ))}
          </div>
        </section>
      </section>

      {/* Comment Section */}
      <section className={clsxm('px-5 pb-28 md:px-10 md:pb-32', 'bg-base-500')}>
        <Typography
          as='h5'
          variant='h5'
          weight='semibold'
          className='mb-8 text-xl'
        >
          Comment Section:
        </Typography>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='my-5'>
            <TextArea
              id='comment'
              label='Comment here'
              placeholder='Add comment here'
              maxLength={500}
            />
            <Button type='submit' className='mt-1 flex items-end'>
              Submit
            </Button>
          </form>
        </FormProvider>

        <section className='space-y-5'>
          {courseDetailData.comment.map((comment, index) => (
            <div className='rounded-xl bg-white p-5' key={index}>
              <Typography
                as='p'
                variant='t'
                weight='semibold'
                className='text-xl'
              >
                {comment.account.username}
              </Typography>
              <Typography
                as='p'
                variant='p'
                weight='regular'
                className='mt-2 text-xl'
              >
                {comment.comment}
              </Typography>
            </div>
          ))}
        </section>
      </section>
    </MainLayout>
  );
}
