exports.__resolveType = (object, context) => {
  switch (object._modelOptions.name.singular) {
    case 'user':
      return 'User';
    case 'nook':
      return 'Nook';
    case 'plant':
      return 'Plant';
    case 'plantType':
      return 'PlantType';
    case 'watering':
      return 'Watering';
    case 'wish':
      return 'Wish';
    default:
      return null;
  }
};
