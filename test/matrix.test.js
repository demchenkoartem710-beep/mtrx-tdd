
const { expect } = require('chai');
const {
  zeros,
  identity,
  add,
  transpose
} = require('../src/matrix');

describe('Бібліотека операцій над матрицями (TDD)', function () {
  describe('zeros()', function () {
    it('повинна створювати матрицю з нулів', function () {
      expect(zeros(2, 3)).to.deep.equal([
        [0, 0, 0],
        [0, 0, 0]
      ]);
    });
  });

  describe('identity()', function () {
    it('повинна створювати одиничну матрицю', function () {
      expect(identity(3)).to.deep.equal([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ]);
    });
  });

  describe('add()', function () {
    it('повинна додавати дві матриці', function () {
      const a = [[1, 2], [3, 4]];
      const b = [[5, 6], [7, 8]];

      expect(add(a, b)).to.deep.equal([
        [6, 8],
        [10, 12]
      ]);
    });

    it('повинна відхиляти матриці різного розміру', function () {
      expect(() => add([[1, 2]], [[1], [2]]))
        .to.throw(Error);
    });
  });

  describe('transpose()', function () {
    it('повинна транспонувати матрицю', function () {
      expect(transpose([[1, 2, 3], [4, 5, 6]]))
        .to.deep.equal([
          [1, 4],
          [2, 5],
          [3, 6]
        ]);
    });
  });
});
