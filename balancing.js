/*
  Discounter Strike – Balancing
  =============================

  Alle Gameplay-Werte können hier geändert werden, ohne die Spiellogik in
  index.html bearbeiten zu müssen.

  DROP-SYSTEM
  -----------
  Jeder Drop-Typ besitzt einen eigenen Timer und wird unabhängig von allen
  anderen Drop-Typen geprüft.

  checkIntervalSeconds: Abstand zwischen zwei Prüfungen in Sekunden
  chancePercent:        Wahrscheinlichkeit je Prüfung in Prozent (0 bis 100)
  maxOnMap:              maximal gleichzeitig vorhandene Objekte dieses Typs
  enabled:               Drop vollständig ein- oder ausschalten
  enabledDuringBoss:     auch während eines Bosskampfs zulassen

  Beispiel:
  checkIntervalSeconds: 2 und chancePercent: 20 bedeutet:
  Alle 2 Sekunden besteht unabhängig eine Chance von 20 Prozent.

  dropRate bei Waffen bleibt eine relative Gewichtung. Die Waffen werden erst
  ausgewählt, nachdem der unabhängige Waffen-Drop erfolgreich ausgelöst wurde.
*/

window.GAME_BALANCE = {
  version: "1.1-independent-drops",

  player: {
    startLives: 3,
    maxDisplayedLives: 6,
    baseSpeed: 260,
    invulnerabilitySeconds: 1.8
  },

  rounds: {
    enemyAmountFactor: 1.7,
    baseEnemyCount: 8,
    additionalEnemiesPerTwoHours: 2,
    maximumHourBonus: 8,
    additionalEnemiesPerDay: 2,
    maximumDayBonus: 6,
    enemySpawnIntervalStart: 1.26,
    enemySpawnIntervalMinimum: 0.52,
    enemySpawnAccelerationPerLevel: 0.035
  },

  drops: {
    weapon: {
      enabled: true,
      enabledDuringBoss: true,
      checkIntervalSeconds: 2.0,
      chancePercent: 20,
      maxOnMap: 4,
      movementSpeed: 70
    },

    speedBoost: {
      enabled: true,
      enabledDuringBoss: true,
      checkIntervalSeconds: 2.0,
      chancePercent: 8,
      maxOnMap: 1,
      movementSpeed: 74
    },
	
	ammo: {
      enabled: true,
      enabledDuringBoss: true,
      checkIntervalSeconds: 2.5,
      chancePercent: 6,
      maxOnMap: 1,
      movementSpeed: 72,
      radius: 22
    },

    life: {
      enabled: true,
      enabledDuringBoss: false,
      checkIntervalSeconds: 5.0,
      chancePercent: 2,
      maxOnMap: 1,
      movementSpeed: 68,
      radius: 22
    },

    fire: {
      enabled: true,
      enabledDuringBoss: true,
      checkIntervalSeconds: 2.5,
      chancePercent: 6,
      maxOnMap: 1,
      movementSpeed: 72,
      radius: 22
    },
	

    shopper: {
      enabled: true,
      enabledDuringBoss: false,
      checkIntervalSeconds: 2.0,
      chancePercent: 25,
      maxOnMap: 6,
      minimumMovementSpeed: 48,
      maximumMovementSpeed: 75
    },

    puddle: {
      enabled: true,
      enabledDuringBoss: false,
      checkIntervalSeconds: 2.0,
      chancePercent: 12,
      maxOnMap: 5,
      radius: 24,
      minimumMovementSpeed: 60,
      maximumMovementSpeed: 77
    }
  },

  weapons: {
    mustard: { dropRate: 29.5, ammo: 20, cooldown: 0.24, projectileSpeed: 1400, damage: 1 },
    ketchup: { dropRate: 18, ammo: 10, cooldown: 0.52, projectileSpeed: 800, damage: 2 },
    chili: { dropRate: 21, ammo: 7, cooldown: 0.85, projectileSpeed: 330, verticalSpeed: -215, gravity: 440, explosionDamage: 3, explosionRadius: 200 },
    pizza: { dropRate: 18, ammo: 9, cooldown: 0.72, projectileSpeed: 600, damage: 2 },
    wave: { dropRate: 10, ammo: 12, cooldown: 0.55, projectileSpeed: 450, damage: 2, growth: 180 },
    watermelon: { dropRate: 4, ammo: 1, cooldown: 1.15, projectileSpeed: 330, verticalSpeed: -265, gravity: 430 },
    infinite: { dropRate: 5, durationSeconds: 10 }
  },

  enemies: {
    levelSpeedIncrease: 2.4,
    raider: { hp: 1, speed: 56, score: 100 },
    pirate: { hp: 2, speed: 71, score: 150 },
    goblin: { hp: 3, speed: 85, score: 210 }
  },

  bosses: {
    levelSpeedIncrease: 0.8,
    giantCart: { hp: 18, speed: 62, score: 1500 },
    supplier: { hp: 24, speed: 66, score: 2200 },
    technician: { hp: 30, speed: 70, score: 3000 },
    forklift: { hp: 36, speed: 74, score: 4000 },
    toiletPyramid: { hp: 44, speed: 78, score: 5500 },
    cleaner: { hp: 55, speed: 82, score: 7500 }
  },

  upgrades: {
    choicesPerRound: 3,
    speed: { dropRate: 1, factor: 1.12 },
    life: { dropRate: 1, additionalLives: 1 },
    ammo: { dropRate: 1, factor: 1.30 },
    fire: { dropRate: 1, factor: 0.85 },
    ram: { dropRate: 1 },
    puddle: { dropRate: 1, factor: 0.72 }
  },

  powerups: {
    movementSpeed: 70,
    speedBoostMovementSpeed: 74,
    bossWeaponMovementSpeed: 25,
    guaranteedWeaponAfterSeconds: 10,
    guaranteedWeaponBossSeconds: 2,
    guaranteedWeaponNormalSeconds: 9,
    speedBoostFactor: 1.55,

    speed: {
      durationSeconds: 10
    },

    ammo: {
      durationSeconds: 10
    },

    life: {
      additionalLives: 1
    },

    fire: {
      durationSeconds: 10,
      projectileCount: 3,
      spreadPixels: 28
    }
  }
};
