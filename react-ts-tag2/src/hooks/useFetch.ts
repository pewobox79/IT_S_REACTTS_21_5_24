import {useState, useEffect} from 'react';

export function useFetch(url:string){

    const [data, setData] = useState<React.SetStateAction<null>>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<React.SetStateAction<null | unknown>>(null)


    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Network response failed')
                }
                const json = await response.json();
                setData(json)

            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }

        }
        
        fetchData()
        
    },[url])

    return {data, isLoading, error}


}