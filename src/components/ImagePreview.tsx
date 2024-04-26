'use client';

// eslint-disable-next-line no-redeclare
import 'react-image-lightbox-rotation/style.css';

import { useState } from 'react';
import Lightbox from 'react-image-lightbox-rotation';

import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

type CardPreview = {
  width: number;
  height: number;
  src: string;
  label?: string;
  imgClassName?: string;
  alt: string;
} & React.ComponentPropsWithoutRef<'div'>;

const ImagePreview = ({
  src,
  alt,
  label,
  width = 300,
  height = 160,
  className,
  imgClassName,
  ...props
}: CardPreview) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div {...props}>
      <div className='cursor-pointer'>
        <Typography as='label' variant='p' className='block'>
          {label}
        </Typography>
        {src && (
          <div className={clsxm(className, 'mt-2')}>
            <NextImage
              src={src as string}
              serverStaticImg
              width={width}
              height={height}
              alt={alt}
              className={imgClassName}
              onClick={() => setIsOpen(true)}
            />
          </div>
        )}

        {isOpen && (
          <Lightbox
            mainSrc={src as string}
            rotate={0}
            onCloseRequest={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
