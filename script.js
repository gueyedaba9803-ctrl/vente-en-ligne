/**
 * Aynoumadi Boutique - Logic Script
 */

const ADMIN_PASSWORD = 'aynoumadi2026';

// Liste des produits (Rangés par ID, avec les Femmes en premier comme demandé)
const PRODUCTS = [
  // --- FEMME ---
  { id: 1, name: 'Ensemble Imprimé Bleu Marine', category: 'femme', price: 5000, description: 'Ensemble deux pièces blanc à imprimés bleu marine arabesques, chemise boutons et pantalon large.', emoji: '👗', image: 'images/femme1.jpeg' },
  { id: 2, name: 'Ensemble Imprimé Orange Blanc', category: 'femme', price: 5000, description: 'Ensemble deux pièces blanc à imprimés orangés arabesques, style africain festif.', emoji: '👗', image: 'images/femme2.jpeg' },
  { id: 3, name: 'Ensemble Rose Fuchsia Uni', category: 'femme', price: 5000, description: 'Ensemble deux pièces rose fuchsia uni en lin, élégance décontractée.', emoji: '👗', image: 'images/femme3.jpeg' },
  { id: 4, name: 'Ensemble Bordeaux Imprimé', category: 'femme', price: 5000, description: 'Ensemble deux pièces bordeaux à imprimés blancs, tenue de prestige.', emoji: '✨', image: 'images/femme4.jpeg' },
  { id: 5, name: 'Ensemble Pêche Saumon Uni', category: 'femme', price: 5000, description: 'Ensemble deux pièces pêche saumon uni en lin, chemise oversize et pantalon large.', emoji: '👗', image: 'images/femme5.png' },
  { id: 6, name: 'Ensemble Blanc Pur Lin', category: 'femme', price: 5000, description: 'Ensemble deux pièces blanc immaculé en lin, pureté et élégance absolue.', emoji: '👗', image: 'images/femme6.png' },
  { id: 7, name: 'Ensemble Coton Violet Uni', category: 'femme', price: 5000, description: 'Ensemble deux pièces violet uni en coton lin, confort et style.', emoji: '👗', image: 'images/femme7.png' },
  { id: 8, name: 'Ensemble Coton Bleu Ciel Uni', category: 'femme', price: 5000, description: 'Ensemble deux pièces bleu ciel uni en coton lin, fraîcheur.', emoji: '👗', image: 'images/femme8.jpeg' },
  { id: 9, name: 'Ensemble Coton Rose Saumon', category: 'femme', price: 5000, description: 'Ensemble deux pièces rose saumon en coton lin, chemise oversize.', emoji: '👗', image: 'images/femme8.png' },
  { id: 10, name: 'Ensemble Coton Orange Uni', category: 'femme', price: 5000, description: 'Ensemble deux pièces orange uni en coton lin, couleur vibrante.', emoji: '👗', image: 'images/femme9.jpeg' },
  { id: 11, name: 'Ensemble Coton Marron Chocolat', category: 'femme', price: 5000, description: 'Ensemble deux pièces marron chocolat uni en coton lin.', emoji: '👗', image: 'images/femme10.jpeg' },
  { id: 12, name: 'Ensemble Coton Vert Olive', category: 'femme', price: 5000, description: 'Ensemble deux pièces vert olive uni en coton lin.', emoji: '👗', image: 'images/femme11.jpeg' },
  { id: 13, name: 'Boubou Mauve & Noir', category: 'femme', price: 5000, description: 'Boubou mauve lavande avec bordures noires, boutons rosaces, look sophistiqué.', emoji: '👗', image: 'images/femme12.jpeg' },
  { id: 14, name: 'Bubu Vert Forêt & Noir ', category: 'femme', price: 5000, description: 'Bubu vert forêt profond bordé de noir, boutons rosaces noires.', emoji: '👗', image: 'images/femme13.jpeg' },
  { id: 15, name: 'Bubu Bleu Ciel & Noir', category: 'femme', price: 5000, description: 'Bubu bleu ciel bordures noires, boutons rosaces noires.', emoji: '👗', image: 'images/femme14.jpeg' },
  { id: 16, name: 'Robe Blanche Brodée Florale Rouge', category: 'femme', price: 10000, description: 'Robe longue blanche en dentelle anglaise, broderies florales rouges.', emoji: '👗', image: 'images/femme15.jpeg' },
  { id: 17, name: 'Robe Blanche vert bleu', category: 'femme', price: 10000, description: 'Robe longue blanche broderie anglaise, appliqués vert bleu.', emoji: '👗', image: 'images/femme16.jpeg' },
  { id: 18, name: 'Robe Blanche vert rouge ', category: 'femme', price: 10000, description: 'Robe longue blanche broderie anglaise, appliqués vert rouge.', emoji: '👗', image: 'images/femme17.jpeg' },
  { id: 19, name: 'Kimono Wax Géométrique Orange', category: 'femme', price: 10000, description: 'Kimono wax imprimé géométrique multicolore orange et noir.', emoji: '👗', image: 'images/femme18.jpeg' },
  { id: 20, name: 'Ensemble Kimono Wax Or ', category: 'femme', price: 10000, description: 'Kimono wax noir et or avec pantalon assorti, imprimés africains.', emoji: '👗', image: 'images/femme19.jpeg' },
  { id: 21, name: 'Kimono Wax Vert Tropical', category: 'femme', price: 10000, description: 'Kimono wax vert tropical imprimé texturé, bordures bleues.', emoji: '👗', image: 'images/femme20.jpeg' },
  { id: 22, name: 'Kimono Wax Noir & Doré', category: 'femme', price: 10000, description: 'Kimono wax noir et doré imprimés géométriques africains.', emoji: '👗', image: 'images/femme21.jpeg' },
  { id: 23, name: 'Kimono Kente marron & blanc', category: 'femme', price: 10000, description: 'Grand kimono kente marron et blanc à imprimés damiers, prestige.', emoji: '👗', image: 'images/femme22.jpeg' },
  { id: 24, name: 'Kimono Kente Rayé Multicolore', category: 'femme', price: 10000, description: 'Kimono kente rayé multicolore vagues, tissage traditionnel.', emoji: '👗', image: 'images/femme23.jpeg' },
  { id: 25, name: 'Tailleur Bleu Ciel Col Mao', category: 'femme', price: 6000, description: 'Tailleur deux pièces bleu ciel, veste longue col Mao.', emoji: '👗', image: 'images/femme24.png' },
  { id: 26, name: 'Tailleur Blanc Officiel', category: 'femme', price: 6000, description: 'Tailleur deux pièces blanc immaculé, veste longue col Mao.', emoji: '👗', image: 'images/femme25.jpeg' },
  { id: 27, name: 'Tailleur Fuchsia Col Mao', category: 'femme', price: 6000, description: 'Tailleur deux pièces fuchsia vif, veste longue col Mao.', emoji: '👗', image: 'images/femme26.jpeg' },
  { id: 28, name: 'Robe Longue Rouge Wax ', category: 'femme', price: 5000, description: 'Robe longue rouge bordeaux wax imprimé, décolleté drapé.', emoji: '👗', image: 'images/femme27.jpeg' },
  { id: 29, name: ' Robe Tie-Dye Rose Kaki ', category: 'femme', price: 5000, description: 'Robe longue tie-dye rose et kaki, top bustier et jupe ample.', emoji: '👗', image: 'images/femme28.jpeg' },
  { id: 30, name: 'Robe Longue Tie-Dye Mauve & bleu', category: 'femme', price: 5000, description: 'Robe longue tie-dye mauve et bleu, imprimés géométriques.', emoji: '👗', image: 'images/femme29.jpeg' },
  { id: 31, name: 'Robe Longue Tie-Dye Vert Kaki', category: 'femme', price: 5000, description: 'Robe longue tie-dye vert kaki et marron, broderies dorées.', emoji: '👗', image: 'images/femme30.jpeg' },
  { id: 32, name: 'Robe Longue Tie-Dye Mauve', category: 'femme', price: 5000, description: 'Robe longue tie-dye mauve et gris, imprimés géométriques.', emoji: '👗', image: 'images/femme31.jpeg' },
  { id: 33, name: 'Robe One-Shoulder Bleu Wax', category: 'femme', price: 5000, description: 'Robe longue one-shoulder bleu ciel wax imprimé.', emoji: '👗', image: 'images/femme32.jpeg' },


  // --- HOMME – AGBADA (vraies images) ---
  { id: 34, name: 'Agbada Bleu Ciel Losanges', category: 'agbada', price: 28000, description: 'Grand agbada 3 pièces bleu ciel, larges broderies losanges bleu marine sur plastron. Élégance royale.', emoji: '👘', image: 'images/homme13.jpeg' },
  { id: 45, name: 'Agbada Bordeaux Doré Prestige', category: 'agbada', price: 28000, description: 'Grand agbada 3 pièces bordeaux, broderies dorées géométriques et florales sur plastron. Tenue de cérémonie.', emoji: '👘', image: 'images/homme14.jpeg' },
  { id: 46, name: 'Agbada Jaune Or Brodé', category: 'agbada', price: 28000, description: 'Grand agbada 3 pièces jaune or, broderies marron foncé motifs géométriques sur plastron. Allure festive.', emoji: '👘', image: 'images/homme15.jpeg' },
  { id: 51, name: 'Agbada Mauve Spirales Brodées', category: 'agbada', price: 28000, description: 'Grand agbada 3 pièces mauve grisé, broderies dorées spirales triskelion sur plastron. Sophistication moderne.', emoji: '👘', image: 'images/homme16.jpeg' },
  { id: 55, name: 'Agbada Beige Doré Vagues', category: 'agbada', price: 28000, description: 'Grand agbada 3 pièces beige champagne, broderies dorées vagues géométriques sur plastron. Prestige et raffinement.', emoji: '👘', image: 'images/homme17.jpeg' },
  { id: 56, name: 'Agbada Noir Brodé Art Moderne', category: 'agbada', price: 28000, description: 'Grand agbada 3 pièces noir en bazin, broderies multicolores géométriques modernes sur plastron. Classe absolue.', emoji: '👘', image: 'images/homme18.png' },
  { id: 62, name: 'Agbada Bleu Marine Spirales', category: 'agbada', price: 35000, description: 'Grand agbada 3 pièces bleu marine, broderies spirales bleu clair sur plastron. Élégance sobre et distinguée.', emoji: '👘', image: 'images/homme19.jpeg' },
  { id: 63, name: 'Agbada Blanc Brodé Cercles', category: 'agbada', price: 35000, description: 'Grand agbada blanc pur en bazin, broderies gris et noir motifs cercles géométriques. Pureté et prestige.', emoji: '👘', image: 'images/homme20.png' },
  { id: 64, name: 'Agbada Noir Long Doré', category: 'agbada', price: 35000, description: 'Grand agbada noir long en bazin, broderies dorées losanges sur large plastron. Tenue de gala.', emoji: '👘', image: 'images/homme21.png' },

  // --- HOMME – BASIN & GANDOURA ---
  { id: 35, name: 'Gandoura Beige Doré Brodé', category: 'basin_gandoura', price: 25000, description: 'Longue gandoura beige satiné bazin, broderies dorées sur plastron et poche. Tenue de cérémonie raffinée.', emoji: '🥻', image: 'images/homme1.jpeg' },
  { id: 43, name: 'Gandoura Vert Émeraude Brodé', category: 'basin_gandoura', price: 25000, description: 'Longue gandoura vert émeraude en bazin brillant, broderies noires et dorées. Élégance africaine.', emoji: '🥻', image: 'images/homme2.jpeg' },
  { id: 44, name: 'Gandoura Blanc Pur Brodé', category: 'basin_gandoura', price: 25000, description: 'Longue gandoura blanche immaculée en bazin, broderies dorées et noires. Pureté et prestige.', emoji: '🥻', image: 'images/homme3.jpeg' },
  { id: 47, name: 'Gandoura Menthe Satiné Brodé', category: 'basin_gandoura', price: 25000, description: 'Longue gandoura vert menthe en bazin satiné, broderies zigzag dorées. Fraîcheur et classe.', emoji: '👘', image: 'images/homme4.jpeg' },
  { id: 48, name: 'Gandoura Bleu Marine Brodé', category: 'basin_gandoura', price: 25000, description: 'Longue gandoura bleu marine en bazin brillant, broderies dorées sur plastron et poche. Allure royale.', emoji: '👘', image: 'images/homme5.jpeg' },
  { id: 49, name: 'Gandoura Bordeaux Chaîne Brodée', category: 'basin_gandoura', price: 25000, description: 'Longue gandoura bordeaux en bazin satiné, broderies chaîne blanche. Style et sophistication.', emoji: '👘', image: 'images/homme6.jpeg' },
  { id: 57, name: 'Ensemble Blanc Brodé Doré', category: 'basin_gandoura', price: 20000, description: 'Ensemble deux pièces blanc bazin, broderies dorées sur plastron et poche. Élégance classique.', emoji: '👘', image: 'images/homme7.jpeg' },
  { id: 58, name: 'Ensemble Menthe Brodé Floral', category: 'basin_gandoura', price: 20000, description: 'Ensemble deux pièces vert menthe bazin, broderies florales fines sur plastron et poche. Fraîcheur naturelle.', emoji: '👘', image: 'images/homme8.jpeg' },
  { id: 59, name: 'Ensemble Bleu Ciel Brodé', category: 'basin_gandoura', price: 20000, description: 'Ensemble deux pièces bleu ciel en bazin, broderies géométriques bleu et or sur plastron.', emoji: '👘', image: 'images/homme9.jpeg' },
  { id: 60, name: 'Ensemble Bordeaux Brodé Argent', category: 'basin_gandoura', price: 20000, description: 'Ensemble deux pièces bordeaux en bazin brillant, broderies argent sur plastron et poche.', emoji: '👘', image: 'images/homme10.jpeg' },
  { id: 61, name: 'Ensemble Bleu Marine Étoile', category: 'basin_gandoura', price: 20000, description: 'Ensemble deux pièces bleu marine en bazin, broderies étoile ivoire sur la poche. Prestige moderne.', emoji: '👘', image: 'images/homme11.jpeg' },
  { id: 42, name: 'Ensemble Bleu Électrique Brodé', category: 'basin_gandoura', price: 20000, description: 'Ensemble deux pièces bleu électrique en bazin brillant, broderies florales blanches sur plastron et poche.', emoji: '👘', image: 'images/homme12.jpeg' },

  // --- HOMME – FILAFIL ITALIEN ---
  { id: 36, name: 'Filafil Beige Quadrillé Brodé', category: 'filafil_italien', price: 25000, description: 'Ensemble deux pièces beige quadrillé, broderies artisanales.', emoji: '🕌', image: 'images/homme22.jpeg' },
  { id: 37, name: 'Filafil Bleu Ciel Quadrillé', category: 'filafil_italien', price: 25000, description: 'Ensemble deux pièces bleu ciel quadrillé, boutons noirs.', emoji: '👘', image: 'images/homme23.jpeg' },
  { id: 38, name: 'Filafil Rose Mauve Quadrillé', category: 'filafil_italien', price: 25000, description: 'Ensemble deux pièces rose mauve quadrillé, broderies boutons.', emoji: '🥻', image: 'images/homme24.jpeg' },
  { id: 39, name: 'Filafil Beige Flèches Brodées', category: 'filafil_italien', price: 25000, description: 'Ensemble deux pièces beige uni, broderies flèches.', emoji: '👘', image: 'images/homme25.jpeg' },
  { id: 52, name: 'Filafil Gris Quadrillé Long', category: 'filafil_italien', price: 25000, description: 'Ensemble deux pièces gris quadrillé, broderies marron.', emoji: '👘', image: 'images/homme26.jpeg' },
  { id: 53, name: 'Filafil Gris Clair Losanges', category: 'filafil_italien', price: 25000, description: 'Ensemble deux pièces gris clair quadrillé, broderies losanges.', emoji: '👘', image: 'images/homme27.jpeg' },

  // --- HOMME – FILAFIL ANGLAIS ---
  { id: 40, name: 'Filafil Anglais Bleu Marine', category: 'filafil_anglais', price: 15000, description: 'Ensemble deux pièces bleu marine uni, broderies dorées.', emoji: '🥻', image: 'images/homme28.jpeg' },
  { id: 41, name: 'Filafil Anglais Jaune Moutarde', category: 'filafil_anglais', price: 15000, description: 'Ensemble deux pièces jaune moutarde uni, broderies croisées.', emoji: '👘', image: 'images/homme29.jpeg' },
  { id: 50, name: 'Filafil Anglais Bordeaux Slim', category: 'filafil_anglais', price: 15000, description: 'Ensemble deux pièces bordeaux uni, broderies argentées.', emoji: '👘', image: 'images/homme30.png' },
  { id: 54, name: 'Filafil Anglais Vert Forêt', category: 'filafil_anglais', price: 15000, description: 'Ensemble deux pièces vert forêt uni, broderies dorées.', emoji: '👘', image: 'images/homme31.png' },
  { id: 65, name: 'Filafil Anglais Beige Losanges', category: 'filafil_anglais', price: 15000, description: 'Ensemble deux pièces beige uni, broderies losanges.', emoji: '🥻', image: 'images/homme32.png' },
  { id: 66, name: 'Filafil Anglais Ivoire Brodé', category: 'filafil_anglais', price: 15000, description: 'Ensemble deux pièces ivoire crème, broderies noires.', emoji: '👘', image: 'images/homme33.png' },

  // --- ENFANT GARCON---
  { id: 67, name: 'Ensemble Garçon Lavande Brodé', category: 'garcon', price: 7000, description: 'Ensemble deux pièces lavande broderies géométriques, pour garçons 8–16 ans. Élégant et authentique.', emoji: '👦', image: 'images/garçon1.png' },
  { id: 68, name: 'Ensemble Garçon Beige Brodé', category: 'garcon', price: 7000, description: 'Ensemble deux pièces beige sable broderies tressées bleu et marron, pour garçons 4–12 ans.', emoji: '👦', image: 'images/garçon2.png' },
  { id: 69, name: 'Ensemble Garçon Bleu Royal Brodé', category: 'garcon', price: 7000, description: 'Ensemble deux pièces bleu royal broderies blanc et argent, pour garçons 4–14 ans.', emoji: '👦', image: 'images/garçon3.png' },
  { id: 70, name: 'Ensemble Garçon Gris Bleu Brodé', category: 'garcon', price: 7000, description: 'Ensemble deux pièces gris bleu broderies dorées florale, pour garçons 4–14 ans.', emoji: '👦', image: 'images/garçon4.png' },
  { id: 71, name: 'Ensemble Garçon Marron Chocolat', category: 'garcon', price: 7000, description: 'Ensemble deux pièces marron chocolat broderies blanches géométriques, pour garçons 4–12 ans.', emoji: '👦', image: 'images/garçon5.jpeg' },
  { id: 72, name: 'Ensemble Bébé Garçon Marron', category: 'garcon', price: 7000, description: 'Ensemble deux pièces marron chocolat broderies florales, pour tout-petits 2–6 ans.', emoji: '🐣', image: 'images/garçon6.jpeg' },
  { id: 73, name: 'Ensemble Bébé Garçon Bleu Ciel', category: 'garcon', price: 7000, description: 'Ensemble deux pièces bleu ciel broderies noires, pour tout-petits 2–5 ans.', emoji: '🐣', image: 'images/garçon7.jpeg' },
  { id: 74, name: 'Ensemble Ado Noir Doré', category: 'garcon', price: 12000, description: 'Ensemble deux pièces noir broderies dorées prestige, pour adolescents 12–16 ans.', emoji: '🧒', image: 'images/garçon8.jpeg' },
  { id: 75, name: 'Ensemble Ado Gris Brodé', category: 'garcon', price: 12000, description: 'Ensemble deux pièces gris anthracite broderies bleu et or, pour adolescents 12–16 ans.', emoji: '🧒', image: 'images/garçon9.jpeg' },
  { id: 76, name: 'Ensemble Ado Bleu Marine Brodé', category: 'garcon', price: 12000, description: 'Ensemble deux pièces bleu marine broderies blanches élégantes, pour adolescents 12–16 ans.', emoji: '🧒', image: 'images/garçon11.jpeg' },
  { id: 77, name: 'Ensemble Garçon Marron Brodé (2)', category: 'garcon', price: 7000, description: 'Ensemble deux pièces marron chocolat broderies blanches, pour garçons 5–12 ans.', emoji: '👦', image: 'images/garçon12.jpeg' },
  { id: 79, name: 'Ensemble Bébé Bleu Ciel (2)', category: 'garcon', price: 7000, description: 'Ensemble deux pièces bleu ciel broderies noires, pour tout-petits 2–5 ans.', emoji: '🐣', image: 'images/garçon14.jpeg' },

  // ---ENFANT FILLE---
  { id: 81, name: 'Robe Wax Rouge Florale', category: 'fille', price: 10000, description: 'Magnifique robe wax rouge imprimés floraux, épaules nouées. Tailles 4-16 ans.', emoji: '👧', image: 'images/fille1.jpg' },
  { id: 82, name: 'Robe Wax Bleue Dentelle', category: 'fille', price: 10000, description: 'Robe wax bleue, manches dentelle blanche évasées, ceinture blanche. Tailles 2-12 ans.', emoji: '👧', image: 'images/fille2.jpg' },
  { id: 83, name: 'Robe Wax Mauve Volants', category: 'fille', price: 10000, description: 'Robe wax mauve imprimés arabesques, manches volants, headband assorti. Tailles 4-12 ans.', emoji: '👧', image: 'images/fille3.jpg' },
  { id: 84, name: 'Robe Wax Fleurs Dorées', category: 'fille', price: 10000, description: 'Robe wax fleurs orangées, haut doré puff, headband assorti. Tailles 2-10 ans.', emoji: '👧', image: 'images/fille4.jpg' },
  { id: 85, name: 'Robe Wax Rouge Cape', category: 'fille', price: 10000, description: 'Robe wax rouge brodée, capelet beige élégant. Tailles 6-16 ans.', emoji: '👧', image: 'images/fille5.jpg' },
  { id: 86, name: 'Robe Wax Turquoise Nœud', category: 'fille', price: 10000, description: 'Robe wax turquoise fleurs violettes, nœud en ceinture. Tailles 4-14 ans.', emoji: '👧', image: 'images/fille6.jpg' },
  { id: 87, name: 'Robe Bazin Bleue Cérémonie', category: 'fille', price: 15000, description: 'Robe cérémonie bazin bleu ciel broderies argent, manches bouffantes. Tailles 12-16 ans.', emoji: '👧', image: 'images/fille7.jpg' },
  { id: 88, name: 'Robe Bazin Violette Gala', category: 'fille', price: 15000, description: 'Robe sirène bazin violette broderies florales, épaules dénudées. Tailles 12-16 ans.', emoji: '👧', image: 'images/fille8.jpg' },
  { id: 89, name: 'Robe Bazin Verte Peplum', category: 'fille', price: 15000, description: 'Robe bazin vert émeraude brillant broderies dorées peplum taille. Tailles 12-16 ans.', emoji: '👧', image: 'images/fille9.jpg' },
  { id: 90, name: 'Robe Bazin Violet Doré', category: 'fille', price: 15000, description: 'Robe bazin violet brillant broderies dorées arabesque, manches longues. Tailles 10-16 ans.', emoji: '👧', image: 'images/fille10.jpg' },
  { id: 91, name: 'Robe de Gala Bleu Turquoise', category: 'fille', price: 15000, description: 'Robe de gala bazin bleu turquoise broderies argent, manches bouffantes, traîne royale. Tailles 6-16 ans.', emoji: '👧', image: 'images/fille11.jpg' },
  { id: 92, name: 'Boubou Orange Brodé Or', category: 'fille', price: 15000, description: 'Boubou orange bazin broderies dorées rondes, headband assorti. Tailles 2-12 ans.', emoji: '👧', image: 'images/fille12.jpg' },

  // ---tous---

 
];

