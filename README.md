# IOTA hex to bech32 convertor microservice

## Installation

`npm i`

## Configuration

Modify the node endpoint in `index.js` to your own node.
By default this is set to `https://api.lb-0.testnet.chrysalis2.com`.

## Run

`node index.js`


## Usage

```
Do a request to /convert?address=c80ad44264635f6f79c5b529e26b7c47680d1a59a7e53b916cb4cf2cfd802186
```

You will receive the bech32 format back in JSON format:

```
{
address: "atoi1qryq44zzv3347mmeck6jncnt03rksrg6txn72wu3dj6v7t8asqscvrdmtd9"
}
```
