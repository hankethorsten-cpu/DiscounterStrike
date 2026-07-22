/*
Discounter Theme
Diese Datei nach dem Download in "theme.js" umbenennen.
*/

window.GAME_THEME = {
  id: "labor",

  game: {
    title: "Lab-Strike",
    titleFirst: "Lab-Strike",
    titleSecond: "",
    splashAlt: "Discounter Strike Titelbild",
    splashHint: "Beliebige Taste oder Klick",
    footerNotice: "Fiktives Arcade-Spiel ohne reale Marken oder Personen."
  },

  hud: {
    score: "PUNKTE",
    level: "LEVEL",
    day: "Tag",
    time: "Uhrzeit",
    enemies: "Gegner",
    weapon: "Waffe",
    ammo: "Munition",
    speed: "Tempo",
    noWeapon: "keine",
    normalSpeed: "normal",
    soundOn: "🔊 Sound",
    soundOff: "🔇 Stumm",
    remainingLives: "Verbleibende Leben"
  },

  calendar: {
    weekDays: ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"],
    weekLabel: "Woche",
    hourSuffix: "Uhr",
    levelComplete: "{time} geschafft!"
  },

  start: {
  headingFirst: "Lab",
  headingSecond: "Strike",

  intro: "Verteidige dein Labor von 07:00 bis 24:00 Uhr – oder spiele ohne Ende weiter.",
  
controls:
  "<b>Menü</b><br>" +
  "Mit A/D oder ←/→ Spielart wählen · F oder Leertaste starten<br>" +
  "<b>Spiel</b><br>" +
  "Mit WASD oder Pfeiltasten deine Figur steuern · F/Leertaste schießt nach oben · G schießt waagerecht in Blickrichtung · Pause mit P · Beenden über das Pausemenü mit ESC",



  boxes: [
    {
      title: "🧪 Ziel",
      text: "Führe dein Labor sicher durch den Arbeitstag und weiche Gefahren."
    },
    {
      title: "⚗️ Ausrüstung",
      text: "Nutze Reagenzgläser, Erlenmeyerkolben, Desinfektion und weiteres als Waffen."
    },
    {
      title: "🦠 Gegner",
      text: "Bekämpfe Legionellen, Pseudomonas und Andere mit der richtigen Ausrüstung."
    },
    {
      title: "⬆️ Upgrades",
      text: "Verbessere nach jeder Runde dauerhaft deine Laborausrüstung und deine Fähigkeiten."
    }
  ],

  modeAria: "Spielmodus",
  storyTitle: "📖 Storymodus",
  storyText: "Montag von 07:00 Uhr bis 24:00 Uhr. Das Spiel endet nach dem DAkkS-Audit.",
  endlessTitle: "♾️ Endlosmodus",
  endlessText: "Nach Montag geht es mit Dienstag, Mittwoch usw. weiter. ",
  startButton: "🎮 Spiel starten"
},

pause: {
  titleFirst: "Spiel",
  titleSecond: "pausiert",
text: "Drücke <b>P</b> zum Fortsetzen.<br>Drücke <b>ESC</b> zum Beenden und um zum Hauptmenü zurückzukehren<br><br>Es gibt einen Cheat-Code ... errätst du ihn?."
},

enemies: {
  raider: {
    name: "Legionella"
  },

  pirate: {
    name: "Pseudomonas"
  },

  goblin: {
    name: "Superkeim"
  }
},

  bosses: {
    boss01: "Wütender Kunde",
    boss02: "Rechnungen",
    boss03: "VKA-Proben",
    boss04: "Probenberg",
    boss05: "Sonderwünsche",
    boss06: "DAkkS Prüfung",
    warning: "⚠ BOSS: {name} ⚠",
    encounter: "ENDGEGNER!"
  },

  weapons: {
    mustard: "Desinfektionsmittel",
    ketchup: "Neutralisationsmittel",
    chili: "Biozid-Bombe",
    pizza: "Petrischalen-Splitter",
    wave: "UV-Strahlung",
    watermelon: "Biozid-Kanister"
  }
};
