async function run() {
	const { ClientBuilder } = require('@iota/client')

    const express = require('express')
    const app = express()
    const port = process.env.PORT || 3000

    const client = new ClientBuilder('https://api.lb-0.testnet.chrysalis2.com').build();
    const info = await client.getInfo();

    app.set('trust proxy', true);

    app.get('/convert', async (req, res) => {
        
        console.log('API called by ', req.ip, req.ips);
        if(!req.query.address) {
            res.status(400);
            res.send({'message': 'Invalid address provided!'})
            return;
        }
        const addr = await client.hexToBech32(req.query.address, info.nodeinfo.bech32HRP);
        res.send({'address': addr});
        return;
    });

    app.listen(port, () => {
        console.log(`Address converter running on port ${port}`)
    });
}

run()
