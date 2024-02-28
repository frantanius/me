const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const now = new Date();
const dayName = days[now.getDay()];
const monthName = months[now.getMonth()];
const day = now.getDate();
const year = now.getFullYear();

export const dateNowFormatted = `${dayName}, ${monthName} ${day} ${year}`;
