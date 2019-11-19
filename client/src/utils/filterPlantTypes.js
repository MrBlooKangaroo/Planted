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
    const luxLevelMatch = luxLevelWhiteList.includes(plantType.luxLevel);
    const waterCycleMatch = waterCycleWhiteList.includes(plantType.waterCycle);
    const jungleVibesMatch =
      categoryWhiteList.includes('Jungle Vibes') && plantType.hasJungleVibes;
    const airyFreshMatch =
      categoryWhiteList.includes('Airy Fresh') && plantType.isAiryFresh;
    const airPurifyingMatch =
      categoryWhiteList.includes('Purifies the Air') &&
      plantType.isAirPurifying;
    return (
      luxLevelMatch ||
      waterCycleMatch ||
      jungleVibesMatch ||
      airyFreshMatch ||
      airPurifyingMatch
    );
  });
  return filteredPlantTypes;
};
