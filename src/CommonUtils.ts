import { RouteComponentProps } from 'react-router';
import URLSearchParams from 'url-search-params';

export function formatDate(dateString: string): string {
  const date: Date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

export function getPageNoFromUrl(props: RouteComponentProps, pageParamName: string): number {
  const {
    location: { search },
  } = props;
  const params = new URLSearchParams(search);
  const pageParam = params.get(pageParamName);
  let page = 1;
  if (pageParam) {
    page = parseInt(pageParam);
  }
  if (isNaN(page)) {
    page = 1;
  }
  return page;
}
