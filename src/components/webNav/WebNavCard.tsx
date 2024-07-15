/* eslint-disable react/jsx-no-target-blank */

import Link from 'next/link';
import { WebNavigation } from '@/db/supabase/types';
import { CircleArrowRight, SquareArrowOutUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function WebNavCard({ name, thumbnail_url, title, url, content }: WebNavigation) {
  const t = useTranslations('Home');

  return (
    <div className='flex h-[210px] flex-col gap-3 rounded-xl p-1 lg:h-[343px] border-2 border-green-500 hover:shadow-lg hover:shadow-green-500'>
      <Link href={`/ai/${name}`} title={title} className='group relative' target="_blank">
        <img
          src={thumbnail_url || ''}
          alt={title}
          title={title}
          width={310}
          height={174}
          className='aspect-[310/174] w-full rounded-xl bg-white/40 hover:opacity-70'
        />
        {/* <span className='absolute inset-0 z-10 hidden items-center justify-center gap-1 rounded-xl bg-black bg-opacity-50 text-xl text-white transition-all duration-200 group-hover:flex'>
          {t('checkDetail')} <CircleArrowRight className='size-4' />
        </span> */}
      </Link>

      <div className='flex items-center justify-between px-[6px]'>
        <Link href={`/ai/${name}`} title={title} target='_blank' rel='nofollow' className='hover:opacity-70'>
          <h3 className='line-clamp-1 flex-1 text-sm font-bold text-green-500 lg:text-base'>{title}</h3>
        </Link>
        <Link href={url} title={title} target='_blank' rel='nofollow' className='hover:opacity-70'>
          <SquareArrowOutUpRight className='size-5' />
          <span className='sr-only'>{title}</span>
        </Link>
      </div>
      <Link href={`/ai/${name}`} title={title} target='_blank' rel='nofollow' className='hover:opacity-70'>
        <p className='line-clamp-3 px-[6px] text-xs text-black lg:line-clamp-5 lg:text-sm'>{content}</p>
      </Link>
    </div >

  );
}
