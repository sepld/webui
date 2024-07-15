import { Home } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function ExploreBreadcrumb({
  linkList,
}: {
  linkList: { href?: string; title: string; isLast?: boolean }[];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {linkList.map((item) => (
          <>
            <BreadcrumbItem>
              {!item.isLast && (
                <BreadcrumbLink href={item.href} className='flex items-center gap-1 text-black-500'>
                  {item.href === '/' && <Home className='size-4 text-black-500' />}
                  {item.title}
                </BreadcrumbLink>
              )}
              {item.isLast && <BreadcrumbPage>{item.title}</BreadcrumbPage>}
            </BreadcrumbItem>
            {!item.isLast && <BreadcrumbSeparator className='text-black/40' />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
