import React from 'react'
import {signatureUtils} from "@0x/order-utils"
import {RPCSubprovider, SignerSubprovider, Web3ProviderEngine} from "@0x/subproviders"

const rinkeby_infura_url = "https://rinkeby.infura.io/v3/e180608a18e74c5397b40e760f7a31f7"

const Main4 = () => {
        const test = async () => {
        const providerEngine = new Web3ProviderEngine();
        providerEngine.addProvider(new SignerSubprovider(window.web3.currentProvider));
        providerEngine.addProvider(new RPCSubprovider(rinkeby_infura_url));
        providerEngine.start();

        const order = {
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

        const signature = await signatureUtils.ecSignOrderAsync(
            providerEngine,
            order,
            "0xA853531E6bd0129c9389738E8F00603619e15fE2"
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