// One entry per album page, in display order within each frame.
// `index` matches the image slug public/images/frame-N/NN-*.webp.
// `kohn` paraphrases or quotes the hand-lettered notes on the page itself;
// `research` is added context, backed by `sources` and the linked stamp records.

import { S, type Source } from './sources';
import { pages5to9, frameThemes5to9 } from './pages-5-9';

export type Kind =
  | 'Introduction'
  | 'Signed artist’s proof'
  | 'Deluxe proof'
  | 'Trial colour proof'
  | 'First day cover'
  | 'Maximum card'
  | 'Commercial cover'
  | 'Presentation sheet'
  | 'Varieties'
  | 'Hand-drawn cancel'
  | 'Original sketch'
  | 'Mint stamps';

export interface AlbumPage {
  frame: number;
  index: number;
  title: string;
  kinds: Kind[];
  summary: string;
  contents: string[];
  kohn?: string;
  research: string[];
  stamps: string[];
  sources: Source[];
}

const W = (title: string, url: string): Source => ({ label: title, url });

export const pages: AlbumPage[] = [
  // ───────────────────────────── FRAME 1 ─────────────────────────────
  {
    frame: 1,
    index: 1,
    title: 'How French stamps are made: proofs, essays and deluxe sheets',
    kinds: ['Introduction'],
    summary:
      'Kohn’s hand-lettered explanation of the three kinds of pre-issue material that run through the whole exhibit, with a drawn copy of the printing works’ control mark.',
    contents: [
      'Hand-lettered text in three sections: “Artists Proofs”, “Color Essays” and “Deluxe Sheets”',
      'Pen-and-ink copy of the corner mark of the Atelier de Fabrication des Timbres-Poste, Paris, with the number 1572',
    ],
    kohn:
      'Before January 1959 the engraver pulled 12 to 24 artist’s proofs on a hand press and gave 10 to the director of the stamp workshop with the finished die. After that date the workshop itself pulled exactly 18 proofs for the Minister of Posts, each embossed with a circular “Printing Control” seal; the number was kept small because the die was still soft. Colour essays are on thick paper, about 4½ × 5½ in., with a handwritten ink number, and were used to choose the issued colours. Deluxe sheets (200–400 of them, about 150 before 1959) are printed in the adopted colours on thick card and were used as diplomatic gifts.',
    research: [
      'French sources describe the same three categories. The épreuve d’artiste is a monochrome impression from the finished die, usually signed by the engraver and made in very small numbers. The épreuve de luxe is a card with the stamp printed at its centre in the issued colours, unperforated, made in a few hundred copies. The essai de couleur is a colour trial used to choose the final colours.',
      'Published figures for how many artist’s proofs were pulled vary by period and by source. Kohn gives 18 for the years after 1959; one specialist reference gives between 8 and 28 for French engraved stamps from 1960 onward, and later accounts describe runs of about seven to ten. All agree that artist’s proofs are far scarcer than deluxe proofs.',
    ],
    stamps: [],
    sources: [S.proofs, S.stampproofs],
  },
  {
    frame: 1,
    index: 2,
    title: 'Matisse, “Les Nus bleus” (1961): stamp, first day cover and a Mediterranean sketch',
    kinds: ['First day cover', 'Mint stamps', 'Hand-drawn cancel', 'Original sketch'],
    summary:
      'The 0.65 F Matisse stamp from the first “Musée Imaginaire” set, shown mint beside a hand-drawn copy of its first-day postmark and an illustrated first day cover. A colour-pencil street scene by Milton Kohn runs down the right side.',
    contents: [
      'Mint 0.65 F “Nus bleus” stamp, Yvert 1320',
      'Hand-drawn copy of the first-day postmark: PREMIER JOUR · NUS BLEUS · H. MATISSE · 10 NOV. 61 · PARIS',
      'First day cover from the “Les Peintres Modernes Français” series, with an engraved portrait of Matisse (cachet signed “H.R.”) and the stamp tied by the Paris first-day postmark',
      'Colour-pencil sketch of a narrow old-town street with arches and washing lines',
    ],
    kohn:
      '“Brilliant color and daring simplifications, based on the analysis of natural forms, are characteristic of the art of Henri Matisse.”',
    research: [
      'This stamp and its companions (Braque, Cézanne and La Fresnaye) went on sale in Paris on 10 November 1961, with general sale three days later. André Malraux, then Minister of Cultural Affairs, started the series, and collectors came to call it the “Musée Imaginaire” after his 1947 book. It was the first large-format French series printed by recess on a six-colour rotary press.',
      'The design comes from Matisse’s late gouache cut-outs of 1952, the <em>Blue Nudes</em>. Pierre Gandon, one of the most prolific French stamp engravers of the century, engraved it.',
    ],
    stamps: ['matisse'],
    sources: [
      S.museeImaginaire,
      W('Wikipedia — Blue Nudes (Matisse)', 'https://en.wikipedia.org/wiki/Blue_Nudes'),
      S.gandon,
      S.fdc,
    ],
  },
  {
    frame: 1,
    index: 3,
    title: 'Matisse, “The Blue Nudes”: artist’s proof signed by the engraver',
    kinds: ['Signed artist’s proof'],
    summary:
      'An artist’s die proof of the Matisse stamp printed in a single slate-green colour on thick paper, signed in pencil “P. Gandon” and blind-embossed with the printing works’ CONTRÔLE seal.',
    contents: [
      'Monochrome die proof on card, with the plate impression visible around the design',
      'Pencil signature of the engraver, Pierre Gandon',
      'Blind-embossed circular seal reading IMPRIMERIE DES TIMBRES-POSTE · CONTRÔLE',
    ],
    kohn:
      'Of the 18 proofs pulled, 10 were given to high officials and 8 went to the artist, who usually kept one and disposed of the rest. Such proofs sometimes reach the market after the death of the artist or official.',
    research: [
      'The signature matches the published record: Pierre Gandon engraved Yvert 1320. A monochrome proof like this shows the engraving itself, before the colours of the rotary press are added.',
      'The embossed seal is the control mark of the government stamp printing works. It is the “Printing Control” seal Kohn describes on his introductory page. This lettered version, IMPRIMERIE DES TIMBRES-POSTE around CONTRÔLE, is the earlier of the two designs found in the collection. The later proofs in Frames 3 and 4 carry a redesigned seal with a hand press at its centre.',
    ],
    stamps: ['matisse'],
    sources: [S.proofs, S.stampproofs, S.gandon],
  },
  {
    frame: 1,
    index: 4,
    title: 'Matisse, “The Blue Nudes”: deluxe proof',
    kinds: ['Deluxe proof'],
    summary:
      'The deluxe proof (épreuve de luxe) of the Matisse stamp: an unperforated impression in the issued colours on a card bearing the imprint of the Atelier de Fabrication des Timbres-Poste, Paris.',
    contents: [
      'Deluxe proof card, stamp in issued blue and green',
      'Printed control marks and the imprint “Atelier de Fabrication des Timbres-Poste. PARIS”',
    ],
    research: [
      'Deluxe proofs were printed in a few hundred copies and traditionally given as official gifts. Placed next to the signed artist’s proof on the previous page, it shows the step from the engraver’s monochrome die to the finished colour stamp.',
    ],
    stamps: ['matisse'],
    sources: [S.proofs],
  },
  {
    frame: 1,
    index: 5,
    title: 'Matisse, “The Blue Nudes”: shade variety',
    kinds: ['Varieties'],
    summary:
      'Two issued copies of the Matisse stamp set side by side to show a colour-shade difference, with Kohn’s colour-pencil “magnifying glass” enlargements of the same detail on each.',
    contents: [
      'Copy labelled “Milky blue — error in color shade”',
      'Copy labelled “Dark blue color — correct shade”',
      'Two hand-drawn circular enlargements with red pointer lines',
    ],
    kohn: 'Kohn identifies the paler copy as a “milky blue” shade error and the darker as the correct shade.',
    research: [
      'Rotary-press printing produced noticeable shade differences between print runs. Shade varieties are collected, but how much they are worth depends on being confirmed by a specialist. The hand-drawn enlargements are a typical Kohn way of explaining a technical point to exhibition visitors.',
    ],
    stamps: ['matisse'],
    sources: [S.museeImaginaire],
  },
  {
    frame: 1,
    index: 6,
    title: 'Matisse, “The Blue Nudes”: maximum card',
    kinds: ['Maximum card'],
    summary:
      'A picture postcard of one of Matisse’s 1952 Blue Nude cut-outs, with the stamp placed on the picture side and tied by the Paris first-day postmark of 10 November 1961.',
    contents: [
      'Picture postcard signed in the image “H MATISSE 52”',
      'Nus bleus stamp cancelled PREMIER JOUR · NUS BLEUS · H. MATISSE · 10 NOV. 61 · PARIS',
    ],
    research: [
      'A maximum card brings three matching things together: a picture postcard of the subject, the stamp showing it, and a postmark connected to both. Collecting them, called maximaphily, is one of the classes recognised by the Fédération Internationale de Philatélie.',
    ],
    stamps: ['matisse'],
    sources: [S.maxi, W('Wikipedia — Blue Nudes (Matisse)', 'https://en.wikipedia.org/wiki/Blue_Nudes')],
  },
  {
    frame: 1,
    index: 7,
    title: 'Matisse, “The Blue Nudes”: a second maximum card',
    kinds: ['Maximum card'],
    summary:
      'A second maximum card, this time with a different figure from the Blue Nudes series (“H. MATISSE 52”), also cancelled on the first day of issue in Paris.',
    contents: [
      'Picture postcard of a seated Blue Nude, signed in the image “H. MATISSE 52”',
      'Stamp tied by the first-day postmark, 10 NOV. 61, Paris',
    ],
    research: [
      'Matisse made four Blue Nude cut-outs in 1952. Having two different cards lets the exhibit compare the stamp design with more than one of its sources.',
    ],
    stamps: ['matisse'],
    sources: [S.maxi, W('Wikipedia — Blue Nudes (Matisse)', 'https://en.wikipedia.org/wiki/Blue_Nudes')],
  },
  {
    frame: 1,
    index: 8,
    title: 'Matisse: first day cover, mint stamp and a cliff-top town',
    kinds: ['First day cover', 'Mint stamps', 'Hand-drawn cancel', 'Original sketch'],
    summary:
      'A companion page to the first Matisse page, with a second copy of the illustrated first day cover, a mint stamp, a hand-drawn postmark and a colour-pencil drawing of a town perched on sea cliffs.',
    contents: [
      'First day cover, “Les Peintres Modernes Français — Henri Matisse”, cancelled 10 NOV. 61, Paris',
      'Mint Nus bleus stamp',
      'Hand-drawn first-day postmark',
      'Colour-pencil sketch of a cliff-top town above the sea',
    ],
    kohn:
      '“Brilliant color and daring simplification based on the analysis of natural forms are characteristic of the art of Henri Matisse.”',
    research: [
      'The drawing looks like the limestone cliffs of Bonifacio on the southern tip of Corsica, a view Kohn also drew for the Braque page. This is inferred from the drawing; Kohn did not label it.',
    ],
    stamps: ['matisse'],
    sources: [S.fdc, W('Wikipedia — Bonifacio, Corse-du-Sud', 'https://en.wikipedia.org/wiki/Bonifacio,_Corse-du-Sud')],
  },
  {
    frame: 1,
    index: 9,
    title: 'Braque, “Le Messager” (1961): stamp, first day cover and sketch',
    kinds: ['First day cover', 'Mint stamps', 'Hand-drawn cancel', 'Original sketch'],
    summary:
      'The 0.50 F Braque stamp from the same 1961 set, with a hand-drawn first-day postmark, an illustrated first day cover showing the elderly Braque, and a tall colour-pencil drawing of a cliff-top town.',
    contents: [
      'Mint 0.50 F “Le Messager” stamp, Yvert 1319',
      'Hand-drawn postmark: PREMIER JOUR · LE MESSAGER · G. BRAQUE · 10 NOV. 61 · PARIS',
      'First day cover, “Les Peintres Modernes Français — Georges Braque” (engraved portrait signed “H.R.”)',
      'Colour-pencil drawing of houses on a cliff edge above the sea',
    ],
    kohn:
      '“In 1908 George Braque allied himself with Pablo Picasso as one of the founders of Cubism. Rich browns and grays, as seen in this handsome painting, were often used by Braque.”',
    research: [
      'Braque’s late bird motifs, like the white bird of <em>Le Messager</em>, were the subject he returned to most in his last decade. The stamp was engraved by Pierre Gandon and issued on the same day as the Matisse.',
    ],
    stamps: ['braque'],
    sources: [S.museeImaginaire, W('Wikipedia — Georges Braque', 'https://en.wikipedia.org/wiki/Georges_Braque'), S.fdc],
  },
  {
    frame: 1,
    index: 10,
    title: 'Braque, “The Messenger”: artist’s proof signed by the engraver',
    kinds: ['Signed artist’s proof'],
    summary:
      'An artist’s proof of the Braque stamp printed in the issued colours, signed in pencil by Pierre Gandon and carrying the embossed CONTRÔLE seal.',
    contents: [
      'Proof on thick card with plate impression',
      'Pencil signature “P. Gandon”',
      'Blind-embossed IMPRIMERIE DES TIMBRES-POSTE · CONTRÔLE seal',
    ],
    research: [
      'Unlike the monochrome Matisse proof, this one is in full colour, as used for multicolour recess issues. The signature matches the engraver named in the catalogue records for Yvert 1319.',
    ],
    stamps: ['braque'],
    sources: [S.proofs, S.gandon],
  },
  {
    frame: 1,
    index: 11,
    title: 'Braque, “The Messenger”: deluxe proof',
    kinds: ['Deluxe proof'],
    summary: 'The deluxe proof of the Braque stamp, in the issued colours with the Atelier imprint and control marks.',
    contents: ['Deluxe proof card with “Atelier de Fabrication des Timbres-Poste. PARIS” imprint'],
    research: ['Paired with the signed proof on the previous page, it completes the proof sequence for this design.'],
    stamps: ['braque'],
    sources: [S.proofs],
  },
  {
    frame: 1,
    index: 12,
    title: 'Braque, “The Messenger”: maximum card',
    kinds: ['Maximum card'],
    summary:
      'A colour postcard of Braque’s painting with the stamp placed in the lower left and tied by the first-day postmark.',
    contents: ['Picture postcard of <em>Le Messager</em>', 'Stamp cancelled with the LE MESSAGER · G. BRAQUE first-day postmark, Paris'],
    research: ['A textbook maximum card: postcard, stamp and postmark all show the same work on its first day of issue.'],
    stamps: ['braque'],
    sources: [S.maxi],
  },

  // ───────────────────────────── FRAME 2 ─────────────────────────────
  {
    frame: 2,
    index: 1,
    title: 'Saint-Savin fresco (1969): trial colour proofs and a block of four',
    kinds: ['Trial colour proof', 'Mint stamps'],
    summary:
      'A sheet-margin pair of imperforate trial colour proofs of the Saint-Savin stamp, each in a different colour scheme from the issued stamp, shown above a perforated block of four in the issued colours.',
    contents: [
      'Imperforate top-margin pair, two different trial colour schemes (labelled by Kohn “Trail color proof”)',
      'Block of four of the issued 1.00 F stamp, Yvert 1588',
    ],
    research: [
      'Colour trials (essais de couleur) were printed to help the post office choose final colours. Comparing them with the issued block shows which scheme was chosen.',
      'The stamp shows a Romanesque wall painting at the abbey church of Saint-Savin-sur-Gartempe, sometimes called the “Romanesque Sistine Chapel” and a UNESCO World Heritage Site since 1983.',
    ],
    stamps: ['savin'],
    sources: [S.proofs, W('Wikipedia — Abbey Church of Saint-Savin-sur-Gartempe', 'https://en.wikipedia.org/wiki/Abbey_Church_of_Saint-Savin-sur-Gartempe')],
  },
  {
    frame: 2,
    index: 2,
    title: 'Saint-Savin: mint stamp and silk first day cover',
    kinds: ['First day cover', 'Mint stamps'],
    summary:
      'A mint Saint-Savin stamp beside a first day cover with a silk-printed cachet of the fresco, cancelled with the illustrated first-day postmark showing the two saints’ heads.',
    contents: [
      'Mint 1.00 F stamp',
      'First day cover, cachet “Église de St Savin — St Savin et St Cyprien devant Ladicius”',
      'Illustrated postmark: EGLISE DE SAINT-SAVIN (VIENNE) · PREMIER JOUR · 28 JUIN 1969 · 86 SAINT-SAVIN',
    ],
    kohn:
      'The fresco tells the lives of Saints Savin and Cyprian, brothers and sons of a consul, said to have been martyred in 458 for overturning idols at Amphipolis and refusing to sacrifice to pagan gods. The stamp shows them before Ladicius, consul of Amphipolis.',
    research: [
      'The first day was 28 June 1969 at Saint-Savin (Vienne), with general sale on 30 June. Claude Durrens designed and engraved the stamp.',
    ],
    stamps: ['savin'],
    sources: [S.fdc, W('Wikipedia — Abbey Church of Saint-Savin-sur-Gartempe', 'https://en.wikipedia.org/wiki/Abbey_Church_of_Saint-Savin-sur-Gartempe'), S.durrens],
  },
  {
    frame: 2,
    index: 3,
    title: 'Saint-Savin: maximum card',
    kinds: ['Maximum card'],
    summary:
      'A postcard of the Saint-Savin fresco with the stamp and the illustrated first-day postmark, above Kohn’s notes on how the stamp was printed.',
    contents: ['Picture postcard of the fresco', 'Stamp tied by the illustrated SAINT-SAVIN (VIENNE) · PREMIER JOUR · 28 JUIN 1969 postmark'],
    kohn:
      'The third stamp of the ninth art series (1969) and the thirty-sixth of the fine-art collection, printed on a six-colour rotary press in panes of 25. Kohn records a printing of 7,622,000, a pre-sale at Saint-Savin-sur-Gartempe on 28 June with an illustrated first-day cancel, and general sale two days later.',
    research: [
      'Kohn’s dates agree with published catalogue data. The printing figure is given there as 7,662,500.',
    ],
    stamps: ['savin'],
    sources: [S.maxi],
  },
  {
    frame: 2,
    index: 4,
    title: 'Sens Cathedral window (1965): stamp, first day cover and a sketch of Joigny',
    kinds: ['First day cover', 'Mint stamps', 'Hand-drawn cancel', 'Original sketch'],
    summary:
      'The 1.00 F stamp marking the 800th anniversary of Sens Cathedral, with a hand-drawn first-day postmark, an illustrated first day cover of the cathedral’s west front, and a colour-pencil sketch Kohn labelled “Old street at Joigny”.',
    contents: [
      'Mint 1.00 F stamp, “VIIIe Centenaire — Cathédrale de Sens”, Yvert 1427',
      'Hand-drawn postmark: PREMIER JOUR · CATHEDRALE DE SENS · 5 JUIN 65 · 89-SENS',
      'First day cover, “SENS — La Cathédrale — Portail de Moïse”',
      'Colour-pencil sketch, “Old street at Joigny”',
    ],
    kohn:
      'Kohn describes the window as part of “the beautiful 11th century church of Saint Savinien at Sens, 60 miles southeast of Paris on the Yonne River.”',
    research: [
      'Catalogue sources identify the design as a stained-glass panel from Sens Cathedral (Saint-Étienne) showing Saint Paul on the road to Damascus. It was issued for the cathedral’s 800th anniversary and designed and engraved by Jacques Combet. Sens is on the Yonne, and Joigny, the town in Kohn’s sketch, is a little further up the same river.',
    ],
    stamps: ['sens'],
    sources: [W('Wikipedia — Sens Cathedral', 'https://en.wikipedia.org/wiki/Sens_Cathedral'), W('Wikipedia — Joigny', 'https://en.wikipedia.org/wiki/Joigny')],
  },
  {
    frame: 2,
    index: 5,
    title: 'Chartres Cathedral window (1963): deluxe proof',
    kinds: ['Deluxe proof'],
    summary: 'The deluxe proof of the 0.95 F Chartres stained-glass stamp, which Kohn titles “The Fur Merchants”.',
    contents: ['Deluxe proof card with Atelier imprint and control marks'],
    research: [
      'Many of Chartres’ windows were paid for by town guilds, who are shown at work in the lowest panels. Kohn’s title refers to that tradition.',
    ],
    stamps: ['chartres'],
    sources: [S.proofs, W('Wikipedia — Chartres Cathedral', 'https://en.wikipedia.org/wiki/Chartres_Cathedral')],
  },
  {
    frame: 2,
    index: 6,
    title: 'Notre-Dame de Paris, 800th anniversary (1964)',
    kinds: ['First day cover', 'Mint stamps', 'Hand-drawn cancel', 'Original sketch'],
    summary:
      'The 0.60 F Notre-Dame stamp set inside a Gothic lancet window drawn by Kohn in colour pencil, with a hand-drawn first-day postmark and an illustrated first day cover of the cathedral at night.',
    contents: [
      'Mint 0.60 F stamp, Yvert 1419, mounted as the lower pane of a hand-drawn Gothic window',
      'Hand-drawn postmark: PREMIER JOUR · VIIIe CENTENAIRE NOTRE DAME DE PARIS · 23 MAI 64 · PARIS',
      'First day cover, “VIIIe Centenaire de Notre-Dame de Paris — Vue actuelle la nuit”',
    ],
    kohn:
      'Notre-Dame, “most celebrated Gothic cathedral in the world”, stands on the Île de la Cité. Its thirteenth-century west front with two towers is rated the finest Gothic façade, and the cathedral was immortalised by Victor Hugo.',
    research: [
      'The stamp commemorates the 800th anniversary of the laying of the cathedral’s first stone in 1163 under Bishop Maurice de Sully. Claude Durrens designed and engraved it, and it went on sale in Paris on 23 May 1964.',
      'Hugo’s novel about the cathedral is <em>Notre-Dame de Paris</em> (1831), set under Louis XI. Kohn’s note also names <em>Les Misérables</em>, a different Hugo novel.',
    ],
    stamps: ['notredame'],
    sources: [W('Wikipedia — Notre-Dame de Paris', 'https://en.wikipedia.org/wiki/Notre-Dame_de_Paris'), S.durrens],
  },
  {
    frame: 2,
    index: 7,
    title: 'Chartres window: artist’s proof signed by Claude Durrens',
    kinds: ['Signed artist’s proof'],
    summary:
      'A monochrome dark-blue artist’s proof of the Chartres stamp, signed in pencil by the engraver Claude Durrens and embossed with the CONTRÔLE seal.',
    contents: ['Monochrome die proof on card', 'Pencil signature “C. Durrens”', 'Blind-embossed CONTRÔLE seal'],
    research: [
      'Claude Durrens (1921–2002) won the Prix de Rome for engraving and engraved nearly 400 French stamps. The signature matches the catalogue record naming him as designer and engraver of Yvert 1399.',
    ],
    stamps: ['chartres'],
    sources: [S.proofs, S.durrens],
  },
  {
    frame: 2,
    index: 8,
    title: 'Chartres Cathedral: stamp, first day cover and a pilgrimage sketch',
    kinds: ['First day cover', 'Mint stamps', 'Hand-drawn cancel', 'Original sketch'],
    summary:
      'The Chartres stamp with a hand-drawn first-day postmark, an illustrated first day cover of the cathedral, and a tall colour-pencil scene of pilgrims praying before a statue of the Virgin in a candlelit grotto.',
    contents: [
      'Mint 0.95 F stamp, Yvert 1399',
      'Hand-drawn postmark: PREMIER JOUR · VITRAIL DE LA CATHEDRALE DE CHARTRES · 9 NOV. 63 · CHARTRES',
      'First day cover, “Chartres — La Célèbre Cathédrale”, after Yvon',
      'Colour-pencil sketch of a grotto shrine with candles and kneeling pilgrims',
    ],
    kohn:
      'Built of grey Berchères stone on high ground in the middle of Chartres, 55 miles southwest of Paris, the cathedral has fine bell towers and spires and famous 12th- and 13th-century stained glass, including the Jesse Tree.',
    research: [
      'Chartres has one of the most complete sets of medieval stained glass in existence and has been a UNESCO World Heritage Site since 1979. The grotto sketch looks like the Marian shrine at Lourdes. That is an inference; Kohn did not label it.',
    ],
    stamps: ['chartres'],
    sources: [W('Wikipedia — Chartres Cathedral', 'https://en.wikipedia.org/wiki/Chartres_Cathedral'), S.fdc],
  },
  {
    frame: 2,
    index: 9,
    title: 'Chartres window: single-colour artist’s proof signed by Durrens',
    kinds: ['Signed artist’s proof'],
    summary:
      'An unusual artist’s proof showing only the red parts of the Chartres design, with no frame lines, lettering or value, signed by Claude Durrens and embossed with the CONTRÔLE seal.',
    contents: ['Partial, single-colour (red) impression of the design only', 'Pencil signature “C. Durrens”', 'Blind-embossed CONTRÔLE seal'],
    research: [
      'Multicolour recess stamps were printed from several inked areas. A proof showing one colour element by itself, without the frame and inscriptions, records an intermediate stage in making the design and is much less often seen than the finished-design proofs.',
    ],
    stamps: ['chartres'],
    sources: [S.proofs, S.durrens],
  },
  {
    frame: 2,
    index: 10,
    title: 'Chartres window: colour varieties',
    kinds: ['Varieties'],
    summary:
      'Two issued Chartres stamps showing colour differences, each explained with a hand-coloured enlargement and red arrows.',
    contents: [
      'Top-margin copy with a pencil note “Grayish Ground” and a signature in the margin; Kohn: “Ground color should be a true black in this stamp — note it is gray”',
      'Second copy; Kohn: “Arch color should be a true black in this stamp — note it is blue”',
      'Two colour-pencil enlargements with arrows',
    ],
    research: [
      'Colour shifts like these come from inking differences on the six-colour rotary press. The signed margin note looks like a dealer’s or expert’s identification, but the signature has not been identified.',
    ],
    stamps: ['chartres'],
    sources: [S.td6],
  },
  {
    frame: 2,
    index: 11,
    title: 'Chartres window on an airmail cover through the French military post (1963)',
    kinds: ['Commercial cover'],
    summary:
      'An airmail envelope sent to a collector in Brooklyn, New York, franked with a corner-margin copy of the Chartres stamp and three other 1963–64 issues, cancelled by the French military postal service.',
    contents: [
      'Chartres 0.95 F corner-margin copy',
      'Saint-Flour 0.60 F, Maison de la Radio-Télévision 0.20 F and PHILATEC Paris 1964 0.25 F',
      'Postmarks POSTE AUX ARMÉES, 23 December 1963',
      'PAR AVION label',
    ],
    research: [
      'The “Poste aux Armées” postmark shows the letter went through the French forces’ postal system, probably from troops stationed abroad. A real, postally used cover like this shows the art stamps doing their everyday job and complements the prepared first-day items.',
    ],
    stamps: ['chartres'],
    sources: [W('Wikipédia (fr) — Bureau postal militaire', 'https://fr.wikipedia.org/wiki/Bureau_postal_militaire')],
  },
  {
    frame: 2,
    index: 12,
    title: 'Daumier, “Crispin et Scapin” (1966): stamp, hand-drawn cancel and first day cover',
    kinds: ['First day cover', 'Mint stamps', 'Hand-drawn cancel'],
    summary:
      'The Daumier stamp with Kohn’s hand-drawn copy of the illustrated Marseille first-day postmark and a first day cover showing Daumier’s <em>L’Orgue de Barbarie</em>.',
    contents: [
      'Mint 1.00 F stamp, Yvert 1494',
      'Hand-drawn illustrated postmark: H. DAUMIER “CRISPIN ET SCAPIN” · PREMIER JOUR · 10 DEC 66 · 13 MARSEILLE',
      'First day cover “Historique No 586 — L’Orgue de Barbarie de Daumier”',
    ],
    kohn:
      'Daumier’s paintings take several different approaches, though they tend to realism and sometimes recall Courbet. After 1860 his painting became looser and more adventurous, moving toward Impressionism.',
    research: [
      'The first day was held in Marseille, Daumier’s birthplace. The painting, about 1864, is in the Musée d’Orsay and shows two scheming valets from Molière’s <em>Les Fourberies de Scapin</em>. Pierre Gandon designed and engraved the stamp.',
    ],
    stamps: ['daumier'],
    sources: [W('Musée d’Orsay — Crispin et Scapin', 'https://www.musee-orsay.fr/en/artworks/crispin-et-scapin-10867'), S.gandon],
  },

  // ───────────────────────────── FRAME 3 ─────────────────────────────
  {
    frame: 3,
    index: 1,
    title: 'Daumier: an unfinished engraving state signed by Gandon',
    kinds: ['Signed artist’s proof'],
    summary:
      'An artist’s proof of the Daumier design pulled before the frame, lettering and value were engraved, showing only the picture. It is signed by Pierre Gandon and embossed with a printing-works seal.',
    contents: ['Picture-only engraving, no frame or inscriptions (Kohn: “Clowns” by Daumier)', 'Pencil signature “P. Gandon”', 'Blind-embossed seal showing a printing press'],
    research: [
      'Proofs of unfinished states let you see the engraver’s work before the stamp was completed. Placed next to the finished proof two pages later, this one shows how Gandon built up the design.',
      'The seal here is the later design, with a hand press at the centre and an irregular, wax-like outer edge. It replaced the plain lettered CONTRÔLE seal seen on the 1961 proofs in Frame 1.',
    ],
    stamps: ['daumier'],
    sources: [S.proofs, S.stampproofs, S.gandon],
  },
  {
    frame: 3,
    index: 2,
    title: 'Daumier: maximum card',
    kinds: ['Maximum card'],
    summary: 'A postcard of <em>Crispin et Scapin</em> with the stamp tied by the illustrated Marseille first-day postmark.',
    contents: ['Picture postcard', 'Stamp cancelled H. DAUMIER “CRISPIN ET SCAPIN” · PREMIER JOUR · 10 DEC 66 · 13 MARSEILLE'],
    kohn:
      'The fifth stamp of the sixth art series (1966) and the twenty-fifth of the fine-art collection “destined to create an Imaginary Museum”, printed on the six-colour rotary press in panes of 25. Kohn records 7,925,000 copies, a pre-sale in Marseille on 10 December with an illustrated cancel, and general sale on 12 December.',
    research: ['The dates agree with catalogue records, which give the printing as 7,610,000.'],
    stamps: ['daumier'],
    sources: [S.maxi, S.museeImaginaire],
  },
  {
    frame: 3,
    index: 3,
    title: 'Daumier and Lurçat on a registered airmail cover to Chicago (1966)',
    kinds: ['Commercial cover'],
    summary:
      'A registered airmail envelope from Paris to Chicago, franked with the Daumier stamp, a pair of the Jean Lurçat tapestry stamp and a red postage-meter strip.',
    contents: [
      'Daumier 1.00 F and a pair of Lurçat tapestry 1.00 F stamps',
      'Red meter franking 0.65 F, PARIS VIII, R. La Boétie, 23 XII 66',
      'Registration label “R — Paris VIII — No 075”',
    ],
    kohn: 'Kohn titles the pictures “Crispin and Scapin, or ‘The Secret’” by Honoré Daumier and the “Moon and Toro” tapestry by Jean Lurçat.',
    research: [
      'The Lurçat stamp (Yvert 1493) reproduces the tapestry <em>La Lune et le Taureau</em>. It was engraved by Albert Decaris and issued at Aubusson, the tapestry town, on 19 November 1966. This cover was posted barely two weeks after the Daumier stamp came out.',
    ],
    stamps: ['daumier', 'lurcat'],
    sources: [S.registered],
  },
  {
    frame: 3,
    index: 4,
    title: 'Daumier: finished artist’s proof signed by Gandon',
    kinds: ['Signed artist’s proof'],
    summary:
      'A complete monochrome artist’s proof of the Daumier stamp with frame, value and lettering, signed by Pierre Gandon. Kohn notes it as “scarce — 2 known”.',
    contents: ['Monochrome die proof of the finished design', 'Pencil signature “P. Gandon”', 'Embossed printing-works seal and blind-embossed inscription'],
    kohn: '“Scarce — 2 known.”',
    research: [
      'Together with the unfinished state on page 1 of this frame, this gives two stages of the same engraving, both signed. Kohn’s note on scarcity is his own; we have not found a published census to confirm it.',
    ],
    stamps: ['daumier'],
    sources: [S.proofs, S.gandon],
  },
  {
    frame: 3,
    index: 5,
    title: 'The Apocalypse Tapestry (1965): stamp, first day cover and sketch',
    kinds: ['First day cover', 'Mint stamps', 'Hand-drawn cancel', 'Original sketch'],
    summary:
      'The Apocalypse Tapestry stamp with a hand-drawn copy of the illustrated “Salon de l’Enfance” postmark, an illustrated first day cover of Saint Michael fighting the dragon, and a colour-pencil title cartouche held by four figures in nineteenth-century dress.',
    contents: [
      'Mint 1.00 F stamp, “L’Apocalypse — Tapisserie XIVe S.”, Yvert 1458',
      'Hand-drawn illustrated postmark: SALON DE L’ENFANCE · 31 OCT 65 · PARIS',
      'First day cover “Historique No 547A — L’Apocalypse — St Michel et les Anges terrassent le Dragon”',
      'Colour-pencil cartouche: “Tapestry of the Apocalypse, 14th century”',
    ],
    kohn:
      'One of the famed tapestries of the Apocalypse, part of an unrivalled collection of Gothic tapestries at Angers, “considered one of the most beautiful cities in France.”',
    research: [
      'Designed by Hennequin (Jean) de Bruges and woven about 1377–1382 for Duke Louis I of Anjou, the Apocalypse Tapestry is the largest surviving medieval tapestry set. Kohn places it in the Cathedral of Saint-Maurice, where it hung for centuries. Since the 1950s it has been shown in a purpose-built gallery at the Château d’Angers.',
      'The stamp’s official first day was at Angers on 30 October 1965, with an illustrated cancel also used at the Salon de l’Enfance in Paris. Jean Pheulpin engraved it.',
    ],
    stamps: ['apocalypse'],
    sources: [W('Wikipedia — Apocalypse Tapestry', 'https://en.wikipedia.org/wiki/Apocalypse_Tapestry'), S.fdc],
  },
  {
    frame: 3,
    index: 6,
    title: 'Sainte-Foy de Conches window (1963): deluxe proof',
    kinds: ['Deluxe proof'],
    summary:
      'The deluxe proof of the 1.00 F Conches stained-glass stamp, which Kohn calls “St Peter’s Window”.',
    contents: ['Deluxe proof card with Atelier imprint and control marks'],
    research: [
      'The window is one of a Renaissance series at the Church of Sainte-Foy in Conches-en-Ouche (Normandy), attributed to the mid-sixteenth-century glass painter Romain Buron. The stamp was designed and engraved by Jacques Combet.',
    ],
    stamps: ['conches'],
    sources: [S.proofs],
  },
  {
    frame: 3,
    index: 7,
    title: 'Sainte-Foy de Conches: official presentation sheet',
    kinds: ['Presentation sheet'],
    summary:
      'A printed presentation sheet showing the window “Vitrail (Saint Pierre)”, with the stamp and the first-day postmark of Conches-en-Ouche.',
    contents: ['Printed colour reproduction of the window', 'Stamp cancelled PREMIER JOUR · VITRAIL DE L’EGLISE Ste FOY DE CONCHES · 2 MARS 63 · CONCHES-EN-OUCHE (EURE)'],
    research: ['The first day was 2 March 1963 at Conches-en-Ouche, with general sale on 4 March.'],
    stamps: ['conches'],
    sources: [S.fdc],
  },
  {
    frame: 3,
    index: 8,
    title: 'Clouet’s portrait of François I (1967): maximum card',
    kinds: ['Maximum card'],
    summary:
      'A postcard of Jean Clouet’s portrait of King François I with the stamp tied by the illustrated Cognac first-day postmark, which shows the king’s crowned salamander emblem and a fleur-de-lis.',
    contents: ['Picture postcard of the portrait', 'Stamp cancelled with the illustrated postmark 1er JUIL. 67 · COGNAC'],
    kohn:
      'The second stamp of the seventh art series (1967) and the twenty-seventh of the fine-art collection, printed on the six-colour rotary press in panes of 25, with 8,092,000 printed, a pre-sale in Cognac on 1 July and general sale two days later.',
    research: [
      'François I was born at Cognac in 1494, hence the first-day town, and the salamander was his personal emblem. The portrait is in the Louvre. René Cottet designed and engraved the stamp.',
    ],
    stamps: ['francois'],
    sources: [S.maxi, W('Wikipedia — Jean Clouet', 'https://en.wikipedia.org/wiki/Jean_Clouet'), W('Wikipedia — Francis I of France', 'https://en.wikipedia.org/wiki/Francis_I_of_France')],
  },
  {
    frame: 3,
    index: 9,
    title: 'Henri Rousseau, “La Carriole du Père Junier” (1967): maximum card',
    kinds: ['Maximum card'],
    summary: 'A postcard of Rousseau’s painting with the stamp tied by the illustrated first-day postmark of Laval, the painter’s birthplace.',
    contents: ['Picture postcard', 'Stamp cancelled with the illustrated postmark 15 AVR. 67 · 53 LAVAL'],
    kohn:
      'The first stamp of the seventh art series (1967) and the twenty-sixth of the fine-art collection, with 8,142,500 printed, a pre-sale in Laval on 15 April and general sale two days later.',
    research: [
      'Painted in 1908 and now in the Musée de l’Orangerie, the picture shows the grocer Claude Junier and his family in their cart. Rousseau painted himself as the man in the straw hat. Jean Pheulpin engraved the stamp.',
    ],
    stamps: ['rousseau'],
    sources: [S.maxi, W('Musée de l’Orangerie — La Carriole du Père Junier', 'https://www.musee-orangerie.fr/en/artworks/la-carriole-du-pere-junier-196429')],
  },
  {
    frame: 3,
    index: 10,
    title: 'La Fresnaye, “Le 14 Juillet” (1961): artist’s proof signed by René Cottet',
    kinds: ['Signed artist’s proof'],
    summary:
      'A colour artist’s proof of the La Fresnaye stamp from the first art set of 1961, signed in pencil by the engraver René Cottet and embossed with the CONTRÔLE seal.',
    contents: ['Proof on thick card in issued colours', 'Pencil signature “René Cottet”', 'Blind-embossed CONTRÔLE seal'],
    research: [
      'Catalogue records name René Cottet as engraver of this stamp, adapted from La Fresnaye’s study for <em>Le 14 Juillet</em> in the Musée national d’Art moderne. A known variety of this issue has the red printing shifted (Yvert 1322c).',
    ],
    stamps: ['fresnaye'],
    sources: [S.proofs, W('Wikipedia — Roger de La Fresnaye', 'https://en.wikipedia.org/wiki/Roger_de_La_Fresnaye')],
  },
  {
    frame: 3,
    index: 11,
    title: 'La Fresnaye, “Le 14 Juillet”: deluxe proof',
    kinds: ['Deluxe proof'],
    summary: 'The deluxe proof of the La Fresnaye stamp in issued colours, with the Atelier imprint.',
    contents: ['Deluxe proof card with “Atelier de Fabrication des Timbres-Poste. PARIS” imprint'],
    research: ['With the signed proof on the previous page and the maximum card that follows, this completes a three-part study of the design.'],
    stamps: ['fresnaye'],
    sources: [S.proofs],
  },
  {
    frame: 3,
    index: 12,
    title: 'La Fresnaye, “Le 14 Juillet”: maximum card',
    kinds: ['Maximum card'],
    summary: 'A postcard of La Fresnaye’s Bastille Day study with the stamp tied by the Paris first-day postmark of 10 November 1961.',
    contents: ['Picture postcard', 'Stamp cancelled PREMIER JOUR · 14 JUILLET · R. DE LA FRESNAYE · 10 NOV. 61 · PARIS'],
    research: ['Issued on the same day as the Braque and Matisse stamps in Frame 1, as part of the first “Musée Imaginaire” set.'],
    stamps: ['fresnaye'],
    sources: [S.maxi, S.museeImaginaire],
  },

  // ───────────────────────────── FRAME 4 ─────────────────────────────
  {
    frame: 4,
    index: 1,
    title: 'Toulouse-Lautrec, “L’Anglaise du Star au Havre” (1965)',
    kinds: ['First day cover', 'Mint stamps', 'Hand-drawn cancel', 'Original sketch'],
    summary:
      'The Toulouse-Lautrec stamp with an illustrated first day cover from Albi, a hand-drawn first-day postmark and Kohn’s colour-pencil copy of Lautrec’s <em>La Clownesse</em>.',
    contents: [
      'First day cover “Toulouse-Lautrec — Portrait de l’artiste”, cancelled 12 MARS 65 · 81-ALBI',
      'Mint 1.00 F stamp, Yvert 1426',
      'Hand-drawn first-day postmark',
      'Colour-pencil sketch, “Toulouse Lautrec, La Clownesse 1895”',
    ],
    kohn:
      'Lamed as a child, Toulouse-Lautrec could have moved in the highest Parisian society but preferred the company of artists and entertainers. He drew his subjects, with remarkable psychological insight, from the night-life of Montmartre, and his characteristic design was oblique with simplified perspective.',
    research: [
      'The painting (1899, Musée Toulouse-Lautrec, Albi) shows Miss Dolly, a barmaid at the Star café-concert in Le Havre, where Lautrec stopped on his way to take the boat to Bordeaux. Albi was the artist’s birthplace. Claude Durrens engraved the stamp.',
    ],
    stamps: ['lautrec'],
    sources: [W('Musée Toulouse-Lautrec — L’Anglaise du Star au Havre', 'https://www.musee-toulouse-lautrec.com/collections/chefs-d-oeuvre/langlaise-du-star-au-havre/'), W('Wikipedia — Cha-U-Kao (La Clownesse)', 'https://en.wikipedia.org/wiki/Cha-U-Kao'), S.fdc],
  },
  {
    frame: 4,
    index: 2,
    title: 'Toulouse-Lautrec: “Red Nose” variety and a press-marked margin copy',
    kinds: ['Varieties', 'Mint stamps'],
    summary:
      'A left-margin copy with the press marking “T.D.6-5”, identified by Kohn as having a “red nose”, shown with an enlarged sketch and a block of four with normal colouring.',
    contents: ['Margin copy with press marking “T.D.6-5”', 'Hand-drawn enlargement of the face with arrow, “Red nose”', 'Block of four'],
    research: [
      'From July 1964 the sheet margins of recess-printed French stamps carried the press reference: TD6 for the six-colour intaglio press, followed by a number. Marginal copies like this tie a variety to its press.',
    ],
    stamps: ['lautrec'],
    sources: [S.td6],
  },
  {
    frame: 4,
    index: 3,
    title: 'Toulouse-Lautrec on a registered airmail cover from Strasbourg (1965)',
    kinds: ['Commercial cover'],
    summary:
      'A registered airmail envelope sent from the Strasbourg philatelic counter to a collector in Brooklyn, New York, franked with the Lautrec stamp and four other 1964–65 issues.',
    contents: [
      'Toulouse-Lautrec 1.00 F',
      'Retour des Déportés 0.40 F, Europa 1964 0.50 F, Maisons des Jeunes et de la Culture 0.25 F and Journée du Timbre 1965 0.25 + 0.10 F',
      'Postmarks STRASBOURG R.P. · PHILATELIE · 17-4-1965',
      'Registration label “Strasbourg R.P. No 788” and PAR AVION label',
    ],
    kohn: '“The English girl at the ‘Star’, Le Havre — by Henri de Toulouse-Lautrec.”',
    research: [
      'The cover was sent about a month after the stamp was issued and shows it used alongside the ordinary commemoratives of the day.',
    ],
    stamps: ['lautrec'],
    sources: [S.registered],
  },
  {
    frame: 4,
    index: 4,
    title: 'Toulouse-Lautrec: maximum card',
    kinds: ['Maximum card'],
    summary: 'A postcard of the painting with the stamp tied by the Albi first-day postmark of 12 March 1965.',
    contents: ['Picture postcard', 'Stamp cancelled PREMIER JOUR · TOULOUSE-LAUTREC · 12 MARS 65 · 81-ALBI'],
    kohn:
      'The first stamp of the fifth art series (1965) and the sixteenth of the fine-art collection, with 6,917,500 printed. It was pre-sold on 12 March in Paris (with an illustrated postmark) and in Albi (with the usual round dated cancel), and went on general sale three days later.',
    research: ['Kohn’s figures match the catalogue record exactly.'],
    stamps: ['lautrec'],
    sources: [S.maxi],
  },
  {
    frame: 4,
    index: 5,
    title: 'Limousin champlevé enamel (1964): stamp, first day cover and sketch',
    kinds: ['First day cover', 'Mint stamps', 'Original sketch'],
    summary:
      'The 12th-century enamel stamp with an illustrated first day cover from Limoges and a colour-pencil interior of a Limousin cottage, where a woman spins beside a porcelain tureen.',
    contents: [
      'Mint 1.00 F stamp, “Émail champlevé limousin XIIe siècle”, Yvert 1424',
      'First day cover “Email Champlevé Limousin — L’Adoration des Mages”, cancelled 4 JUIL. 64 · LIMOGES',
      'Colour-pencil cottage interior with a red arrow to the porcelain, and a matching arrow to LIMOGES on the postmark',
    ],
    kohn:
      'Enamelling began in the Limousin in the 7th century. In champlevé, recesses gouged out of bronze are filled with enamel. Deposits of kaolin found near Limoges in the 18th century made the city a world capital of the porcelain trade.',
    research: [
      'The stamp shows the enamel funerary plaque of Geoffrey V Plantagenet, Count of Anjou (died 1151), now in the Musée de Tessé at Le Mans. The first day was held at both Limoges and Le Mans. René Cottet engraved the stamp.',
    ],
    stamps: ['email'],
    sources: [W('Wikipedia — Limoges enamel', 'https://en.wikipedia.org/wiki/Limoges_enamel'), W('Wikipedia — Limoges porcelain', 'https://en.wikipedia.org/wiki/Limoges_porcelain')],
  },
  {
    frame: 4,
    index: 6,
    title: 'Chagall, “Les Mariés de la Tour Eiffel” (1963): deluxe proof',
    kinds: ['Deluxe proof'],
    summary: 'The deluxe proof of the 0.85 F Chagall stamp, which Kohn titles “Married Couple”.',
    contents: ['Deluxe proof card with Atelier imprint and control marks'],
    research: ['Pierre Gandon designed and engraved the stamp from Chagall’s painting of newlyweds floating before the Eiffel Tower.'],
    stamps: ['chagall'],
    sources: [S.proofs, S.gandon],
  },
  {
    frame: 4,
    index: 7,
    title: 'Chagall: stamp, first day cover and a farmyard sketch',
    kinds: ['First day cover', 'Mint stamps', 'Original sketch'],
    summary:
      'The Chagall stamp with an illustrated first day cover (“œuvre du Maître Marc Chagall”) and a colour-pencil drawing of a farmyard with a horse and a half-timbered house.',
    contents: [
      'Mint 0.85 F stamp, Yvert 1398',
      'First day cover “Les Mariés de la Tour Eiffel”, cancelled 9 NOV. 63 · PARIS',
      'Colour-pencil farmyard sketch',
    ],
    kohn:
      'Born in Russia in 1887, Chagall lived in France for over 25 years. His imagination prefers the miraculous and places recognisable images in fantastic relationships. He made 100 etchings for La Fontaine’s Fables, designed décor for Stravinsky’s <em>Firebird</em> and Ravel’s <em>Daphnis and Chloé</em>, and engraved great illustrations of the Bible.',
    research: [
      'Chagall became a French citizen in 1937. <em>Daphnis et Chloé</em> is a Ravel ballet, not an opera; Chagall designed a production of it for the Paris Opéra in 1958.',
    ],
    stamps: ['chagall'],
    sources: [W('Wikipedia — Marc Chagall', 'https://en.wikipedia.org/wiki/Marc_Chagall'), W('Wikipedia — Daphnis et Chloé', 'https://en.wikipedia.org/wiki/Daphnis_et_Chlo%C3%A9')],
  },
  {
    frame: 4,
    index: 8,
    title: 'Chagall: a second deluxe proof',
    kinds: ['Deluxe proof'],
    summary: 'A second deluxe proof of the Chagall stamp, which Kohn titles “The Married Couple of the Eiffel Tower”.',
    contents: ['Deluxe proof card with Atelier imprint'],
    research: ['A second example lets the design be compared side by side, and deluxe proofs were sometimes kept in pairs for that reason.'],
    stamps: ['chagall'],
    sources: [S.proofs],
  },
  {
    frame: 4,
    index: 9,
    title: 'Chagall: maximum card',
    kinds: ['Maximum card'],
    summary: 'A postcard of Chagall’s painting with the stamp tied by the Paris first-day postmark of 9 November 1963.',
    contents: ['Picture postcard', 'Stamp cancelled PREMIER JOUR · LES MARIÉS DE LA TOUR EIFFEL · M. CHAGALL · 9 NOV. 63 · PARIS'],
    kohn:
      'The third art series (part one) honoured Delacroix and Chagall on different dates. The Delacroix fresco was pre-sold on 2 March at Saint-Maurice, his birthplace, and the Chagall on 9 November in Paris and at Vence, where Chagall was then living, with general sale on 12 November.',
    research: ['Catalogue records confirm the double first day at Paris and Vence and general sale on 12 November 1963.'],
    stamps: ['chagall'],
    sources: [S.maxi],
  },
  {
    frame: 4,
    index: 10,
    title: 'The Vix Krater (1966): stamp, first day cover and sketch',
    kinds: ['First day cover', 'Mint stamps', 'Hand-drawn cancel', 'Original sketch'],
    summary:
      'The Vix Krater stamp with Kohn’s hand-drawn copy of the chariot postmark, an illustrated first day cover of the giant bronze vessel, and a colour-pencil drawing of a craftsman chasing metal.',
    contents: [
      'Mint 1.00 F stamp, “Cratère de Vix”, Yvert 1478',
      'Hand-drawn illustrated postmark: CRATÈRE DE VIX · PREMIER JOUR · 26 MARS 1966 · 21 CHATILLON S/ SEINE',
      'First day cover “La Tombe Princière de Vix — Le plus gigantesque Cratère que l’Antiquité nous ait livré”',
      'Colour-pencil sketch of an artisan with chisels',
    ],
    kohn:
      'The horses are part of the frieze on the gigantic bronze vase found in 1953 in “the Royal Tomb of Vix”, together with the skeleton of a woman thought from her ornaments to be of royal lineage. It is kept in the museum at Châtillon.',
    research: [
      'Made about 510 BC, the Vix Krater is the largest known bronze vessel from classical antiquity, over 1.6 m tall. It was found in the grave of a Celtic noblewoman near Mont Lassois and is displayed at the Musée du Pays Châtillonnais. Jacques Combet designed and engraved the stamp.',
    ],
    stamps: ['vix'],
    sources: [W('Wikipedia — Vix Grave', 'https://en.wikipedia.org/wiki/Vix_Grave')],
  },
  {
    frame: 4,
    index: 11,
    title: 'The Vix Krater: official presentation sheet',
    kinds: ['Presentation sheet'],
    summary:
      'A printed sheet, “La Tombe Princière de Vix”, with a large photograph of the krater’s horses and the stamp cancelled with the illustrated first-day postmark.',
    contents: ['Printed photographic sheet', 'Stamp cancelled CRATÈRE DE VIX · PREMIER JOUR · 26 MARS 1966 · CHATILLON S/ SEINE'],
    research: ['The first day was 26 March 1966 at Châtillon-sur-Seine, where the krater is displayed, with general sale on 28 March.'],
    stamps: ['vix'],
    sources: [W('Wikipedia — Vix Grave', 'https://en.wikipedia.org/wiki/Vix_Grave')],
  },
  {
    frame: 4,
    index: 12,
    title: 'The Vix Krater: mirror-image artist’s proof signed by Jacques Combet',
    kinds: ['Signed artist’s proof'],
    summary:
      'A blue artist’s proof of the Vix horses in which the image is reversed, with the horses facing left and the value reading backwards in the upper left. It is signed by the engraver Jacques Combet and carries the printing-works seals.',
    contents: ['Monochrome blue impression, mirror image, without frame lettering', 'Pencil signature “J. Combet”', 'Embossed printing-works seal and blind-embossed inscription'],
    kohn: '“Horses from bronze vessel of Vix.”',
    research: [
      'The signature matches the catalogue record naming Jacques Combet as designer and engraver. A reversed impression is out of the ordinary for an artist’s proof, which is normally pulled from the die so that it reads correctly, and it is one of the more unusual items in the collection.',
    ],
    stamps: ['vix'],
    sources: [S.proofs, S.stampproofs],
  },
  ...pages5to9,
];

// Frames 1–8 are the exhibition frames, 9 is a miscellany, and 10 holds the
// binder pages from the "misc stamps" folder once they are photographed.
export const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({
  number: n,
  pages: pages.filter((p) => p.frame === n),
}));

export const frameThemes: Record<number, { title: string; detail: string }> = {
  ...frameThemes5to9,
  10: { title: 'Binder pages', detail: 'Additional stamps from the Kohns’ stock binder' },
  1: { title: 'Matisse & Braque', detail: 'The first “Musée Imaginaire” stamps of 1961' },
  2: { title: 'Cathedrals, glass & fresco', detail: 'Saint-Savin, Sens, Chartres and Notre-Dame, with Daumier to close' },
  3: { title: 'Masters old & new', detail: 'Daumier, the Apocalypse Tapestry, Conches, Clouet, Rousseau and La Fresnaye' },
  4: { title: 'From Lautrec to the Vix Krater', detail: 'Toulouse-Lautrec, Limoges enamel, Chagall and the Vix Krater' },
};
