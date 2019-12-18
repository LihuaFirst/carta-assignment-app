const getFormattedAddress = (item) => {
  const addressArr = item.location.formattedAddress;
  return addressArr.join(', ');
}

const getCategoryIcon = (item) => {
  const icon = item.categories[0].icon;
  // available size: 32, 44, 64, 88
  const size = 88;
  return icon.prefix + size + icon.suffix;
}

const normalizeItem = (item) => ({
   id: item.id,
   name: item.name,
   address: getFormattedAddress(item),
   category: item.categories[0].name,
   category_icon: getCategoryIcon(item)
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