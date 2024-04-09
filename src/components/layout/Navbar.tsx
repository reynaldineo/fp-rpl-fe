'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';
import { navbarLinks } from '@/contents/navbar';
import clsxm from '@/lib/clsxm';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav
      className={clsxm(
        'fixed top-0 z-[101] w-full bg-transparent px-[2.625rem] py-5',
        'flex items-center justify-between bg-base-50',
        'bg-opacity-30 backdrop-blur-0',
      )}
    >
      <section>
        <Link href='/'>
          <Typography as='h5' variant='h5' weight='bold' className='text-xl'>
            EcoWise
          </Typography>
        </Link>
      </section>

      <section className='hidden space-x-4 md:flex'>
        {navbarLinks.map((link) => (
          <UnstyledLink href={link.href} key={link.name}>
            <Typography
              as='p'
              variant='p'
              weight='medium'
              className='hover:text-primary-500 hover:underline'
            >
              {link.name}
            </Typography>
          </UnstyledLink>
        ))}
      </section>

      <section className='hidden space-x-4 md:flex'>
        <ButtonLink
          href='/register'
          variant='outline-primary'
          className='text-primary-500'
        >
          Daftar
        </ButtonLink>
        <ButtonLink href='/login' variant='primary' className='text-white'>
          Masuk
        </ButtonLink>
      </section>

      {/* Menu Mobile */}
      <div onClick={() => setIsOpen(!isOpen)} className='block md:hidden'>
        <MdMenu className='text-3xl text-primary-500 md:hidden' />
      </div>

      {/* Mobile Version */}
      <section
        className={clsxm(
          'fixed left-0 top-0 flex flex-col items-center justify-around space-y-4',
          'min-h-screen w-full bg-primary-500 px-4 pb-24 pt-10 md:hidden',
          'transition duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <Typography as='h5' variant='h5' weight='bold' className='text-3xl'>
          EcoWise
        </Typography>

        <section className='flex flex-col items-center justify-center space-y-3'>
          {navbarLinks.map((link) => (
            <UnstyledLink href={link.href} key={link.name}>
              <Typography
                as='p'
                variant='p'
                weight='medium'
                className='text-xl hover:text-primary-500 hover:underline '
              >
                {link.name}
              </Typography>
            </UnstyledLink>
          ))}
        </section>

        <section className='space-x-4 '>
          <ButtonLink
            href='/register'
            variant='outline-base'
            className='border-2 font-semibold text-base-500'
            size='lg'
          >
            Daftar
          </ButtonLink>
          <ButtonLink
            href='/login'
            variant='base'
            className='border-2 font-semibold text-primary-500'
            size='lg'
          >
            Masuk
          </ButtonLink>
        </section>

        <div onClick={() => setIsOpen(!isOpen)}>
          <MdClose size={30} className='text-base-500' />
        </div>
      </section>
    </nav>
  );
}
