// Program data sourced from RAHMA Model School's Framer CMS export
// (reference-site/public/assets/js/JhYuzxyRK-chunk-default-0.framercms and
// reference-site/public/programs/*.html). Copy is reproduced verbatim from
// the source rich-text content; only structural typing is added here.

export type ProgramSection = {
  heading: string;
  body: string;
};

export type Program = {
  slug: string;
  /** Real page/program title, taken from the source rich-text <h5>. */
  title: string;
  /** Short marketing tagline shown on cards (CMS "description" field). */
  tagline: string;
  /** Full intro paragraph from the program's rich-text body. */
  description: string;
  ageRange: string;
  groupSize: string;
  programType: string;
  accentVar: string;
  tintVar: string;
  textOnAccent: "light" | "dark";
  image: { src: string; width: number; height: number };
  sections: ProgramSection[];
};

export const programs: Record<string, Program> = {
  "little-explorer-program": {
    slug: "little-explorer-program",
    title: "Little Explorers Program",
    tagline:
      "Building early literacy, numeracy, social interaction, and creative motor skills in a warm, activity-based environment.",
    description:
      "Designed for curious children aged 2–4 years, the Little Explorers Program encourages young learners to discover the world around them through engaging activities, guided play, and hands-on experiences. At this important stage of development, children are naturally eager to explore, ask questions, and learn new things. Our program nurtures that curiosity by providing a balanced mix of fun, learning, and social interaction in a safe and supportive environment. Through age-appropriate activities, children build confidence, independence, and essential skills that prepare them for future educational success.",
    ageRange: "2–4 years",
    groupSize: "Small & safe",
    programType: "Half day",
    accentVar: "var(--color-brand-teal)",
    tintVar: "var(--color-tint-green)",
    textOnAccent: "dark",
    image: {
      src: "/assets/images/i2ECgxjZP2t8RjEmI8skh28jRbQ-09736a12.avif",
      width: 1024,
      height: 700,
    },
    sections: [
      {
        heading: "Discovery Through Play",
        body: "Play is one of the most effective ways for young children to learn and develop new skills. Our program incorporates a variety of interactive games, sensory experiences, and creative activities that encourage exploration and problem-solving. Children learn about their environment, develop critical thinking abilities, and strengthen their imagination while enjoying meaningful play experiences. By learning through play, children remain engaged, motivated, and excited about discovering new concepts every day.",
      },
      {
        heading: "Early Learning Foundations",
        body: "The program introduces children to important early learning concepts including letters, numbers, colors, shapes, and patterns through enjoyable and interactive activities. Lessons are designed to be fun, engaging, and easy to understand, helping children build a strong educational foundation without feeling pressured. By developing these fundamental skills at an early age, children become more prepared for future classroom learning and gain confidence in their abilities.",
      },
      {
        heading: "Creative Expression",
        body: "Creativity plays a vital role in early childhood development. Through art projects, music sessions, storytelling activities, and imaginative play, children are encouraged to express their ideas, emotions, and unique personalities. These experiences help develop communication skills, strengthen imagination, and foster self-confidence. By exploring different forms of creative expression, children learn to think independently and develop a lifelong appreciation for creativity and innovation.",
      },
      {
        heading: "Social Development",
        body: "Building positive relationships and social skills is an important part of early learning. Through group activities, collaborative games, and guided interactions, children learn how to share, cooperate, communicate, and respect others. These experiences help them understand emotions, develop empathy, and build meaningful friendships. Strong social skills not only support success in school but also contribute to healthy personal development throughout life.",
      },
      {
        heading: "Physical Activity & Movement",
        body: "Young children need regular physical activity to support healthy growth and development. Our program includes a variety of movement-based activities such as dancing, active games, obstacle courses, and outdoor play. These experiences help improve balance, coordination, strength, and motor skills while encouraging children to stay active and healthy. Physical activities also help build confidence, improve focus, and support overall well-being.",
      },
      {
        heading: "Safe & Nurturing Environment",
        body: "We provide a warm, welcoming, and secure environment where children feel comfortable exploring and learning at their own pace. Our caring educators offer constant supervision, encouragement, and individual attention to ensure every child feels valued and supported. Safety, emotional well-being, and positive learning experiences remain our highest priorities, giving parents peace of mind while their children grow and thrive.",
      },
      {
        heading: "Building Confidence & Independence",
        body: "Our program encourages children to make choices, solve simple challenges, and participate actively in daily activities. By giving children opportunities to explore independently while receiving guidance when needed, they develop confidence in their abilities and become more self-reliant. These experiences help build resilience, decision-making skills, and a positive attitude toward learning, creating a strong foundation for future success both inside and outside the classroom.",
      },
    ],
  },

  "creative-minds-program": {
    slug: "creative-minds-program",
    title: "Creative Minds Program",
    tagline:
      "Concept-based learning in English, Urdu, Mathematics, Science, Islamiat, Computer Studies, and General Knowledge with continuous assessments.",
    description:
      "Designed for children aged 4–6 years, the Creative Minds Program is carefully created to nurture imagination, curiosity, and independent thinking during one of the most important stages of early childhood development. Children at this age are naturally eager to explore new ideas, ask questions, and express themselves in unique ways. Our program provides a stimulating environment where young learners can develop their creativity while building essential academic, social, and emotional skills. Through engaging projects, hands-on activities, and guided learning experiences, children gain confidence in their abilities and learn to approach challenges with enthusiasm, curiosity, and a positive mindset.",
    ageRange: "4–6 years",
    groupSize: "Big & Dynamic",
    programType: "Full day",
    accentVar: "var(--color-brand-purple-deep)",
    tintVar: "var(--color-tint-purple)",
    textOnAccent: "light",
    image: {
      src: "/assets/images/Sfm9js53gBOL3V13gpQtyyxQPf8-334437a4.avif",
      width: 1024,
      height: 700,
    },
    sections: [
      {
        heading: "Imagination & Creative Thinking",
        body: "Creativity begins when children are encouraged to imagine, explore, and think beyond what they already know. This part of the program focuses on developing innovative thinking through storytelling, dramatic play, creative problem-solving activities, and open-ended challenges. Children are given opportunities to create their own stories, invent solutions, and express original ideas without fear of making mistakes. These experiences help strengthen cognitive development, improve decision-making abilities, and encourage children to become confident thinkers who are comfortable exploring new possibilities and sharing their unique perspectives with others.",
      },
      {
        heading: "Art, Music & Self-Expression",
        body: "Creative expression plays a significant role in helping children communicate their thoughts, emotions, and ideas. Through painting, drawing, music, dance, crafts, and imaginative performances, children are encouraged to explore different forms of artistic expression. These activities not only develop creativity but also improve fine motor skills, concentration, and emotional awareness. By participating in creative projects, children learn how to express themselves confidently, appreciate different forms of art, and develop a strong sense of individuality. The freedom to create and experiment helps build self-esteem while making learning enjoyable and meaningful.",
      },
      {
        heading: "Hands-On Learning Experiences",
        body: "Children learn most effectively when they can actively engage with their environment and participate in the learning process. Our hands-on activities include science experiments, building projects, sensory exploration, and interactive learning stations that encourage curiosity and discovery. Rather than simply observing, children become active participants who explore concepts through experience and experimentation. These engaging activities strengthen critical thinking, improve problem-solving skills, and help children make meaningful connections between what they learn and the world around them. The result is a deeper understanding of concepts and a lasting enthusiasm for learning.",
      },
      {
        heading: "Communication & Collaboration",
        body: "Developing strong communication and teamwork skills is essential for future success both inside and outside the classroom. Through group projects, cooperative games, discussions, and shared creative activities, children learn how to listen actively, express their ideas clearly, and work effectively with others. These experiences teach valuable social skills such as empathy, patience, respect, and cooperation. By interacting with peers in a positive and supportive environment, children build meaningful friendships, gain confidence in social situations, and learn how to contribute positively to group activities while respecting different opinions and perspectives.",
      },
      {
        heading: "Confidence Building",
        body: "A child's confidence grows when they are encouraged to explore their interests, take on new challenges, and celebrate their achievements. Throughout the program, children receive positive reinforcement and support that helps them recognize their strengths and believe in their abilities. Whether completing a creative project, solving a problem, or presenting an idea, every success contributes to a stronger sense of self-confidence. As children become more confident, they are more willing to try new experiences, take healthy risks, and approach learning with enthusiasm. These experiences help develop resilience, independence, and a lifelong belief in their own potential.",
      },
      {
        heading: "Early Academic Enrichment",
        body: "While creativity remains the foundation of the Creative Minds Program, children are also introduced to important academic concepts through engaging and age-appropriate activities. Literacy, numeracy, critical thinking, and language development are naturally integrated into daily experiences, making learning enjoyable rather than overwhelming. Children develop foundational skills through games, stories, interactive lessons, and creative projects that encourage active participation. This balanced approach helps children build strong academic readiness while maintaining their natural curiosity and excitement for learning. The goal is to create confident learners who are well-prepared for future educational success.",
      },
      {
        heading: "Safe & Inspiring Environment",
        body: "A positive learning environment is essential for helping children thrive. Our program provides a safe, welcoming, and inspiring space where every child feels valued, respected, and encouraged to explore their interests. Experienced educators create meaningful experiences that support each child's unique learning journey while ensuring emotional well-being and personal growth. Through nurturing guidance, consistent support, and engaging activities, children develop a strong sense of belonging and confidence. This supportive atmosphere allows them to take creative risks, express themselves freely, and build the skills they need to succeed both academically and personally in the years ahead.",
      },
    ],
  },

  "growth-initiative": {
    slug: "growth-initiative",
    title: "Middle School (Class 6–8) Program",
    tagline:
      "Analytical thinking, advanced subject comprehension, research-based assignments, and preparation for higher education.",
    description:
      "Designed for children aged 5–8 years, the Middle School (Class 6–8) Program focuses on helping young learners develop confidence, independence, and essential life skills while strengthening their academic foundations. At this stage, children are becoming more curious about the world around them and are ready to take on new challenges. Our program provides a balanced combination of structured learning, creative exploration, and personal development activities that encourage children to grow intellectually, socially, and emotionally. Through meaningful experiences and supportive guidance, children build the skills needed to succeed both in school and in everyday life.",
    ageRange: "5–8 years",
    groupSize: "Small & Focused",
    programType: "Half day",
    accentVar: "var(--color-brand-gold)",
    tintVar: "var(--color-tint-cream)",
    textOnAccent: "dark",
    image: {
      src: "/assets/images/yZKDsRUleMx3BoVzta3YgXn9l5A-8b5af1ba.avif",
      width: 1024,
      height: 700,
    },
    sections: [
      {
        heading: "Personal Development & Confidence",
        body: "Building confidence is a key part of a child's growth journey. This program encourages children to recognize their strengths, embrace challenges, and develop a positive mindset toward learning and personal achievement. Through presentations, group discussions, and goal-oriented activities, children learn to express themselves confidently and take pride in their accomplishments. As they gain confidence, they become more willing to explore new opportunities and develop resilience when facing obstacles.",
      },
      {
        heading: "Academic Growth & Learning",
        body: "The Middle School (Class 6–8) Program supports children in strengthening core academic skills such as reading, writing, mathematics, and critical thinking. Learning activities are designed to be engaging, interactive, and appropriate for each child's developmental stage. By combining education with creativity and exploration, children develop a deeper understanding of important concepts while maintaining a genuine enthusiasm for learning. This strong academic foundation prepares them for future educational success.",
      },
      {
        heading: "Leadership & Responsibility",
        body: "Children are encouraged to take responsibility for their actions, make thoughtful decisions, and develop leadership qualities through everyday activities and collaborative projects. Opportunities to lead group tasks, assist peers, and contribute ideas help children understand the value of responsibility and teamwork. These experiences build character, strengthen decision-making skills, and prepare children to become positive role models within their communities.",
      },
      {
        heading: "Problem-Solving & Critical Thinking",
        body: "The ability to think independently and solve problems is essential for lifelong success. Through puzzles, challenges, project-based learning, and real-world scenarios, children learn how to analyze situations, explore solutions, and make informed decisions. These activities encourage creativity, logical thinking, and perseverance while helping children develop confidence in their ability to overcome challenges.",
      },
      {
        heading: "Social & Emotional Development",
        body: "Strong social and emotional skills help children build healthy relationships and navigate everyday experiences successfully. Through guided interactions, group activities, and collaborative learning opportunities, children learn empathy, communication, cooperation, and emotional awareness. These experiences help them understand their feelings, respect others, and develop the confidence needed to engage positively with the world around them.",
      },
      {
        heading: "Creativity & Innovation",
        body: "Creativity is integrated throughout the program to encourage children to think imaginatively and explore new ideas. Through art, storytelling, design projects, and creative challenges, children develop innovative thinking skills while expressing their individuality. These experiences nurture curiosity, inspire self-expression, and help children discover new interests and talents that contribute to their overall development.",
      },
      {
        heading: "Preparing for Future Success",
        body: "The Middle School (Class 6–8) Program aims to equip children with the knowledge, skills, and mindset needed for long-term success. By focusing on academic achievement, personal growth, leadership, and character development, the program helps children become confident, capable, and motivated learners. Through consistent encouragement and meaningful learning experiences, children develop a strong foundation that supports future success in education, relationships, and life beyond the classroom.",
      },
    ],
  },

  "bright-starters-program": {
    slug: "bright-starters-program",
    title: "Bright Starters Program",
    tagline:
      "Rigorous Board Examination preparation in Science & Arts subjects, career counseling, practical laboratories, and critical thinking.",
    description:
      "Designed for children aged 3–5 years, the Bright Starters Program provides an exciting introduction to early learning through play, discovery, and structured educational experiences. During these important developmental years, children begin building the foundational skills that support future academic success and personal growth. Our program creates a nurturing environment where children are encouraged to explore, ask questions, and develop confidence in their abilities. Through engaging activities and guided learning experiences, children gain the knowledge, social skills, and independence needed to thrive in their educational journey.",
    ageRange: "3–5 years",
    groupSize: "Big & Vibrant",
    programType: "Full day",
    accentVar: "var(--color-brand-teal)",
    tintVar: "var(--color-tint-green)",
    textOnAccent: "dark",
    image: {
      src: "/assets/images/hdvC95xzzw7mdnfgjDPZ1OZh5tY-d2baf33c.avif",
      width: 1024,
      height: 700,
    },
    sections: [
      {
        heading: "Early Learning Foundations",
        body: "The program introduces essential concepts such as letters, numbers, shapes, colors, and basic problem-solving skills through interactive and age-appropriate activities. Children learn through games, storytelling, hands-on projects, and guided exploration, making education enjoyable and meaningful. These experiences help build a strong academic foundation while encouraging curiosity and a positive attitude toward learning. By developing these early skills, children become better prepared for future classroom success.",
      },
      {
        heading: "Language & Communication Skills",
        body: "Strong communication skills are essential for lifelong learning and personal development. Through storytelling, conversations, songs, and interactive group activities, children expand their vocabulary and improve their ability to express thoughts and ideas clearly. These experiences help develop listening skills, language comprehension, and confidence in communication. As children become more comfortable expressing themselves, they build stronger relationships with peers and educators.",
      },
      {
        heading: "Social & Emotional Development",
        body: "Learning how to interact with others is a vital part of early childhood education. The Bright Starters Program encourages children to develop important social skills such as sharing, cooperation, empathy, and respect through group activities and collaborative play. Children also learn to recognize and manage their emotions in a healthy way, helping them build confidence and emotional resilience. These experiences create a strong foundation for positive relationships and successful social interactions.",
      },
      {
        heading: "Creative Exploration",
        body: "Creativity is encouraged through art, music, dramatic play, and imaginative activities that inspire self-expression and innovation. Children are given opportunities to explore their interests, create original projects, and express their ideas freely. These experiences help strengthen imagination, improve fine motor skills, and develop confidence in their creative abilities. Creative exploration also makes learning more engaging and enjoyable while supporting cognitive development.",
      },
      {
        heading: "Physical Growth & Development",
        body: "Active play and movement are important for healthy childhood development. The program includes activities that improve coordination, balance, strength, and motor skills through games, outdoor play, and movement-based learning experiences. Physical activity supports overall well-being while helping children develop confidence in their abilities. These experiences encourage healthy habits that contribute to long-term physical and emotional health.",
      },
      {
        heading: "Confidence & Independence Building",
        body: "Children are encouraged to make choices, complete simple tasks independently, and participate actively in daily activities. Through supportive guidance and positive reinforcement, they learn to trust their abilities and take pride in their accomplishments. Building independence at an early age helps children become more confident, responsible, and willing to embrace new challenges. These experiences prepare them for future learning environments and everyday life situations.",
      },
      {
        heading: "Safe & Supportive Learning Environment",
        body: "We provide a warm, welcoming, and secure environment where every child feels valued, respected, and encouraged to grow. Our dedicated educators create meaningful learning experiences while ensuring each child receives the care, attention, and support they need. By fostering a positive atmosphere built on trust and encouragement, the Bright Starters Program helps children develop a lifelong love of learning and a strong foundation for future success.",
      },
    ],
  },

  "happy-learners-program": {
    slug: "happy-learners-program",
    title: "Happy Learners Program",
    tagline:
      "An engaging program designed to make learning enjoyable through games, group activities, and creative tasks that encourage curiosity, participation, and positive learning habits every day.",
    description:
      "Designed for children aged 4–7 years, the Happy Learners Program creates a joyful and engaging learning experience that inspires curiosity, confidence, and a love for discovery. At this stage, children are developing important academic, social, and emotional skills that will shape their future learning journey. Our program combines structured education with creative activities and hands-on experiences to ensure children remain motivated, engaged, and excited about learning every day. Through a supportive environment and positive guidance, children gain the skills and confidence needed to thrive both inside and outside the classroom.",
    ageRange: "4–7 years",
    groupSize: "Small & Effective",
    programType: "Half day",
    accentVar: "var(--color-brand-purple-deep)",
    tintVar: "var(--color-tint-purple)",
    textOnAccent: "light",
    image: {
      src: "/assets/images/aI0iSavrLj9V1VMLhS8mhxTzbQ-a252befb.avif",
      width: 1024,
      height: 700,
    },
    sections: [
      {
        heading: "Learning Through Joyful Experiences",
        body: "Children learn best when they enjoy the process. The Happy Learners Program uses interactive lessons, educational games, storytelling, and hands-on activities to make learning fun and meaningful. By creating positive learning experiences, children develop a natural curiosity and enthusiasm for exploring new ideas. This joyful approach helps improve participation, focus, and long-term retention of knowledge while encouraging children to become active learners.",
      },
      {
        heading: "Academic Skill Development",
        body: "The program focuses on building strong foundations in literacy, numeracy, language development, and problem-solving. Children participate in engaging activities that strengthen reading readiness, mathematical thinking, communication skills, and critical reasoning. Lessons are carefully designed to match each child's developmental stage, helping them gain confidence while mastering essential academic concepts. These skills provide a strong base for future educational success.",
      },
      {
        heading: "Social & Emotional Growth",
        body: "Developing healthy relationships and emotional awareness is an important part of childhood development. Through collaborative activities, group discussions, and guided interactions, children learn empathy, cooperation, patience, and respect for others. They also gain a better understanding of their emotions and learn healthy ways to express and manage them. These experiences help children build confidence, form meaningful friendships, and develop strong social skills.",
      },
      {
        heading: "Creativity & Self-Expression",
        body: "Creativity is encouraged through art projects, music, storytelling, imaginative play, and creative challenges. Children are given opportunities to express their ideas, explore their imagination, and develop their unique talents. Creative activities support cognitive development, improve communication skills, and build self-confidence. By encouraging self-expression, the program helps children discover their strengths and develop a positive sense of identity.",
      },
      {
        heading: "Confidence & Independence",
        body: "The Happy Learners Program encourages children to take initiative, make decisions, and complete tasks independently. Through age-appropriate challenges and supportive guidance, children learn to trust their abilities and take pride in their accomplishments. As they experience success in learning and daily activities, their confidence continues to grow. This sense of independence prepares them to face new challenges with a positive attitude and resilience.",
      },
      {
        heading: "Active Play & Physical Development",
        body: "Physical activity is integrated into the program to support healthy growth and development. Through movement games, outdoor activities, and interactive exercises, children improve coordination, balance, strength, and motor skills. Active play also helps children develop teamwork, discipline, and healthy lifestyle habits. These experiences contribute to both physical well-being and overall happiness.",
      },
      {
        heading: "Safe, Caring & Inspiring Environment",
        body: "A nurturing environment is essential for helping children reach their full potential. Our educators provide a safe, supportive, and encouraging space where every child feels valued and respected. Through personalized attention, positive reinforcement, and meaningful learning experiences, children develop a strong sense of belonging and confidence. The Happy Learners Program creates an atmosphere where children can learn, grow, and flourish while building a lifelong love for education.",
      },
    ],
  },

  "smart-thinkers-program": {
    slug: "smart-thinkers-program",
    title: "Smart Thinkers Program",
    tagline:
      "Develops thinking abilities through puzzles, challenges, and guided activities, improving focus, reasoning, confidence, problem-solving skills, and everyday learning success.",
    description:
      "Designed for children aged 6–9 years, the Smart Thinkers Program focuses on developing critical thinking, problem-solving abilities, creativity, and independent learning skills. As children grow, they begin to ask deeper questions, analyze information, and explore new ideas. This program provides engaging learning experiences that challenge young minds while building confidence and curiosity. Through interactive activities, collaborative projects, and hands-on exploration, children develop the intellectual and personal skills needed to succeed in school and beyond.",
    ageRange: "6–9 years",
    groupSize: "Big & Inspiring",
    programType: "Full day",
    accentVar: "var(--color-brand-gold)",
    tintVar: "var(--color-tint-cream)",
    textOnAccent: "dark",
    image: {
      src: "/assets/images/WgSbqBXzQzhPg0C7q8LBoj1GT4g-2cf9aa27.avif",
      width: 1024,
      height: 700,
    },
    sections: [
      {
        heading: "Critical Thinking Development",
        body: "The ability to think critically is one of the most valuable skills a child can develop. Through puzzles, challenges, discussions, and real-world scenarios, children learn how to analyze information, evaluate different perspectives, and make thoughtful decisions. These activities encourage logical reasoning and independent thinking while helping children become confident problem-solvers who can approach challenges with creativity and determination.",
      },
      {
        heading: "Problem-Solving & Innovation",
        body: "Children are encouraged to explore solutions, test ideas, and learn from their experiences. Through project-based learning, brain-teasing activities, and creative challenges, they develop the ability to solve problems in innovative ways. These experiences teach perseverance, adaptability, and resourcefulness while helping children understand that mistakes are valuable opportunities for growth and learning.",
      },
      {
        heading: "Advanced Learning Exploration",
        body: "The program introduces children to engaging concepts in science, mathematics, language, technology, and discovery-based learning. Lessons are designed to go beyond memorization by encouraging children to investigate, question, and explore topics in greater depth. This approach helps strengthen academic understanding while fostering a genuine passion for learning and exploration.",
      },
      {
        heading: "Communication & Collaboration Skills",
        body: "Strong communication and teamwork abilities are essential for future success. Through group projects, discussions, presentations, and cooperative activities, children learn how to share ideas effectively, listen to others, and work together toward common goals. These experiences help build confidence in communication while teaching respect, empathy, and leadership within collaborative environments.",
      },
      {
        heading: "Creativity & Independent Thinking",
        body: "Creativity is integrated throughout the program to encourage children to think beyond conventional answers and develop original ideas. Through storytelling, design challenges, creative writing, and innovation projects, children learn to express themselves confidently while strengthening imagination and intellectual flexibility. Independent thinking helps them become more confident learners who are willing to explore new possibilities.",
      },
      {
        heading: "Leadership & Personal Growth",
        body: "The Smart Thinkers Program encourages children to take responsibility, set goals, and develop leadership qualities. Through guided activities and opportunities to take initiative, children learn important life skills such as decision-making, accountability, and self-discipline. These experiences help build character, resilience, and confidence that support long-term personal growth and success.",
      },
      {
        heading: "Future-Ready Skills",
        body: "In a rapidly changing world, children need more than academic knowledge to succeed. This program helps develop essential future-ready skills such as critical thinking, adaptability, collaboration, communication, and creativity. By combining educational enrichment with personal development, the Smart Thinkers Program prepares children to become confident, capable, and lifelong learners ready to embrace future opportunities and challenges.",
      },
    ],
  },
};

export const programOrder = [
  "little-explorer-program",
  "creative-minds-program",
  "growth-initiative",
  "bright-starters-program",
  "happy-learners-program",
  "smart-thinkers-program",
];
