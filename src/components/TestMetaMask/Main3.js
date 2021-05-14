import React from 'react'

const Main3 = () => {
    const tx = {
        from: '0xA853531E6bd0129c9389738E8F00603619e15fE2',
        to: '0x1002271d02E8a72aA642855A56394791fb3cb46D',
        gas: '0x76c0', // 30400
        gasPrice: '0x9184e72a000', // 10000000000000
        value: '0x9184e72a', // 2441406250
    }

    const connect = async () => {
        await window.ethereum.enable()
        // console.log(await window.ethereum.request({method: 'eth_requestAccounts'}))
        console.log(await window.ethereum.request({method: 'eth_requestAccounts'}))

    }

    const send = async () => {
        const params = [
            {
                from: '0xA853531E6bd0129c9389738E8F00603619e15fE2',
                to: '0x1002271d02E8a72aA642855A56394791fb3cb46D',
                gas: '0x76c0', // 30400
                gasPrice: '0x9184e72a000', // 10000000000000
                value: '1000000000000000' // 2441406250
            },
        ]

        console.log(await window.ethereum.request({method: 'eth_sendTransaction', params}))
    }

    const requestPermission = async () => {
        window.ethereum
            .request({
                method: 'wallet_requestPermissions',
                params: [{ eth_accounts: {} }],
            })
            .then((permissions) => {
                const accountsPermission = permissions.find(
                    (permission) => permission.parentCapability === 'eth_accounts'
                )
                if (accountsPermission) {
                    console.log('eth_accounts permission successfully requested!')
                }
            })
    }

    const getEncryptionPublicKey = async () => {
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})

        window.ethereum
            .request({
                method: 'eth_getEncryptionPublicKey',
                params: [accounts[0]], // you must have access to the specified account
            })
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                if (error.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    console.log("We can't encrypt anything without the key.")
                } else {
                    console.error(error)
                }
            })
    }

    const sign_v4 = async () => {
        const msgParams = JSON.stringify({
            domain: {
                // Defining the chain aka Rinkeby testnet or Ethereum Main3 Net
                chainId: 4,
                // Give a user friendly name to the specific contract you are signing for.
                name: 'Test',
                // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
                verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
                // Just let's you know the latest version. Definitely make sure the field name is correct.
                version: '1',
            },

            // Defining the message signing data content.
            message: tx,
            // Refers to the keys of the *types* object below.
            primaryType: 'Contract',
            types: {
                // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
                EIP712Domain: [
                    { name: 'name', type: 'string' },
                    { name: 'version', type: 'string' },
                    { name: 'chainId', type: 'uint256' },
                    { name: 'verifyingContract', type: 'address' },
                ],
                // Not an EIP712Domain definition
                Group: [
                    { name: 'name', type: 'string' },
                    { name: 'members', type: 'Person[]' },
                ],
                // Refer to PrimaryType
                Mail: [
                    { name: 'from', type: 'Person' },
                    { name: 'to', type: 'Person[]' },
                    { name: 'contents', type: 'string' },
                ],
                // Not an EIP712Domain definition
                Person: [
                    { name: 'name', type: 'string' },
                    { name: 'wallets', type: 'address[]' },
                ],
                Contract: [
                    {name: "from", type: "address"},
                    {name: "to", type: "address"},
                    {name: "gas", type: "uint"},
                    {name: "gasPrice", type: "uint"},
                    {name: "value", type: "uint"}
                ]
            },
        });

        var from = "0xA853531E6bd0129c9389738E8F00603619e15fE2"

        var params = [from, msgParams];
        var method = 'eth_signTypedData_v4';

        const signature = await window.ethereum.request({method, params, from})

        console.log("Signature: " + signature)
    }

    return (
        <>
            {/*<button onClick={connect}>connect</button><br/>*/}
            {/*<button onClick={send}>send eth</button><br/>*/}
            {/*<button onClick={requestPermission}>Request Permission</button><br/>*/}
            {/*<button onClick={getEncryptionPublicKey}>Get Encryption Public Key</button><br/>*/}
            {/*<br/><br/>*/}

            <button onClick={sign_v4}>Sign Test</button>
        </>
    )
}

export default Main3