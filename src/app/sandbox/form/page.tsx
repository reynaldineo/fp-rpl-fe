'use client';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import HelperText from '@/components/form/HelperText';
import Input from '@/components/form/Input';
import LabelText from '@/components/form/LabelText';
import RadioButton from '@/components/form/RadioButton';
import SearchableSelectInput from '@/components/form/SearchableSelectInput';
import SelectInput from '@/components/form/SelectInput';
import TextArea from '@/components/form/TextArea';
import Typography from '@/components/Typography';

type SandboxForm = {
  text: string;
  textReadOnly: string;
  textWithPrefix: string;
  textWithSuffix: string;
  textWithHelper: string;
  textWithHelperReadOnly: string;
  textWithValidation: string;
  textWithValidationReadOnly: string;
  textWithValidationHelper: string;
  textWithValidationHelperReadOnly: string;
  PasswordInput: string;
  textArea: string;
  textAreaReadOnly: string;
  textAreaWithHelper: string;
  textAreaWithHelperReadOnly: string;
  textAreaWithValidation: string;
  textAreaWithValidationReadOnly: string;
  textAreaWithValidationHelper: string;
  textAreaWithValidationHelperReadOnly: string;
  select: 'male' | 'female';
  selectReadOnly: 'male' | 'female';
  searchableSelect: string;
};

