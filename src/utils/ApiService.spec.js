import ApiService from './ApiService';

describe('Test API Integrations', () => {

    it('Should get all users logged in', () => {

        return ApiService.ListUsers()
            .then(data => {
                expect(data).toBeDefined()
            })
    });

    it('Should checkout user by usign id', () => {
        const user = {
            id: '6c3ed046-13f9-4d42-93f1-bd4dedb7da1e',
        };
        return ApiService.CheckoutUser(user)
            .then(data => {
                expect(data).toBeDefined();
                expect(data.ok).toBe(false);
            })
    })

});

