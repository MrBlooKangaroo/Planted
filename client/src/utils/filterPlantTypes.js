export const getFilterDict = filterId => {
  return {
    type: filterId.split(':')[0],
    value: filterId.split(':')[1],
  };
};

export default (plantTypes, filterIds) => {
  const filters = filterIds.map(filterId => getFilterDict(filterId));

  const luxLevelFilters = filters.filter(filter => filter.type === 'luxLevel');
  const waterCycleFilters = filters.filter(
    filter => filter.type === 'waterCycle',
  );
  const categoryFilters = filters.filter(filter => filter.type === 'category');

  const luxLevelWhiteList = luxLevelFilters.map(filter => filter.value);
  const waterCycleWhiteList = waterCycleFilters.map(filter => filter.value);
  const categoryWhiteList = categoryFilters.map(filter => filter.value);

  const filteredPlantTypes = plantTypes.filter(plantType => {
    if (luxLevelWhiteList.includes(plantType.luxLevel)) return true;
    if (waterCycleWhiteList.includes(plantType.waterCycle)) return true;
    if (categoryWhiteList.includes('Jungle Vibes') && plantType.hasJungleVibes)
      return true;
    if (categoryWhiteList.includes('Airy Fresh') && plantType.isAiryFresh)
      return true;
    if (
      categoryWhiteList.includes('Purifies the Air') &&
      plantType.isAirPurifying
    )
      return true;
    return false;
  });

  return filteredPlantTypes;
};