export default function FormSandbox() {
  const methods = useForm<SandboxForm>({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<SandboxForm> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    return;
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
  ];

  return (
    <div className='mx-auto w-fit space-y-4 p-6'>
      <Typography as='h1' variant='h4'>
        Form
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='w-fit space-y-4'>
          <Input id='text' label='Text' placeholder='Placeholder' />

          <Input
            id='textReadOnly'
            label='Text (Read Only)'
            placeholder='Placeholder'
            defaultValue={'Read Only'}
            readOnly={true}
          />

          <Input
            id='textWithPrefix'
            label='Text With Prefix'
            placeholder='Placeholder'
            prefix='Prefix'
          />

          <Input
            id='textWithSuffix'
            label='Text With Suffix'
            placeholder='Placeholder'
            suffix='Suffix'
          />

          <Input
            id='textWithHelper'
            label='Text With Helper'
            placeholder='Placeholder'
            helperText='This is helper text'
          />

          <Input
            id='textWithHelperReadOnly'
            label='Text With Helper (Read Only)'
            placeholder='Placeholder'
            helperText='This is helper text'
            readOnly={true}
            defaultValue={'Helper Text'}
          />

          <Input
            id='textWithValidation'
            label='Text With Validation'
            placeholder='Placeholder'
            validation={{
              required: 'Field must be filled',
              minLength: {
                value: 3,
                message: 'Field must be at least 3 characters',
              },
            }}
          />

          <Input
            id='textWithValidationHelper'
            label='Text With Validation And Helper'
            placeholder='Placeholder'
            helperText='This is helper text'
            validation={{
              required: 'Field must be filled',
              minLength: {
                value: 3,
                message: 'Field must be at least 3 characters',
              },
            }}
          />

          <Input
            id='textWithValidationHelperReadOnly'
            label='Text With Validation And Helper (Read Only)'
            placeholder='Placeholder'
            helperText='This is helper text'
            validation={{
              required: 'Field must be filled',
              minLength: {
                value: 3,
                message: 'Field must be at least 3 characters',
              },
            }}
            readOnly={true}
            defaultValue={'Helper Text'}
          />

          <Input
            id='PasswordInput'
            label='Password Input'
            placeholder='Placeholder'
            validation={{
              required: 'Field must be filled',
            }}
            type='password'
          />

          <TextArea
            id='textArea'
            label='Text Area'
            placeholder='Placeholder'
            maxLength={1234}
          />

          <TextArea
            id='textAreaReadOnly'
            label='Text Area (Read Only)'
            placeholder='Placeholder'
            readOnly={true}
          />

          <TextArea
            id='textAreaWithHelper'
            label='Text Area With Helper'
            placeholder='Placeholder'
            helperText='This is helper text'
          />

          <TextArea
            id='textAreaWithHelperReadOnly'
            label='Text Area With Helper (Read Only)'
            placeholder='Placeholder'
            helperText='This is helper text'
            readOnly={true}
          />

          <TextArea
            id='textAreaWithValidation'
            label='Text Area With Validation'
            placeholder='Placeholder'
            validation={{ required: 'Field must be filled' }}
          />

          <TextArea
            id='textAreaWithValidationReadOnly'
            label='Text Area With Validation (Read Only)'
            placeholder='Placeholder'
            validation={{ required: 'Field must be filled' }}
            readOnly={true}
          />

          <TextArea
            id='textAreaWithValidationHelper'
            label='Text Area With Validation And Helper'
            placeholder='Placeholder'
            helperText='This is helper text'
            validation={{ required: 'Field must be filled' }}
          />

          <TextArea
            id='textAreaWithValidationHelperReadOnly'
            label='Text Area With Validation And Helper (Read Only)'
            placeholder='Placeholder'
            helperText='This is helper text'
            validation={{ required: 'Field must be filled' }}
            readOnly={true}
          />

          {/* Select Input */}
          <SelectInput
            id='selectReadOnly'
            label='Select Input Read Only'
            placeholder='(Option)'
            readOnly
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </SelectInput>

          <SelectInput
            id='selectInput'
            label='Select Input'
            placeholder='(Option)'
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </SelectInput>

          <SelectInput
            id='selectInputWithHelperText'
            label='Select Input With Helper Text'
            placeholder='(Option)'
            helperText='Helper Text'
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </SelectInput>

          <SelectInput
            id='selectInputRequired'
            label='Select Input Required'
            placeholder='(Option)'
            validation={{ required: 'This field is required' }}
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </SelectInput>

          <SelectInput
            id='selectInputRequiredWithHelperText'
            label='Select Input Required With Helper Text'
            placeholder='(Option)'
            helperText='Helper Text'
            validation={{ required: 'This field is required' }}
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </SelectInput>

          {/* Searchable Multiselect Input */}
          <SearchableSelectInput
            id='multipleSelectInputReadOnly'
            label='Multiple Select Input Read Only'
            placeholder='(Option)'
            options={options}
            isMulti
            disabled
          ></SearchableSelectInput>

          <SearchableSelectInput
            id='multipleSelectInput'
            label='Multiple Select Input'
            placeholder='(Option)'
            options={options}
            isMulti
          ></SearchableSelectInput>

          <SearchableSelectInput
            id='multipleSelectInputWithHelper'
            label='Multiple Select Input With Helper Text'
            placeholder='(Option)'
            options={options}
            helperText='Helper text'
            isMulti
          ></SearchableSelectInput>

          <SearchableSelectInput
            id='multipleSelectInputRequired'
            label='Multiple Select Input Required'
            placeholder='(Option)'
            validation={{ required: 'This field is required' }}
            options={options}
            isMulti
          ></SearchableSelectInput>

          <SearchableSelectInput
            id='multipleSelectInputRequiredWithHelper'
            label='Multiple Select Input Required With Helper'
            placeholder='(Option)'
            validation={{ required: 'This field is required' }}
            options={options}
            helperText='Helper text'
            isMulti
          ></SearchableSelectInput>

          <div>
            <LabelText required>Radio Button</LabelText>
            <div className='flex gap-10'>
              <RadioButton
                label='Pilihan 1'
                name='pilihan'
                value={'1'}
                validation={{ required: 'Field must be filled' }}
              />
              <RadioButton label='Pilihan 2' name='pilihan' value={'2'} />
            </div>
            <HelperText>This is helper text</HelperText>
          </div>

          <button
            type='submit'
            className='w-full rounded-2xl bg-primary-500 p-3'
          >
            <Typography variant='t' weight='regular' className='text-white'>
              Submit
            </Typography>
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
