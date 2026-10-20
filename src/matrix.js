
function zeros(rows, cols) {
  if (!Number.isInteger(rows) || rows <= 0 ||
      !Number.isInteger(cols) || cols <= 0) {
    throw new Error('Розміри матриці мають бути додатними цілими числами');
  }

  return Array.from(
    { length: rows },
    () => Array(cols).fill(0)
  );
}

function identity(size) {
  if (!Number.isInteger(size) || size <= 0) {
    throw new Error('Розмір матриці має бути додатним цілим числом');
  }

  return Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => i === j ? 1 : 0)
  );
}

function validateMatrix(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0 ||
      !matrix.every(row => Array.isArray(row))) {
    throw new Error('Некоректна матриця');
  }

  const cols = matrix[0].length;

  if (cols === 0 || !matrix.every(row => row.length === cols)) {
    throw new Error('Матриця повинна бути прямокутною');
  }
}

function add(a, b) {
  validateMatrix(a);
  validateMatrix(b);

  if (a.length !== b.length || a[0].length !== b[0].length) {
    throw new Error('Матриці повинні мати однакові розміри');
  }

  return a.map((row, i) =>
    row.map((value, j) => value + b[i][j])
  );
}

function transpose(matrix) {
  validateMatrix(matrix);

  return matrix[0].map((_, col) =>
    matrix.map(row => row[col])
  );
}

module.exports = {
  zeros,
  identity,
  add,
  transpose
};
