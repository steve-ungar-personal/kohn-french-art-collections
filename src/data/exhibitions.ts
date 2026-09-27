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
  { year: '1966', show: 'CHICAGOPEX 1966, the Chicago Philatelic Society’s 80th-anniversary exhibition, Chicago', who: 'Milton', exhibit: 'French arts', award: 'Topical award (best topical exhibit); Milton M. Kohn is also listed among the silver medals', frenchArt: true, quote: 'Other awards: … Topical: Milton M. Kohn (French arts)', source: APRL(84974, 'American Philatelist, Jan 1967, p.293') },
  { year: '1967', show: 'COMPEX, Chicago', who: 'Milton', exhibit: 'Israel first flights', award: 'Silver', quote: 'The hand drawn art work in mounting these covers drew the acclaim of the judges', source: APRL(465335, 'Jack Knight Air Log, May 1967, p.12') },
  { year: '1967', show: 'PARFOREX, Park Forest, Illinois', who: 'Milton', exhibit: 'French art stamps (topical)', award: 'Gold (Grand Award for his Israel exhibit)', frenchArt: true, quote: 'Kohn for his additional topical display of French art stamps', source: APRL(85398, 'American Philatelist, Aug 1967, p.852') },
  { year: '1968', show: 'TOPEX ’68, American Topical Association convention, Milwaukee, Wisconsin (21–23 June 1968)', who: 'Milton', exhibit: '“Great Arts” (as printed; very probably the French art exhibit)', award: 'Viewers’ Award', frenchArt: true, quote: 'Viewers’ Award: Milton M. Kohn (Great Arts)', source: APRL(402937, 'Wisconsin Federation of Stamp Clubs Bulletin, Fall 1968, p.12') },
  { year: '1970', show: 'PHILYMPIA, London', who: 'Milton', exhibit: 'Famous French Arts', award: 'Sent for exhibition (Kohn’s own inventory)', frenchArt: true, source: { label: 'Milton Kohn’s handwritten inventory (this collection)', url: '/philympia/' } },
  { year: '1972', show: 'POLPEX 1972, Chicago (4–5 March 1972)', who: 'Milton', exhibit: 'not stated', award: 'Gold medal', quote: 'Gold Medals: Milton M. Kohn, So. Holland, Ill.', source: APRL(252224, 'Polonus Bulletin, March 1972, p.298-3') },
  { year: '1972', show: 'BELGICA ’72, Brussels (international)', who: 'Milton & Janet', exhibit: 'Concentration camp mail', award: 'Bronze', source: APRL(78435, 'American Philatelist, Sept 1972, p.842') },
  { year: '1973', show: 'POLPEX ’73, Chicago', who: 'Milton & Janet', exhibit: '—', award: 'Polonus Gold Medal with Felicitations of the Jury', source: APRL(252366, 'Polonus Bulletin, Apr 1973') },
  { year: '1973', show: 'JERUSALEM ’73 (international)', who: 'Milton & Janet', exhibit: '“The Darkest Period of Mankind”', award: 'Bronze', source: APRL(252408, 'Polonus Bulletin, May 1974') },
  { year: '1974', show: 'POLPEX ’74, Chicago', who: 'Milton', exhibit: 'not stated', award: 'Silver', quote: 'Silver Award winner Milton Kohn', source: APRL(252426, 'Polonus Bulletin, April 1974, p.321-7 (photo caption)') },
  { year: '1975', show: 'Milwaukee Philatelic Society annual exhibition (MILCOPEX), Milwaukee, Wisconsin', who: 'Milton', exhibit: 'French Art', award: 'MPS President’s Award', frenchArt: true, quote: 'MPS President’s Award: French Art by Milton Kohn', source: APRL(408548, 'Wisconsin Federation of Stamp Clubs Bulletin, June 1975, p.19') },
  { year: '1975', show: 'ROMPEX ’75, Denver, Colorado (6–8 June 1975)', who: 'Milton', exhibit: 'Judaica', award: 'Best Judaica plaque (Denver chapter, Society of Israel Philatelists)', quote: 'The Denver chapter of the S.I.P. awarded the Best Judaica plaque to Milton M. Kohn', source: APRL(74691, 'American Philatelist, Aug 1975, p.746') },
  { year: '1976', show: 'POLPEX ’76, Chicago', who: 'Milton', exhibit: 'French Art Issues', award: 'Silver', frenchArt: true, quote: 'M. Kohn – for French Art Issues', source: APRL(253405, 'Polonus Bulletin, Apr 1976') },
  { year: '1977', show: 'AMPHILEX ’77, Amsterdam (international)', who: 'Janet', exhibit: 'Concentration camps', award: 'Vermeil', source: APRL(71602, 'American Philatelist, Aug 1977, p.644') },
  { year: '1978', show: 'SUPEX ’78, Suburban Collectors Club of Chicago (Sokol Brookfield Hall, Brookfield, Illinois, 4–5 Nov 1978)', who: 'Janet', exhibit: 'Concentration Camp Censor Markings', award: 'Grand Award (best in show)', quote: 'Kohn Wins SUPEX Grand Award', source: APRL(68959, 'American Philatelist, Jan 1979, p.57') },
  { year: '1978', show: 'UWM Philatelic Society show (UWMPSEX), Milwaukee, Wisconsin', who: 'Janet', exhibit: '—', award: 'Best in show', quote: 'Best in show to Janet Kohn', source: { label: 'Wisconsin Federation of Stamp Clubs Bulletin, Winter 1978 (Dec.), p. 1: entry in the Bulletin subject index (index p. 212)', url: 'https://www.wfscstamps.org/ATFP/Bulletin%20subject%20index.pdf#page=212' } },
  { year: '1978', show: 'PRAGA 1978, Prague (international)', who: 'Janet', exhibit: 'Concentration camp mail', award: 'Silver-Bronze', source: APRL(71160, 'American Philatelist, Dec 1978, p.1187') },
  { year: '1980', show: 'POLPEX 80, Chicago', who: 'Milton', exhibit: 'Concentration Camp Mail', award: 'Gold (printed as “Milton Cohen”; almost certainly Milton Kohn)', quote: 'Milton Cohen, Concentration Camp Mail', source: APRL(253755, 'Polonus Bulletin, May–June 1980, p.380-1') },
  { year: '1981', show: 'WIPA 1981, Vienna (international)', who: 'Milton & Janet', exhibit: 'Concentration camp mail; “Man’s Inhumanity to Man”', award: 'Silver (Janet); Silver-Bronze (Milton)', source: APRL(64985, 'American Philatelist, Aug 1981, p.739') },
  { year: '1981', show: 'ROCPEX Taipei ’81 (international)', who: 'Milton & Janet', exhibit: '“French Art on Stamps”, and others', award: 'Bronze for French Art on Stamps; Milton served as a U.S. Commissioner', frenchArt: true, quote: 'Bronze, Milton M. Kohn, “French Art on Stamps”', source: APRL(62819, 'American Philatelist, Jan 1982, pp.21–22') },
  { year: '1982', show: 'PHILEXFRANCE 82, Paris (international)', who: 'Milton', exhibit: 'Concentration camp mail; WWII overprints', award: 'Silver-Bronze; Bronze', source: APRL(63425, 'American Philatelist, Sept 1982, p.790') },
  { year: '1983', show: 'POLPEX ’83, Chicago', who: 'Janet', exhibit: '“A Study of Censor Marks”', award: 'Gold', quote: 'Janet S. Kohn, South Holland, IL — A Study of Censor Marks', source: APRL(254168, 'Polonus Bulletin, May–June 1983, p.398-4 (also American Philatelist, Oct 1983, p.956)') },
  { year: '1984', show: 'POLPEX ’84, Chicago', who: 'Janet', exhibit: 'Concentration Camp Mail', award: 'Reserve Grand Award and Polonus Gold', source: APRL(254272, 'Polonus Bulletin, May–June 1984') },
  { year: '1984', show: 'STaMpsHOW 84, Dallas, Texas (APS national show)', who: 'Milton & Janet', exhibit: '“Posts of the Concentration Camps” (Janet); “Over-Run Countries World War II” (Milton)', award: 'Silver (Janet); Silver-Bronze (Milton)', source: APRL(61227, 'American Philatelist, Oct 1984, p.990') },
];

