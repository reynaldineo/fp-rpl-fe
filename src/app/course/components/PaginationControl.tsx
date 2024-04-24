import * as React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import clsxm from '@/lib/clsxm';
import { buildPaginationControl } from '@/lib/pagination';

export default function PaginationControl({
  page_number = 1,
  max_page,
  setPageNumber,
}: {
  page_number: number;
  max_page: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}) {
  const paginationControl = buildPaginationControl(page_number, max_page);

  const handlePageControlClick = (page: string | number) => {
    if (page !== '...') {
      setPageNumber(page as number);
    }
  };

  return (
    <div
      className={
        'mt-8 flex items-center justify-between gap-x-2 md:justify-end'
      }
    >
      <div className='flex items-center gap-1'>
        <Button
          className={clsxm(
            'flex min-w-[38px] justify-center rounded-md !border-none bg-slate-200 !p-2 !font-semibold text-[#111827] drop-shadow-sm',
            'hover:text-[#585d68] active:text-[#414652] disabled:text-white disabled:hover:text-[#b8babe]',
          )}
          disabled={page_number === 1}
          onClick={() => handlePageControlClick(page_number - 1)}
        >
          <HiChevronLeft size={20} />
        </Button>
        {paginationControl.map((page, index) => (
          <Button
            key={index}
            className={clsxm(
              'flex min-w-[38px] justify-center rounded-md border border-neutral-100 bg-primary-200 !p-2 !font-semibold text-neutral-100 drop-shadow-sm hover:bg-primary-600 hover:text-white',
              page_number === page &&
                'text-neutral-10 hover:bg-primary-hover border border-neutral-100 bg-primary-500',
            )}
            onClick={() => handlePageControlClick(page)}
          >
            {page}
          </Button>
        ))}
        <Button
          color='basic'
          className={clsxm(
            'flex min-w-[38px] justify-center rounded-md !border-none bg-slate-200 !p-2 !font-semibold text-[#111827] drop-shadow-sm',
            'hover:text-[#585d68] active:text-[#414652] disabled:text-white disabled:hover:text-[#b8babe]',
          )}
          disabled={page_number === max_page}
          onClick={() => handlePageControlClick(page_number + 1)}
        >
          <HiChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
}
