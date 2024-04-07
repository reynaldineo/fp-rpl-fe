import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'success',
  'danger',
  'outline-primary',
  'outline-success',
  'outline-danger',
}
enum ButtonSize {
  'sm',
  'base',
  'lg',
}

type IconButtonProps = {
  variant?: keyof typeof ButtonVariant;
  size?: keyof typeof ButtonSize;
  icon?: IconType;
  iconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      icon: Icon,
      variant = 'outline',
      disabled: buttonDisabled,
      iconClassName,
      size = 'base',
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type='button'
        disabled={buttonDisabled}
        className={clsxm(
          'button inline-flex items-center justify-center font-semibold',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'transition duration-100',
          'min-h-[28px] min-w-[28px] rounded-lg p-1 md:min-h-[34px] md:min-w-[34px] md:p-2',

          //#region  //*=========== Size ===========
          [
            size === 'lg' && [
              'min-h-[28px] min-w-[28px] p-2 text-base md:min-h-[48px] md:min-w-[48px] md:p-2.5 md:text-lg',
            ],
            size === 'base' && [
              'min-h-[24px] min-w-[24px] p-1 text-sm md:min-h-[40px] md:min-w-[40px] md:p-1.5 md:text-base',
            ],
            size === 'sm' && [
              'min-h-[22px] min-w-[22px] p-[0.5px] text-xs md:min-h-[36px] md:min-w-[36px] md:p-1 md:text-sm',
            ],
          ],
          //#endregion  //*======== Size ===========

          //#region  //*=========== Variant ===========
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
          //#endregion  //*======== Variant ===========
          'disabled:cursor-not-allowed',
          className,
        )}
        {...rest}
      >
        {Icon && (
          <Icon className={clsxm('w-5.5 h-5.5 md:h-6 md:w-6', iconClassName)} />
        )}
      </button>
    );
  },
);

export default IconButton;
