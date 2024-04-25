'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import CourseCard from '@/app/course/components/CourseCard';
import PaginationControl from '@/app/course/components/PaginationControl';
import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import SelectInput from '@/components/form/SelectInput';
import MainLayout from '@/components/layout/MainLayout';
import Loading from '@/components/Loading';
import Typography from '@/components/Typography';
import HookGetCourse from '@/hooks/course/getCourse';

type searchType = {
  page: number;
  size: number;
  search: string;
};

export default function CoursePage() {
  const [search, setSearch] = useState<string>('');
  const [sizeValue, setSizeValue] = useState<number>(9);
  const [page, setPage] = useState<number>(1);

  //#region  //*=========== Form ===========
  const methods = useForm<searchType>({
    mode: 'onChange',
  });
  const { handleSubmit } = methods;

  //#region  //*=========== Get Course ===========
  const { data: getCourseData, refetch } = HookGetCourse({
    page: page, // page number
    size: sizeValue, // page size
    search,
  });

  const courseData = getCourseData?.data.data;
  if (!courseData) return <Loading />;

  //#region  //*=========== Handle Submit ===========
  const onSubmit = (data: searchType) => {
    setSearch(data.search);
    refetch();
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
              <SelectInput
                id='filter'
                label=''
                placeholder='Filter'
                // onChange={(e) => {
                //   setSizeValue(e.target.value);
                //   refetch();
                // }}
                containerClassName='md:w-1/4 hidden md:block'
              >
                <option value='Organik'>Organik</option>
                <option value='Anorganik'>AnOrganik</option>
              </SelectInput>

              <div className='flex w-full space-x-2'>
                <Input id='search' label='' placeholder='Search' className='' />
                <Button type='submit' className='w-1/4 md:w-auto'>
                  Search
                </Button>
              </div>

              <SelectInput
                id='limit'
                label=''
                placeholder='Entries'
                onChange={(e) => {
                  setSizeValue(Number(e.target.value));
                  refetch();
                }}
                containerClassName='md:w-1/4 hidden md:block'
              >
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </SelectInput>

              {/* Mobile version */}
              <div className='flex justify-between md:hidden '>
                <SelectInput
                  id='filter'
                  label=''
                  placeholder='Filter'
                  // onChange={(e) => {
                  //   setSizeValue(e.target.value);
                  //   refetch();
                  // }}
                  containerClassName='w-1/3 '
                >
                  <option value='Organik'>Organik</option>
                  <option value='Anorganik'>AnOrganik</option>
                </SelectInput>
                <SelectInput
                  id='limit'
                  label=''
                  placeholder='Entries'
                  onChange={(e) => {
                    setSizeValue(Number(e.target.value));
                    refetch();
                  }}
                  containerClassName='w-1/3 '
                >
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                </SelectInput>
              </div>
            </form>
          </FormProvider>
        </section>

        {/* Card */}
        <section className='mt-10 grid  gap-5 md:grid-cols-3 md:gap-10 '>
          {courseData.map((video) => (
            <Link
              href={`course/${video.id}`}
              key={video.id}
              className='flex items-center justify-center'
            >
              <CourseCard courseVideoCard={video} />
            </Link>
          ))}
        </section>

        {/* Pagination */}
        <section>
          <PaginationControl
            page_number={getCourseData.data.pageNumber ?? 1}
            max_page={getCourseData.data.maxPage ?? 1}
            setPageNumber={(page) => {
              setPage(page);
              refetch();
            }}
          />
        </section>
      </section>
    </MainLayout>
  );
}
