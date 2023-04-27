import moment from 'moment';

export const timeAgo = (time: string): string => {
  moment.locale('id');
  return moment.utc(Date.parse(time)).fromNow();
};

export const expireTime = (time: string): boolean => {
  const data = timeAgo(time).split(' ');

  if (
    data[1] == 'jam' ||
    data[1] == 'tahun' ||
    data[0] == 'sehari' ||
    data[0] == 'hari'
  )
    return true;

  return false;
};