// Non-competitive showings: talks, museum and synagogue displays, and the
// travelling Holocaust collection. Each entry quotes its source.
export interface Display {
  date: string;
  place: string;
  who: string;
  what: string;
  quote: string;
  sources: Source[];
}

const TRIB = (title: string, date: string, url: string): Source => ({ label: `Chicago Tribune — “${title}”, ${date}`, url });
const victims = TRIB('Victims’ Voices', '8 June 1997', 'https://www.chicagotribune.com/1997/06/08/victims-voices/');
const artifacts = TRIB('Holocaust Artifacts Make Point', '31 May 1989', 'https://www.chicagotribune.com/1989/05/31/holocaust-artifacts-make-point/');

export const displays: Display[] = [
  { date: '1960s', place: 'National philatelic convention, New York', who: 'Milton', what: 'His collection of French stamps', quote: 'Among his passions was a collection of French stamps, which he displayed at a national philatelic convention in New York in the 1960s.', sources: [victims] },
  { date: '11 Jan 1974', place: 'Polonus Philatelic Society program meeting, Chicago', who: 'Milton', what: 'Talk and display: “Concentration Camp Mail of World War II”', quote: 'All of the above gave excellent talks and showed us extraordinary material.', sources: [APRL(252307, 'Polonus Bulletin, Dec 1973, p.317-12 (announcement)'), APRL(252417, 'Polonus Bulletin, March 1974, p.320-7 (report)')] },
  { date: 'March–April 1983', place: 'Boca Raton, Florida', who: 'The Kohns', what: 'The Holocaust collection (known from two newspaper headlines; the articles have not been read)', quote: 'Holocaust collection on view … History of Holocaust on display', sources: [{ label: 'Boca Raton News, 25 March 1983, p.7C (Google News Archive)', url: 'https://news.google.com/newspapers?nid=1291&dat=19830325&id=AMMPAAAAIBAJ&pg=6925,7181646' }, { label: 'Boca Raton News, 4 April 1983, p.3A (Google News Archive)', url: 'https://news.google.com/newspapers?nid=1291&dat=19830404&id=IB9UAAAAIBAJ&pg=5213,904186' }] },
  { date: '2 June 1985', place: 'Holocaust Memorial Foundation of Illinois, Skokie (opening of its museum)', who: 'Milton', what: 'About 300 items from the Holocaust collection', quote: 'The museum … is showing an exhibit of about 300 items of Holocaust memorabilia owned by Milton Kohn of South Holland.', sources: [TRIB('Holocaust Museum Opens in Skokie', '3 June 1985', 'https://www.chicagotribune.com/1985/06/03/holocaust-museum-opens-in-skokie/')] },
  { date: 'Before 1989', place: 'Skokie (several times), a Hyde Park synagogue, other US states, China, Israel, South Africa and 12 European countries', who: 'Milton', what: 'The Holocaust collection', quote: 'Has been shown several times at the Holocaust Memorial Foundation of Illinois in Skokie, as well as at a Hyde Park synagogue, in several other states, and in China, Israel, South Africa and 12 European nations.', sources: [artifacts] },
  { date: 'May 1989', place: 'South Suburban College, South Holland, Illinois', who: 'Milton', what: 'The Holocaust collection', quote: 'The exhibit, on display last week at South Suburban College in South Holland …', sources: [artifacts] },
  { date: 'April 1991', place: 'Temple Anshe Sholom, Olympia Fields, Illinois (Holocaust observance week)', who: 'Milton', what: 'The Holocaust collection. The article also recalls a showing in Vienna', quote: 'The exhibit began as a stamp collection. … “My wife, Janet, encouraged me to tell the story of the Holocaust through philately.”', sources: [TRIB('Horror of Nazi Death Camps Brought to Life', '15 April 1991', 'https://www.chicagotribune.com/1991/04/15/horror-of-nazi-death-camps-brought-to-life/')] },
  { date: 'May 1997', place: 'Congregation Beth Israel, Hammond, Indiana (for National Holocaust Memorial Day)', who: 'Milton', what: '“Man’s Inhumanity to Man”, by then more than 700 pieces', quote: 'The letter is just one of hundreds of items on display here at Congregation Beth Israel.', sources: [{ label: 'New York Times — “Holocaust Collection Is Educator for Young”, 11 May 1997 (archived copy)', url: 'https://web.archive.org/web/20160305005841/http://www.nytimes.com/1997/05/11/us/holocaust-collection-is-educator-for-young.html' }, victims] },
  { date: 'Undated', place: 'San Francisco and Jerusalem', who: 'Milton', what: 'The Holocaust collection', quote: 'Two men who had been imprisoned in the same camp, reunited in Jerusalem while viewing the memorabilia there. … when the exhibit traveled to San Francisco …', sources: [victims] },
  { date: 'Undated', place: 'Schools, churches and synagogues', who: 'Milton, with memorabilia he and Janet gathered', what: 'The Holocaust collection, shown and discussed', quote: 'Memorabilia that Mr. Kohn eventually would display and discuss at schools, churches and synagogues.', sources: [TRIB('Milton Kohn, 88', '20 Aug 2001', 'https://www.chicagotribune.com/2001/08/20/milton-kohn-88/')] },
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
