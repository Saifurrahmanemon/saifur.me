export const formatDate = (
  date: string,
  options?: {
    year?: 'numeric' | '2-digit';
    month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
    day?: 'numeric' | '2-digit';
  }
) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: options?.year ?? 'numeric',
    month: options?.month ?? 'long',
    day: options?.day ?? 'numeric'
  });
};
