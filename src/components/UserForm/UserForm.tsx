import React, { useState } from 'react';
import { UserData } from '../../types';
import { FormInput } from './FormInput';
import { Calendar, Mail, Phone, User, Gift } from 'lucide-react';
import { SnowEffect } from './SnowEffect';
import { UserFormProps } from './types';
import { getDateConstraints } from './utils';
import { validateForm } from './validation';

export function UserForm({ onSubmit }: UserFormProps) {
  const [formData, setFormData] = useState<UserData>({
    fullName: '',
    phone: '',
    email: '',
    birthday: ''
  });
  const [error, setError] = useState('');
  const { minDate, maxDate } = getDateConstraints();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validationError = validateForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    onSubmit(formData);
  };

  const handleInputChange = (field: keyof UserData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <SnowEffect />
      
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          <Gift className="inline-block mr-2 mb-1" />
          Unwrap the Magic
        </h2>
        <p className="text-lg text-white/80">
          Join our festive adventure and discover special Christmas surprises!
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="relative p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
        <div className="space-y-6">
          <FormInput
            icon={<User className="text-white/50" />}
            label="Full Name"
            type="text"
            value={formData.fullName}
            onChange={handleInputChange('fullName')}
            placeholder="Your full name"
            required
          />

          <FormInput
            icon={<Phone className="text-white/50" />}
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange('phone')}
            placeholder="Your phone number"
            required
            pattern="[0-9]*"
          />

          <FormInput
            icon={<Mail className="text-white/50" />}
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            placeholder="Your email address"
            required
          />

          <FormInput
            icon={<Calendar className="text-white/50" />}
            label="Birthday"
            type="date"
            value={formData.birthday}
            onChange={handleInputChange('birthday')}
            required
            min={minDate}
            max={maxDate}
          />

          {error && (
            <div className="text-red-400 text-sm mt-1 bg-red-400/10 p-2 rounded-lg">
              {error}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl 
            font-medium text-lg hover:from-green-600 hover:to-green-700 transform hover:scale-[1.02] 
            active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 
            focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Start the Magic
        </button>

        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
          <div className="px-4 py-1 bg-green-500 rounded-full text-sm font-medium text-white animate-bounce">
            🎁 Birthday Gift Inside!
          </div>
        </div>
      </form>
    </div>
  );
}