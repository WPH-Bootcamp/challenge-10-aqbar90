export function OrderCardSkeleton() {
  return (
    <div
      className='
        animate-pulse
        rounded-2xl
        bg-white
        p-5
        shadow-card
      '
    >
      <div className='flex items-center gap-3'>
        <div className='h-8 w-8 rounded bg-muted' />

        <div className='h-6 w-40 rounded bg-muted' />
      </div>

      <div className='mt-5 flex gap-4'>
        <div
          className='
            h-24
            w-24
            rounded-xl
            bg-muted
          '
        />

        <div className='flex-1 space-y-3'>
          <div className='h-5 w-40 rounded bg-muted' />

          <div className='h-5 w-24 rounded bg-muted' />
        </div>
      </div>

      <div className='my-5 h-px bg-border' />

      <div className='flex items-center justify-between'>
        <div className='space-y-2'>
          <div className='h-4 w-12 rounded bg-muted' />

          <div className='h-6 w-24 rounded bg-muted' />
        </div>

        <div
          className='
            h-11
            w-40
            rounded-full
            bg-muted
          '
        />
      </div>
    </div>
  );
}
