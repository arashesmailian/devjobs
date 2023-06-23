import { useLocation, useSearchParams } from "react-router-dom"

export const useQueryParams = ()=>{
    const location = useLocation()
    const [searchParams,setSearchParams] = useSearchParams({})
    const {info,loc,fullTime} = Object.fromEntries(new URLSearchParams(location.search))

    function setQueryParams(infoParam:string,locationParam:string,fullTimeStatus:boolean){
        setSearchParams({info:infoParam,loc:locationParam,fullTime:String(fullTimeStatus)})
    }

    return {info,loc,fullTime:fullTime==='true',setQueryParams}
}
