import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../App.css';

function Content() {
  const [openYear, setOpenYear] = useState(null); // null = neue 2025-Playlist

  const openArchiveYear = (year) => {
    setOpenYear(year);
  };

  const goBackToNew = () => {
    setOpenYear(null);
  };

  return (
    <div className="content-layout">
      <div className="content-main">
        {/* Neue Playlist 2025 – nur wenn kein Archivjahr gewählt */}
        {openYear === null && (
          <div className="playlist-link">
            <FancyTitle>
              2025 <br /> luminous shelves of reverie
            </FancyTitle>
            <PlaylistButton />
            <p className="text">
              <span className="sparkle-line spin-line top-stars">
                <span className="sparkle-char">✶</span>
                <span className="sparkle-char">✧</span>
                <span className="sparkle-char">❄</span>
                <span className="sparkle-char">✶</span>
                <span className="sparkle-char">✧</span>
                <span className="sparkle-char">✶</span>
              </span>
              <br />
              Onos – Travis Lake<br />
              Your absence, like rain, opens the light, infinite – Duncan
              Bellamy, BZDB, MA.MOYO<br />
              Sickly, Sweetly, Summer Movie – Lone<br />
              Space Inside Your Mind – Nico Niquo<br />
              A Moment Set Aside – Max Cooper, Rob Clouth<br />
              Reprise – DJRUM, Zosia Jagodzinska<br />
              Fire Leap – NYX, Gazelle Twin<br />
              Dream Baby Dream – NYX<br />
              Enter – MIZU<br />
              Eresver Ni Rehtaf (Edit) – The Vernon Spring, aden<br />
              On My Actual Days – Alabaster DePlume<br />
              <AngelImage
                src={process.env.PUBLIC_URL + '/3.png'}
                alt="Engel 3"
              />
              Green Breaking – Clark<br />
              The Other Side – These New Puritans<br />
              Red Sun – Anna von Hausswolff<br />
              Gifts for the Surgeon – Wojciech Rusin<br />
              Escorial – μ-Ziq<br />
              * . . * – NAIMA<br />
              Silent Union – NYX<br />
              The Hollow – Keeley Forsyth<br />
              Dolore di Orsini – Anna von Hausswolff<br />
              <span className="sparkle-line spin-line top-stars">
                <span className="sparkle-char">✶</span>
                <span className="sparkle-char">❄</span>
                <span className="sparkle-char">✧</span>
              </span>
              <br />
              More finishes other things – Mhm<br />
              Ways Regained – Pye Corner Audio<br />
              Night / Sea – Pyur<br />
              Lazria – Travis Lake<br />
              Pescado – Vanessa Amara<br />
              Waiting for Sleep – Single Version – Jungstötter, Isabelle
              Pabst<br />
              Two Trains Came Through the Station at Once and It Felt Like a
              Hurricane – Dylan Henner<br />
              Eyes – Asea Bedoret<br />
              Industrial Love Song – These New Puritans, Caroline Polachek<br />
              Gaviotas – Rival Consoles<br />
              Left For Tomorrow – Perfume Genius<br />
              The Secret Garden – μ-Ziq, Mrs Jynx<br />
              How Bright You Are – Mikey Enwright, Oklou<br />
              Barwa I – Pejzaż<br />
              Biafra – Tony Njoku<br />
              Elemental Fear – Noémi Büchi<br />
              Fair Enough – Noémi Büchi, Joséphine de Weck<br />
              Ascending – The Nunnery<br />
              When I choose to be here with you – Tracey<br />
              Alyosha Lying – Clark<br />
              Flesh Eater – Wojciech Rusin<br />
              Photograph – Keeley Forsyth<br />
              Clouds – Lucy Gooch<br />
              Swirling Like A Rocket – Torus<br />
              Masked Ball – 1999 Extended Mix – Jocelyn Pook<br />
              hindsight – Angie Halliwell, Js Donny<br />
              <AngelImage
                src={process.env.PUBLIC_URL + '/4.png'}
                alt="Engel 4"
                variant="big"
              />
            </p>
          </div>
        )}

        {/* Ausgewählte alte Playlist */}
        {openYear === 2025 && (
          <div className="playlist-link">
            <FancyTitle>
              2025 <br /> luminous shelves of reverie
            </FancyTitle>
            <PlaylistButton />
            <p className="text">
              Onos – Travis Lake<br />
              <span className="sparkle-line spin-line top-stars">
                <span className="sparkle-char">✶</span>
                <span className="sparkle-char">✧</span>
                <span className="sparkle-char">❄</span>
                <span className="sparkle-char">✶</span>
                <span className="sparkle-char">✧</span>
                <span className="sparkle-char">✶</span>
              </span>
              <br />
              <AngelImage
                src={process.env.PUBLIC_URL + '/3.png'}
                alt="Engel 3"
              />
              Your absence, like rain, opens the light, infinite – Duncan
              Bellamy, BZDB, MA.MOYO<br />
              Sickly, Sweetly, Summer Movie – Lone<br />
              Space Inside Your Mind – Nico Niquo<br />
              A Moment Set Aside – Max Cooper, Rob Clouth<br />
              Reprise – DJRUM, Zosia Jagodzinska<br />
              Fire Leap – NYX, Gazelle Twin<br />
              Dream Baby Dream – NYX<br />
              Enter – MIZU<br />
              Eresver Ni Rehtaf (Edit) – The Vernon Spring, aden<br />
              On My Actual Days – Alabaster DePlume<br />
              Green Breaking – Clark<br />
              The Other Side – These New Puritans<br />
              Red Sun – Anna von Hausswolff<br />
              Gifts for the Surgeon – Wojciech Rusin<br />
              Escorial – μ-Ziq<br />
              * . . * – NAIMA<br />
              Silent Union – NYX<br />
              The Hollow – Keeley Forsyth<br />
              Dolore di Orsini – Anna von Hausswolff<br />
              More finishes other things – Mhm<br />
              Ways Regained – Pye Corner Audio<br />
              Night / Sea – Pyur<br />
              Lazria – Travis Lake<br />
              Pescado – Vanessa Amara<br />
              Waiting for Sleep – Single Version – Jungstötter, Isabelle
              Pabst<br />
              Two Trains Came Through the Station at Once and It Felt Like a
              Hurricane – Dylan Henner<br />
              Eyes – Asea Bedoret<br />
              Industrial Love Song – These New Puritans, Caroline Polachek<br />
              Gaviotas – Rival Consoles<br />
              Left For Tomorrow – Perfume Genius<br />
              The Secret Garden – μ-Ziq, Mrs Jynx<br />
              How Bright You Are – Mikey Enwright, Oklou<br />
              Barwa I – Pejzaż<br />
              Biafra – Tony Njoku<br />
              Elemental Fear – Noémi Büchi<br />
              Fair Enough – Noémi Büchi, Joséphine de Weck<br />
              Ascending – The Nunnery<br />
              When I choose to be here with you – Tracey<br />
              Alyosha Lying – Clark<br />
              Flesh Eater – Wojciech Rusin<br />
              Photograph – Keeley Forsyth<br />
              Clouds – Lucy Gooch<br />
              Swirling Like A Rocket – Torus<br />
              Masked Ball – 1999 Extended Mix – Jocelyn Pook<br />
              hindsight – Angie Halliwell, Js Donny<br />
              <AngelImage
                src={process.env.PUBLIC_URL + '/4.png'}
                alt="Engel 4"
              />
            </p>
            <button
              type="button"
              className="back-button"
              onClick={goBackToNew}
            >
              zurück zur neuen Playlist
            </button>
          </div>
        )}

        {openYear === 2024 && (
          <div className="playlist-link">
            <FancyTitle>
              2024 <br /> U MIGHT BE THE REASON FOR THE CHRISTMAS SEASON
            </FancyTitle>
            <PlaylistButton href="https://open.spotify.com/playlist/1Y8WvSQlEhZDeFoPmQM6Os?si=ad8324c1898b48d8" />
            <p className="postcard-label">Postkarte</p>
            <ScrollFlipCard
              front={process.env.PUBLIC_URL + '/2024v.jpg'}
              back={process.env.PUBLIC_URL + '/2024r.jpg'}
              altFront="2024 Postkarte Vorderseite"
              altBack="2024 Postkarte Rückseite"
            />

            <p className="text">
              YULLOLA - Blessed Obsessed<br />
              Lyra Pramuk - Cage<br />
              MIZU, Maria BC - Aveu (The Beginning Is a Farewell)<br />
              Isik Kural - Stems of Water<br />
              Adult Jazz - Dusk Song<br />
              helen island - alice dj<br />
              t0ni - keepsake<br />
              S8JFOU - Pebble B<br />
              Clarissa Connelly - Wee Rosebud<br />
              Holland Andrews - Wordless<br />
              Salvia - True Star<br />
              Maxime Denuc - Fat Old Sun<br />
              Jazzboy - The Sound of Life<br />
              Jonny Nash - Perfume Dream<br />
              Romance - I Am Trying To Break Your Heart<br />
              Oneohtrix Point Never - Zones Without People<br />
              Isobel Waller-Bridge, 12 Ensemble - My Brain Distorts Again<br />
              Tim Hecker - Monotony<br />
              Dylan Henner - A New Living Being Opens Its Eyes<br />
              Chantal Michelle - Departure of Light<br />
              Giant Claw - Mir-Cam Startup<br />
              Dylan Henner - Everyone I've Ever Loved Lives Here<br />
              7038634357 - Winded<br />
              Rachika Nayar - No Future<br />
              OHYUNG - symphonies sweeping!<br />
              Sofie Birch, Antonina Nowacka - Morning Room I<br />
              Nyokabi Kariuki - quiet face<br />
              Daniela Lalita - Trececerotres<br />
              Julianna Barwick - One Half<br />
              Samuel Organ - Soil<br />
              Sassy 009, Vegyn - Mystery Boy - Vegyn Remix<br />
              Dialect - Late Fragment<br />
              Sarah Meth - Computer Love<br />
              Caroline Polachek - The Gate - Extended Mix<br />
              Doon Kanda - welcome welcome<br />
              Colin Stetson - The righteous wrath of an honorable man<br />
              TWEAKS - Hills Have Eyes<br />
              Ani Zakareishvili - At First<br />
              Clarissa Connelly - Give it Back<br />
              Soap&Skin - The end<br />
            </p>

            <p className="postcard-label">Website</p>
            <video
              className="postcard-video"
              src={process.env.PUBLIC_URL + '/2024.mp4'}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <button
              type="button"
              className="back-button"
              onClick={goBackToNew}
            >
              zurück zur neuen Playlist
            </button>
          </div>
        )}

        {openYear === 2023 && (
          <div className="playlist-link">
            <FancyTitle>
              2023 <br /> House of Cherubim
            </FancyTitle>
            <PlaylistButton href="https://open.spotify.com/playlist/5rDEvWjqxY1HIkLZ6ebw4i?si=a02c2377804c4566" />
            <p className="postcard-label">Postkarte</p>
            <ScrollFlipCard
              front={process.env.PUBLIC_URL + '/2023v.jpg'}
              back={process.env.PUBLIC_URL + '/2023r.jpg'}
              altFront="2023 Postkarte Vorderseite"
              altBack="2023 Postkarte Rückseite"
            />

            <p className="text">
              Bby Eco - *seeding* <br />
              Money Lang - Loveless, Pt. 1 <br />
              HDMIRROR - ALWAYS TOO LATE <br />
              Why Be - Impiety <br />
              Taylor Deupree - wet <br />
              Tomaga - Intimate Immensity <br />
              Ssaliva - Cherry Stm <br />
              LDS - Portal Merge <br />
              Piper Toohey - and I will leave you with this <br />
              24thankyou - Interlude i <br />
              Vines - drive thru <br />
              jjjacob - Solitary Defeat <br />
              Wojciech Rusin - Speculum Veritatis <br />
              OKRAA - Ola De Luz <br />
              Ssaliva - Death Valley <br />
              Space Afrika - Honest Labour <br />
              Ouri - étude du marteau <br />
              Orchid Mantis - transatlantic <br />
              Robert Ouyang Rusli - Monument to Possibilities <br />
              Lia Kohl - in a specific room <br />
              Lia Kohl - Moon Bean <br />
              Martyna Basta - Fragile <br />
              Irena And Vojtech Havlovi - She Is Dissolving <br />
              Michel Banabila - Cassette Loops <br />
              Meitei - Shinkai <br />
              Soho Rezanejad - One Of My Shades <br />
              Bby Eco - Nights On Earth <br />
              Julianna Barwick - Sunlight, Heaven <br />
              Dialect - Teams <br />
            </p>

            <p className="postcard-label">Website</p>
            <video
              className="postcard-video"
              src={process.env.PUBLIC_URL + '/2023.mp4'}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <button
              type="button"
              className="back-button"
              onClick={goBackToNew}
            >
              zurück zur neuen Playlist
            </button>
          </div>
        )}

        {openYear === 2022 && (
          <div className="playlist-link">
            <FancyTitle>
              2022 <br /> All Caroling (oh,ah,oh)
            </FancyTitle>
            <PlaylistButton href="https://open.spotify.com/playlist/4A7XXZMGnOdX1mOrsofQyw?si=2d74216f8a4748da" />
            <p className="text">
              Plaid - Perspex<br />
              Oxhy - latest nights<br />
              Henry Purcell - Dido &amp; Aeneas, Act I, Z. 626: II. Ah! Belinda<br />
              David Lang - Just (After Song of Songs) [Composer&apos;s Mix]<br />
              Björk - Her Mother’s House<br />
              Meredith Monk - Vessel: An Opera Epic: Epic<br />
              Oliver Leith - Last Days: Non Voglio Mai Vedere Il Sole Tramontare<br />
              TLF Trio - Passacaglia<br />
              Marina Herlop - Doiloi<br />
              Circuit des Yeux - Sculpting The Exodus - Claire Rousay Remix<br />
              Clark - Sparrow Arc Tall<br />
              Kate Bush - A Coral Room - 2018 Remaster<br />
              Lucy Liyou - Unnie<br />
              Oneohtrix Point Never - Tales From The Trash Stratum<br />
              Hatis Noit - Aura<br />
              Emile Mosseri - Darker Than This<br />
              Rachika Nayar - Our Wretched Fantasy<br />
            </p>
            <button
              type="button"
              className="back-button"
              onClick={goBackToNew}
            >
              zurück zur neuen Playlist
            </button>
          </div>
        )}

        {openYear === 2021 && (
          <div className="playlist-link">
            <FancyTitle>
              2021 <br /> If I was a DJ sent from heaven to heal you
            </FancyTitle>
            <PlaylistButton href="https://open.spotify.com/playlist/3DQpDTb8kCe4gxNfOAg776?si=c3c2300d10ab4cde" />
            <p className="text">
              Ian William Craig - Before Meaning Comes<br />
              Samuel Organ - Kindness<br />
              Yawning Portal - The Burning Bridge<br />
              Tim Hecker - No Drums<br />
              Morton Feldman - Rothko Chapel 5<br />
              Astrid Sonne - Mistakes<br />
              Kaitlyn Aurelia Smith - Moon In Your Eye<br />
              Oliver Coates - Soaring X (feat. Malibu)<br />
              Björk - Frosti<br />
              Colleen - November<br />
              Saloli - Barcarolle<br />
              Maarja Nuut - Une meeles<br />
              Machinefabriek - Zucht 2<br />
              Bing &amp; Ruth - Reflector<br />
              Holland Andrews - Gloss<br />
              Arca - Andro<br />
              Lotic - Always You<br />
              Soap&amp;Skin - What A Wonderful World<br />
              Arca - Joya<br />
              Rival Consoles - I Like<br />
              Steve Hauschildt - Time We Have<br />
            </p>
            <button
              type="button"
              className="back-button"
              onClick={goBackToNew}
            >
              zurück zur neuen Playlist
            </button>
          </div>
        )}
      </div>

      <div className="playlist-sidebar">
        <div className="playlist-sidebar-title">ARCHIV</div>
        <div
          className={`playlist-toggle ${openYear === 2025 ? 'active' : ''}`}
          onClick={() => openArchiveYear(2025)}
        >
          2025
        </div>
        <div
          className={`playlist-toggle ${openYear === 2024 ? 'active' : ''}`}
          onClick={() => openArchiveYear(2024)}
        >
          2024
        </div>
        <div
          className={`playlist-toggle ${openYear === 2023 ? 'active' : ''}`}
          onClick={() => openArchiveYear(2023)}
        >
          2023
        </div>
        <div
          className={`playlist-toggle ${openYear === 2022 ? 'active' : ''}`}
          onClick={() => openArchiveYear(2022)}
        >
          2022
        </div>
        <div
          className={`playlist-toggle ${openYear === 2021 ? 'active' : ''}`}
          onClick={() => openArchiveYear(2021)}
        >
          2021
        </div>
      </div>
    </div>
  );
}

