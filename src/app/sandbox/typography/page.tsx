import Typography from '@/components/Typography';
import { dataPoppins } from '@/contents/sandbox/typography';

export default function TypographyPage() {
  return (
    <section>
      <Typography
        font='poppins'
        variant='h5'
        as='h5'
        className='drop-shadow-heading md:drop-shadow-title bg-sub-lightGrey-300 text-typo-primary flex items-center justify-center py-12'
        weight='bold'
      >
        Poppins
      </Typography>
      <div className='flex items-center justify-center'>
        <table className='min-w-full table-fixed divide-y divide-gray-200 '>
          <thead className='bg-slate-700'>
            <tr>
              <th
                scope='col'
                className='p-4 text-left text-xs font-medium uppercase text-white'
              >
                <Typography variant='h5' className='text-white'>
                  Style Name
                </Typography>
              </th>
              <th
                scope='col'
                className='p-4 text-left text-xs font-medium uppercase text-white'
              >
                <Typography variant='h5' className='text-white'>
                  Font Size
                </Typography>
              </th>
              <th
                scope='col'
                className='p-4 text-left text-xs font-medium uppercase text-white'
              >
                <Typography variant='h5' className='text-white'>
                  Line Height
                </Typography>
              </th>
              <th
                scope='col'
                className='p-4 text-left text-xs font-medium uppercase text-white'
              >
                <Typography variant='h5' className='text-white'>
                  Sample
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody className='bg-black-500 bg-divide-gray-700 divide-y divide-gray-200'>
            {dataPoppins.map((items) => (
              <tr className='bg-black-400' key={items?.style}>
                <td className='bg-text-white whitespace-nowrap p-4 text-base font-medium text-gray-900'>
                  <Typography
                    className='text-primary-main'
                    variant={`${items?.style}`}
                  >
                    {items?.style}
                  </Typography>
                </td>
                <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-900 xl:max-w-xs'>
                  <Typography
                    className='text-primary-main'
                    variant={`${items?.style}`}
                  >
                    {items?.size}
                  </Typography>
                </td>
                <td className='bg-text-white whitespace-nowrap p-4 text-base font-medium text-gray-900'>
                  <Typography
                    className='text-primary-main'
                    variant={`${items?.style}`}
                  >
                    {items?.height}
                  </Typography>
                </td>
                <td className='bg-text-white whitespace-nowrap p-4 text-base font-medium text-gray-900'>
                  <Typography
                    className='text-primary-main'
                    variant={`${items?.style}`}
                  >
                    {items?.sample}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
