'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

import ReviewForm from './ReviewForm';

import { useReviewModal } from '../hooks/useReviewModal';

import { useCreateReview } from '../hooks/useCreateReview';

import { toast } from 'sonner';

export default function ReviewModal() {
  const { isOpen, close, reviewTarget } = useReviewModal();

  const { mutate, isPending } = useCreateReview();

  const handleSubmit = () => {
    if (!reviewTarget) return;

    mutate(
      {
        transactionId: reviewTarget.transactionId,
        restaurantId: reviewTarget.restaurantId,
        star: rating,
        comment,
        menuIds: reviewTarget.menuIds,
      },
      {
        onSuccess: () => {
          setRating(0);
          setComment('');

          close();
        },

        onError: (error) => {
          const axiosError = error as {
            response?: {
              status?: number;
              data?: {
                message?: string;
              };
            };
          };

          if (axiosError.response?.status === 409) {
            toast.error(
              axiosError.response.data?.message ?? 'Review already exists'
            );

            return;
          }

          toast.error('Failed to submit review');
        },
      }
    );
  };

  const handleClose = () => {
    setRating(0);
    setComment('');

    close();
  };

  const [rating, setRating] = useState(0);

  const [comment, setComment] = useState('');

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          handleClose();
        }
      }}
    >
      <DialogContent
        className='
        overflow-y-auto
        max-h-[90vh]
        w-90.25
        rounded-2xl
        p-4
        md:w-full
        md:max-w-109.75
        md:p-6
  '
      >
        <div
          className='
          flex
          w-full
          flex-col
          gap-4
          md:gap-6
        '
        >
          <div
            className='
          flex
          items-center
          justify-between
        '
          >
            <DialogTitle
              className='
              text-xl
              leading-xl
              md:text-display-xs
              md:leading-display-xs
              font-extrabold
  '
            >
              Give Review
            </DialogTitle>

            <DialogDescription className='sr-only'>
              Leave a review for your completed order
            </DialogDescription>

            <button
              type='button'
              onClick={handleClose}
              className='
              flex
              h-6
              w-6
              items-center
              justify-center
            '
            >
              <X className='h-6 w-6' />
            </button>
          </div>
          <ReviewForm
            rating={rating}
            comment={comment}
            onRatingChange={setRating}
            onCommentChange={setComment}
          />

          <Button
            onClick={handleSubmit}
            disabled={rating === 0 || isPending}
            className='
            h-11
            w-full
            rounded-full
            md:h-12
          '
          >
            {isPending ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
