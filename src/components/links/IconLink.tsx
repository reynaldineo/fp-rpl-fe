import * as React from 'react';
import { IconType } from 'react-icons';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';
import clsxm from '@/lib/clsxm';

enum IconLinkVariant {
  'primary',
  'success',
  'danger',
  'outline-primary',
  'outline-success',
  'outline-danger',
}
enum IconLinkSize {
  'sm',
  'base',
  'lg',
}

type IconLinkProps = {
  variant?: keyof typeof IconLinkVariant;
  size?: keyof typeof IconLinkSize;
  icon?: IconType;
  iconClassName?: string;
} & Omit<UnstyledLinkProps, 'children'>;

const IconLink = React.forwardRef<HTMLAnchorElement, IconLinkProps>(
  (
    {
      className,
      icon: Icon,
      variant = 'outline',
      iconClassName,
      size = 'base',
      ...rest
    },
    ref,
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center justify-center font-semibold',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'transition duration-100',
          'min-h-[28px] min-w-[28px] rounded-lg p-1 md:min-h-[34px] md:min-w-[34px] md:p-2',

          //#region  //*=========== Size ===========
          [
            size === 'lg' && [
              'text-lg md:text-xl min-h-[28px] py-1 px-2 md:min-h-[48px] md:py-2.5 md:px-6',
            ],
            size === 'base' && [
              'text-sm md:text-base min-h-[24px] py-0.5 px-1 md:min-h-[40px] md:py-2 md:px-3.5',
            ],
            size === 'sm' && [
              'text-xs md:text-sm min-h-[22px] py-[1px] px-[3px] md:min-h-[34px] md:py-1.5 md:px-2.5',
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variant ===========
          [
            variant === 'primary' && [
              'border text-neutral-10',
              'bg-primary-main',
              'focus:bg-primary-main focus:border-primary-border',
              'hover:bg-primary-hover hover:border-neutral-100',
              'active:bg-primary-pressed active:border-neutral-100',
              'disabled:bg-neutral-30 disabled:text-neutral-70',
            ],
            variant === 'success' && [
              'border text-neutral-10',
              'bg-success-main',
              'focus:bg-success-main focus:border-success-border',
              'hover:bg-success-hover hover:border-success-100',
              'active:bg-success-pressed active:border-neutral-100',
              'disabled:bg-neutral-30 disabled:text-neutral-70',
            ],
            variant === 'danger' && [
              'border text-neutral-10',
              'bg-danger-main',
              'focus:bg-danger-main focus:border-danger-border',
              'hover:bg-danger-hover hover:border-danger-100',
              'active:bg-danger-pressed active:border-neutral-100',
              'disabled:bg-neutral-30 disabled:text-neutral-70',
            ],
            variant === 'outline-primary' && [
              'text-primary-main',
              'border border-primary-main',
              'bg-transparent',
              'hover:bg-transparent',
              'active:shadow-inner',
              'hover:bg-primary-focus',
              'disabled:bg-transparent disabled:border-neutral-30 disabled:text-neutral-70',
            ],
            variant === 'outline-success' && [
              'text-success-main',
              'border border-success-main',
              'bg-transparent',
              'hover:bg-transparent',
              'active:shadow-inner',
              'hover:bg-success-focus',
              'disabled:bg-transparent disabled:border-neutral-30 disabled:text-neutral-70',
            ],
            variant === 'outline-danger' && [
              'text-danger-main',
              'border border-danger-main',
              'bg-transparent',
              'hover:bg-transparent',
              'active:shadow-inner',
              'hover:bg-danger-focus',
              'disabled:bg-transparent disabled:border-neutral-30 disabled:text-neutral-70',
            ],
          ],
          //#endregion  //*======== Variant ===========
          'disabled:cursor-not-allowed',
          className,
        )}
        {...rest}
      >
        {Icon && (
          <Icon
            className={clsxm('w-5.5 h-5.5 md:w-6 md:h-6 ', iconClassName)}
          />
        )}
      </UnstyledLink>
    );
  },
);

export default IconLink;
