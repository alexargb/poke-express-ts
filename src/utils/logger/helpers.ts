const fill = (num: number): string => {
  const strNum = num.toString();
  switch (strNum.length) {
    case 1:
      return '0' + strNum;
    default:
      return strNum.slice(0, 2);
  }
};


export const getTimestamp = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const date = [year, fill(month), fill(day)].join('/');
  const time = [hour, minute, second].map(fill).join('-');

  return date + ' ' + time;
};
