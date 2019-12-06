const ApiService = {

    ListUsers: () => fetch('http://localhost:7000/api/users')
                                .then(res => res.json())
    ,
    CheckoutUser:  ({ id }) => fetch(`http://localhost:7000/api/users/${id}/checkout`, {method: 'PUT'})
    
    ,
    UpdateUser: (id, payload) => fetch(`http://localhost:7000/api/users/${id}`, 
    {
        method: 'PUT', 
        body: JSON.stringify(payload),
        headers : {'content-type' : 'application/json'}
    })

    
}
export default ApiService;