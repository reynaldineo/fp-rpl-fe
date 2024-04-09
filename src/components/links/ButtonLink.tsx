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
  'base',
  'outline-primary',
  'outline-success',
  'outline-danger',
  'outline-base',
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
              'min-h-[24px] px-1 py-0.5 text-sm md:min-h-[40px] md:px-[22px] md:py-2 md:text-base',
            ],
            size === 'sm' && [
              'min-h-[22px] px-[3px] py-[1px] text-xs md:min-h-[34px] md:px-[18px] md:py-1 md:text-sm',
            ],
            size === 'lg' && [
              'min-h-[28px] px-2 py-1 text-lg md:min-h-[48px] md:px-[26px] md:py-3 md:text-xl',
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'border text-white',
              'bg-primary-500',
              'focus:border-primary-600 focus:bg-primary-400',
              'hover:bg-primary-600',
              'active:border-neutral-300 active:bg-primary-700',
              'disabled:bg-typo-tertiary disabled:text-typo-secondary',
            ],
            variant === 'success' && [
              'border text-white',
              'bg-secondary-500',
              'focus:border-secondary-600 focus:bg-secondary-400',
              'hover:bg-secondary-600',
              'active:border-secondary-300 active:bg-secondary-700',
              'disabled:bg-typo-tertiary disabled:text-typo-secondary',
            ],
            variant === 'danger' && [
              'border text-white',
              'bg-red-500',
              'focus:border-red-600 focus:bg-red-400',
              'hover:bg-red-600',
              'active:border-red-300 active:bg-red-700',
              'disabled:bg-typo-tertiary disabled:text-typo-secondary',
            ],
            variant === 'warning' && [
              'border text-white',
              'bg-yellow-500',
              'focus:border-yellow-600 focus:bg-yellow-400',
              'hover:bg-yellow-600',
              'active:border-yellow-300 active:bg-yellow-700',
              'disabled:bg-typo-tertiary disabled:text-typo-secondary',
            ],
            variant === 'base' && [
              'border text-white',
              'bg-base-500',
              'focus:border-base-600 focus:bg-base-400',
              'hover:bg-base-600',
              'active:border-base-300 active:bg-base-700',
              'disabled:bg-typo-tertiary disabled:text-typo-secondary',
            ],
            variant === 'outline-primary' && [
              'text-primary-500',
              'border-2 border-primary-500',
              'bg-transparent',
              'active:bg-primary-100',
              'hover:bg-primary-50',
              'disabled:bg-transparent disabled:bg-typo-tertiary disabled:text-typo-secondary',
            ],
            variant === 'outline-success' && [
              'text-secondary-500',
              'border-2 border-secondary-500',
              'bg-transparent',
              'active:bg-secondary-100',
              'hover:bg-secondary-50',
              'disabled:bg-transparent disabled:bg-typo-tertiary disabled:text-typo-secondary',
            ],
            variant === 'outline-danger' && [
              'text-red-500',
              'border-2 border-red-500',
              'bg-transparent',
              'active:bg-red-100',
              'hover:bg-red-50',
              'disabled:bg-transparent disabled:bg-typo-tertiary disabled:text-typo-secondary',
            ],
            variant === 'outline-base' && [
              'text-base-500',
              'border-2 border-base-500',
              'bg-transparent',
              'active:bg-base-100',
              'hover:bg-base-50',
              'disabled:bg-transparent disabled:bg-typo-tertiary disabled:text-typo-secondary',
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
