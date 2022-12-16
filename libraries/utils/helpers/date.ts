import moment from "moment";

export const convertMessageTime = (date: string) => {
  if (!date) return '';
  // moment.locale('ja');
  const segs = date.split(' ');
  if (segs.length > 1) {
      date = segs[0] + 'T' + segs[1];
  }
  const data = moment(date);
  const now = moment();
  let result = '';
  if (data.format('YYYY') !== now.format('YYYY')) {
      result = result + data.format('YYYY');
      return data.format('YYYY-MM-DD HH:MM');
  }
  if (data.format('M DD') !== now.format('M DD')) {
    return data.format('D-MMM HH:mm')
  }
  return data.format('HH:mm');
}
