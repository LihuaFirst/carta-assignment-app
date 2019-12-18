const formatDateISO = (iso) => {
  let date = new Date(iso);
  let options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
  };
  return date.toLocaleString('en-us', options); 
}

const formatDate = {
   iso: (date) => {
      return formatDateISO(date);
   },

   yyyymmdd: (date) => {
      return date.getFullYear() + '' + (date.getMonth()+1) + '' + date.getDate();
   }
}

export default formatDate;