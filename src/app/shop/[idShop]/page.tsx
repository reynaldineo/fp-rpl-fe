import Button from '@/components/buttons/Button';
import ImagePreview from '@/components/ImagePreview';
import MainLayout from '@/components/layout/MainLayout';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export default function DetailShopPage() {
  return (
    <MainLayout withNavbar withFooter>
      <section
        className={clsxm(
          'flex min-h-screen flex-col items-center justify-center bg-base-500 px-10 md:flex-row md:px-20',
          'space-y-10 md:space-x-28 md:space-y-0',
        )}
      >
        {/* Section IMG */}
        <section>
          <ImagePreview
            src={
              'https://res.cloudinary.com/dczynccd0/image/upload/v1713172600/course/img_cover/0869f4df-2da3-4230-8f98-7b0d27e41dd5.jpg'
            }
            width={500}
            height={420}
            imgClassName='w-[300px] md:w-[450px]'
            alt='Foto Formal'
          />
        </section>

        {/* Section Detail */}
        <section>
          <div>
            <Typography
              as='h5'
              variant='h5'
              weight='semibold'
              className='text-2xl'
            >
              Title Here Lorem Ipseum
            </Typography>
            <Typography
              as='p'
              variant='p'
              weight='medium'
              className='pt-2 text-base md:pt-2'
            >
              Tersisa 120pcs
            </Typography>
            <Typography
              as='h4'
              variant='h4'
              weight='bold'
              className='pt-2 text-3xl md:pt-3'
            >
              RP 999.999
            </Typography>
          </div>

          <div className='mt-5 md:mt-6'>
            <Typography as='p' variant='t' className='text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              porro officia excepturi iure hic sapiente quod autem illum culpa
              aperiam nemo eligendi! Mollitia perferendis incidunt libero!
              Veritatis voluptates labore tempora?
            </Typography>
          </div>

          <div className='space-x-5 pt-5 md:pt-10'>
            <Button variant='outline-primary' className='text-md px-3 py-2'>
              Masukan Keranjang
            </Button>
            <Button variant='primary' className='text-md px-3 py-2'>
              Beli Sekarang
            </Button>
          </div>
        </section>
      </section>
    </MainLayout>
  );
}
