const sanitezeIndianFoodArray = (array) => {
  array = array.map((item) => {
    return {
      name: item.name.toLowerCase(),
      ingredients: item.ingredients
        .split(",")
        .map((str) => str.toLowerCase().trim()),
      diet: item.diet !== "-1" ? item.diet?.toLowerCase() : null,
      prep_time: item.prep_time !== "-1" ? Number(item.prep_time) : null,
      cook_time: item.cook_time !== "-1" ? Number(item.cook_time) : null,
      flavor_profile:
        item.flavor_profile !== "-1"
          ? item.flavor_profile?.toLowerCase()
          : null,
      course: item.course !== "-1" ? item.course?.toLowerCase() : null,
      state: item.state !== "-1" ? item.state?.toLowerCase() : null,
      region: item.region !== "-1" ? item.region?.toLowerCase() : null,
    };
  });
  return array;
};

const convertValuesToStartCase = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((item) =>
      typeof item === "string"
        ? _.startCase(item)
        : convertValuesToStartCase(item)
    );
  } else if (typeof obj === "object" && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        typeof value === "string"
          ? _.startCase(value)
          : convertValuesToStartCase(value),
      ])
    );
  }
  return obj;
};

export { sanitezeIndianFoodArray, convertValuesToStartCase };
