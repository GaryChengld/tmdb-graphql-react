function formatDate(dateString: string): string {
  const date: Date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

export { formatDate };
