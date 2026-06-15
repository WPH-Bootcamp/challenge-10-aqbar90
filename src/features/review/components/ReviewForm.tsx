'use client';

import { Textarea } from '@/components/ui/textarea';
import ReviewRating from './ReviewRating';

interface ReviewFormProps {
  rating: number;
  comment: string;

  onRatingChange: (rating: number) => void;

  onCommentChange: (comment: string) => void;
}

export default function ReviewForm({
  rating,
  comment,
  onRatingChange,
  onCommentChange,
}: ReviewFormProps) {
  return (
    <div
      className='
        w-full
        flex
        flex-col
        gap-6
      '
    >
      <div
        className='
          flex
          flex-col
          items-center
          gap-2
        '
      >
        <p
          className='
            text-md
            font-extrabold
            text-black
          '
        >
          Give Rating
        </p>

        <ReviewRating value={rating} onChange={onRatingChange} />
      </div>

      <Textarea
        value={comment}
        onChange={(event) => onCommentChange(event.target.value)}
        placeholder='
Please share your thoughts about our service!
        '
        className='
        min-h-58.75
        w-full
        resize-none
        rounded-xl
        text-sm
        md:text-base
      '
      />
    </div>
  );
}
