export const convertDataIntoAgo = data => {
  const today = new Date();
  const timeValue = new Date(data);

  const difference = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60,
  );

  if (difference < 1) {
    return "now";
  }

  if (difference < 60) {
    return difference === 1 ? `${difference} minute` : `${difference} minutes`;
  }

  const hour = Math.floor(difference / 60);
  if (hour < 24) {
    return hour === 1 ? `${hour} hour` : `${hour} hours`;
  }

  const day = Math.floor(difference / 60 / 24);
  if (day < 365) {
    return day === 1 ? `${day} day` : `${day} days`;
  }

  const year = Math.floor(day / 365);
  return year === 1 ? `${year} year` : `${year} years`;
};
