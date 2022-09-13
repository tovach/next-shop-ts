import { FC } from 'react';

type PrimaryRatingProps = {
  count: number;
  rate: number;
};

export const PrimaryRating: FC<PrimaryRatingProps> = ({ count, rate }) => (
  <div className='flex items-center w-full'>
    <ul className='flex items-center'>
      {Array(Math.floor(rate))
        .fill(1)
        .map((_, i) => (
          <li key={i}>
            <svg
              aria-hidden='true'
              className='h-5 w-5 text-yellow-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z' />
            </svg>
          </li>
        ))}
    </ul>
    <div className='ml-auto flex'>
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{rate} / 5</p>
      <p className="ml-2 text-sm font-medium underline text-gray-500 dark:text-gray-400"> {count} votes</p>
    </div>
  </div>
);
