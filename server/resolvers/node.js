exports.__resolveType = (object, context) => {
  switch (object._modelOptions.name.singular) {
    case 'user':
      return 'User';
    default:
      return null;
  }
};
