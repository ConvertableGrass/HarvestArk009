document.addEventListener('DOMContentLoaded', () => {
  const walletAddress = localStorage.getItem('walletAddress');

  if (!walletAddress) {
    alert('No wallet connected. Redirecting to login.');
    window.location.href = 'index.html';
    return;
  }

  // 🧪 Simulated player data lookup (replace with real DB or Supabase later)
  const playerDataMap = {
    '0x742d…8f3a': {
      name: 'Starlord',
      claimCores: 12584,
      farmingLevel: 32,
      exploringLevel: 28,
      miningLevel: 41,
      combatLevel: 55,
      craftingLevel: 24,
      lastLogin: '2025-06-14',
    },
  };

  // 🔍 Fallback if wallet not found in mock
  const player = playerDataMap[walletAddress] || {
    name: 'New Explorer',
    claimCores: 0,
    farmingLevel: 1,
    exploringLevel: 1,
    miningLevel: 1,
    combatLevel: 1,
    craftingLevel: 1,
    lastLogin: 'First Login',
  };

  // 💳 Inject wallet + Claim Core balance
  document.getElementById('wallet-address').textContent = walletAddress;
  document.getElementById('claim-core').textContent = `🪙 ${player.claimCores.toLocaleString()}`;

  // 🌱 Skill Grid Update
  const skillCards = document.querySelectorAll('.skill-card');
  if (skillCards.length >= 5) {
    skillCards[0].innerHTML = `🌱 <strong>Farming</strong><br/>Level ${player.farmingLevel}<br/><span>XP TBD</span>`;
    skillCards[1].innerHTML = `🧭 <strong>Exploring</strong><br/>Level ${player.exploringLevel}<br/><span>XP TBD</span>`;
    skillCards[2].innerHTML = `⛏️ <strong>Mining</strong><br/>Level ${player.miningLevel}<br/><span>XP TBD</span>`;
    skillCards[3].innerHTML = `⚔️ <strong>Combat</strong><br/>Level ${player.combatLevel}<br/><span>XP TBD</span>`;
    skillCards[4].innerHTML = `🔧 <strong>Crafting</strong><br/>Level ${player.craftingLevel}<br/><span>XP TBD</span>`;
  }

  // 🧭 Quest Tab Toggle Behavior
  document.querySelectorAll('.quest-tabs .tab').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.quest-tabs .tab.active').classList.remove('active');
      button.classList.add('active');

      const isLevel = button.textContent.includes('Level');
      document.getElementById('level-quests').classList.toggle('hidden', !isLevel);
      document.getElementById('achievement-quests').classList.toggle('hidden', isLevel);
    });
  });
});
