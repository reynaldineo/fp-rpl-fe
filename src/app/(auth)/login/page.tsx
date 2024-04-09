'use client';

import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import PrimaryLink from '@/components/links/PrimaryLink';
import Typography from '@/components/Typography';
import { REGEX } from '@/constants/regex';

export default function LoginPage() {
  const methods = useForm();
  const { handleSubmit } = methods;
  // eslint-disable-next-line no-console
  const onSubmit = (data: unknown) => console.log(data);

  return (
    <section className='mx-5'>
      <PrimaryLink href='/' className='text-base'>
        Kembali ke halaman awal
      </PrimaryLink>

      <div className='mb-8 mt-6 space-y-2 md:mb-10'>
        <Typography as='h3' variant='h3' weight='bold' className='text-5xl'>
          Masuk
        </Typography>
        <Typography as='p' variant='t' weight='regular' className='text-base'>
          Silakan masuk dengan akun anda
        </Typography>
      </div>

      <div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-4'>
              <Input
                id='email'
                label='Email'
                placeholder='Masukkan Email'
                validation={{
                  required: 'Email tidak boleh kosong!',
                  pattern: {
                    value: REGEX.EMAIL,
                    message: 'Email tidak valid!',
                  },
                }}
                className='bg-typo-outline-2'
              />
              <Input
                id='password'
                label='Password'
                placeholder='Masukkan Password'
                validation={{ required: 'Password tidak boleh kosong!' }}
                type='password'
                className='bg-typo-outline-2'
              />
            </div>

            <div className='space-y-2 md:space-y-4'>
              <Button
                type='submit'
                className='mt-8 w-full px-3 py-2 text-white md:mt-10'
                variant='primary'
              >
                Masuk
              </Button>
              <Typography
                as='p'
                variant='btn'
                className='flex items-center justify-center'
              >
                Belum punya akun?{' '}
                <Link href='/register' className='text-primary-500 underline'>
                  Daftar
                </Link>
              </Typography>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
}
