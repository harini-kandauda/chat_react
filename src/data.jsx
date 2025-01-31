const messagesCreola = [
  { sender: "other", text: "Salut, comment tu vas aujourd'hui ?" },
  { sender: "me", text: "Ça va, merci ! Et toi ?" },
  { sender: "other", text: "Je vais bien aussi, merci de demander ! Tu as prévu quoi aujourd'hui ?" },
  { sender: "me", text: "Je vais faire un peu de travail, puis sortir me détendre. Et toi ?" },
  { sender: "other", text: "J'ai une réunion ce matin, mais après ça, je vais profiter de ma journée." },
  { sender: "me", text: "Sounds good ! Bon courage pour la réunion." },
];

const messagesMario = [
  { sender: "other", text: "Salut, tu as des plans pour ce weekend ?" },
  { sender: "me", text: "Pas encore vraiment, je pense aller faire une petite balade." },
  { sender: "other", text: "Ça a l'air sympa ! Où veux-tu aller ?" },
  { sender: "me", text: "Je pensais à un parc proche, mais je ne suis pas encore décidée." },
  { sender: "other", text: "Tu me tiendras au courant si tu choisis un endroit sympa !" },
  { sender: "me", text: "Bien sûr, je te ferai signe si tu veux te joindre à moi." },
];

const messagesThomas = [
  { sender: "other", text: "Tu as vu le dernier film dont on a parlé ?" },
  { sender: "me", text: "Oui, je l'ai vu hier soir ! C'était vraiment bien." },
  { sender: "other", text: "Je savais que tu allais aimer ! Qu'est-ce qui t'a le plus marqué ?" },
  { sender: "me", text: "J'ai adoré l'intrigue, elle était super bien ficelée. Et les acteurs étaient géniaux !" },
  { sender: "other", text: "Je suis contente que tu aies aimé ! Tu devrais me donner tes recommandations la prochaine fois." },
  { sender: "me", text: "Avec plaisir ! Je vais préparer une liste de films à te conseiller." },
];

const messagesPercy = [
  { sender: "other", text: "Tu as vu ce qu'il s'est passé aujourd'hui ?" },
  { sender: "me", text: "Non, qu'est-ce qu'il s'est passé ?" },
  { sender: "other", text: "Il y a eu une grosse conférence à propos des nouvelles tendances en technologie." },
  { sender: "me", text: "Ah oui, je voulais la suivre, mais je n'avais pas le temps." },
  { sender: "other", text: "Ce n'est pas grave, on peut en discuter quand tu veux !" },
  { sender: "me", text: "Avec plaisir, j'aimerais bien avoir ton avis." },
];

const messagesMaman = [
  { sender: "other", text: "Je voulais te dire que je t'ai bien écoutée l'autre jour." },
  { sender: "me", text: "Oh, merci beaucoup ! C'était important pour moi." },
  { sender: "other", text: "Je sais, je suis content(e) d'avoir pu être là pour toi." },
  { sender: "me", text: "C'est vraiment gentil. Je t'apprécie beaucoup." },
  { sender: "other", text: "C'est réciproque, tu sais." },
  { sender: "me", text: "Je suis vraiment chanceuse de t'avoir dans ma vie." },
];


export const people = [
  {
    id: 0,
    name: "Creola Johnson",
    imageId: "MK3eW3A",
    messages: messagesCreola,
    last: messagesCreola[messagesCreola.length - 1].text,
  },
  {
    id: 1,
    name: "Mario José",
    imageId: "mynHUSa",
    messages: messagesMario,
    last: messagesMario[messagesMario.length - 1].text,
  },
  {
    id: 2,
    name: "Thomas Smith",
    imageId: "bE7W1ji",
    messages: messagesThomas,
    last: messagesThomas[messagesThomas.length - 1].text,
  },
  {
    id: 3,
    name: "Percy Julian",
    imageId: "IOjWm71",
    messages: messagesPercy,
    last: messagesPercy[messagesPercy.length - 1].text,
  },
  {
    id: 4,
    name: "Jean Mardi",
    imageId: "lrWQx8l",
    messages: messagesMaman,
    last: messagesMaman[messagesMaman.length - 1].text,
  },
];
