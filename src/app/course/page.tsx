'use client';

import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

import CourseCard from '@/app/course/components/CourseCard';
import Input from '@/components/form/Input';
import SearchableSelectInput from '@/components/form/SearchableSelectInput';
import MainLayout from '@/components/layout/MainLayout';
import Typography from '@/components/Typography';
import { courseVideoCard } from '@/contents/courses/videoCard';

export default function CoursePage() {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
  ];

  const methods = useForm({
    mode: 'onSubmit',
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: unknown) => {
    // eslint-disable-next-line no-console
    console.log(data);
    return;
  };

  return (
    <MainLayout withNavbar withFooter>
      <section className='min-h-screen bg-base-500 px-5 pb-20 md:px-10  '>
        {/* Header */}
        <div className='pt-28 md:pt-40'>
          <Typography
            as='p'
            variant='t'
            weight='medium'
            className='text-center text-xl'
          >
            Explore
          </Typography>
          <Typography
            as='h4'
            variant='h4'
            weight='medium'
            className='text-center text-3xl'
          >
            Welcome To EcoWise
          </Typography>
        </div>

        {/* Filter */}
        <section className='mt-9 md:mt-14'>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex w-full flex-col space-y-5 md:flex-row md:items-center md:justify-between md:space-x-28 md:space-y-0'
            >
              <SearchableSelectInput
                id='multipleSelectInputReadOnly'
                label=''
                placeholder='Filter'
                options={options}
                isMulti
                containerClassName='w-1/4 hidden md:block'
              />

              <Input id='text' label='' placeholder='Search' className='' />

              <SearchableSelectInput
                id='multipleSelectInputReadOnly'
                label=''
                placeholder='Entries'
                options={options}
                isMulti
                containerClassName='md:w-1/4 hidden md:block'
              />

              {/* Mobile version */}
              <div className='flex justify-between md:hidden '>
                <SearchableSelectInput
                  id='multipleSelectInputReadOnly'
                  label=''
                  placeholder='Filter'
                  options={options}
                  isMulti
                />
                <SearchableSelectInput
                  id='multipleSelectInputReadOnly'
                  label=''
                  placeholder='Entries'
                  options={options}
                  isMulti
                />
              </div>
            </form>
          </FormProvider>
        </section>

        {/* Card */}
        <section className='mt-10 grid  gap-5 md:grid-cols-3 md:gap-10 '>
          {courseVideoCard.map((video) => (
            <Link
              href={`course/${video.id}`}
              key={video.title}
              className='flex items-center justify-center'
            >
              <CourseCard courseVideoCard={video} />
            </Link>
          ))}
        </section>

        {/* Pagination */}
        <section></section>
      </section>
    </MainLayout>
  );
}
