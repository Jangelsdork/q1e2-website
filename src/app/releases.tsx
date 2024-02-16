type Release = {
  id: number;
  slug: string;
  title: string;
  artist: string;
  cover: string;
  blurb: string;
  instagram: string;
  bandcamp: JSX.Element;
  artistImage: string;
};

export const releases: Release[] = [
  {
    id: 1,
    slug: "heading-south",
    title: "Heading South EP",
    artist: "Dr Sud",
    cover: "/heading-south.png",
    blurb:
      "Gregorio Marigliano is a Rome born, Berlin raised producer, that for his intimi and fans goes by the name of Dr. Sud. His music is percussion centered with integrated jazz harmony, his style borrowing influences from different genres such as electronica, funk and house, to create a blend unique to his productions. A fan of the nostalgic and abstract, he emphasises emotion over functionality, quality over quantity.",
    instagram: "https://www.instagram.com/dr.sud/",
    bandcamp: (
      <iframe
        className="h-[120px] w-[100%] border-0"
        src="https://bandcamp.com/EmbeddedPlayer/album=753129054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
        seamless
      ></iframe>
    ),
    artistImage: "/artist-pics/dr-sud.jpeg",
  },
  {
    id: 2,
    slug: "move-on",
    title: "Move On EP",
    artist: "Papi Gaba",
    cover: "/move-on.jpg",
    blurb:
      "Papi Gaba's music takes a surgical and alternative turn from conventional House. Lofi-house has peaked, so as we bid it farewell we welcome the sounds of Amsterdam based Mr. Gaba as he pushes the genre in a new direction - a style coined post-lofi. Combining influences from old school and lofi-house, the sound is warm, melodic and melancholic. Mr. Gaba warmly welcomes everyone aboard the post-lofi train, whatever that may mean to them.",
    instagram: "https://www.instagram.com/papi_gaba/",
    bandcamp: (
      <iframe
        className="h-[120px] w-[100%] border-0"
        src="https://bandcamp.com/EmbeddedPlayer/album=767033470/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
        seamless
      ></iframe>
    ),
    artistImage: "/artist-pics/papi-gaba.jpg",
  },
  {
    id: 3,
    slug: "ruckusfrei",
    title: "Ruckusfrei",
    artist: "okayokayokay",
    cover: "/ruckusfrei.png",
    blurb:
      "Okayokayokay is an Australian born producer who spent the last 5 years immersed in the Berlin club scene. His music draws inspiration from 5am escapades, and artists ranging from Roza Terenzi to The Armed. ",
    instagram: "https://www.instagram.com/okay0kokay/",
    bandcamp: (
      <iframe
        className="h-[120px] w-[100%] border-0"
        src="https://bandcamp.com/EmbeddedPlayer/track=944692301/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
        seamless
      ></iframe>
    ),
    artistImage: "/artist-pics/okay.jpg",
  },
  {
    id: 4,
    slug: "adayofthesun",
    title: "Adayofthesun",
    artist: "Veezo",
    cover: "/adayofthesun.jpg",
    blurb:
      "Veezo is a beatmaker out of Milan. A wizard on the Rhodes, he grew up on a healthy diet of jazz before branching out and undertaking collaborations with a number of hip hop acts. This led to a monumental shift in how he saw his place in music. He began experimenting with sampling, and exploring analogue sounds - introducing him to the world of modular systems, refining his studio skills and defining the artist we see now.",
    instagram: "https://www.instagram.com/veezo___/",
    bandcamp: (
      <iframe
        className="h-[120px] w-[100%] border-0"
        src="https://bandcamp.com/EmbeddedPlayer/album=1781398062/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
        seamless
      ></iframe>
    ),
    artistImage: "/artist-pics/veezo.jpg",
  },
];
