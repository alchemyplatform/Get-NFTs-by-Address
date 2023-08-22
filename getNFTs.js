// Import necessary modules
const { Alchemy, Network } = require("alchemy-sdk");
require('dotenv').config();

// Configure Alchemy SDK with API key and network
const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);


// Main function to fetch and print NFTs for a specific owner.
const main = async () => {
  // Provided below is a sample address
  // Configure accordingly
  const address = "vitalik.eth";
  const nfts = await alchemy.nft.getNftsForOwner(address);

  // Print NFT details
  // Refer to https://docs.alchemy.com/reference/getnfts to print more fields
  nfts.ownedNfts.forEach((nft) => {
    console.log("Name:", nft.contract.name);
    console.log("Contract Address:", nft.contract.address);
    console.log("Token ID:", nft.tokenId);
    console.log("Token Type:", nft.tokenType);
    console.log("----------------------------------");
  });
};

main(); // Run the main function
