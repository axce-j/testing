import React, { useEffect, useState } from 'react'
import AnimeData from '../../../hooks/useAnime';

const useFilter = ({
    genres,
    rating,
    season,
    type,
    year,
    episodes,
    status,
    score
}) => {

    const [data, setData] = useState([])

    const [filters, setFilters] = useState({
        genres:"",
        rating:"",
        season:"",
        type:"",
        year:"",
        episodes:"",
        status:"",
        score:""
    })
    
        let dataFilteredArray = []
    
        const { isError:animeIsError, isLoading:animeIsLoading, data:animeData, error:animeError } = AnimeData();

    useEffect(() => {
     setData(animeData?.data?.data)
     
     setFilters(prev => ({
        ...prev,
        ...(genres && {genres}),
        ...(rating && {rating}),
        ...(season && {season}),
        ...(type && {type}),
        ...(episodes && {episodes}),
        ...(year && {year}),
        ...(status && {status}),
        ...(score && {score}),
    }))
    }, [])
        console.log({data})

    useEffect(() => {
        
        const logdata = data?.length == 0 ? "" : data?.filter(data => data?.includes(status)) 
        console.log(data)
        console.log({logdata})
       data?.length > 0 && dataFilteredArray.push(data?.filter(data => data?.includes({...filters})))
       console.log({data,dataFilteredArray})
       }, [
        genres,
        rating,
        season,
        type,
        year,
        episodes,
        status,
        score
       ])

    // const filterData = dataFilteredArray.length > 0 ? dataFilteredArray.filter(data => data==="") : data.filter(data => data === "")
    
 
    

    return {data}
}

export default useFilter
