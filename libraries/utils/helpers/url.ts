export const serializeToQuery = (
  obj: Record<string, any>,
  prefix: string = ''
): string => {
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      const k = prefix ? prefix + '[' + p + ']' : p,
        v = obj[p];
      if (v === undefined) continue;
      const value = v !== null && typeof v === 'object'
        ? serializeToQuery(v, k)
        : encodeURIComponent(k) + '=' + encodeURIComponent(v);
      if (!value) continue;
      str.push(value);
    }
  }
  return str.join('&');
};
export const getUrlWithParam = (
  baseUrl: string,
  params: Record<string, any>
): string => {
  const Url = new URL(baseUrl);
  Url.search = serializeToQuery(params);
  return Url.toString();
};

export const getAbsoluteApiUrl = (url: string, baseUrl = '') => {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  if (!url.startsWith('/')) {
    url = `/${url}`;
  }
  return `${baseUrl}${url}`;
};
