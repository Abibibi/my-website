// 1st project pictures imports
import gratitudePicture1 from 'src/styles/assets/images/screenshots/gratitude/device/gratitude_1.png';
import gratitudePicture2 from 'src/styles/assets/images/screenshots/gratitude/device/gratitude_2.png';
import gratitudePicture3 from 'src/styles/assets/images/screenshots/gratitude/device/gratitude_3.png';
import gratitudePicture4 from 'src/styles/assets/images/screenshots/gratitude/device/gratitude_4.png';
import gratitudePicture5 from 'src/styles/assets/images/screenshots/gratitude/device/gratitude_5.png';

// 2nd project pictures imports
import serialKillerPicture1 from 'src/styles/assets/images/screenshots/serialkiller/device/serialkiller_1.png';
import serialKillerPicture2 from 'src/styles/assets/images/screenshots/serialkiller/device/serialkiller_2.png';
import serialKillerPicture3 from 'src/styles/assets/images/screenshots/serialkiller/device/serialkiller_3.png';
import serialKillerPicture4 from 'src/styles/assets/images/screenshots/serialkiller/device/serialkiller_4.png';
import serialKillerPicture5 from 'src/styles/assets/images/screenshots/serialkiller/device/serialkiller_5.png';
import serialKillerPicture6 from 'src/styles/assets/images/screenshots/serialkiller/device/serialkiller_6.png';
import serialKillerPicture7 from 'src/styles/assets/images/screenshots/serialkiller/device/serialkiller_7.png';
import serialKillerPicture8 from 'src/styles/assets/images/screenshots/serialkiller/device/serialkiller_8.png';
import serialKillerPicture9 from 'src/styles/assets/images/screenshots/serialkiller/device/serialkiller_9.png';
import serialKillerPicture10 from 'src/styles/assets/images/screenshots/serialkiller/device/serialkiller_10.png';
import serialKillerPicture11 from 'src/styles/assets/images/screenshots/serialkiller/device/serialkiller_11.png';

// 3rd project pictures imports
import mesProchainesVacancesPicture1 from 'src/styles/assets/images/screenshots/mesprochainesvacances/device/mesprochainesvacances_1.png';
import mesProchainesVacancesPicture2 from 'src/styles/assets/images/screenshots/mesprochainesvacances/device/mesprochainesvacances_2.png';
import mesProchainesVacancesPicture3 from 'src/styles/assets/images/screenshots/mesprochainesvacances/device/mesprochainesvacances_3.png';

// 4th project pictures imports
import monAnnee2020Picture1 from 'src/styles/assets/images/screenshots/monannee2020/device/monannee2020_1.png';
import monAnnee2020Picture2 from 'src/styles/assets/images/screenshots/monannee2020/device/monannee2020_2.png';
import monAnnee2020Picture3 from 'src/styles/assets/images/screenshots/monannee2020/device/monannee2020_3.png';

// 5th project pictures imports
import moteurProduit1 from 'src/styles/assets/images/screenshots/moteurproduit/device/moteurproduit_1.png';
import moteurProduit2 from 'src/styles/assets/images/screenshots/moteurproduit/device/moteurproduit_2.png';
import moteurProduit3 from 'src/styles/assets/images/screenshots/moteurproduit/device/moteurproduit_3.png';

// 6th project pictures imports
import assistantImpression1 from 'src/styles/assets/images/screenshots/assistantimpression/device/assistantimpression_1.png';
import assistantImpression2 from 'src/styles/assets/images/screenshots/assistantimpression/device/assistantimpression_2.png';
import assistantImpression3 from 'src/styles/assets/images/screenshots/assistantimpression/device/assistantimpression_3.png';

