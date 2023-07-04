export function Dish(
  id,
  name,
  preparingMethod,
  products,
  shortDescription,
  tags,
  timeNeeded
) {
  this.name = name;
  this.preparingMethod = preparingMethod;
  this.products = products;
  this.shortDescription = shortDescription;
  this.tags = tags;
  this.timeNeeded = timeNeeded;
}
