import React, {useState} from 'react'
import Web3 from "web3";
import MyContract from "../../abis/MyContract.json"

const rinkeby_infura_url = "https://rinkeby.infura.io/v3/e180608a18e74c5397b40e760f7a31f7"
const web3 = new Web3(rinkeby_infura_url)
const contractAddress = MyContract.networks["4"].address
const abi = MyContract.abi
const account1 = {
    ADDRESS: "0xA853531E6bd0129c9389738E8F00603619e15fE2",
    PRIVATE_KEY: "36d712be341d6564d24e3844e698c4269eb8302fafadcb13957dbe249e1737d5"
}


const contract = new web3.eth.Contract(abi, contractAddress)

const Main = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    // const handleSetData = async (e) => {
    //     e.preventDefault()
    //     const networkId = await web3.eth.net.getId();
    //     console.log(a)
    //     const tx = contract.methods.set(a);
    //     const gas = await tx.estimateGas({from: account1.ADDRESS});
    //     const gasPrice = await web3.eth.getGasPrice();
    //     const data = tx.encodeABI();
    //     const nonce = await web3.eth.getTransactionCount(account1.ADDRESS);
    //
    //     const signedTx = await web3.eth.accounts.signTransaction(
    //         {
    //             to: contract.options.address,
    //             data,
    //             gas,
    //             gasPrice,
    //             nonce,
    //             chainId: networkId
    //         },
    //         account1.PRIVATE_KEY
    //     );
    //     console.log(signedTx)
    //
    //     if (await web3.eth.sendSignedTransaction(signedTx.rawTransaction)) {
    //         alert("Set successfully!")
    //     }
    // }

    const handleSetData = async (e) => {
        e.preventDefault()

        const from = "0xA853531E6bd0129c9389738E8F00603619e15fE2"
        const to = "0x1002271d02E8a72aA642855A56394791fb3cb46D"
        const gas = "0x76c0"
        const gasPrice = "0x9184e72a000"
        const value = "0x9184e72a"

        const signedTx = await web3.eth.accounts.signTransaction(
            {
                from,
                to,
                gas,
                gasPrice,
                value
            },
            account1.PRIVATE_KEY
        );
        console.log("sig: " + signedTx.rawTransaction)

        if (await web3.eth.sendSignedTransaction(signedTx.rawTransaction)) {
            alert("Set successfully!")
        }
    }



    const handleGetData = async (e) => {
        e.preventDefault()
        const web3 = new Web3(rinkeby_infura_url)
        const networkId = await web3.eth.net.getId();
        const myContract = new web3.eth.Contract(
            MyContract.abi,
            MyContract.networks[networkId].address
        );

        setB(await myContract.methods.get().call())
    }

    return (
        <div>
            <h1>With private key</h1>

            <form onSubmit={handleSetData}>
                <input value={a} type="number" onChange={e => {setA(e.target.value)}} />
                <button type={"submit"}>Set data</button>
            </form>

            <br/>

            <form onSubmit={handleGetData}>
                <p>Data: {b}</p>
                <button type={"submit"}>Get data</button>
            </form>
        </div>
    )
}

export default Main