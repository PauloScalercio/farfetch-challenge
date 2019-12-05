const ApiService = {

    ListUsers: () => fetch('http://localhost:7000/api/users')
                                .then(res => res.json())
    ,
    CheckoutUser:  ({ id }) => fetch(`http://localhost:7000/api/users/${id}/checkout`, {method: 'PUT'})
    
    ,
    
}
export default ApiService;