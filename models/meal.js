class Meals {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredints,
    steps,
    isGlutenFree,
    isVegan,
    isVegitarian,
    isLoctoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredints = ingredints;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegitarian = isVegitarian;
    this.isLoctoseFree = isLoctoseFree;
  }
}

export default Meals;
