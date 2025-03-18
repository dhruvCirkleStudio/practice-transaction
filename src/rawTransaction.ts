import Web3, { Web3Account } from "web3";

const web3 = new Web3("http://127.0.0.1:8545/")

const rawTransaction = async () => {

    const sender= web3.eth.accounts.privateKeyToAccount("0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e");

    const reciever = web3.eth.accounts.wallet.create(1)[0];
    console.log(reciever)

    const block = await web3.eth.getBlock("latest");

    if (block.baseFeePerGas) {

        const transaction = {
            from: sender.address,
            to: reciever.address,
            value: 100,
            maxFeePerGas: block.baseFeePerGas * 2n,
            maxPriorityFeePerGas: 100000,
        }

        const signTrasaction = await web3.eth.accounts.signTransaction(
            transaction,
            sender.privateKey,
        );

        const sendTransaction = await web3.eth.sendSignedTransaction(signTrasaction.rawTransaction);

        console.log(sendTransaction);

    }

}

export default rawTransaction;