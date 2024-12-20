import { ReactNode } from 'react';
import { UserData } from '../../types';

export interface UserFormProps {
  onSubmit: (data: UserData) => void;
}

export interface FormInputProps {
  icon: ReactNode;
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  min?: string;
  max?: string;
}