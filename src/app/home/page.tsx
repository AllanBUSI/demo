'use client'

import { useState } from "react"



const Home = () => {

    const [value, setValue] = useState('')

    const onChange = (e: any) => {
        setValue(e.target.value)
    }

    return <>
        <h1 style={{
            color: "red"
        }}>{value}</h1>
        <input type="text" onChange={onChange}  />
        <button>valider</button>
    </>
}

export default Home