import React from 'react'

const Main3 = () => {
    const tx = {
        chainId: 4,
        exchangeAddress: '0x198805e9682fceec29413059b68550f92868c129',
        makerAddress: '0x31bcb5371d2a847ef15a9cc80339ec069b8f4964',
        takerAddress: '0x0000000000000000000000000000000000000000',
        feeRecipientAddress: '0x0000000000000000000000000000000000000000',
        senderAddress: '0x0000000000000000000000000000000000000000',
        makerAssetAmount: 1000000000000000000,
        takerAssetAmount: 2000000000000000000,
        makerFee: 0,
        takerFee: 0,
        expirationTimeSeconds: 1621227432,
        salt: 58607550732964590110595439505801883021839261307660472970772029207960142953111,
        makerAssetData: '0xf47261b00000000000000000000000008ad3aa5d5ff084307d28c8f514d7a193b2bfe725',
        takerAssetData: '0xf47261b00000000000000000000000008080c7e4b81ecf23aa6f877cfbfd9b0c228c6ffa',
        makerFeeAssetData: '0x',
        takerFeeAssetData: '0x'
    }

    // const connect = async () => {
    //     await window.ethereum.enable()
    //     // console.log(await window.ethereum.request({method: 'eth_requestAccounts'}))
    //     console.log(await window.ethereum.request({method: 'eth_requestAccounts'}))
    //
    // }
    //
    // const send = async () => {
    //     const params = [
    //         {
    //             from: '0xA853531E6bd0129c9389738E8F00603619e15fE2',
    //             to: '0x1002271d02E8a72aA642855A56394791fb3cb46D',
    //             gas: '0x76c0', // 30400
    //             gasPrice: '0x9184e72a000', // 10000000000000
    //             value: '1000000000000000' // 2441406250
    //         },
    //     ]
    //
    //     console.log(await window.ethereum.request({method: 'eth_sendTransaction', params}))
    // }
    //
    // const requestPermission = async () => {
    //     window.ethereum
    //         .request({
    //             method: 'wallet_requestPermissions',
    //             params: [{ eth_accounts: {} }],
    //         })
    //         .then((permissions) => {
    //             const accountsPermission = permissions.find(
    //                 (permission) => permission.parentCapability === 'eth_accounts'
    //             )
    //             if (accountsPermission) {
    //                 console.log('eth_accounts permission successfully requested!')
    //             }
    //         })
    // }
    //
    // const getEncryptionPublicKey = async () => {
    //     const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
    //
    //     window.ethereum
    //         .request({
    //             method: 'eth_getEncryptionPublicKey',
    //             params: [accounts[0]], // you must have access to the specified account
    //         })
    //         .then((result) => {
    //             console.log(result)
    //         })
    //         .catch((error) => {
    //             if (error.code === 4001) {
    //                 // EIP-1193 userRejectedRequest error
    //                 console.log("We can't encrypt anything without the key.")
    //             } else {
    //                 console.error(error)
    //             }
    //         })
    // }

    // const sign = async () => {
    //
    //     const msgParams = JSON.stringify({
    //         domain: {
    //             chainId: 4,
    //             name: '0x Protocol',
    //             verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    //             version: '1',
    //         },
    //
    //         // Defining the message signing data content.
    //         message: tx,
    //         primaryType: 'Mail',
    //         types: {
    //             // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
    //             EIP712Domain: [
    //                 { name: 'name', type: 'string' },
    //                 { name: 'version', type: 'string' },
    //                 { name: 'chainId', type: 'uint256' },
    //                 { name: 'verifyingContract', type: 'address' },
    //             ],
    //             // Not an EIP712Domain definition
    //             Group: [
    //                 { name: 'name', type: 'string' },
    //                 { name: 'members', type: 'Person[]' },
    //             ],
    //             // Refer to PrimaryType
    //             Mail: [
    //                 { name: 'from', type: 'Person' },
    //                 { name: 'to', type: 'Person[]' },
    //                 { name: 'contents', type: 'string' },
    //             ],
    //             // Not an EIP712Domain definition
    //             Person: [
    //                 { name: 'name', type: 'string' },
    //                 { name: 'wallets', type: 'address[]' },
    //             ],
    //             OrderRequest: [
    //                 {name: "chainId", type: "uint256"},
    //                 {name: "exchangeAddress", type: "address"},
    //                 {name: "makerAddress", type: "address"},
    //                 {name: "takerAddress", type: "address"},
    //                 {name: "feeRecipientAddress", type: "address"},
    //                 {name: "senderAddress", type: "address"},
    //                 {name: "makerAssetAmount", type: "uint256"},
    //                 {name: "takerAssetAmount", type: "uint256"},
    //                 {name: "makerFee", type: "uint256"},
    //                 {name: "takerFee", type: "uint256"},
    //                 {name: "expirationTimeSeconds", type: "uint256"},
    //                 {name: "salt", type: "uint256"},
    //                 {name: "makerAssetData", type: "address"},
    //                 {name: "takerAssetData", type: "address"},
    //                 {name: "makerFeeAssetData", type: "address"},
    //                 {name: "takerFeeAssetData", type: "address"},
    //             ]
    //         },
    //     });
    //
    //     var from = "0xA853531E6bd0129c9389738E8F00603619e15fE2";
    //
    //     var params = [from, msgParams];
    //     var method = 'eth_signTypedData_v4';
    //
    //      console.log(await window.ethereum.request({method, params, from}))
    // }

    const sign = async () => {
        const msgParams = JSON.stringify({
            domain: {
                // Defining the chain aka Rinkeby testnet or Ethereum Main Net
                chainId: 4,
                // Give a user friendly name to the specific contract you are signing for.
                name: 'Ether Mail',
                // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
                verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
                // Just let's you know the latest version. Definitely make sure the field name is correct.
                version: '1',
            },

            // Defining the message signing data content.
            message: tx,
            // Refers to the keys of the *types* object below.
            primaryType: 'Mail',
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
                Order: [
                    {name: 'chainId', type: 'uint'},
                    {name: 'exchangeContractAddress', type: 'address'},
                    {name: 'makerAddress', type: 'address'},
                    {name: 'takerAddress', type: 'address'},
                    {name: 'feeRecipientAddress', type: 'address'},
                    {name: 'senderAddress', type: 'address'},
                    {name: 'makerAssetAmount', type: 'uint'},
                    {name: 'takerAssetAmount', type: 'uint'},
                    {name: 'makerFee', type: 'uint'},
                    {name: 'takerFee', type: 'uint'},
                    {name: 'expirationTimeSeconds', type: 'uint'},
                    {name: 'salt', type: 'uint'},
                    {name: 'makerAssetData', type: 'address'},
                    {name: 'takerAssetData', type: 'address'},
                    {name: 'makerFeeAssetData', type: 'address'},
                    {name: 'takerFeeAssetData', type: 'address'},

                ]
            },
        });

        var from = "0xA853531E6bd0129c9389738E8F00603619e15fE2";

        var params = [from, msgParams];
        var method = 'eth_signTypedData_v4';

        console.log(await window.ethereum.request({method, params, from,}))
    }

    return (
        <>
            {/*<button onClick={connect}>connect</button><br/>*/}
            {/*<button onClick={send}>send eth</button><br/>*/}
            {/*<button onClick={requestPermission}>Request Permission</button><br/>*/}
            {/*<button onClick={getEncryptionPublicKey}>Get Encryption Public Key</button><br/>*/}
            {/*<br/><br/>*/}

            <button onClick={sign}>Sign Test</button>
        </>
    )
}

export default Main3