import React, {useState} from 'react'

const Content = ({contract, contract2}) => {
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

    const approve = async () => {
        // const spender = "0xBF192b20668920eE77BF42Aa9Bf9B394a92a7D9e"
        const spender = "0xeCE39b520C0d8B5Baa74819a42b87778B77B6B1f"

        console.log(await contract2.methods.approve(spender, "100000000000")
            .send({from: "0x041E7912541745A67F8c652a6bEe3CBAd131481d"}))

        // check allowance
        console.log(await contract2.methods.allowance("0xF54b3294616d39749732Ac74F234F46C9ABf29C4", spender)
            .call())
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

            <br/>

            <button onClick={approve}> Approve </button>
        </>
    )
}

export default Content