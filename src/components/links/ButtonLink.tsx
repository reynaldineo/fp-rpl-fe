import * as React from 'react';
import { IconType } from 'react-icons';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';
import clsxm from '@/lib/clsxm';

enum ButtonSize {
  'sm',
  'base',
  'lg',
}

export enum ButtonVariant {
  'primary',
  'success',
  'danger',
  'warning',
  'outline-primary',
  'outline-success',
  'outline-danger',
}

type ButtonLinkProps = {
  size?: keyof typeof ButtonSize;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'base',
      leftIconClassName,
      rightIconClassName,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      ...rest
    },
    ref,
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'button inline-flex items-center justify-center rounded-md md:rounded-lg',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'transition-colors duration-75',
          //#region  //*=========== Size ===========
          [
            size === 'base' && [
              'text-sm md:text-base min-h-[24px] py-0.5 px-1 md:min-h-[40px] md:py-2 md:px-[22px]',
            ],
            size === 'sm' && [
              'text-xs md:text-sm min-h-[22px] py-[1px] px-[3px] md:min-h-[34px] md:py-1 md:px-[18px]',
            ],
            size === 'lg' && [
              'text-lg md:text-xl min-h-[28px] py-1 px-2 md:min-h-[48px] md:py-3 md:px-[26px]',
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'border text-neutral-10',
              'bg-primary-main',
              'focus:bg-primary-main focus:border-primary-border',
              'hover:bg-primary-hover',
              'active:bg-primary-pressed active:border-neutral-100',
              'disabled:bg-neutral-30 disabled:text-neutral-70',
            ],
            variant === 'success' && [
              'border text-neutral-10',
              'bg-success-main',
              'focus:bg-success-main focus:border-success-border',
              'hover:bg-success-hover',
              'active:bg-success-pressed active:border-neutral-100',
              'disabled:bg-neutral-30 disabled:text-neutral-70',
            ],
            variant === 'danger' && [
              'border text-neutral-10',
              'bg-danger-main',
              'focus:bg-danger-main focus:border-danger-border',
              'hover:bg-danger-hover',
              'active:bg-danger-pressed active:border-neutral-100',
              'disabled:bg-neutral-30 disabled:text-neutral-70',
            ],
            variant === 'warning' && [
              'text-neutral-10',
              'bg-warning-main',
              'focus:bg-warning-main focus:ring-warning-border focus:ring',
              'hover:bg-warning-hover',
              'active:bg-warning-pressed',
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
          //#endregion  //*======== Variants ===========
          className,
        )}
      >
        {/* Left Icon */}
        {LeftIcon && (
          <div className='mr-1'>
            <LeftIcon
              className={clsxm(
                [
                  size === 'lg' && 'text-xl md:text-2xl',
                  size === 'base' && 'text-lg md:text-xl',
                  size === 'sm' && 'text-sm md:text-lg',
                ],
                'text-white',
                leftIconClassName,
              )}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div className='ml-1'>
            <RightIcon
              className={clsxm(
                [
                  size === 'lg' && 'text-xl md:text-2xl',
                  size === 'base' && 'text-lg md:text-xl',
                  size === 'sm' && 'text-sm md:text-lg',
                ],
                'text-white',
                rightIconClassName,
              )}
            />
          </div>
        )}
      </UnstyledLink>
    );
  },
);

export default ButtonLink;
