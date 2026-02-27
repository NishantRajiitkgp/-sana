import type {
  YogaClass,
  Benefit,
  InsightArticle,
  FooterColumn,
  NavLink,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "about", href: "#about" },
  { label: "classes", href: "#classes" },
  { label: "benefits", href: "#benefits" },
  { label: "insights", href: "#insights" },
];

export const HERO = {
  headline: "Flow like water.\nStand like a tree.",
  image:
    "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1920&q=80",
};

export const ABOUT = {
  text: "A warm, inclusive space\nto move, breathe, and",
  emphasis: "grow your practice",
};

export const CLASSES: YogaClass[] = [
  {
    name: "Vinyasa Flow",
    description:
      "A dynamic, breath-synchronized practice that builds strength, flexibility, and mindfulness through fluid movement sequences.",
    level: "All Levels",
    duration: "60 min",
    frequency: "3x Weekly",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
  },
  {
    name: "Hatha Yoga",
    description:
      "A gentle, foundational practice focusing on basic postures, breathing techniques, and meditation for beginners and beyond.",
    level: "Beginner",
    duration: "75 min",
    frequency: "2x Weekly",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
  },
  {
    name: "Yin Yoga",
    description:
      "A slow-paced, meditative practice targeting deep connective tissues with passive, long-held poses for deep release.",
    level: "All Levels",
    duration: "90 min",
    frequency: "2x Weekly",
    image:
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&q=80",
  },
];

export const BENEFITS: Benefit[] = [
  {
    title: "Strength",
    description:
      "Build functional strength through bodyweight poses that engage every muscle group, improving posture and daily resilience.",
    icon: "strength",
  },
  {
    title: "Flexibility",
    description:
      "Gradually increase your range of motion through consistent practice, reducing tension and preventing common injuries.",
    icon: "flexibility",
  },
  {
    title: "Balance",
    description:
      "Develop physical and mental equilibrium through focused standing poses and mindful breathing techniques.",
    icon: "balance",
  },
];

export const CTA = {
  headline: "Breathe deep,\nStart practice.",
  description:
    "Take the first step on your yoga journey. Our experienced instructors will guide you through every pose, every breath.",
  images: [
    "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&q=80",
  ],
};

export const INSIGHTS: InsightArticle[] = [
  {
    title: "Art Of Journaling: How Writing Helps",
    tag: "Mindfulness",
    date: "Oct 12, 2024",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
  },
  {
    title: "How to Start a Mindful Morning Routine",
    tag: "Wellness",
    date: "Sep 28, 2024",
    image:
      "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=600&q=80",
  },
  {
    title: "Choosing the Right Yoga Style for You",
    tag: "Practice",
    date: "Sep 15, 2024",
    image:
      "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=600&q=80",
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Studio",
    links: ["About", "Classes", "Instructors", "Schedule"],
  },
  {
    title: "Practice",
    links: ["Vinyasa", "Hatha", "Yin", "Meditation"],
  },
  {
    title: "Community",
    links: ["Events", "Workshops", "Blog", "Newsletter"],
  },
  {
    title: "Connect",
    links: ["Instagram", "Facebook", "Contact", "Location"],
  },
];
