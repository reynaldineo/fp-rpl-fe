'use client';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import ImagePreview from '@/components/ImagePreview';
import MainLayout from '@/components/layout/MainLayout';
import Loading from '@/components/Loading';
import Typography from '@/components/Typography';
import HookGetStoreById from '@/hooks/shop/getShopById';
import clsxm from '@/lib/clsxm';

export default withAuth(DetailShopPage);
function DetailShopPage({ params }: { params: { idShop: string } }) {
  //#region  //*=========== Get Shop ===========
  const { data } = HookGetStoreById(params.idShop);
  const detailData = data?.data.data;

  if (!detailData) return <Loading />;

  return (
    <MainLayout withNavbar withFooter>
      <section
        className={clsxm(
          'flex min-h-screen flex-col items-center justify-center bg-base-500 px-10 md:flex-row md:px-20',
          'space-y-10 md:space-x-28 md:space-y-0',
        )}
      >
        {/* Section IMG */}
        <section className='order-1'>
          <ImagePreview
            src={detailData.img_url}
            width={500}
            height={420}
            imgClassName='w-[300px] md:w-[450px]'
            alt='Foto Formal'
          />
        </section>

        {/* Section Detail */}
        <section className='order-1'>
          <div>
            <Typography
              as='h5'
              variant='h5'
              weight='semibold'
              className='text-2xl'
            >
              {detailData.name}
            </Typography>
            <Typography
              as='p'
              variant='p'
              weight='medium'
              className='pt-2 text-base md:pt-2'
            >
              Tersisa {detailData.stock} barang
            </Typography>
            <Typography
              as='h4'
              variant='h4'
              weight='bold'
              className='pt-2 text-3xl md:pt-3'
            >
              RP {detailData.price}
            </Typography>
          </div>

          <div className='mt-5 md:mt-6'>
            <Typography as='p' variant='t' className='text-justify'>
              {detailData.description}
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
