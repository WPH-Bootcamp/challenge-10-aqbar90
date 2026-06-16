import { PageContainer } from '@/components/layout/PageContainer';

export default function AddressPage() {
  const ADDRESS = {
    street: 'Jl. Sudirman No. 25',
    city: 'Jakarta Pusat',
    postalCode: '10220',
    phone: '0812-3456-7890',
  };

  return (
    <PageContainer>
      <div
        className='
          mx-auto
          py-12
        '
      >
        <div
          className='
            rounded-2xl
            bg-white
            p-6
            shadow-card
          '
        >
          <h1
            className='
              text-display-md
              font-extrabold
            '
          >
            Delivery Address
          </h1>

          <div className='space-y-2'>
            <p className='font-semibold'>{ADDRESS.street}</p>

            <p>
              {ADDRESS.city}, {ADDRESS.postalCode}
            </p>

            <p>{ADDRESS.phone}</p>
          </div>

          <div className='mt-6 space-y-3'>
            <p className='text-md font-medium'>
              Address management is currently unavailable.
            </p>

            <p className='text-sm text-muted-foreground'>
              The backend API does not provide address management features yet.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
