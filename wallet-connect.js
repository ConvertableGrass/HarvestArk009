// wallet-connect.js
const APP_NAME = 'Harvest Ark';
const APP_LOGO_URL = './logo.png';

const walletLink = new window.WalletLink({
  appName: APP_NAME,
  appLogoUrl: APP_LOGO_URL,
});

const ethereum = walletLink.makeWeb3Provider(
  'https://mainnet.infura.io/v3/YOUR_INFURA_KEY',
  1
);

async function connectWallet() {
  try {
    const accounts = await ethereum.enable();
    const walletAddress = accounts[0];

    // Save to localStorage
    localStorage.setItem('walletAddress', walletAddress);

    // Redirect to dashboard
    window.location.href = 'dashboard.html';
  } catch (error) {
    console.error('Wallet connection failed:', error);
  }
}

document.getElementById('connect-wallet').addEventListener('click', connectWallet);
