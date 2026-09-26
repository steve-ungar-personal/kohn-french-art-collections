// Frame 10: pages from the Kohns' stock binders ("misc stamps" folder).
// These are dealer-style stock pages rather than exhibit pages; the pencilled
// catalogue tags on them are blurred online.
import type { AlbumPage, Kind } from './pages';
import { S } from './sources';

type B = [title: string, summary: string, kinds?: Kind[], stamps?: string[]];

const rows: B[] = [
  ['“Pour le Musée Postal” sheets, “Le Nouveau-né” (1966)', 'About eight of the Postal Museum souvenir sheets showing the printing stages of the La Tour stamp: red-orange colour layer, black key plate and the finished stamp.', ['Presentation sheet'], ['latour']],
  ['Sainte-Chapelle window (1966): corner and margin blocks', 'Blocks of four and eight of the Sainte-Chapelle window stamp, several with sheet margins, and one with the printed sheet number.', ['Mint stamps'], ['saintechapelle']],
  ['Lurçat tapestry (1966): margin blocks with press marking', 'Blocks of Jean Lurçat’s “La Lune et le Taureau”, including a margin block with the press reference T.D.6-5.', ['Mint stamps'], ['lurcat']],
  ['Daumier, “Crispin et Scapin” (1966): margin blocks', 'Two vertical blocks of eight of the Daumier stamp, with sheet margins.', ['Mint stamps'], ['daumier']],
  ['Clouet’s François I and Rousseau (1967): corner blocks', 'Corner blocks of four of the François I portrait and of Rousseau’s “La Carriole du Père Junier”.', ['Mint stamps'], ['francois', 'rousseau']],
  ['Troyes window and Ingres (1967): corner blocks', 'Corner blocks of four of the Saint Éloi window from Troyes and of Ingres’ “La Baigneuse”.', ['Mint stamps'], ['troyes', 'ingres']],
  ['1969 art issues: Philip the Good, Gauguin, Saint-Savin and Amiens', 'Blocks of four of the 1969 art stamps: van der Weyden’s Philip the Good, Gauguin, the Saint-Savin fresco and the Amiens Cathedral relief.', ['Mint stamps'], ['philippe', 'savin']],
  ['1970 art issues: Boucher, Degas, the Savoy Prophets window and Carpeaux', 'Corner blocks of the 1970 art stamps.', ['Mint stamps']],
  ['1971 art issues: Rouault, Strasbourg, Seurat and Millet', 'Corner blocks of Rouault, a Strasbourg Cathedral statue, Seurat’s “Le Cirque” and Millet.', ['Mint stamps']],
  ['Later issues: Trémois, Excoffon (1977) and Philip the Good', 'Pairs of the 1977 3 F art stamps by Trémois and Excoffon, a block of Philip the Good, and an ARPHILA 75 issue.', ['Mint stamps'], ['philippe']],
  ['Ingres block and a Saint-Austremoine capital (1973)', 'A corner block of the Ingres Baigneuse and a single of the 2 F Saint-Austremoine (Issoire) capital.', ['Mint stamps'], ['ingres']],
  ['Saint-Savin corner block (1969) and a dealer’s label', 'A corner block of four of the Saint-Savin fresco with the label of a Michigan stamp dealer.', ['Mint stamps'], ['savin']],
  ['Used and mint singles of the 1970s–80s', 'Singles in glassine envelopes: ARPHILA 75, Albert Gleizes, Modigliani, Pissarro, Le Nain, Claude Lorrain, Picart le Doux and others.', ['Mint stamps']],
  ['1980s art singles', 'Singles of the 1980–82 art stamps (Manessier, Utrillo, Dewasne, Raphael, Balthus, Pignon, Bourdelle and others) in glassines.', ['Mint stamps']],
  ['Cézanne “Card Players” (1961): corner pairs and a used copy', 'Corner-margin vertical pairs of the 1961 Cézanne stamp and a single used copy.', ['Mint stamps'], ['cezanne']],
  ['Imperforate colour trial strips: Philip the Good, Vix, Renoir', 'Imperforate strips of three in different colours for Philip the Good (1969), the Vix Krater (1966) and Renoir (1968), plus singles. These are trial colour proofs (essais de couleur).', ['Trial colour proof'], ['philippe', 'vix']],
  ['Imperforate 1970s issues: Brayer, Vlaminck, the Triumph of Venus', 'Imperforate copies and pairs of 1970s art stamps with sheet margins, including one with the T.D.6-2 press mark and one with the imprint “Imprimerie des Timbres-Poste — France”.', ['Varieties']],
  ['Saint-Austremoine imperforate strip dated 26.12.72, and PHILEXFRANCE 82', 'A dated imperforate trial strip of the Issoire capital, including a partial (colour-layer) impression, a two-colour imperforate pair, and a PHILEXFRANCE 82 strip.', ['Trial colour proof']],
  ['Imperforate colour trial strips: Ingres and Millet', 'Two strips of three imperforate colour trials, Ingres’ Baigneuse (1967) and Millet (1971).', ['Trial colour proof'], ['ingres']],
  ['Imperforates: Matisse, Braque, La Fresnaye, Watteau, Daumier, Rouault', 'Imperforate margin copies of the 1961 set and later issues, including a two-colour pair of the Daumier.', ['Varieties'], ['matisse', 'braque', 'fresnaye', 'daumier']],
  ['Imperforate pairs in dealer packets: Corot, Delaunay, Vasarely', 'Imperforate pairs of the Corot (1977), Delaunay (1976) and Vasarely (1977) stamps in their original dealer packets.', ['Varieties']],
  ['Imperforate pairs in dealer packets: Trémois and the Carrousel of Louis XIV', 'Further imperforate pairs in dealer packets.', ['Varieties']],
  ['Imperforate Ingres, Cézanne and a Lurçat colour-trial block', 'An imperforate Ingres, an imperforate Cézanne and a block of four Lurçat tapestry colour trials, each in a different colour scheme.', ['Trial colour proof'], ['ingres', 'cezanne', 'lurcat']],
  ['Limousin enamel presentation card', 'A presentation card, “Émail Champlevé Limousin, 12e siècle”, with a colour reproduction of the Geoffrey Plantagenet plaque.', ['Presentation sheet'], ['email']],
  ['Stock page: 1961–62 painters in quantity', 'Multiple copies of the 1961 and 1962 painting stamps (Braque, Matisse, Cézanne, La Fresnaye, Courbet, Manet, Géricault), some in mounts.', ['Mint stamps'], ['braque', 'matisse', 'cezanne', 'fresnaye', 'courbet', 'manet', 'gericault']],
  ['Stock page: 1963–64 issues in quantity', 'Runs of the Delacroix, Conches, Chagall, Chartres, Jean le Bon, Notre-Dame and Lady and the Unicorn stamps.', ['Mint stamps'], ['delacroix', 'conches', 'chagall', 'chartres', 'jeanlebon', 'notredame', 'licorne']],
  ['Stock page: 1965–66 issues in quantity', 'Runs of the Vix Krater, Dufy, Apocalypse, Toulouse-Lautrec, Sens and Très Riches Heures stamps.', ['Mint stamps'], ['vix', 'dufy', 'apocalypse', 'lautrec', 'sens', 'berry']],
  ['Stock page: 1966–67 issues in quantity', 'Runs of the Rousseau, Daumier, Lurçat, Sainte-Chapelle and La Tour stamps.', ['Mint stamps'], ['rousseau', 'daumier', 'lurcat', 'saintechapelle', 'latour']],
  ['Stock page: 1967–68 issues in quantity', 'Runs of Renoir, Bourdelle, Gauguin, Lascaux, the Troyes window, Ingres and Clouet.', ['Mint stamps'], ['troyes', 'ingres', 'francois']],
  ['Stock page: 1969–70 issues in quantity', 'Runs of Boucher, Carpeaux, the Savoy window, Seurat, Saint-Savin, Philip the Good and the Amiens relief.', ['Mint stamps'], ['savin', 'philippe']],
  ['Stock page: 1971–72 issues', 'Runs of the early 1970s art stamps (Monet, Rouault, Millet, the Strasbourg statue, Fragonard and others).', ['Mint stamps']],
  ['Stock page: ARPHILA 75 and 1974–75 issues', 'Stamps with ARPHILA 75 tabs (the 1975 Paris international exhibition), Miró, Le Brun and others.', ['Mint stamps']],
  ['Stock page: 1975–76 issues', 'Saint-Gilles, the ARPHILA 75 capital and Gobelins tapestry, and Europa 1975 issues.', ['Mint stamps']],
  ['Stock page: 1976–77 issues', 'Vasarely, Rubens, Vlaminck, Delaunay, Brayer and others.', ['Mint stamps']],
  ['Stock page: 1977–79 issues', 'Later art issues, including the Carrousel of Louis XIV and Pavillon de la Défense.', ['Mint stamps']],
  ['Stock page: 1979–80 issues', 'Dürer, Le Nain, Zadkine, Picart le Doux, Europa 1980 and others.', ['Mint stamps']],
  ['“La Tombe Princière de Vix” folder, cover', 'The printed first-day folder for the Vix Krater (1966), with the stamp and the illustrated Châtillon-sur-Seine postmark of 26 March 1966.', ['Presentation sheet', 'First day cover'], ['vix']],
  ['“La Tombe Princière de Vix” folder, text', 'The inside text, “Le Cratère de Vix”, signed by René Joffroy, curator at the Musée des Antiquités Nationales and the Châtillon museum, who excavated the tomb.', ['Presentation sheet'], ['vix']],
  ['1961 set: corner blocks of La Fresnaye, Braque and Matisse', 'Corner blocks of four of the first “Musée Imaginaire” stamps.', ['Mint stamps'], ['fresnaye', 'braque', 'matisse']],
  ['1962–63: Chartres, Géricault, Delacroix and Manet blocks', 'Blocks of four of the Chartres window, Géricault, Delacroix and Manet stamps.', ['Mint stamps'], ['chartres', 'gericault', 'delacroix', 'manet']],
  ['1964: Notre-Dame window and Jean le Bon blocks', 'Blocks of four of the Notre-Dame and Jean le Bon stamps.', ['Mint stamps'], ['notredame', 'jeanlebon']],
  ['1965: Toulouse-Lautrec corner block', 'A corner block of four of the Toulouse-Lautrec stamp.', ['Mint stamps'], ['lautrec']],
  ['1965: Très Riches Heures and Sens blocks', 'Margin blocks of the Très Riches Heures and Sens Cathedral window stamps.', ['Mint stamps'], ['berry', 'sens']],
  ['1965: Apocalypse Tapestry blocks', 'Four blocks of four of the Apocalypse stamp, one with the sheet number.', ['Mint stamps'], ['apocalypse']],
  ['1965: Dufy “Violon rouge” blocks', 'A pair and a margin block of six of the Dufy stamp.', ['Mint stamps'], ['dufy']],
  ['1966: La Tour and Vix Krater blocks', 'Margin blocks of the La Tour and Vix Krater stamps, one with the printed sheet number.', ['Mint stamps'], ['latour', 'vix']],
  ['Presentation folder with the card of René Joder, Director-General of the French Posts', 'A red presentation folder of six 1963–64 art stamps (Lady and the Unicorn, enamel, Jean le Bon, Notre-Dame, Chagall and a stained-glass window) with the engraved visiting card of René Joder, Directeur Général des Postes, Ministère des Postes et Télécommunications, Paris.', ['Presentation sheet'], ['licorne', 'email', 'jeanlebon', 'notredame', 'chagall']],
];

export const binderPages: AlbumPage[] = rows.map(([title, summary, kinds = ['Mint stamps'], stamps = []], i) => ({
  frame: 10,
  index: i + 1,
  title,
  kinds,
  summary,
  contents: [],
  research: [
    i === 46
      ? 'Folders like this were given by the French postal administration to officials, dignitaries and distinguished collectors. The Director-General’s own card suggests it came to the Kohns as a personal gift, though how is not recorded.'
      : 'This is one of the Kohns’ stock-binder pages: supporting material, duplicates and later issues kept alongside the exhibit rather than mounted in it.',
  ],
  stamps,
  sources: i === 16 || i === 17 || i === 18 || i === 22 || i === 15 ? [S.proofs] : [],
}));
