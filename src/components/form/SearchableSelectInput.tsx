import get from 'lodash.get';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import { FiChevronDown, FiX } from 'react-icons/fi';
import Select, { components, MultiValue, StylesConfig } from 'react-select';

import Typography from '@/components/Typography';

import Chips from './Chips';
import HelperText from './HelperText';
import LabelText from './LabelText';

export type SearchableSelectInputProps = {
  label: string | null;
  id: string;
  placeholder?: React.ReactNode;
  helperText?: string;
  hideError?: boolean;
  type?: string;
  isMulti?: boolean;
  readOnly?: boolean;
  validation?: RegisterOptions;
  options: { value: string; label: string }[];
  containerClassName?: string;
  reactSelectProps?: React.ComponentPropsWithoutRef<typeof Select>;
  handleChange?: <T extends string>(selectedOptions: T) => void;
} & React.ComponentPropsWithoutRef<'select'>;

export default function SearchableSelectInput({
  disabled,
  label,
  helperText,
  hideError = false,
  id,
  isMulti = false,
  placeholder,
  validation,
  options,
  containerClassName,
  reactSelectProps,
  handleChange,
}: SearchableSelectInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  return (
    <div className={containerClassName}>
      {label && (
        <LabelText required={validation?.required ? true : false}>
          {label}
        </LabelText>
      )}
      <div className='relative mt-1'>
        <Controller
          name={id}
          control={control}
          rules={validation}
          render={({ field }) => {
            const styles = error ? errorStyles : customStyles;
            return (
              <Select
                {...field}
                value={
                  //? null is needed so if the selected value is not found in the options, it will clear the value
                  isMulti
                    ? field.value?.map(
                        (value: unknown) =>
                          options.find((option) => option.value === value) ??
                          null,
                      )
                    : options.find((opt) => opt.value === field.value) ?? null
                }
                onChange={(selectedOptions) => {
                  isMulti
                    ? field.onChange(
                        (
                          selectedOptions as MultiValue<
                            (typeof options)[number]
                          >
                        ).map((option) => option?.value ?? ''),
                      )
                    : field.onChange(
                        (selectedOptions as (typeof options)[number])?.value ??
                          '',
                      );
                  handleChange?.(selectedOptions.value);
                }}
                isDisabled={disabled}
                isClearable
                isMulti={isMulti}
                closeMenuOnSelect={!isMulti}
                placeholder={placeholder}
                options={options}
                styles={styles}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: (props) => (
                    <components.DropdownIndicator {...props}>
                      <FiChevronDown className='text-xl' />
                    </components.DropdownIndicator>
                  ),
                  ClearIndicator: (props) => (
                    <components.ClearIndicator {...props}>
                      <FiX className='mr-0.5 text-lg text-typo-icons hover:cursor-pointer hover:text-typo-secondary' />
                    </components.ClearIndicator>
                  ),
                  MultiValue: ({ data, innerProps }) => (
                    <div
                      {...innerProps}
                      onClick={() => {
                        field.onChange(
                          (field.value as string[]).filter(
                            (value) => value !== data.value,
                          ),
                        );
                      }}
                    >
                      <Chips
                        size='sm'
                        color='primary'
                        iconClose
                        className='hover:cursor-pointer'
                      >
                        {data.label}
                      </Chips>
                    </div>
                  ),
                  MultiValueRemove: (props) => (
                    <components.MultiValueRemove {...props}>
                      <FiX size={16} />
                    </components.MultiValueRemove>
                  ),
                }}
                {...reactSelectProps}
              />
            );
          }}
        />
        <div className='mt-1'>
          {!hideError && error && (
            <Typography variant='c' className='text-danger-main'>
              {error?.message?.toString()}
            </Typography>
          )}
          {!error && helperText && <HelperText>{helperText}</HelperText>}
        </div>
      </div>
    </div>
  );
}

const customStyles: StylesConfig = {
  control: (styles, { hasValue }) => ({
    ...styles,
    border: 'none',
    boxShadow: hasValue
      ? 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) rgb(106 192 245)'
      : 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) rgb(100 102 104)',
    transition: 'none',
    '&:focus-within': {
      border: 'none',
      boxShadow: hasValue
        ? 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) rgb(106 192 245)'
        : 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) rgb(100 102 104)',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    '&:hover': {
      border: 'none',
      boxShadow:
        'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) rgb(33 33 34)',
    },
    '*': {
      boxShadow: 'none !important',
    },
    borderRadius: '0.5rem',
    background: '#F9F9FA',
    padding: '0.5rem 0.75rem',
    color: '#646668',
    fontSize: '16px',
    maxWidth: '100vw',
    overflowy: 'auto',
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: '#F9F9FA',
    borderRadius: '0',
    border: 'none',
    margin: 0,
    padding: 0,
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: 0,
    gap: '0.5rem',
  }),
  input: (styles) => ({
    ...styles,
    padding: 0,
    margin: 0,
    caretColor: '#6ac0f5',
    color: '#1F201d',
    '::placeholder': {
      color: '#5a5d56',
    },
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    '&>div': {
      padding: 0,
    },
  }),

  dropdownIndicator: (styles) => ({
    ...styles,
    color: '#878787',
    '&:hover': {
      color: '#878787',
    },
  }),
  option: (styles, state) => ({
    ...styles,
    color: '#212122',
    background: state.isSelected ? '#ccc' : '#F9F9FA',
    ':hover': {
      background: '#ddd',
    },
    borderBottom: '1px solid #E5E5E6',
  }),
  multiValue: (styles) => ({
    ...styles,
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    background: '#daeffc',
    borderRadius: '0.375rem',
    padding: '0.25rem 0.75rem',
    margin: 0,
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: '#296a91',
    padding: 0,
    paddingLeft: 0,
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: '#296a91',
    padding: 0,
    paddingLeft: '0.5rem',
    '&:hover': {
      color: '#296a91',
      backgroundColor: 'transparent',
    },
  }),
};

const errorStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    border: 'none',
    boxShadow:
      'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) rgb(252 62 62)',
    '&:focus-within': {
      border: 'none',
      boxShadow:
        'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) rgb(252 62 62)',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    '&:hover': {
      border: 'none',
      boxShadow:
        'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) rgb(252 62 62)',
    },
    '*': {
      boxShadow: 'none !important',
    },
    borderRadius: '0.5rem',
    background: '#F9F9FA',
    padding: '0.5rem 0.75rem',
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: '#F9F9FA',
    borderRadius: '0',
    border: 'none',
    margin: 0,
    padding: 0,
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: 0,
  }),
  input: (styles) => ({
    ...styles,
    padding: 0,
    margin: 0,
    caretColor: '#6ac0f5',
    color: '#1F201d',
    '::placeholder': {
      color: '#5a5d56',
    },
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    '&>div': {
      padding: 0,
    },
  }),

  dropdownIndicator: (styles) => ({
    ...styles,
    color: '#878787',
    '&:hover': {
      color: '#878787',
    },
  }),
  option: (styles, state) => ({
    ...styles,
    color: '#212122',
    background: state.isSelected ? '#ccc' : '#F9F9FA',
    ':hover': {
      background: '#ddd',
    },
    borderBottom: '1px solid #959698',
  }),
};
