const app = require('./app'); // Import the app
const TEST_PORT = 3002;

let server;

beforeAll(() => {
    server = app.listen(TEST_PORT, () => {
    });
});

afterAll(() => {
    server.close(() => {
    });
});

module.exports = { server };