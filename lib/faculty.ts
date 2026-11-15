// Teaching staff shown on the Faculty page and, in part, on the home page.
// Card colours come from list position, so reordering never puts two
// same-coloured cards next to each other.
export type StaffMember = {
  name: string;
  role: string;
  bio: string;
  grades: string;
  /** Left out when the school has not confirmed it, so the badge is hidden. */
  experience?: string;
  highlights: string[];
};

const tints = ["#d7fdcf", "#ebe1fd", "#feeecd"];
const colors = ["#09d89a", "#520080", "#f59e0b"];

export const cardColors = (i: number) => ({ tint: tints[i % 3], color: colors[i % 3] });

export function getInitials(name: string) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export const teachingStaff: StaffMember[] = [
  {
    name: "Shabnam Kayani",
    role: "School Coordinator",
    bio: "Leading our school community with warmth, structure and a commitment to every child's growth",
    grades: "All Classes",
    experience: "8+ Years",
    highlights: [
      "Academic planning & staff coordination",
      "Student welfare & parent relations",
      "School events & co-curricular management",
      "Teacher mentoring & professional development",
      "Communication between parents & administration",
    ],
  },
  {
    name: "Nida Jahan",
    role: "Coordinator",
    bio: "Keeping classrooms, teachers and families working together so every child's day runs smoothly",
    grades: "All Classes",
    experience: "7+ Years",
    highlights: [
      "Class timetables & daily routine",
      "Coordination between teachers & classes",
      "Student progress tracking & records",
      "Parent meetings & follow-ups",
      "Exams, events & school activities",
    ],
  },
  {
    name: "Rubab Zaitoon",
    role: "Maths Teacher",
    bio: "Making numbers approachable and exciting for every learner through patient, hands-on instruction",
    grades: "Classes 6–10",
    experience: "6+ Years",
    highlights: [
      "Algebra, geometry & arithmetic",
      "Board exam preparation",
      "Interactive problem-solving sessions",
      "Mental maths & speed drills",
      "Remedial support for weaker students",
    ],
  },
  {
    name: "Sajal Fatima",
    role: "Science Teacher",
    bio: "Sparking curiosity and critical thinking through discovery-based learning in every lesson",
    grades: "Classes 6–10",
    experience: "5+ Years",
    highlights: [
      "Biology, chemistry & physics",
      "Lab experiments & demonstrations",
      "Science exhibition preparation",
      "Concept-based lesson planning",
      "Environmental & health education",
    ],
  },
  {
    name: "Sidra Ikram",
    role: "English Teacher",
    bio: "Helping students read, write and speak English with clarity and confidence",
    grades: "All Classes",
    highlights: [
      "Grammar, vocabulary & sentence building",
      "Reading comprehension",
      "Creative & essay writing",
      "Spoken English & presentations",
      "Spelling & handwriting practice",
    ],
  },
  {
    name: "Muqadas Shahzadi",
    role: "Montessori Teacher",
    bio: "Creating a joyful, structured environment where every young child feels seen, heard, and ready to learn",
    grades: "Nursery – Prep",
    experience: "5+ Years",
    highlights: [
      "Child-led Montessori learning",
      "Fine motor & sensory play",
      "Pre-literacy & number skills",
      "Creative arts & storytelling",
      "Positive classroom community building",
    ],
  },
  {
    name: "Rimsha Bibi",
    role: "Islamiyat Teacher",
    bio: "Bringing the beauty of Islam into everyday learning, helping students grow in faith, knowledge and character",
    grades: "All Classes",
    experience: "4+ Years",
    highlights: [
      "Islamiyat curriculum (Classes 1–10)",
      "Quranic studies & translation",
      "Islamic history & Seerah",
      "Moral values & character building",
      "Daily duas & Islamic etiquette",
    ],
  },
  {
    name: "Alishba Shahzadi",
    role: "Urdu Teacher",
    bio: "Instilling a love for language and literature rooted in our rich cultural and literary heritage",
    grades: "Classes 1–8",
    experience: "4+ Years",
    highlights: [
      "Urdu reading, writing & grammar",
      "Poetry appreciation & composition",
      "Islamic literature & nasheeds",
      "Dictation & handwriting development",
      "Public speaking in Urdu",
    ],
  },
  {
    name: "Sanam Bibi",
    role: "Computer Teacher",
    bio: "Equipping students with modern digital skills and a confident foundation in technology for the future",
    grades: "Classes 3–10",
    experience: "3+ Years",
    highlights: [
      "Computer literacy & typing",
      "MS Office & basic applications",
      "Internet safety & digital skills",
      "Coding fundamentals & logic",
      "Practical lab-based assessments",
    ],
  },
  {
    name: "Moin Ullah",
    role: "Quran Teacher",
    bio: "Building a lifelong connection with the Quran through tajweed, memorisation and reflection",
    grades: "All Classes",
    experience: "10+ Years",
    highlights: [
      "Tajweed & Quranic recitation",
      "Hifz programme support",
      "Islamic values & character building",
      "Duas, surahs & daily Islamic practice",
      "Seerah & Islamic history lessons",
    ],
  },
  {
    name: "Sadique Ullah",
    role: "Hifz with Understanding Teacher",
    bio: "Guiding students through the sacred journey of Quran memorisation with patience, discipline and care",
    grades: "All Classes",
    experience: "8+ Years",
    highlights: [
      "Hifz with understanding: memorisation with Urdu translation",
      "Tajweed & Quranic recitation",
      "Individual memorisation plans",
      "Daily revision & progress tracking",
      "Student progress reports & parent updates",
    ],
  },
];

/** Teachers featured in the home page carousel, in display order. */
const homeNames = ["Shabnam Kayani", "Rubab Zaitoon", "Sajal Fatima", "Nida Jahan", "Alishba Shahzadi", "Moin Ullah"];
export const homeTeachers = homeNames.map((n) => {
  const t = teachingStaff.find((s) => s.name === n);
  if (!t) throw new Error(`Home teacher not in staff list: ${n}`);
  return t;
});
