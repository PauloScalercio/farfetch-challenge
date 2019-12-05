const ApiService = {

    ListUsers: () => fetch('http://localhost:7000/api/users')
                                .then(res => res.json())
    ,
    
}
export default ApiService;