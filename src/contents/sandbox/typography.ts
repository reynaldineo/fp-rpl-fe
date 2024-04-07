import { TypographyVariant } from '@/components/Typography';

interface fontStyle {
  style: keyof typeof TypographyVariant;
  size: number;
  height: number;
  sample: string;
}

export const dataPoppins: fontStyle[] = [
  {
    style: 'p3',
    size: 12,
    height: 16,
    sample: 'sample',
  },
  {
    style: 'btn-sm',
    size: 14,
    height: 18,
    sample: 'sample',
  },
  {
    style: 'p2',
    size: 14,
    height: 18,
    sample: 'sample',
  },
  {
    style: 'c',
    size: 14,
    height: 24,
    sample: 'sample',
  },
  {
    style: 'btn',
    size: 16,
    height: 28,
    sample: 'sample',
  },
  {
    style: 'bt',
    size: 16,
    height: 24,
    sample: 'sample',
  },
  {
    style: 'p',
    size: 18,
    height: 24,
    sample: 'sample',
  },
  {
    style: 't',
    size: 20,
    height: 24,
    sample: 'sample',
  },

  {
    style: 'h6',
    size: 28,
    height: 32,
    sample: 'sample',
  },
  {
    style: 'h5',
    size: 32,
    height: 36,
    sample: 'sample',
  },
  {
    style: 'h4',
    size: 48,
    height: 64,
    sample: 'sample',
  },
  {
    style: 'h3',
    size: 60,
    height: 80,
    sample: 'sample',
  },
  {
    style: 'h2',
    size: 72,
    height: 90,
    sample: 'sample',
  },
  {
    style: 'h1',
    size: 80,
    height: 96,
    sample: 'sample',
  },
];
