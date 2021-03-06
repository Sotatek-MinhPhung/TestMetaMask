import React, {useState ,useEffect} from 'react'
import Web3 from "web3";
import Content from "./Content";
import MyContract from "../../abis/MyContract.json"
import zrxAbi from "../zrxAbi.json"

const contractAddress = MyContract.networks["4"].address
const abi = MyContract.abi

const address = "0x5a1830Ebe15f422C1A9dFC04e2C7ad496cecA12a"
const abi2 = zrxAbi

const Main2 = () => {
    const [contract, setContract] = useState()
    const [contract2, setContract2] = useState()
    const [isConnected, setIsConnected] = useState(false)

    const connect = async () => {
        console.log(contract)

        if(window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
            await initContract(window.web3)
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
            await initContract(window.web3)
        } else {
            window.alert("Non-Ethereum browser detected!")
        }
    }

    const initContract = async (web3) => {
        setContract(new web3.eth.Contract(abi, contractAddress))
        setIsConnected(true)


        setContract2(new web3.eth.Contract(abi2, address))
    }

    useEffect(() => {
        connect()
    }, [])

    return (
        <div>
            <h1>With MetaMask</h1>

            {isConnected ? <Content contract={contract} contract2={contract2} /> : <button onClick={connect}> Connect to MetaMask</button>}
        </div>
    )
}

export default Main2