export function getDateConstraints() {
  const today = new Date();
  const maxDate = today.toISOString().split('T')[0];
  const minDate = new Date(
    today.getFullYear() - 100,
    today.getMonth(),
    today.getDate()
  ).toISOString().split('T')[0];

  return { minDate, maxDate };
}