let cart = [];
let activeCategory = 'tous';
let isAdmin = false;
let paymentMethod = 'wave';
let currentEditingId = null;
let pendingImgModal = null;

// --- Initialisation ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    loadImages();

    // Bordure dorée header uniquement quand on scrolle hors du hero
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.style.borderBottom = '2px solid var(--gold)';
        } else {
            header.style.borderBottom = 'none';
        }
    }, { passive: true });
});


// --- Panier ---
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const bg = document.getElementById('cart-bg');
    sidebar.classList.toggle('open');
    bg.classList.toggle('open');
}

function addToCart(id) {
    const product = PRODUCTS.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity++;
    else cart.push({ ...product, quantity: 1 });
    updateCartUI();
    showToast(`✓ "${product.name}" ajouté !`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateQty(id, delta) {
    const item = cart.find(item => item.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) removeFromCart(id);
    else updateCartUI();
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const badge = document.getElementById('cart-badge');
    const footer = document.getElementById('cart-footer');
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    badge.style.display = count > 0 ? 'flex' : 'none';
    badge.textContent = count;

    if (cart.length === 0) {
        container.innerHTML = '<div class="cart-empty"><span class="empty-icon">🛒</span><p>Votre panier est vide.</p></div>';
        footer.style.display = 'none';
        return;
    }

    footer.style.display = 'block';
    document.getElementById('cart-count-f').textContent = count;
    document.getElementById('cart-sub-f').textContent = total.toLocaleString() + ' FCFA';
    document.getElementById('cart-total-f').textContent = total.toLocaleString() + ' FCFA';

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-img"><img src="${item.image}"></div>
            <div class="cart-item-info">
                <h5>${item.name}</h5>
                <div class="cart-item-price">${(item.price * item.quantity).toLocaleString()} FCFA</div>
                <div class="qty-control">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
                    <span class="qty-val">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="item-remove" onclick="removeFromCart(${item.id})">✕</button>
        </div>
    `).join('');
}

// --- Produits ---
function filterProd(cat, btn) {
    activeCategory = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    let filtered;

    if (activeCategory !== 'tous') {
        filtered = PRODUCTS.filter(p => p.category === activeCategory);
    } else {
        // Mode "Tous" : 3 produits par grande catégorie = 12 max
        filtered = [];
        [['femme'], ['agbada','basin_gandoura','filafil_italien','filafil_anglais'], ['garcon'], ['fille']].forEach(g => {
            filtered.push(...PRODUCTS.filter(p => g.includes(p.category)).slice(0, 3));
        });
    }

    grid.innerHTML = filtered.map(p => `
        <div class="product-card">
            <div class="product-img-wrap" onclick="${isAdmin ? `openImgModal('prod-${p.id}')` : ''}">
                <img src="${p.image}">
                ${isAdmin ? '<button class="prod-edit">✎ Modifier</button>' : ''}
            </div>
            <div class="product-info">
                <h4>${p.name}</h4>
                <p class="desc">${p.description}</p>
                <div class="product-footer">
                    <span class="price">${p.price.toLocaleString()} FCFA</span>
                    <button class="add-cart" onclick="addToCart(${p.id})">🛒 Ajouter</button>
                </div>
            </div>
        </div>
    `).join('');

    if (activeCategory === 'tous') {
        const b = document.createElement('div');
        b.className = 'tous-banner';
        b.innerHTML = `<p>✦ Aperçu — Filtrez par catégorie pour voir toute la collection ✦</p>
        <div class="tous-quick-btns">
            <button onclick="filterProd('femme',null)">👗 Femme</button>
            <button onclick="toggleHommeMenu()">👘 Homme</button>
            <button onclick="filterProd('garcon',null)">👦 Garçon</button>
            <button onclick="filterProd('fille',null)">👧 Fille</button>
        </div>`;
        grid.appendChild(b);
    }
}

// --- Commande ---
function openCheckout() {
    if (cart.length === 0) return;
    toggleCart();
    // Réinitialiser l'affichage formulaire/succès
    document.getElementById('co-form').style.display = 'block';
    document.getElementById('co-success').classList.remove('show');
    document.getElementById('co-overlay').classList.add('active');
    renderCheckout();
}

function closeCheckout() {
    document.getElementById('co-overlay').classList.remove('active');
    document.getElementById('co-form').style.display = 'block';
    document.getElementById('co-success').classList.remove('show');
}

function selectPay(method) {
    paymentMethod = method;
    renderCheckout();
}

function renderCheckout() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('co-total').textContent = total.toLocaleString() + ' FCFA';
    document.getElementById('wave-amount').textContent = total.toLocaleString() + ' FCFA';

    // Remplir le récapitulatif des articles
    const coLines = document.getElementById('co-lines');
    if (coLines) {
        coLines.innerHTML = cart.map(item => `
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(201,168,76,0.15);font-size:0.88rem;">
                <span>${item.name} × ${item.quantity}</span>
                <span>${(item.price * item.quantity).toLocaleString()} FCFA</span>
            </div>
        `).join('');
    }
    
    document.getElementById('pm-wave').classList.toggle('sel', paymentMethod === 'wave');
    document.getElementById('pm-livraison').classList.toggle('sel', paymentMethod === 'livraison');
    document.getElementById('wave-box').style.display = paymentMethod === 'wave' ? 'block' : 'none';
    document.getElementById('cod-box').style.display = paymentMethod === 'livraison' ? 'block' : 'none';
}

function placeOrder() {
    const prenom = document.getElementById('f-prenom').value.trim();
    const nom = document.getElementById('f-nom').value.trim();
    const tel = document.getElementById('f-tel').value.trim();
    const telWa = document.getElementById('f-tel-wa').value.trim();
    const addr = document.getElementById('f-addr').value.trim();
    const ville = document.getElementById('f-ville').value.trim();
    const taille = document.getElementById('f-taille').value.trim();

    if (!prenom || !tel) { showToast('⚠️ Prénom et Téléphone requis'); return; }
    if (!addr || !ville) { showToast('⚠️ Adresse et Ville requises'); return; }

    const ref = 'CMD-' + Math.floor(Math.random() * 900000 + 100000);
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const clientName = [prenom, nom].filter(Boolean).join(' ');
    const adresseFull = addr + ', ' + ville;

    const payLabel = paymentMethod === 'wave'
        ? 'Paiement Wave'
        : 'Paiement à la livraison';

    // Build articles list
    const waveRef = paymentMethod === 'wave' ? document.getElementById('f-wave-ref').value.trim() : '';
    if (paymentMethod === 'wave' && !waveRef) { showToast('⚠️ Référence Wave requise'); return; }

    const articlesLines = cart.map(item =>
        `• ${item.name} x${item.quantity} = ${(item.price * item.quantity).toLocaleString()} FCFA`
            + (taille ? ` (Taille: ${taille})` : '')
    ).join('%0A');

    const msg =
        `🛍️ *NOUVELLE COMMANDE - Aynoumadi Boutique*%0A%0A` +
        `🔹 *Réf:* ${ref}%0A` +
        `🔹 *Client:* ${clientName}%0A` +
        `🔹 *Tél:* ${tel}%0A` +
        (telWa ? `🔹 *WhatsApp:* ${telWa}%0A` : '') +
        `🔹 *Adresse:* ${adresseFull}%0A` +
        `🔹 *Paiement:* ${payLabel}%0A` +
        (waveRef ? `🔹 *Réf Wave:* ${waveRef}%0A` : '') +
        `%0A🔹 *Articles commandés:*%0A` +
        `${articlesLines}%0A%0A` +
        `🔹 *TOTAL: ${total.toLocaleString()} FCFA*`;

    window.open(`https://wa.me/221785075247?text=${msg}`, '_blank');
    document.getElementById('co-form').style.display = 'none';
    document.getElementById('co-success').classList.add('show');
    document.getElementById('sref').textContent = ref;
}

// --- Admin ---
function toggleAdmin() {
    if (!isAdmin) document.getElementById('pw-overlay').classList.add('active');
    else {
        
        const s = document.getElementById('admin');
        s.style.display = s.style.display === 'none' ? 'block' : 'none';
        renderAdminGrid();
    }
}

function closePwModal() {
    document.getElementById('pw-overlay').classList.remove('active');
    document.getElementById('pw-input').value = '';
    document.getElementById('pw-error').classList.remove('show');
    
}

function togglePwVisibility() {
    const input = document.getElementById('pw-input');
    const eye = document.getElementById('pw-eye');
    if (input.type === 'password') {
        input.type = 'text';
        eye.textContent = '🙈';
    } else {
        input.type = 'password';
        eye.textContent = '👁️';
    }
}

function checkPassword() {
    const input = document.getElementById('pw-input').value;
    if (input === ADMIN_PASSWORD) {
        isAdmin = true;
        document.getElementById('pw-overlay').classList.remove('active');
        document.getElementById('pw-input').value = '';
        document.getElementById('pw-error').classList.remove('show');
        document.getElementById('admin-bar').classList.add('show');
        document.getElementById('admin-toggle').style.display = 'block';
        document.getElementById('hero-edit-btn').style.display = 'block';
        
        renderProducts();
        showToast('✅ Admin activé');
        if (pendingImgModal) {
            const pid = pendingImgModal;
            pendingImgModal = null;
            setTimeout(() => { currentEditingId = pid; document.getElementById('img-modal').classList.add('active'); }, 200);
        }
    } else {
        document.getElementById('pw-error').classList.add('show');
        document.getElementById('pw-input').value = '';
    }
    
}


// --- Admin Grid ---
function renderAdminGrid() {
  const grid = document.getElementById('admin-grid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="admin-card" onclick="openImgModal('prod-${p.id}')">
      <div class="admin-img-wrap">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Crect fill=\'%23f0e6d0\' width=\'200\' height=\'200\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'40\'%3E📷%3C/text%3E%3C/svg%3E'">
        <div class="admin-overlay">📷 Changer</div>
      </div>
      <div class="admin-card-info">
        <b>#${p.id} ${p.name}</b>
        <span>${p.category} · ${p.price.toLocaleString()} FCFA</span>
      </div>
    </div>
  `).join('');
}

function adminLogout() {
    isAdmin = false;
    document.getElementById('admin-bar').classList.remove('show');
    document.getElementById('admin').style.display = 'none';
    document.getElementById('admin-toggle').style.display = 'none';
    document.getElementById('hero-edit-btn').style.display = 'none';
    renderProducts();
}

// --- Gestion Images ---
function openImgModal(id) {
    currentEditingId = id;
    if (!isAdmin) {
        pendingImgModal = id;
        document.getElementById('pw-overlay').classList.add('active');
    } else {
        pendingImgModal = null;
        document.getElementById('img-modal').classList.add('active');
    }
}

function closeImgModal() { document.getElementById('img-modal').classList.remove('active'); }

function previewImg(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => document.getElementById('img-preview').innerHTML = `<img src="${e.target.result}">`;
        reader.readAsDataURL(input.files[0]);
    }
}

function saveImg() {
    const img = document.querySelector('#img-preview img');
    if (!img) return;
    const src = img.src;
    
    if (currentEditingId.startsWith('prod-')) {
        const pid = parseInt(currentEditingId.split('-')[1]);
        const p = PRODUCTS.find(p => p.id === pid);
        if (p) p.image = src;
    } else if (currentEditingId === 'hero') {
        document.getElementById('hero-img').src = src;
        document.getElementById('hero-img').style.display = 'block';
        document.getElementById('hero-ph').style.display = 'none';
        // Update code badge
        const pathEl = document.getElementById('hero-img-path');
        if (pathEl) {
            const shortName = src.startsWith('data:') ? '(image chargée)' : src.split('/').pop();
            pathEl.textContent = shortName;
        }
    }
    
    localStorage.setItem('img_' + currentEditingId, src);
    renderProducts();
    closeImgModal();
    showToast('✅ Image enregistrée');
}

function loadImages() {
    PRODUCTS.forEach(p => {
        const saved = localStorage.getItem('img_prod-' + p.id);
        if (saved) p.image = saved;
    });
    const heroImg = document.getElementById('hero-img');
    const heroPh = document.getElementById('hero-ph');
    const saved = localStorage.getItem('img_hero');
    if (saved) {
        heroImg.src = saved;
        heroImg.style.display = 'block';
        heroPh.style.display = 'none';
    } else if (heroImg.src && heroImg.src !== window.location.href) {
        // Show default image if src is set
        heroImg.style.display = 'block';
        heroPh.style.display = 'none';
    }
    renderProducts();
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

// Fonctions Navigation Mobile
function toggleMobileNav() {
    const nav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-nav-overlay');
    const burger = document.getElementById('hamburger');
    const isOpen = nav.classList.contains('open');
    nav.classList.toggle('open', !isOpen);
    overlay.classList.toggle('open', !isOpen);
    if (burger) burger.classList.toggle('open', !isOpen);
}
function closeMobileNav() {
    document.getElementById('mobile-nav').classList.remove('open');
    document.getElementById('mobile-nav-overlay').classList.remove('open');
    const burger = document.getElementById('hamburger');
    if (burger) burger.classList.remove('open');
}
function toggleHommeMenu() { document.getElementById('homme-submenu').classList.toggle('open'); }
function copyWave() { navigator.clipboard.writeText('785075247'); showToast('📋 Numéro copié'); }
// ── Formulaire de Contact ──
function sendContact() {
    const prenom = document.getElementById('cf-prenom').value.trim();
    const nom = document.getElementById('cf-nom').value.trim();
    const tel = document.getElementById('cf-tel').value.trim();
    const wa = document.getElementById('cf-wa').value.trim();
    const sujet = document.getElementById('cf-sujet').value;
    const msg = document.getElementById('cf-msg').value.trim();

    if (!prenom) { showToast('⚠️ Veuillez entrer votre prénom'); return; }
    if (!tel) { showToast('⚠️ Veuillez entrer votre téléphone'); return; }
    if (!sujet) { showToast('⚠️ Veuillez choisir un sujet'); return; }
    if (!msg) { showToast('⚠️ Veuillez écrire votre message'); return; }

    const clientName = [prenom, nom].filter(Boolean).join(' ');

    const waMsg =
        `✉️ *NOUVEAU MESSAGE - Aynoumadi Boutique*%0A%0A` +
        `🔹 *De:* ${clientName}%0A` +
        `🔹 *Tél:* ${tel}%0A` +
        (wa ? `🔹 *WhatsApp:* ${wa}%0A` : '') +
        `🔹 *Sujet:* ${sujet}%0A%0A` +
        `🔹 *Message:*%0A${encodeURIComponent(msg)}`;

    window.open(`https://wa.me/221785075247?text=${waMsg}`, '_blank');

    // Afficher le message de succès
    document.getElementById('cf-success-name').textContent = prenom;
    document.getElementById('cf-form-body').style.display = 'none';
    document.getElementById('cf-success').style.display = 'flex';
}

function resetContact() {
    document.getElementById('cf-prenom').value = '';
    document.getElementById('cf-nom').value = '';
    document.getElementById('cf-tel').value = '';
    document.getElementById('cf-wa').value = '';
    document.getElementById('cf-sujet').value = '';
    document.getElementById('cf-msg').value = '';
    document.getElementById('cf-form-body').style.display = 'block';
    document.getElementById('cf-success').style.display = 'none';
}
// ── Accès Admin Secret ──
// Tapez "admin" sur le clavier n'importe où sur la page pour ouvrir le panneau
let _secretKey = "";
document.addEventListener("keydown", function(e) {
  _secretKey += e.key.toLowerCase();
  if (_secretKey.length > 5) _secretKey = _secretKey.slice(-5);
  if (_secretKey === "admin") {
    _secretKey = "";
    toggleAdmin();
  }
});
