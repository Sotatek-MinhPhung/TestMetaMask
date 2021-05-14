import React, {useState} from 'react'

const Content = ({contract}) => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    const handleSetData = async (e) => {
        e.preventDefault()
        const accounts = await window.web3.eth.getAccounts()
        if (accounts[0]) {
            if (await contract.methods.set(a).send({from: accounts[0]})) {
                alert("Set successfully!")
            }
        } else {
            alert("login before using this function")
        }
    }

    const handleGetData = async (e) => {
        e.preventDefault()
        setB(await contract.methods.get().call())
    }

    return (
        <>
            <form onSubmit={handleSetData}>
                <input value={a} type="number" onChange={e => {setA(e.target.value)}} />
                <button type={"submit"}>Set data</button>
            </form>

            <br/>

            <form onSubmit={handleGetData}>
                <p>Data: {b}</p>
                <button type={"submit"}>Get data</button>
            </form>
        </>
    )
}

export default Content