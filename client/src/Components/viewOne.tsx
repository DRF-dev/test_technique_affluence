import React, { useState, useEffect, Props, FunctionComponent } from "react"
import axios from "axios"

const One = (props: any) => {
    const [data, setData] = useState<any[]>()

    useEffect(() => {
        axios.get(`/api/${props.match.params.id}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            {data?.map(elm => {
                return(
                    <ul>
                        <li>titre : {elm.titre}</li>
                        <li>description : {elm.description}</li>
                        <li>date d'écheance : {elm.date_echeance}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default One