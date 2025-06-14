const APP_NAME = 'Harvest Ark';
const APP_LOGO_URL = 'logo.png';

const walletLink = new window.WalletLink({
  appName: APP_NAME,
  appLogoUrl: APP_LOGO_URL,
});

const ethereum = walletLink.makeWeb3Provider(
  'https://mainnet.infura.io/v3/YOUR_INFURA_ID', // Replace with actual ID
  1
);

async function connectWallet() {
  try {
    const accounts = await ethereum.enable();
    const walletAddress = accounts[0];
    localStorage.setItem('walletAddress', walletAddress);

    // ✅ First go to transition page
    window.location.href = 'transition.html';
  } catch (err) {
    console.error('Wallet connection error:', err);
  }
}

document.getElementById('connect-wallet').addEventListener('click', connectWallet);
