import * as React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'success',
  'danger',
  'warning',
  'outline-primary',
  'outline-success',
  'outline-danger',
  'outline-warning',
}
enum ButtonSize {
  'sm',
  'base',
  'lg',
}

type ButtonProps = {
  isLoading?: boolean;
  size?: keyof typeof ButtonSize;
  variant?: keyof typeof ButtonVariant;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      size = 'base',
      variant = 'primary',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'button inline-flex items-center justify-center rounded-md',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'transition-colors duration-75',
          //#region  //*=========== Size ===========
          [
            size === 'base' && [
              'min-h-[24px] px-1 py-0.5 text-sm md:min-h-[40px] md:px-[22px] md:py-2 md:text-base',
            ],
            size === 'sm' && [
              'min-h-[22px] px-2 py-1 text-xs md:min-h-[34px] md:px-[18px] md:py-1 md:text-sm',
            ],
            size === 'lg' && [
              'min-h-[28px] px-3 py-2 text-lg md:min-h-[48px] md:px-[26px] md:py-3 md:text-xl',
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'border text-typo',
              'bg-primary-500',
              'focus:border-primary-600 focus:bg-primary-400',
              'hover:bg-primary-600',
              'active:border-neutral-300 active:bg-primary-700',
              'disabled:bg-typo-tertiary disabled:text-typo-secondary',
            ],
            variant === 'success' && [
              'border text-typo',
              'bg-secondary-500',
              'focus:border-secondary-600 focus:bg-secondary-400',
              'hover:bg-secondary-600',
              'active:border-secondary-300 active:bg-secondary-700',
              'disabled:bg-typo-tertiary disabled:text-typo-secondary',
            ],
            variant === 'danger' && [
              'border text-typo',
              'bg-red-500',
              'focus:border-red-600 focus:bg-red-400',
              'hover:bg-red-600',
              'active:border-red-300 active:bg-red-700',
              'disabled:bg-typo-tertiary disabled:text-typo-secondary',
            ],
            variant === 'warning' && [
              'border text-typo',
              'bg-yellow-500',
              'focus:border-yellow-600 focus:bg-yellow-400',
              'hover:bg-yellow-600',
              'active:border-yellow-300 active:bg-yellow-700',
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
            variant === 'outline-warning' && [
              'text-warning-main',
              'border-warning-main border',
              'bg-transparent',
              'hover:bg-transparent',
              'active:shadow-inner',
              'hover:bg-warning-focus',
              'disabled:border-neutral-30 disabled:text-neutral-70 disabled:bg-transparent',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className,
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              [
                ['primary', 'danger'].includes(variant) && 'text-white',
                ['outline', 'ghost'].includes(variant) && 'text-gray-500',
              ],
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {/* Left Icon */}
        {LeftIcon && (
          <div className='mr-1'>
            <LeftIcon
              className={clsxm(
                [
                  size === 'base' && 'text-lg md:text-xl',
                  size === 'sm' && 'text-sm md:text-lg',
                ],
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
                  size === 'base' && 'text-lg md:text-xl',
                  size === 'sm' && 'text-sm md:text-lg',
                ],
                [
                  variant === 'primary' && 'text-primary-100',
                  variant === 'danger' && 'text-danger-100',
                  ['outline', 'ghost'].includes(variant) && 'text-typo-icons',
                ],
                rightIconClassName,
              )}
            />
          </div>
        )}
      </button>
    );
  },
);

export default Button;
