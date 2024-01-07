
export function formatNumber(
  itemSlug: string,
  list: Record<string, number>,
  options?: {
    notation?: 'standard' | 'compact' | 'scientific' | 'engineering';
  }
): string {
  const numberToFormat = list[itemSlug] ?? 0;
  const formattedNumber = new Intl.NumberFormat('en-US', {
    notation: options?.notation ?? 'standard'
  }).format(numberToFormat);

  return formattedNumber;
}


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

export function findIsPathActive({
  pathname,
  linkHref
}: {
  pathname: string;
  linkHref: string;
}): boolean {
  return (
    pathname === linkHref ||
    (linkHref.length > 1 && pathname.startsWith(linkHref))
  );
}
