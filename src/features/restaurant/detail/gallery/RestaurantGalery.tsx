import Image from 'next/image';

type Props = {
  images: string[];
};

export function RestaurantGallery({ images }: Props) {
  const galleryImages = [...images, ...Array(4).fill(images[0])].slice(0, 4);

  const [main, second, third, fourth] = galleryImages;

  return (
    <section
      className='
        grid
        gap-5
        lg:grid-cols-[1.23fr_1fr]
      '
    >
      <div className='relative h-117.5 overflow-hidden rounded-2xl'>
        <Image src={main} alt='Restaurant' fill className='object-cover' />
      </div>

      <div className='flex flex-col gap-5'>
        <div className='relative h-75.5 overflow-hidden rounded-2xl'>
          <Image src={second} alt='Restaurant' fill className='object-cover' />
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <div className='relative h-37 overflow-hidden rounded-2xl'>
            <Image src={third} alt='Restaurant' fill className='object-cover' />
          </div>

          <div className='relative h-37 overflow-hidden rounded-2xl'>
            <Image
              src={fourth}
              alt='Restaurant'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
