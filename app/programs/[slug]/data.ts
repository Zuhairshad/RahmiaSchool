export type ProgramSection = {
  heading: string;
  body: string;
};

export type Program = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  ageRange: string;
  groupSize: string;
  programType: string;
  classes: string;
  classAges?: { name: string; ages: string }[];
  /** Replaces the default Classes / Ages / Schedule pills in the page header. */
  pills?: { label: string; value: string }[];
  /** Short highlight shown above the title. */
  badge?: string;
  enrollHref?: string;
  subjects: string[];
  accentVar: string;
  tintVar: string;
  textOnAccent: "light" | "dark";
  image: { src: string; width: number; height: number };
  /** CSS object-position used when the image is cropped with object-fit: cover (keeps faces in frame). */
  imagePosition?: string;
  sections: ProgramSection[];
};

export const programs: Record<string, Program> = {
  "montessori-programme": {
    slug: "montessori-programme",
    title: "Montessori Programme",
    tagline:
      "Play-based, activity-driven early learning for Play Group, Nursery, and Prep with a focus on language, numeracy, Islamic values, and creative development.",
    description:
      "RAHMA Model School's Montessori Programme provides a nurturing foundation for children in Play Group, Nursery, and Prep. Through hands-on activities, guided play, and structured exploration, young learners develop language, numeracy, social, and moral skills in a warm classroom environment. Islamic values, basic Quranic learning, and character habits are woven into daily routines so that every child grows academically, spiritually, and socially from the very first day. Here, our youngest RAHMATES take their first steps in learning.",
    ageRange: "3–6 years",
    groupSize: "Small groups",
    programType: "Full day",
    classes: "Play Group · Nursery · Prep",
    classAges: [
      { name: "Play Group", ages: "3–4 years" },
      { name: "Nursery", ages: "4–5 years" },
      { name: "Prep", ages: "5–6 years" },
    ],
    subjects: [
      "English (Reading & Writing)",
      "Urdu",
      "Mathematics (Numbers & Shapes)",
      "Science",
      "General Knowledge",
      "Islamic Studies & Nazra Quran",
      "Drawing & Colouring",
      "Play-Based Activities",
    ],
    accentVar: "var(--color-brand-teal)",
    tintVar: "var(--color-tint-green)",
    textOnAccent: "dark",
    image: { src: "/assets/images/rahma-kids-studying.jpeg", width: 3120, height: 4160 },
    imagePosition: "center 45%",
    sections: [
      {
        heading: "Learning Through Play",
        body: "Children learn best through meaningful play. Our Montessori classrooms are filled with sensory materials, hands-on manipulatives, and creative stations that make learning numbers, letters, shapes, and colours an engaging daily adventure rather than rote memorisation.",
      },
      {
        heading: "Early Literacy & Numeracy",
        body: "We introduce English and Urdu alphabets, phonics, basic reading, writing strokes, and number concepts through age-appropriate worksheets, storytelling, and interactive activities. By Prep, children read simple sentences and solve basic arithmetic with confidence.",
      },
      {
        heading: "Islamic Foundation",
        body: "Nazra Quran, Islamic manners (adab), basic duas, and the five pillars are introduced in every class. Daily circle time includes a short Islamic learning segment so children grow up with faith as a natural part of their identity and routine.",
      },
      {
        heading: "Creative Arts & Fine Motor",
        body: "Drawing, colouring, clay modelling, cutting, and pasting activities develop fine motor control while encouraging creativity. These tasks also build hand strength and pencil grip, directly supporting writing readiness.",
      },
      {
        heading: "Social & Emotional Development",
        body: "Group activities, sharing circles, and classroom routines teach children how to cooperate, take turns, listen, and resolve small conflicts. Our teachers provide constant positive reinforcement so every child feels safe, valued, and confident.",
      },
      {
        heading: "Physical Activity & Outdoor Play",
        body: "Daily outdoor playtime, movement games, and physical education activities support healthy gross motor development, build teamwork habits, and give children the energy release they need to stay focused during learning time.",
      },
      {
        heading: "Parent–School Partnership",
        body: "Regular parent–teacher meetings (PTMs), home-reading programmes, and monthly progress reports keep families fully informed and involved in their child's early development journey.",
      },
    ],
  },

  "primary-school": {
    slug: "primary-school",
    title: "Primary School (Class 1–5)",
    tagline:
      "Strong academic foundations through concept-based learning in core subjects, regular assessments, and a rich co-curricular programme.",
    description:
      "The Primary School programme at RAHMA Model School covers Class 1 through Class 5, offering a comprehensive, concept-based curriculum aligned with national educational standards. Students study a broad range of subjects, participate in regular assessments, and take part in co-curricular activities including debates, science exhibitions, sports, and arts. Our qualified teachers use interactive teaching methods, group work, and project-based tasks to ensure every student not only understands the syllabus but develops a genuine love for learning, growing into a confident RAHMATE.",
    ageRange: "6–11 years",
    groupSize: "Structured classes",
    programType: "Full day",
    classes: "Classes 1–5",
    subjects: [
      "English (Grammar, Comprehension & Composition)",
      "Urdu (Grammar & Literature)",
      "Mathematics",
      "General Science",
      "Social Studies",
      "Islamiat & Nazra Quran",
      "Computer Studies",
      "General Knowledge",
    ],
    accentVar: "var(--color-brand-purple-deep)",
    tintVar: "var(--color-tint-purple)",
    textOnAccent: "light",
    image: { src: "/assets/images/rahma-kid-writing.jpeg", width: 720, height: 1280 },
    imagePosition: "center 30%",
    sections: [
      {
        heading: "Concept-Based Learning",
        body: "Rather than rote memorisation, our teachers use interactive lessons, visual aids, and real-life examples to build genuine understanding. Students learn to ask why, explore how, and apply knowledge to everyday situations, creating lasting academic foundations.",
      },
      {
        heading: "English & Urdu Language",
        body: "Both English and Urdu are taught with equal rigour. Students develop reading comprehension, grammar, creative writing, and oral communication skills. Regular class presentations and essay writing competitions sharpen their confidence in both languages.",
      },
      {
        heading: "Mathematics & Science",
        body: "Mathematics is taught with a strong emphasis on mental arithmetic, problem-solving, and logical reasoning. Science lessons combine theoretical knowledge with simple experiments and projects that bring concepts to life in the classroom and laboratory.",
      },
      {
        heading: "Islamiat & Moral Education",
        body: "Islamiat is a core subject from Class 1 onwards. Students study Quranic verses with translation, Hadith, Islamic history, and the lives of the Prophets. Moral values, honesty, respect, gratitude, and discipline, are integrated into every classroom interaction.",
      },
      {
        heading: "Computer Studies",
        body: "Our computer laboratory gives students hands-on experience with basic computing, typing, and digital literacy from Class 3 onwards. Early exposure to technology builds skills essential for modern academic and professional environments.",
      },
      {
        heading: "Co-Curricular Activities",
        body: "Students participate in spelling bees, math competitions, science exhibitions, debate competitions, arts and crafts events, sports galas, and school trips throughout the year. These activities develop leadership, teamwork, confidence, and well-rounded character.",
      },
      {
        heading: "Assessment & Progress Reporting",
        body: "Students are assessed through monthly class tests, two formal term examinations, and final exams each academic year. Detailed progress reports are shared at PTMs, and parents are kept informed of their child's academic standing and areas for improvement.",
      },
    ],
  },

  "middle-school": {
    slug: "middle-school",
    title: "Middle School (Class 6–8)",
    tagline:
      "Advanced subject learning, analytical thinking, project-based assignments, and robust preparation for higher classes.",
    description:
      "RAHMA Model School's Middle School programme covers Class 6, Class 7 and Class 8, offering an academically rigorous curriculum that builds on primary school foundations and prepares students for higher-level study. At this stage, students engage with more complex subject matter, undertake research-based projects, develop strong writing and analytical skills, and take on greater academic responsibility. Co-curricular activities such as the science fair, model-making competitions, debate events, and school trips enrich the academic experience and develop leadership, creativity, and character, preparing every RAHMATE for the next stage of their education.",
    ageRange: "11–14 years",
    groupSize: "Subject-based classes",
    programType: "Full day",
    classes: "Classes 6–8",
    subjects: [
      "English (Advanced Grammar, Essay & Literature)",
      "Urdu (Advanced Grammar & Composition)",
      "Mathematics (Algebra, Geometry & Arithmetic)",
      "General Science (Biology, Chemistry & Physics concepts)",
      "Social Studies & Pakistan Studies",
      "History",
      "Geography",
      "Islamiat & Quran",
      "Computer Studies",
    ],
    accentVar: "var(--color-brand-gold)",
    tintVar: "var(--color-tint-cream)",
    textOnAccent: "dark",
    image: { src: "/assets/images/gallery/g-28.jpeg", width: 1350, height: 1800 },
    imagePosition: "center 35%",
    sections: [
      {
        heading: "Advanced Academic Curriculum",
        body: "Class 6 to 8 students study a demanding curriculum that introduces algebra, geometry, introductory chemistry, biology and physics concepts, advanced Urdu and English composition, and Pakistan Studies. Lessons go beyond textbooks through class discussions, research tasks, and analytical exercises.",
      },
      {
        heading: "Research & Project-Based Learning",
        body: "Students are regularly assigned project presentations, model-making tasks, and science investigations that develop research skills, independent thinking, and the ability to communicate findings clearly. The annual Science Fair and Geo Model Making Competition are major highlights of the academic year.",
      },
      {
        heading: "Critical Thinking & Problem-Solving",
        body: "Mathematics and science lessons at the middle school level emphasise reasoning, pattern recognition, and multi-step problem-solving. Teachers use discussion-based methods to encourage students to justify their thinking and challenge assumptions rather than simply producing answers.",
      },
      {
        heading: "Debate & Public Speaking",
        body: "Iqbal Day Debate Competitions, storytelling competitions, and essay writing events are built into the academic calendar. These activities develop articulate communication, structured argumentation, and the confidence to present ideas in front of an audience.",
      },
      {
        heading: "Islamic Studies & Character",
        body: "Islamiat continues as a core subject, with students studying Quranic tafseer, Hadith, fiqh basics, and Islamic history in greater depth. Moral and ethical discussions are part of daily classroom culture, reinforcing the values of responsibility, justice, and compassion.",
      },
      {
        heading: "Computer & Digital Literacy",
        body: "Computer Studies at the middle school level covers document creation, spreadsheet basics, internet literacy, and an introduction to digital citizenship. Students use the school's computer laboratory for practical sessions that complement classroom theory.",
      },
      {
        heading: "Assessment Structure",
        body: "Middle school students sit two formal term examinations and final exams each year, alongside regular monthly assessments and assignment evaluations. Parent–teacher meetings held twice a year provide structured feedback and allow teachers and families to support each student's progress together.",
      },
    ],
  },
  "high-school": {
    slug: "high-school",
    title: "High School (Class 9–10)",
    tagline:
      "Focused preparation for the Matric (SSC) examinations, with strong concepts in science, mathematics and languages, alongside Islamic values and character.",
    description:
      "RAHMA Model School's High School programme covers Class 9 and Class 10, the two years that lead to the Secondary School Certificate (Matric) examinations. Building on the foundations laid in Middle School, students study the core Matric curriculum with an emphasis on clear concepts, regular practice and exam readiness. Teachers follow each student's progress closely through tests and revision, while Islamic studies, co-curricular activities and leadership roles continue to shape confident, responsible young RAHMATES. For students who complete their Hifz by Grade 8, High School is where their regular education carries on without any academic loss.",
    ageRange: "14–16 years",
    groupSize: "Subject-based classes",
    programType: "Full day",
    classes: "Classes 9–10",
    subjects: [
      "English (Grammar, Composition & Literature)",
      "Urdu (Grammar, Composition & Literature)",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology / Computer Science",
      "Islamiat",
      "Pakistan Studies",
      "Translation of the Holy Quran",
    ],
    accentVar: "var(--color-brand-purple-deep)",
    tintVar: "var(--color-tint-purple)",
    textOnAccent: "light",
    image: { src: "/assets/images/gallery/g-32.jpeg", width: 1800, height: 1350 },
    imagePosition: "center 40%",
    sections: [
      {
        heading: "Matric Curriculum",
        body: "Class 9 and 10 students follow the national Secondary School Certificate (Matric) curriculum. Physics, Chemistry, Mathematics and the languages are taught with a focus on understanding concepts rather than rote memorisation, so students can apply what they learn in the board examinations and beyond.",
      },
      {
        heading: "Examination Preparation",
        body: "Regular chapter tests, monthly assessments and full-length practice papers build familiarity with the board examination format. Structured revision and past-paper practice in the run-up to the examinations help every student walk into the exam hall prepared and confident.",
      },
      {
        heading: "Science & Computer Practicals",
        body: "Science and computer lessons are supported by practical sessions in the school's science lab and computer room, giving students hands-on experience that strengthens the theory they learn in class.",
      },
      {
        heading: "Islamic Studies & Character",
        body: "Islamiat and the translation of the Holy Quran remain core subjects, helping students understand the message of the Quran and carry its values into their daily lives. Discussions on ethics, responsibility and service are part of everyday classroom culture.",
      },
      {
        heading: "Leadership & Co-Curricular Activities",
        body: "As the school's senior students, High School RAHMATES take on prefect and leadership responsibilities and set an example for younger students. They continue to take part in debates, competitions, sports and school trips that build confidence and teamwork.",
      },
      {
        heading: "Assessment Structure",
        body: "High school students sit two formal term examinations and final exams each year, alongside regular monthly tests. Parent–teacher meetings held twice a year keep families informed and involved in each student's preparation.",
      },
    ],
  },
  "hifz-program": {
    slug: "hifz-program",
    title: "Hifz with Understanding",
    badge: "Only at RAHMA Model School in the entire area",
    tagline:
      "Memorize the Quran with its Urdu translation, meaning and Tajweed alongside regular school, from Grade 4 to Hafiz by Grade 8. Worldly education and the best Quranic training under one roof.",
    description:
      "Alhamdulillah! RAHMA Model School is the only institution in our area offering Hifz with Understanding. Our goal is not just to make children memorize the Quran, but to help them understand its meaning, message, and apply it in their practical lives.\n\nWe enroll students for Hifz in Grade 4. This is a well-structured 5-year Hifz Program. During these 5 years, your child completes the Hifz along with regular school education. By the end of Grade 8, they become a complete Hafiz-e-Quran and then continue their education regularly from Grade 9 onwards without any academic loss.\n\nThis means your child does not have to leave school for Hifz. Your child becomes a Hafiz or Hafiza and continues the journey to become a Doctor, Engineer, or Scholar.",
    ageRange: "Grades 4–8",
    groupSize: "Supervised by a certified Qari Sahib",
    programType: "With regular school",
    classes: "Grades 4–8",
    pills: [
      { label: "Admission", value: "Grade 4" },
      { label: "Duration", value: "5 years" },
      { label: "Hafiz by", value: "Grade 8" },
    ],
    enrollHref: "/admission?program=hifz#apply-form",
    subjects: [
      "Hifz-ul-Quran",
      "Urdu Translation",
      "Tafseer",
      "Tajweed & Qiraat",
      "Sabaq, Sabqi & Manzil",
      "Regular School Subjects",
    ],
    accentVar: "var(--color-brand-teal)",
    tintVar: "var(--color-tint-green)",
    textOnAccent: "dark",
    image: { src: "/assets/images/rahma-character-1.jpeg", width: 780, height: 1040 },
    imagePosition: "center 10%",
    sections: [
      {
        heading: "Admission in Grade 4",
        body: "Grade 4 is the ideal age to start Hifz. Your child is mature enough to memorize and understand easily.",
      },
      {
        heading: "Hifz with Translation & Tafseer",
        body: "Your child does not just memorize, but also learns the easy Urdu translation and basic meaning of every verse.",
      },
      {
        heading: "Tajweed & Qiraat with the Best Teachers",
        body: "Hifz under the supervision of a certified and experienced Qari Sahib, with correct pronunciation and Tajweed. Our well-mannered Qari Sahib deals with children with great affection and love and is familiar with modern teaching methods.",
      },
      {
        heading: "No Academic Loss",
        body: "During these 5 years, your child's regular school education (Grade 4 to Grade 8) continues side by side, so there is no need to leave school for Hifz.",
      },
      {
        heading: "Daily Revision System",
        body: "A perfect system of Sabaq, Sabqi, and Manzil so your child never forgets what they have memorized.",
      },
      {
        heading: "Why is Hifz Important?",
        body: "Memorizing the Quran is the greatest honor in this world and the hereafter. When your child preserves the Quran in their heart, Allah will crown you, the parents, with a crown of light on the Day of Judgment. Our Hifz program ensures both worldly education and success in the hereafter.",
      },
    ],
  },
};

export const programOrder = [
  "montessori-programme",
  "primary-school",
  "middle-school",
  "high-school",
  "hifz-program",
];
