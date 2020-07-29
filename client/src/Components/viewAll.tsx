import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const All = () => {
    const [data, setData] = useState<any[]>()
    const [id, setId] = useState<any>()

    useEffect(()=>{
        axios.get('/api')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <form method="POST" action="/api">
                <div>
                    <label htmlFor="titre">titre</label>
                    <input type="text" name="titre" placeholder="titre" />
                </div>
                <div>
                    <label htmlFor="description">description</label>
                    <input type="text" name="description" placeholder="description" />
                </div>
                <div>
                    <label htmlFor="date_echeance">date_echeance</label>
                    <input type="date" name="date_echeance" placeholder="date_echeance" />
                </div>
                <button type="submit">Ajouter</button>
            </form>
            <form method="POST" action={`/api/${id}?_method=PUT`}>
                <div>
                    <label htmlFor="id">Id a modifier</label>
                    <input type="number" name="id" placeholder="id" onChange={e => setId(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="titre">titre</label>
                    <input type="text" name="titre" placeholder="titre" />
                </div>
                <div>
                    <label htmlFor="description">description</label>
                    <input type="text" name="description" placeholder="description" />
                </div>
                <div>
                    <label htmlFor="date_echeance">date_echeance</label>
                    <input type="date" name="date_echeance" placeholder="date_echeance" />
                </div>
                <button type="submit">Modifier</button>
            </form>
            <form method="POST" action={`/api/${id}?_method=DELETE`}>
                <div>
                    <label htmlFor="id">Id a supprimmer</label>
                    <input type="number" name="id" placeholder="id" onChange={e => setId(e.target.value)} />
                </div>
                <button type="submit">Supprimé</button>
            </form>
            <ul>
                {data?.map(elm => {
                    return <Link to={`/${elm.id}`}><li>titre : {elm.titre}, description : {elm.description}, date d'écheance : {elm.date_echeance}</li></Link>
                })}
            </ul>
        </div>
    )
}

export default All