function FancyTitle({ children }) {
  // Normalisiertes Scroll-Profil (0–1) für einen klaren, sichtbaren Effekt
  const { scrollYProgress } = useScroll();

  // Deutliche, aber weiche Verzerrung: der Titel „wogt“ beim Scrollen
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, -18, 6]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 10, -8]);
  const skewX = useTransform(scrollYProgress, [0, 0.5, 1], [0, -4, 4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 0.96]);
  const letterSpacing = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.18, 0.26, 0.14]
  );

  return (
    <motion.h1
      className="title"
      style={{
        rotateX,
        rotateY,
        skewX,
        scale,
        letterSpacing,
        transformOrigin: 'center',
      }}
      transition={{ type: 'spring', stiffness: 60, damping: 20 }}
    >
      {children}
    </motion.h1>
  );
}

function AngelImage({ src, alt, variant }) {
  const { scrollY } = useScroll();
  const range = variant === 'big' ? [0, 300, 600] : [0, 400, 800];
  const scaleX = useTransform(scrollY, range, [1, -1, 1]);
  const y = useTransform(scrollY, [0, 400], [0, -10]);
  const rotate = useTransform(scrollY, [0, 500, 1000], [0, 10, -6]);

  const baseWidth = variant === 'big' ? 260 : 140;
  const maxWidth = variant === 'big' ? '80%' : '50%';

  return (
    <motion.img
      className="angel-inline"
      src={src}
      alt={alt}
      style={{ scaleX, y, rotate, width: baseWidth, maxWidth }}
    />
  );
}

function PlaylistButton({ label = 'Zur Playlist', href = '#' }) {
  return (
    <a
      className="playlist-button"
      href={href}
      target={href === '#' ? undefined : '_blank'}
      rel={href === '#' ? undefined : 'noopener noreferrer'}
    >
      {label}
    </a>
  );
}

function ScrollFlipCard({ front, back, altFront, altBack }) {
  const { scrollYProgress } = useScroll();
  // Scroll-basierter Flip: bei ~ halber Seite einmal gedreht, darüber hinaus weiter
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 180, 360]);

  return (
    <div className="postcard">
      <div className="postcard-card">
        <motion.div
          className="postcard-inner"
          style={{ rotateY }}
          whileHover={{ rotateY: 180 }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        >
          <img className="postcard-face" src={front} alt={altFront} />
          <img className="postcard-face postcard-back" src={back} alt={altBack} />
        </motion.div>
      </div>
    </div>
  );
}

export default Content;
