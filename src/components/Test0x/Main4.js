import React from 'react'
import {signatureUtils} from "@0x/order-utils"
import {MetamaskSubprovider} from "@0x/subproviders";


const Main4 = () => {

    const test = async () => {

        const takerAddress = "0x041E7912541745A67F8c652a6bEe3CBAd131481d"
        const order = {
            chainId: 15,
            exchangeAddress: '0x198805e9682fceec29413059b68550f92868c129',
            makerAddress: '0x041E7912541745A67F8c652a6bEe3CBAd131481d',
            takerAddress: takerAddress,
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

        // TODO: add 2 more params
        // fromToken: string;
        // toToken: string;

        const signature = await signatureUtils.ecSignOrderAsync(
            new MetamaskSubprovider(window.web3.currentProvider),
            order,
            // get from accounts
            "0x041E7912541745A67F8c652a6bEe3CBAd131481d"
        )
        console.log(signature)
    }

    return (
        <>
            <div>
                <br/>
                <button onClick={test}>test</button>
            </div>
        </>
    )
}

export default Main4