export default [
  {
    id: 1,
    name: 'Messagerie d\'entreprise orientée teambuilding',
    description: 'Gratitude est une application où des collègues peuvent s\'envoyer des messages d\'encouragement de façon anonyme. Rien de calculé, que de l\'honnêteté.',
    technology: [
      'Express.js',
      'MySQL',
      'Vue.js',
    ],
    demo: 'https://www.linkedin.com/posts/abebangwe_nodejs-expressjs-sql-activity-6634099045537198080-5kd5',
    website: 'https://gratitude.abebangwe.com/',
    github: 'https://github.com/Abibibi/teambuilding-messaging-tool',
    pictures: [
      {
        id: 1,
        pictureContent: gratitudePicture1,
        pictureAlt: 'Page d\'accueil du site Gratitude',
      },
      {
        id: 2,
        pictureContent: gratitudePicture2,
        pictureAlt: 'Page de création d\'espace du site Gratitude',
      },
      {
        id: 3,
        pictureContent: gratitudePicture3,
        pictureAlt: 'Page pour rejoindre un espace sur le site Gratitude',
      },
      {
        id: 4,
        pictureContent: gratitudePicture4,
        pictureAlt: 'Page pour envoyer un message sur le site Gratitude',
      },
      {
        id: 5,
        pictureContent: gratitudePicture5,
        pictureAlt: 'Page où consulter ses messages reçus sur le site Gratitude',
      },
    ],
  },
  {
    id: 2,
    name: 'Réseau social 100 % séries',
    description: 'Serial Killer est à la fois une bibliothèque d\'information et un réseau social autour des séries, où les utilisateurs peuvent publier des avis, chatter et s\'abonner les uns aux autres.',
    technology: [
      'Express.js',
      'PostgreSQL',
      'Sequelize',
      'React',
    ],
    demo: 'https://www.youtube.com/watch?v=36cu4wNc2OA',
    website: 'https://serialkiller.abebangwe.com/',
    github: 'https://github.com/Abibibi/tv-show-social-network',
    pictures: [
      {
        id: 1,
        pictureContent: serialKillerPicture1,
        pictureAlt: 'Page d\'accueil. Dans l\'entête apparaissent une femme et un homme bouche béé devant un ordinateur portable',
      },
      {
        id: 2,
        pictureContent: serialKillerPicture2,
        pictureAlt: 'Page où sélectionner un genre de série',
      },
      {
        id: 3,
        pictureContent: serialKillerPicture3,
        pictureAlt: 'Page de présentation de la série The Handmaid\'s Tale : la vidéo apparaît en haut de la page',
      },
      {
        id: 4,
        pictureContent: serialKillerPicture4,
        pictureAlt: 'Page de présentation de la série The Handmaid\'s Tale : le résumé apparaît en milieu de page',
      },
      {
        id: 5,
        pictureContent: serialKillerPicture5,
        pictureAlt: `Page affichant les résultats d'une recherche de série. 
        La recherche effectuée est "se" et trois résultats apparaissent, 
        dont la série "See" en premier et la série "Insecure" en deuxième`,
      },
      {
        id: 6,
        pictureContent: serialKillerPicture6,
        pictureAlt: 'Fil d\'actualité : il est possible d\'y publier un avis sur une série.',
      },
      {
        id: 7,
        pictureContent: serialKillerPicture7,
        pictureAlt: 'Fil d\'actualité : il est possible d\'y consulter tous les avis émis par les membres du site',
      },
      {
        id: 8,
        pictureContent: serialKillerPicture8,
        pictureAlt: 'Page où apparaissent les résultats d\'une recherche de membre. La recherche effectuée est "j" et les profils affichés sont ceux des membres Juju et Johan, dont il est possible de se désabonner.',
      },
      {
        id: 9,
        pictureContent: serialKillerPicture9,
        pictureAlt: 'Page de profil du membre connecté en session. Y apparaissent une bannière, une photo de profil et le pseudonyme de l\'utilisateur ou de l\'utilisatrice',
      },
      {
        id: 10,
        pictureContent: serialKillerPicture10,
        pictureAlt: `Trois sections du profil utilisateur sont visibles :
        les "infos" (à savoir le prénom, le nom et l'adresse e-mail)
        un jeu où, au clic sur un bouton, le taux d\'addiction aux séries de l'utilisateur ou de l'utilisatrice est révélé 
        les abonnements de l'utilisateur ou de l'utilisatrice connectée en session.`,
      },
      {
        id: 11,
        pictureContent: serialKillerPicture11,
        pictureAlt: 'Messagerie instantanée, disponible sur toutes les pages',
      },
    ],
  },
  {
    id: 3,
    name: 'Compte à rebours de voyage',
    description: 'Après avoir renseigné le lieu et la date de ses prochaines vacances, l\'utilisateur-rice accède à un compte à rebours d\'ici la date de son séjour et à une belle photo de sa destination. Idéal en tant que page d\'accueil.',
    technology: [
      'Express.js',
      'PostgreSQL',
      'Vue.js',
    ],
    demo: 'https://www.linkedin.com/posts/abebangwe_javascript-vuejs-nodejs-activity-6627935589566038016-guO2',
    website: 'https://mesprochainesvacances.abebangwe.com/',
    github: 'https://github.com/Abibibi/next-trip-countdown',
    pictures: [
      {
        id: 1,
        pictureContent: mesProchainesVacancesPicture1,
        pictureAlt: 'Formulaire où renseigner son prénom (ici, Abi) ainsi que son prochain lieu (ici, Kinshasa) et sa prochaine date de séjour (ici, le 8 mars 2020)',
      },
      {
        id: 2,
        pictureContent: mesProchainesVacancesPicture2,
        pictureAlt: 'Affichage d\'une photo en arrière-plan représentant le lieu de séjour et d\'un compte à rebours d\'ici la date de séjour (soit d\'ici le 8 mars 2020)',
      },
      {
        id: 3,
        pictureContent: mesProchainesVacancesPicture3,
        pictureAlt: 'Affichage d\'une photo en arrière-plan représentant le lieu de séjour et d\'un compte à rebours d\'ici une date déjà passée. Le compte à rebours affiche 00:00:00',
      },
    ],
  },
  {
    id: 4,
    name: 'Jeu de prédictions pour 2020',
    technology: [
      'JavaScript Vanilla',
    ],
    description: 'Au clic sur le bouton "Rejouer", une nouvelle prédiction pour 2020 apparaît. Inspiré du filtre Instagram "In 2020 I will be".',
    demo: 'https://www.linkedin.com/posts/abebangwe_javascript-ugcPost-6631169661461377024-jmVz',
    website: 'https://predictions.abebangwe.com/',
    github: 'https://github.com/Abibibi/2020-prediction-game',
    pictures: [
      {
        id: 1,
        pictureContent: monAnnee2020Picture1,
        pictureAlt: 'Affichage d\'une prédiction pour 2020 : "En 2020, je... stalkerai mes collègues sur GitHub"',
      },
      {
        id: 2,
        pictureContent: monAnnee2020Picture2,
        pictureAlt: 'Affichage d\'une prédiction pour 2020 : "En 2020, je... soutiendrai des campagnes de crowdfunding"',
      },
      {
        id: 3,
        pictureContent: monAnnee2020Picture3,
        pictureAlt: 'Affichage d\'une prédiction pour 2020 : "En 2020, je... continuerai le cardio-kickboxing"',
      },
    ],
  },
  {
    id: 5,
    name: 'Moteur de recherche de produit',
    technology: [
      'JavaScript Vanilla',
    ],
    description: 'Après avoir sélectionné une catégorie de produit et renseigné un budget maximal, l\'utilisateur-rice voit apparaître une liste de produits correspondant aux critères saisis.',
    website: 'https://naturalhaircare.abebangwe.com/',
    github: 'https://github.com/Abibibi/product-finder',
    pictures: [
      {
        id: 1,
        pictureContent: moteurProduit1,
        pictureAlt: 'Page d\'accueil où apparaissent des suggestions de produits capillaires',
      },
      {
        id: 2,
        pictureContent: moteurProduit2,
        pictureAlt: 'Page où apparaissent tous les laits capillaires',
      },
      {
        id: 3,
        pictureContent: moteurProduit3,
        pictureAlt: 'Page où apparaissent tous les après-shampoings en-dessous de 15€ après soumission d\'un formulaire par l\'utilisateur ou l\'utilisatrice',
      },
    ],
  },
  {
    id: 6,
    name: 'Assistant d\'impression',
    technology: [
      'JavaScript Vanilla',
    ],
    description: 'Cet outil génère une suite de chiffres pairs ou impairs. Pratique pour imprimer des documents volumineux au format recto-verso.',
    website: 'https://assistantimpression.abebangwe.com/',
    github: 'https://github.com/Abibibi/printing-assistant',
    pictures: [
      {
        id: 1,
        pictureContent: assistantImpression1,
        pictureAlt: 'Formulaire où renseigner un chiffre minimal et un chiffre maximal pour obtenir une suite de chiffres soit paire soit impaire, ce qui est pratique pour les impressions recto-verso.',
      },
      {
        id: 2,
        pictureContent: assistantImpression2,
        pictureAlt: 'Affichage d\'une suite impaire après soumission du formulaire',
      },
      {
        id: 3,
        pictureContent: assistantImpression3,
        pictureAlt: 'Affichage d\'une suite paire après soumission du formulaire',
      },
    ],
  },
];
