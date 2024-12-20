import { UserData } from '../../types';

export function validateForm(data: UserData): string | null {
  const { fullName, phone, email, birthday } = data;

  if (!fullName.trim()) {
    return 'Please enter your full name';
  }

  if (!phone.trim() || !/^\d{10,}$/.test(phone)) {
    return 'Please enter a valid phone number (at least 10 digits)';
  }

  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Please enter a valid email address';
  }

  if (!birthday) {
    return 'Please select your birthday';
  }

  try {
    const birthDate = new Date(birthday);
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
    
    if (isNaN(birthDate.getTime())) {
      return 'Invalid date format';
    }

    if (birthDate > today || birthDate < minDate) {
      return 'Please enter a valid birth date';
    }
  } catch (err) {
    return 'Please enter a valid date';
  }

  return null;
}