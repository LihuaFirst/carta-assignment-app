// const formatAddress = (address) => {
//   return address.join('<br>');
// }

const normalizeItem = (item) => ({
   id: item.id,
   name: item.name,
  //  phone: item.location.contact.phone,
  // address: formatAddress(item.formattedAddress)
  category: ''
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