// const formatDate = (iso) => {
//   let date = new Date(iso);
//   let options = {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//   };
//   return date.toLocaleString('en-us', options); 
// }

const formatAddress = (address) => {
  return address.join('<br>');
}

const normalizeItem = (item) => ({
   id: item.id,
   name: item.name,
  //  phone: item.location.contact.phone,
  //  address: formatAddress(item.formattedAddress)
});

const normalize = {
   search: (items) => {
     return items.map(item => normalizeItem(item));
   },

   asset: (item) =>{
     return normalizeItem(item);
   }
 };

 export default normalize;