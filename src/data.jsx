const anna = {
  name: "Anna Smith",
  pic: "https://media.istockphoto.com/id/1437816897/fr/photo/portrait-de-femme-daffaires-de-gestionnaire-ou-de-ressources-humaines-pour-la-r%C3%A9ussite.jpg?s=612x612&w=0&k=20&c=cmwpzRKoMCRYrHCgy8oqo_LnJl7Afg6vOJrCqwAXz9c=",
  last: "Comment tu vas ?",
};

const jean = {
  name: "Jean Lucas",
  pic: "https://media.istockphoto.com/id/544561300/photo/portrait-of-a-successful-businessman-smiling-at-the-camera.jpg?s=612x612&w=is&k=20&c=z_5-L3QHnLxxMwo07j0ZyZ2Rj7Ue4QNJVrOCMkKUEBA=",
  last: "Ah oui je vois !",
};

const messagesCreola = [
  "Emma : J’ai trop hâte pour notre voyage à Barcelone ! ✈️",
  "Toi : Moi aussi ! On fait quoi en premier en arrivant ? 😍",
  "Emma : La plage, bien sûr ! 🏖️",
  "Toi : Haha, j’hésitais entre ça et la Sagrada Familia !",
  "Emma : On fait les deux, c’est réglé ! 😆",
  "Toi : Et le logement, c’est bon ?",
  "Emma : Oui, j’ai réservé un super Airbnb dans le centre. 🏠",
  "Toi : Trop bien ! J’espère qu’il y aura une bonne paella ! 😋",
];

const messagesMario = [
  "Thomas : Le client a validé notre dernière présentation ! 🎉",
  "Toi : Trop bien ! On pourra finaliser le projet demain matin alors ? 😊",
  "Thomas : Oui, il reste juste à peaufiner les slides 4 et 5.",
  "Toi : Ok, je m’en occupe ce soir.",
  "Thomas : Merci !",
  "Toi : Par contre, tu peux revoir la partie budget ? Il y a un écart.",
  "Thomas : Oui, je regarde ça avant la réunion de demain.",
  "Toi : Top, on gère ! 💪",
];

const messagesThomas = [
  "Julie : Tu es dispo samedi pour l’anniversaire de Max ? 🎂",
  "Toi : Oui, je viens ! Faut ramener quelque chose ?",
  "Julie : Juste toi et ta bonne humeur 😆",
  "Toi : Haha, ça marche ! Ça commence à quelle heure ?",
  "Julie : 19h, chez lui. 🎈",
  "Toi : Ok, j’apporte un gâteau alors ! 🍰",
  "Julie : Trop bien, il adore le chocolat !",
  "Toi : Je note ! Ça va être trop cool 🎉",
];

const messagesPercy = [
  "Clara : T’AS VU LE DERNIER ÉPISODE ??? 😱🔥",
  "Toi : Omg oui ! Je suis pas prête pour la suite… 😭",
  "Clara : Ce plot twist à la fin, j’ai crié !!!",
  "Toi : Pareil ! Je pensais que [SPOILER] allait s’en sortir...",
  "Clara : C’est clair, j’en reviens pas !",
  "Toi : Faut absolument qu’on en parle en détail demain !",
  "Clara : Trop, j’ai besoin d’analyser chaque scène 😂",
  "Toi : Allez, on fait une soirée débat ? 🍿",
  "Clara : Grave ! Je ramène les popcorns ! 🍿",
];

const messagesMaman = [
  "Maman : Coucou mon chéri, tu as bien mangé aujourd’hui ? 😘",
  "Toi : Oui, ne t’inquiète pas ! Et toi ?",
  "Maman : Oui, j’ai fait ton plat préféré, il en reste si tu veux passer ! 🍲",
  "Toi : Oh trop bien, j’arrive demain alors ! 😍",
  "Maman : Parfait, je te garde une part. ❤️",
  "Toi : Merci maman ! Au fait, tu as reçu mon courrier ?",
  "Maman : Oui, je l’ai mis sur la table pour toi.",
  "Toi : Top, à demain !",
];


export const people = [
  {
    id: 0,
    name: "Creola Johnson",
    imageId: "MK3eW3A",
    messages: messagesCreola,
    last: messagesCreola[messagesCreola.length - 1],
  },
  {
    id: 1,
    name: "Mario José",
    imageId: "mynHUSa",
    messages: messagesMario,
    last: messagesMario[messagesMario.length - 1],
  },
  {
    id: 2,
    name: "Thomas Smith",
    imageId: "bE7W1ji",
    messages: messagesThomas,
    last: messagesThomas[messagesThomas.length - 1],
  },
  {
    id: 3,
    name: "Percy Julian",
    imageId: "IOjWm71",
    messages: messagesPercy,
    last: messagesPercy[messagesPercy.length - 1],
  },
  {
    id: 4,
    name: "Maman",
    imageId: "lrWQx8l",
    messages: messagesMaman,
    last: messagesMaman[messagesMaman.length - 1],
  },
];
