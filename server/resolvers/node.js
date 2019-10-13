exports.__resolveType = (object, context) => {
  switch (object._modelOptions.name.singular) {
    case 'user':
      return 'User';
    case 'nook':
      return 'Nook';
    case 'plant':
      return 'Plant';
    case 'genus':
      return 'Genus';
    case 'watering':
      return 'Watering';
    default:
      return null;
  }
};
