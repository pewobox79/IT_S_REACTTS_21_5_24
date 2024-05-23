import UserOverview from "@/compontents/UserOverview"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const UserPage = () => {
    
    return (
        <QueryClientProvider client={queryClient}>
            <h3>user</h3> 
            <UserOverview/>  
        </QueryClientProvider>
    )
}

export default UserPage
