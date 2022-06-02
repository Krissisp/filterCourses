const { expect, it } = require('@jest/globals');
const filterCourses = require('../src/filter');

const courses = [
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in Germany', prices: [500, null] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, null] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in France', prices: [null, null] },
];

const requiredRange1 = [null, 200];
const answer1 = [
  { name: 'Courses in France', prices: [null, null] },
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in USA', prices: [200, null] },
];

const requiredRange2 = [100, 350];
const answer2 = [
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in USA', prices: [200, null] },

];

const requiredRange3 = [200, null];
const answer3 = [
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in USA', prices: [200, null] },
  { name: 'Courses in Germany', prices: [500, null] },
];

const requiredRange4 = [400, null];
const answer4 = [
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in USA', prices: [200, null] },
  { name: 'Courses in Germany', prices: [500, null] },
];

it('test function 1', () => {
  expect(filterCourses(courses, requiredRange1)).toEqual(answer1);
});

it('test function 2', () => {
  expect(filterCourses(courses, requiredRange2)).toEqual(answer2);
});

it('test function 3', () => {
  expect(filterCourses(courses, requiredRange3)).toEqual(answer3);
});
it('test function 4', () => {
  expect(filterCourses(courses, requiredRange4)).toEqual(answer4);
});
