import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import { ItemCard } from '@/contents/shop/itemCard';
import clsxm from '@/lib/clsxm';

export default function ShopCard({ itemCard }: { itemCard: ItemCard }) {
  return (
    <div
      className={clsxm(
        'h-full min-h-[278px] min-w-[189px] md:min-h-[345px] md:w-[229px]',
        'rounded-2xl bg-white p-3 pb-4 hover:bg-slate-100 hover:shadow-lg md:p-4',
      )}
    >
      <div className='mx-auto h-[176px] w-full rounded-lg bg-[#D9D9D9] md:h-[209px] md:w-[199px]'>
        <NextImage
          src={itemCard.image}
          alt='Shop Item Image'
          width={199}
          height={209}
          className='flex h-full w-full items-center justify-center rounded-lg object-cover'
          imgClassName='rounded-lg my-auto '
          useSkeleton
        />
      </div>

      <div className='mt-3 space-y-2'>
        <div>
          <Typography
            as='p'
            variant='bt'
            weight='semibold'
            className='text-justify text-base'
          >
            {itemCard.title}
          </Typography>
          <Typography
            as='p'
            variant='c'
            weight='regular'
            className='text-justify text-xs '
          >
            {itemCard.description}
          </Typography>
        </div>
        <Typography
          as='p'
          variant='bt'
          weight='bold'
          className='text-justify text-base '
        >
          Rp. {itemCard.price}
        </Typography>
      </div>
    </div>
  );
}
