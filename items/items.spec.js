describe('An item ...', () => {
    test('is an object', () => {
        expect(typeof (item)).toBe('object');
    });

    describe('has a `name` property...', () => {

        test('that is defined', () => {
            expect(item.name).toBeDefined();
        });
    })


    describe('has a `type` property...', () => {
        test('that is defined', () => {
            expect(item.type).toBeDefined();
        });

        test('with a value of `weapon` or `armor`', () => {
            let expected = 'weapon' || 'armor'
            expect(item.type).toBe(expected)
        })
    })

    test('has a `durability` property', () => {
        expect(item.durability).toBeDefined();
    });

    describe('has an `enhancement` property...', () => {
        test('that is defined', () => {
            expect(item.enhancement).toBeDefined();
        });

        test('that is a number', () => {
            expect(typeof(item.enhancement)).toBe('number');
        });

        test('greater than or equal to 0', () => {
            expect(item.enhancement).toBeGreaterThanOrEqual(0);
        });

        test('less than or equal to 20', () => {
            expect(item.enhancement).toBeLessThanOrEqual(20);
        });
    })

})

