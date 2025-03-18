import Web3 from "web3"

const web3 = new Web3("http://127.0.0.1:8545/");


const subscribeEvents = async () => {

    const sender = web3.eth.accounts.wallet.add("0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e")[0]

    const receiver = web3.eth.accounts.wallet.create(1)[1];

    const transactionReciept = await web3.eth.sendTransaction({
        from: sender.address,
        to: receiver.address,
        value: 100
    }).on("sending", (sending) => {
        console.log("sending", sending)
    }).on("sent", (sent) => {
        console.log("sent", sent)
    }).on("transactionHash", (hash) => {
        console.log("transactionHash", hash);
    }).on("receipt", (receipt) => {
        console.log("receipt", receipt);
    }).on("confirmation", (confirmation) => {
        console.log('confirmation', confirmation);
    }).on("error", (error) => {
        console.log("error", error);
    })

}

export default subscribeEvents