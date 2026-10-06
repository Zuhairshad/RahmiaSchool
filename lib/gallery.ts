export const galleryCategories = [
  "Celebrations",
  "Classrooms",
  "Hifz",
  "Study Trips",
  "Sports & Awards",
  "Community",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  category?: GalleryCategory;
};

const p = (n: string) => `/assets/images/gallery/g-${n}.jpeg`;
const img = (name: string) => `/assets/images/${name}.jpeg`;

/** Ordered strongest-first. Width/height are the real pixel dimensions. */
export const galleryPhotos: GalleryPhoto[] = [
  { src: p("01"), width: 1350, height: 1800, category: "Celebrations", alt: "Students in uniform holding red teddy bears in front of a balloon wall on Red Colour Day" },
  { src: p("02"), width: 1350, height: 1800, category: "Celebrations", alt: "Young students in white with paper doves and recycled-bottle planters on World Peace Day" },
  { src: p("30"), width: 810, height: 1800, category: "Classrooms", alt: "Boys reading picture books at their desks during a reading session" },
  { src: p("10"), width: 1800, height: 1800, category: "Study Trips", alt: "An instructor guiding a student as he aims a rifle at an outdoor shooting club trip" },
  { src: img("hifz-hero-class"), width: 1600, height: 1204, category: "Hifz", alt: "Hifz students seated at their desks before their Qari Sahib" },
  { src: p("03"), width: 1350, height: 1800, category: "Celebrations", alt: "Two young students making paper doves at a table in front of a World Peace Day board" },
  { src: p("32"), width: 1800, height: 1350, category: "Classrooms", alt: "School prefects and head boy standing in a row wearing their sashes" },
  { src: p("29"), width: 1800, height: 1012, category: "Classrooms", alt: "Students gathered around a table sharing a bright pink project chart" },
  { src: p("24"), width: 1012, height: 1800, category: "Classrooms", alt: "A prefect concentrating as he draws at his classroom desk" },
  { src: img("hifz-teacher-desk"), width: 1600, height: 1600, category: "Hifz", alt: "A teacher explaining a lesson to Hifz students at their desk" },
  { src: p("13"), width: 1350, height: 1800, category: "Sports & Awards", alt: "Hall set up with blue chairs for the RAHMA Annual Awards Distribution Ceremony" },
  { src: p("04"), width: 1350, height: 1800, category: "Celebrations", alt: "Children in red outfits making peace signs on Red Colour Day" },
  { src: p("09"), width: 1800, height: 1800, category: "Study Trips", alt: "Students watching an instructor demonstrate target shooting on a recreational trip" },
  { src: p("22"), width: 1350, height: 1800, category: "Celebrations", alt: "A boy in a bow tie posing inside a flower-decorated Eid Milan party photo frame" },
  { src: p("31"), width: 1800, height: 1350, category: "Community", alt: "Teachers attending a professional training workshop in a classroom" },
  { src: p("14"), width: 1800, height: 1331, category: "Sports & Awards", alt: "Hand-made Sports Day banner with trophies, balls and rackets under coloured balloons" },
  { src: p("05"), width: 1800, height: 1350, category: "Community", alt: "Students holding hand-made Urdu posters about the importance of prayer times" },
  { src: img("hifz-class"), width: 1600, height: 1600, category: "Hifz", alt: "Hifz students with their books open in the Hifz classroom" },
  { src: p("26"), width: 1012, height: 1800, category: "Classrooms", alt: "Girls colouring their worksheets together at a classroom table" },
  { src: p("08"), width: 1350, height: 1800, category: "Celebrations", alt: "A young boy holding up a paper-flower Eid Milan party photo frame" },
  { src: p("23"), width: 1800, height: 1350, category: "Study Trips", alt: "Students sharing a meal at long tables during a school trip" },
  { src: p("18"), width: 1800, height: 1647, category: "Sports & Awards", alt: "Hand-drawn Welcome to the Sports Day 2025 poster with a torch and sports balls" },
  { src: p("06"), width: 1012, height: 1800, category: "Celebrations", alt: "A smiling boy in a red cap posing against a red and yellow wall" },
  { src: p("25"), width: 1800, height: 1800, category: "Study Trips", alt: "School bus with an Urdu study tour banner for RAHMA Model School Rawat" },
  { src: img("hifz-hero-teacher"), width: 1600, height: 1204, category: "Hifz", alt: "Qari Sahib teaching the Hifz class with the smart screen" },
  { src: p("28"), width: 1350, height: 1800, category: "Classrooms", alt: "Three students standing at a quiz competition table for team A" },
  { src: p("35"), width: 1412, height: 1800, category: "Sports & Awards", alt: "Tables of trophies and medals laid out for the annual awards" },
  { src: p("20"), width: 1800, height: 1350, category: "Celebrations", alt: "Two girls presenting a flower-decorated bangles poster on an easel" },
  { src: p("11"), width: 1800, height: 1800, category: "Study Trips", alt: "A student in uniform standing in front of an outdoor adventure park banner" },
  { src: p("16"), width: 1012, height: 1800, category: "Celebrations", alt: "A girl in sunglasses striking a playful pose against a colourful wall" },
  { src: p("34"), width: 1012, height: 1800, category: "Community", alt: "Mothers attending an Asma-ul-Husna session in the school hall" },
  { src: p("07"), width: 1800, height: 1350, category: "Sports & Awards", alt: "A student beside the Sports Day display and trophy table at the annual sports gala" },
  { src: p("21"), width: 1012, height: 1800, category: "Celebrations", alt: "A cheerful boy in a Simba T-shirt posing against a red and yellow wall" },
  { src: p("27"), width: 1350, height: 1800, category: "Study Trips", alt: "A student pointing to an exhibit display case during a museum visit" },
  { src: p("15"), width: 1012, height: 1800, category: "Celebrations", alt: "A young boy in a red shirt and paper headband on Red Colour Day" },
  { src: p("19"), width: 1800, height: 1350, category: "Celebrations", alt: "A bangles stall with colourful bangles arranged on a decorated table" },
];
