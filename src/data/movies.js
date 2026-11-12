// Importing images lets Vite bundle them and gives us a working URL.
// The assets folder is outside src, so we go up two levels.
import rogerRabbit from "../../assets/who-framed-roger-rabbit.jpg";
import hook from "../../assets/hook.jpg";
import laLaLand from "../../assets/la-la-land.jpg";
import hiddenFigures from "../../assets/hidden-figures.jpg";
import palmSprings from "../../assets/palm-springs.jpg";
import barbie from "../../assets/barbie.jpg";

// All movie data lives in ONE array. The UI is generated from it with .map(),
// so the MovieCard markup is written only once.
const movies = [
  {
    id: 1,
    title: "Who Framed Roger Rabbit",
    year: 1988,
    poster: rogerRabbit,
    description:
      "In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!",
  },
  {
    id: 2,
    title: "Hook",
    year: 1991,
    poster: hook,
    description:
      "Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.",
  },
  {
    id: 3,
    title: "La La Land",
    year: 2016,
    poster: laLaLand,
    description:
      "Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!",
  },
  {
    id: 4,
    title: "Hidden Figures",
    year: 2016,
    poster: hiddenFigures,
    description:
      "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
  },
  {
    id: 5,
    title: "Palm Springs",
    year: 2020,
    poster: palmSprings,
    description:
      "A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.",
  },
  {
    id: 6,
    title: "Barbie",
    year: 2023,
    poster: barbie,
    description:
      "Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!",
  },
];

export default movies;
