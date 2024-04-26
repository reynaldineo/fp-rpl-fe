'use client';

import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import PrimaryLink from '@/components/links/PrimaryLink';
import Typography from '@/components/Typography';
import { REGEX } from '@/constants/regex';
import RegisterHook from '@/hooks/auth/register';
import { RegisterForm } from '@/types/auth/register';

export default function RegisterPage() {
  //#region  //*=========== Form ===========
  const methods = useForm<RegisterForm>();
  const { handleSubmit } = methods;

  //#region  //*=========== On Submit ===========
  const { registerMutation, isPending } = RegisterHook();
  const onSubmit = (data: RegisterForm) => registerMutation(data);

  return (
    <section className='mx-5'>
      <PrimaryLink href='/' className='text-base'>
        Kembali ke halaman awal
      </PrimaryLink>

      <div className='mb-8 mt-6 space-y-2 md:mb-10'>
        <Typography as='h3' variant='h3' weight='bold' className='text-5xl'>
          Daftar
        </Typography>
        <Typography as='p' variant='t' weight='regular' className='text-base'>
          Silahkan isi data anda untuk mendaftar
        </Typography>
      </div>

      <div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-4'>
              <Input
                id='username'
                label='Username'
                placeholder='Masukkan Username'
                validation={{
                  required: 'Username tidak boleh kosong!',
                }}
                className='bg-typo-outline-2'
              />
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
                isLoading={isPending}
              >
                Daftar
              </Button>
              <Typography
                as='p'
                variant='btn'
                className='flex items-center justify-center'
              >
                Sudah punya akun?&nbsp;
                <Link href='/login' className='text-primary-500 underline'>
                  Masuk
                </Link>
              </Typography>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
}
