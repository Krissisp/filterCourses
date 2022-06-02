function filterCourses(courses, [price1, price2]) {
  const minPrice = price1 === null ? 0 : price1;
  const maxPrice = price2 === null ? Infinity : price2;

  const result = courses.filter((course) => {
    let [minPriceCurrentCourse, maxPriceCurrentCourse] = course.prices;
    minPriceCurrentCourse = minPriceCurrentCourse === null ? 0 : minPriceCurrentCourse;
    maxPriceCurrentCourse = maxPriceCurrentCourse === null ? Infinity : maxPriceCurrentCourse;

    if (minPrice > 0 && minPriceCurrentCourse === 0 && maxPriceCurrentCourse === Infinity) {
      return false;
    }

    return (minPrice <= maxPriceCurrentCourse && minPrice >= minPriceCurrentCourse)
    || (maxPrice >= minPriceCurrentCourse && maxPrice <= maxPriceCurrentCourse);
  });

  return result.sort((prev, next) => (prev.prices[0] === null ? -1
    : prev.prices[0] - next.prices[0]));
}

module.exports = filterCourses;
