// Frame 12: complete mint sheets and the Kohns' boxed first day covers
// ("stamp sheets" folder). Photographed loose, not mounted on album pages.
import { S, type Source } from './sources';
import type { AlbumPage } from './pages';

const W = (label: string, url: string): Source => ({ label, url });
const WIKI = (t: string) => W(`Wikipedia — ${t.replace(/_/g, ' ')}`, `https://en.wikipedia.org/wiki/${t}`);

const SHEET_NOTE =
  'French recess stamps of the 1960s were printed on the six-colour TD6 rotary presses in sheets of 25. The margins carry the press reference (for example “T.D.6-5”) and a five-digit sheet number, so each complete sheet is individually identifiable.';

type Sh = [title: string, stamp: string, number: string, press: string, extra: string, sources: Source[]];

const sheets: Sh[] = [
  ['Les Très Riches Heures du Duc de Berry (1965): complete sheet of 25', 'berry', '12024', 'T.D.6-5', 'The design reproduces the August page of the Limbourg brothers’ book of hours, a hawking party leaving the Château d’Étampes.', [WIKI('Très_Riches_Heures_du_Duc_de_Berry')]],
  ['Sainte-Chapelle window (1966): complete sheet of 25', 'saintechapelle', '68415', 'T.D.6-5', 'The panel comes from the Sainte-Chapelle’s window of the History of the Relics.', [WIKI('Sainte-Chapelle')]],
  ['The Apocalypse Tapestry (1965): complete sheet of 25', 'apocalypse', '22399', 'T.D.6-2', 'The stamp shows an angel from the 14th-century Apocalypse Tapestry at the Château d’Angers.', [WIKI('Apocalypse_Tapestry')]],
  ['The Vix Krater (1966): complete sheet of 25', 'vix', '60309', 'T.D.6-5', 'The frieze of horses and warriors comes from the bronze krater found in 1953 in the princely tomb at Vix.', [WIKI('Vix_Grave')]],
  ['Clouet’s François I (1967): complete sheet of 25', 'francois', '96414', 'T.D.6', 'The portrait of François I, attributed to Jean Clouet, hangs in the Louvre.', [WIKI('Jean_Clouet')]],
  ['Les Très Riches Heures du Duc de Berry (1965): a second complete sheet', 'berry', '92763', 'T.D.6-5', 'A second sheet of the August miniature, from a different printing.', [WIKI('Très_Riches_Heures_du_Duc_de_Berry')]],
  ['Sens Cathedral window (1965): complete sheet of 25', 'sens', '43499', 'T.D.6-5', 'Issued for the 800th anniversary of Sens Cathedral; the panel is from one of its 13th-century windows.', [WIKI('Sens_Cathedral')]],
  ['Clouet’s François I (1967): a second complete sheet', 'francois', '13175', 'T.D.6-5', 'A second sheet of the Clouet portrait.', [WIKI('Jean_Clouet')]],
  ['Toulouse-Lautrec, “L’Anglaise du Star au Havre” (1965): complete sheet of 25', 'lautrec', '83097', 'T.D.6-5', 'Lautrec painted the English barmaid of the Star in Le Havre in 1899; the painting is in the Musée Toulouse-Lautrec at Albi.', [WIKI('Henri_de_Toulouse-Lautrec')]],
  ['Saint Éloi window, Sainte-Madeleine, Troyes (1967): complete sheet of 25', 'troyes', '96030', 'T.D.6-5', 'The panel is from the 16th-century glass of the Église Sainte-Madeleine in Troyes.', [WIKI('Église_Sainte-Madeleine_de_Troyes')]],
  ['Clouet’s François I (1967): a third complete sheet', 'francois', '09121', 'T.D.6-5', 'A third sheet of the Clouet portrait, with the Kohns’ pencilled Scott catalogue reference 1173.', [WIKI('Jean_Clouet')]],
];

export const sheetPages: AlbumPage[] = [
  {
    frame: 12, index: 1,
    title: 'Boxed first day covers, 1961 onward: from Braque to Chagall and the Duc de Berry',
    kinds: ['First day cover'],
    summary: 'The front of the Kohns’ box of first day covers of the French art stamps, each in its own sleeve, beginning with Braque’s “Le Messager” (Paris, 10 November 1961).',
    contents: [
      'First day covers of the 1961 “Peintres modernes français” set: Braque, Cézanne, La Fresnaye and Matisse',
      'Covers for Manet, the Conches “Saint Pierre” window, Chagall, Girard d’Orléans’ Jean le Bon, the Duc de Berry and the Apocalypse Tapestry, among others',
      'The Kohns’ pencilled Scott reference “1014” on the Braque cover',
    ],
    research: [
      'Most of the covers carry the illustrated “Premier Jour” postmark of the town linked to the artwork, and several use the cachets of French first-day cover publishers.',
    ],
    stamps: ['braque', 'cezanne', 'fresnaye', 'manet', 'conches', 'chagall', 'jeanlebon', 'berry', 'apocalypse'],
    sources: [S.fdc, S.museeImaginaire],
  },
  {
    frame: 12, index: 2,
    title: 'Boxed first day covers, continued: Daumier, Seurat, Gauguin and later issues',
    kinds: ['First day cover'],
    summary: 'The second box of first day covers, led by Daumier’s “Crispin et Scapin” (Marseille, 10 December 1966).',
    contents: [
      'First day cover “L’Orgue de Barbarie de Daumier”, cancelled H. DAUMIER · CRISPIN ET SCAPIN · PREMIER JOUR · 10 DÉC. 66 · 13 MARSEILLE',
      'Covers for Ingres’ “La Petite Baigneuse”, Gauguin’s “Arearea”, Philip the Good, Seurat, “Le Pêcheur à la coquille” and others',
      'The Kohns’ pencilled Scott reference “1153” on the Daumier cover',
    ],
    research: [
      'Together the two boxes follow the French art series from its first issue in 1961 into the 1970s, the same period as the exhibit frames.',
    ],
    stamps: ['daumier', 'ingres', 'philippe'],
    sources: [S.fdc, S.museeImaginaire],
  },
  ...sheets.map(([title, stamp, number, press, extra, sources], i): AlbumPage => ({
    frame: 12, index: i + 3,
    title,
    kinds: ['Full sheet', 'Mint stamps'],
    summary: `A complete mint sheet of 25 stamps (5 × 5) with full margins, sheet number ${number} and the press mark ${press}.`,
    contents: ['25 mint 1.00 F stamps', `Printed sheet number ${number}`, `Press reference ${press}`],
    research: [extra, SHEET_NOTE],
    stamps: [stamp],
    sources: [...sources, S.td6],
  })),
];
