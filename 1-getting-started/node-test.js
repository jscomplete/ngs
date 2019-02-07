// Modern JS test
(async (a = 1, ...b) => ({...b, a, [a]: `${a}`}))();

// New Promise APIs
require('util').promisify;
require('fs').promises;
