// Documented exhibition record of Milton and Janet Kohn, and Philympia 1970.
// Every entry cites a page image in the American Philatelic Research Library
// digital collection (digital.stamplibrary.org) or another public source.
import type { Source } from './sources';

const APRL = (ptr: number, label: string): Source => ({
  label: `APRL digital library — ${label}`,
  url: `https://digital.stamplibrary.org/ContentDmAdmin/ImageProxy.ashx?col=3&ptr=${ptr}&sz=full`,
});

export interface ExhibitRecord {
  year: string;
  show: string;
  who: 'Milton' | 'Janet' | 'Milton & Janet';
  exhibit: string;
  award: string;
  frenchArt?: boolean;
  quote?: string;
  source: Source;
}

export const exhibitRecord: ExhibitRecord[] = [
  { year: '1967', show: 'COMPEX, Chicago', who: 'Milton', exhibit: 'Israel first flights', award: 'Silver', quote: 'The hand drawn art work in mounting these covers drew the acclaim of the judges', source: APRL(465335, 'Jack Knight Air Log, May 1967, p.12') },
  { year: '1967', show: 'PARFOREX, Park Forest, Illinois', who: 'Milton', exhibit: 'French art stamps (topical)', award: 'Gold (Grand Award for his Israel exhibit)', frenchArt: true, quote: 'Kohn for his additional topical display of French art stamps', source: APRL(85398, 'American Philatelist, Aug 1967, p.852') },
  { year: '1970', show: 'PHILYMPIA, London', who: 'Milton', exhibit: 'Famous French Arts', award: 'Sent for exhibition (Kohn’s own inventory)', frenchArt: true, source: { label: 'Milton Kohn’s handwritten inventory (this collection)', url: '/philympia/' } },
  { year: '1972', show: 'BELGICA ’72, Brussels (international)', who: 'Milton & Janet', exhibit: 'Concentration camp mail', award: 'Bronze', source: APRL(78435, 'American Philatelist, Sept 1972, p.842') },
  { year: '1973', show: 'POLPEX ’73, Chicago', who: 'Milton & Janet', exhibit: '—', award: 'Polonus Gold Medal with Felicitations of the Jury', source: APRL(252366, 'Polonus Bulletin, Apr 1973') },
  { year: '1973', show: 'JERUSALEM ’73 (international)', who: 'Milton & Janet', exhibit: '“The Darkest Period of Mankind”', award: 'Bronze', source: APRL(252408, 'Polonus Bulletin, May 1974') },
  { year: '1975', show: 'Milwaukee Philatelic Society annual exhibition (MILCOPEX), Milwaukee, Wisconsin', who: 'Milton', exhibit: 'French Art', award: 'MPS President’s Award', frenchArt: true, quote: 'MPS President’s Award: French Art by Milton Kohn', source: APRL(408548, 'Wisconsin Federation of Stamp Clubs Bulletin, June 1975, p.19') },
  { year: '1976', show: 'POLPEX ’76, Chicago', who: 'Milton', exhibit: 'French Art Issues', award: 'Silver', frenchArt: true, quote: 'M. Kohn – for French Art Issues', source: APRL(253405, 'Polonus Bulletin, Apr 1976') },
  { year: '1977', show: 'AMPHILEX ’77, Amsterdam (international)', who: 'Janet', exhibit: 'Concentration camps', award: 'Vermeil', source: APRL(71602, 'American Philatelist, Aug 1977, p.644') },
  { year: '1978', show: 'SUPEX ’78, Suburban Collectors Club of Chicago (Sokol Brookfield Hall, Brookfield, Illinois, 4–5 Nov 1978)', who: 'Janet', exhibit: 'Concentration Camp Censor Markings', award: 'Grand Award (best in show)', quote: 'Kohn Wins SUPEX Grand Award', source: APRL(68959, 'American Philatelist, Jan 1979, p.57') },
  { year: '1978', show: 'PRAGA 1978, Prague (international)', who: 'Janet', exhibit: 'Concentration camp mail', award: 'Silver-Bronze', source: APRL(71160, 'American Philatelist, Dec 1978, p.1187') },
  { year: '1981', show: 'WIPA 1981, Vienna (international)', who: 'Milton & Janet', exhibit: 'Concentration camp mail; “Man’s Inhumanity to Man”', award: 'Silver (Janet); Silver-Bronze (Milton)', source: APRL(64985, 'American Philatelist, Aug 1981, p.739') },
  { year: '1981', show: 'ROCPEX Taipei ’81 (international)', who: 'Milton & Janet', exhibit: '“French Art on Stamps”, and others', award: 'Bronze for French Art on Stamps; Milton served as a U.S. Commissioner', frenchArt: true, quote: 'Bronze, Milton M. Kohn, “French Art on Stamps”', source: APRL(62819, 'American Philatelist, Jan 1982, pp.21–22') },
  { year: '1982', show: 'PHILEXFRANCE 82, Paris (international)', who: 'Milton', exhibit: 'Concentration camp mail; WWII overprints', award: 'Silver-Bronze; Bronze', source: APRL(63424, 'American Philatelist, Sept 1982, p.789') },
  { year: '1984', show: 'POLPEX ’84, Chicago', who: 'Janet', exhibit: 'Concentration Camp Mail', award: 'Reserve Grand Award and Polonus Gold', source: APRL(254272, 'Polonus Bulletin, May–June 1984') },
];

