import { useEffect, useState } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        getData()
    }, [url])

    const getData = async ()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            setData(data.recipes)
            setLoading(false)
        })
        .catch((error)=>{
            setLoading(false)
            setError(true)
        })
    }

    return { data, loading, error }
}

export default useFetch