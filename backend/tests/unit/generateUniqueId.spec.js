const generateUniqueId = require('../../src/utils/genareteUniqueId');

describe('Generate Unique ID', () => {
    it('should genarate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});