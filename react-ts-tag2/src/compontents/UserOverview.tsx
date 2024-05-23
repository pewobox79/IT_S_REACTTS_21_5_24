import axios from 'axios';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
const UserOverview = () => {

    async function getUser(){
        
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return await response.data

    }

    const query=useQuery({
        queryKey: ["users"],
        queryFn: getUser
    })

console.log("data", query)

    /* useEffect(()=>{
    
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => console.log("res", response.data))
            .catch(err => {
                console.log(err)
            })
        }, [])
     */

        const ListOfUsers = query.data?.map((item)=>{
                return <div key={item.id}>{item.name}</div>
        })
    return (
        <div>
{ListOfUsers}
{query.isLoading && <p>Loading....</p>}

        </div>
    )
}

export default UserOverview
