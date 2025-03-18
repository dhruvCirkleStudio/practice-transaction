import Web3 from "web3"

const web3 = new Web3("http://127.0.0.1:8545/");

const transactionReceipt = async () => {

    const sender = web3.eth.accounts.wallet.add("0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e")[0];

    const reciever = web3.eth.accounts.wallet.create(1)[1];


    console.log(
        'Initial sender balance:',await web3.eth.getBalance(sender.address),
    )
    console.log(
        'Initial receiver balance:',await web3.eth.getBalance(reciever.address)
    )

    // console.log(web3.eth.accounts.wallet)

    const reciept = await web3.eth.sendTransaction({
        from:sender.address,
        to:reciever.address,
        value:100
    })
    // console.log("transaction reciept",reciept)

    console.log(
        "final sender balance:",await web3.eth.getBalance(sender.address),
        "\nfinal reciever balance:",await web3.eth.getBalance(reciever.address)
    )

}

export default transactionReceipt