export const philympiaSources: Source[] = [
  { label: 'Wikipedia — Philympia 1970', url: 'https://en.wikipedia.org/wiki/Philympia_1970' },
  { label: 'The Postal Museum — Special Stamp History: Philympia 1970', url: 'https://www.postalmuseum.org/wp-content/uploads/2018/12/Stamp-History-1970-Philympia.pdf' },
  APRL(80885, 'American Philatelist, Nov 1970, p.994 (Philympia report)'),
  APRL(80886, 'American Philatelist, Nov 1970, p.995 (Philympia awards)'),
  APRL(82489, 'American Philatelist, Sept 1969, p.801 (jury and U.S. commissioners)'),
  APRL(79409, 'American Philatelist, Jan 1971, p.58 (Kohn APS application: “French Arts”)'),
];

// Kohn's handwritten Philympia inventory, as transcribed, with the stamp id
// used to link each line to the album page where that item now appears.
export const philympiaList = {
  frame1: [
    ['Notre-Dame rose window — stamp & first day cover', 'notredame'],
    ['Dufy, “The Red Violin”', 'dufy'],
    ['Braque, “The Messenger”', 'braque'],
    ['Matisse, “Blue Nudes”', 'matisse'],
    ['Champlevé enamel, Limousin', 'email'],
    ['Cézanne, “The Card Players”', 'cezanne'],
    ['“The Lady and the Unicorn” tapestry', 'licorne'],
    ['Chagall, “The Newlyweds of the Eiffel Tower”', 'chagall'],
    ['Toulouse-Lautrec, “The English Girl at the Star”', 'lautrec'],
    ['Sens Cathedral window', 'sens'],
    ['“Les Très Riches Heures du Duc de Berry”', 'berry'],
    ['La Fresnaye, “14 Juillet”', 'fresnaye'],
    ['Apocalypse tapestry', 'apocalypse'],
    ['The Vix Krater', 'vix'],
    ['La Tour, “The Newborn”', 'latour'],
    ['Chartres Cathedral window', 'chartres'],
  ],
  frame2: [
    ['Autographed artist’s proof — Matisse', 'matisse'],
    ['Autographed artist’s proof — Cézanne', 'cezanne'],
    ['Autographed artist’s proof — La Fresnaye', 'fresnaye'],
    ['Autographed artist’s proof — Braque', 'braque'],
    ['Deluxe proofs', 'chagall'],
    ['Colour errors and varieties', 'chartres'],
    ['Chagall special cancellation', 'chagall'],
  ],
  frame3: [
    ['Géricault, Manet and Courbet (1962)', 'gericault'],
    ['Deluxe proofs', 'courbet'],
    ['Maximum cards', 'latour'],
    ['Presentation folders', 'licorne'],
  ],
} as const;
