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
  subjects: string[];
  accentVar: string;
  tintVar: string;
  textOnAccent: "light" | "dark";
  image: { src: string; width: number; height: number };
  sections: ProgramSection[];
};

export const programs: Record<string, Program> = {
  "montessori-programme": {
    slug: "montessori-programme",
    title: "Montessori Programme",
    tagline:
      "Play-based, activity-driven early learning for Prep, Nursery, and KG with a focus on language, numeracy, Islamic values, and creative development.",
    description:
      "RAHMA Model School's Montessori Programme provides a nurturing foundation for children in Prep, Nursery, and KG. Through hands-on activities, guided play, and structured exploration, young learners develop language, numeracy, social, and moral skills in a warm classroom environment. Islamic values, basic Quranic learning, and character habits are woven into daily routines so that every child grows academically, spiritually, and socially from the very first day.",
    ageRange: "3–5 years",
    groupSize: "Small groups",
    programType: "Full day",
    classes: "Nursery · KG · Prep",
    subjects: [
      "English (Reading & Writing)",
      "Urdu",
      "Mathematics (Numbers & Shapes)",
      "General Knowledge",
      "Islamic Studies & Nazra Quran",
      "Drawing & Colouring",
      "Play-Based Activities",
    ],
    accentVar: "var(--color-brand-teal)",
    tintVar: "var(--color-tint-green)",
    textOnAccent: "dark",
    image: { src: "/assets/images/rahma-kids-studying.jpeg", width: 1024, height: 700 },
    sections: [
      {
        heading: "Learning Through Play",
        body: "Children learn best through meaningful play. Our Montessori classrooms are filled with sensory materials, hands-on manipulatives, and creative stations that make learning numbers, letters, shapes, and colours an engaging daily adventure rather than rote memorisation.",
      },
      {
        heading: "Early Literacy & Numeracy",
        body: "We introduce English and Urdu alphabets, phonics, basic reading, writing strokes, and number concepts through age-appropriate worksheets, storytelling, and interactive activities. By KG, children read simple sentences and solve basic arithmetic with confidence.",
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
      "The Primary School programme at RAHMA Model School covers Class 1 through Class 5, offering a comprehensive, concept-based curriculum aligned with national educational standards. Students study a broad range of subjects, participate in regular assessments, and take part in co-curricular activities including debates, science exhibitions, sports, and arts. Our qualified teachers use interactive teaching methods, group work, and project-based tasks to ensure every student not only understands the syllabus but develops a genuine love for learning.",
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
    image: { src: "/assets/images/rahma-kid-writing.jpeg", width: 1024, height: 700 },
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
    title: "Middle School (Class 6–7)",
    tagline:
      "Advanced subject learning, analytical thinking, project-based assignments, and robust preparation for higher classes.",
    description:
      "RAHMA Model School's Middle School programme covers Class 6 and Class 7, offering an academically rigorous curriculum that builds on primary school foundations and prepares students for higher-level study. At this stage, students engage with more complex subject matter, undertake research-based projects, develop strong writing and analytical skills, and take on greater academic responsibility. Co-curricular activities such as the science fair, model-making competitions, debate events, and school trips enrich the academic experience and develop leadership, creativity, and character.",
    ageRange: "12–14 years",
    groupSize: "Subject-based classes",
    programType: "Full day",
    classes: "Classes 6–7",
    subjects: [
      "English (Advanced Grammar, Essay & Literature)",
      "Urdu (Advanced Grammar & Composition)",
      "Mathematics (Algebra, Geometry & Arithmetic)",
      "General Science (Biology, Chemistry & Physics concepts)",
      "Social Studies & Pakistan Studies",
      "Islamiat & Quran",
      "Computer Studies",
    ],
    accentVar: "var(--color-brand-gold)",
    tintVar: "var(--color-tint-cream)",
    textOnAccent: "dark",
    image: { src: "/assets/images/rahma-parent-partnership-2.jpeg", width: 1024, height: 700 },
    sections: [
      {
        heading: "Advanced Academic Curriculum",
        body: "Class 6 and 7 students study a demanding curriculum that introduces algebra, geometry, introductory chemistry, biology and physics concepts, advanced Urdu and English composition, and Pakistan Studies. Lessons go beyond textbooks through class discussions, research tasks, and analytical exercises.",
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
};

export const programOrder = [
  "montessori-programme",
  "primary-school",
  "middle-school",
];
