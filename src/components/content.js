import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../App.css';

function Content() {
  const [openYear, setOpenYear] = useState(null); // null = neue 2025-Playlist

  const titleVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };
  const lineVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
  };
  const textMotionProps = {
    variants: textVariants,
    initial: 'hidden',
    whileInView: 'show',
    viewport: { once: true, amount: 0.2 },
  };

  const renderLines = (lines) => (
    <motion.div
      {...textMotionProps}
      className="text"
      transition={{ staggerChildren: 0.05 }}
    >
      {lines.map((line, idx) => (
        <motion.span
          key={idx}
          variants={lineVariants}
          className="text-line"
        >
          {line}
          <br />
        </motion.span>
      ))}
    </motion.div>
  );

  const openArchiveYear = (year) => {
    setOpenYear(year);
  };

  const goBackToNew = () => {
    setOpenYear(null);
  };

  const lines2025 = [
    'Onos – Travis Lake',
    'Your absence, like rain, opens the light, infinite – Duncan Bellamy, BZDB, MA.MOYO',
    'Dust That Floats – Isabelle Lewis, Valgeir Sigurðsson, Benjamin Abel Meirhaeghe, Elisabeth Klinck',
    'Sickly, Sweetly, Summer Movie – Lone',
    'Eserver Ni Rehtaf (Edit) – The Vernon Spring, aden',
    'Dream Baby Dream – NYX',
    'Enter – MIZU',
    'Gifts for the Surgeon – Wojciech Rusin',
    'Fire Leap – NYX, Gazelle Twin',
    '* . . * – NAIMA',
    'Red Sun – Anna von Hausswolff',
    'Space Inside Your Mind – Nico Niquo',
    'Two Trains Came Through the Station at Once and It Felt Like a Hurricane – Dylan Henner',
    'Reprise – DJRUM, Zosia Jagodzinska',
    'Flesh Eater – Wojciech Rusin',
    'Green Breaking – Clark',
    'Dolore di Orsini – Anna von Hausswolff',
    'Silent Union – NYX',
    'Pescado – Vanessa Amara',
    'Ascending – The Nunnery',
    'The Other Side – These New Puritans',
    'Escorial – μ-Ziq',
    'Clouds – Desert Window',
    'The Hollow – Keeley Forsyth',
    'More finishes other things – Mhm',
    'Ways Regained – Pye Corner Audio',
    'Eyes – Vanessa Bedoret',
    'Waiting for Sleep – Single Version – Jungstötter, Isabelle Pabst',
    'Industrial Love Song – These New Puritans, Caroline Polachek',
    'Photograph – Keeley Forsyth',
    'Biafra – Tony Njoku',
    'hindsight – Angie Halliwell, Js Donny',
    'Alyosha Lying – Clark',
    'Left For Tomorrow – Perfume Genius',
    'The Secret Garden – μ-Ziq, Mrs Jynx',
    'How Bright You Are – Mikey Enwright, Oklou',
    'Swirling Like A Rocket – Torus',
    'Gaviotas – Rival Consoles',
    'Elemental Fear – Noémi Büchi',
    'Cowboys and Angels – Remastered – George Michael',
  ];

  const lines2024 = [
    'YULLOLA - Blessed Obsessed',
    'Lyra Pramuk - Cage',
    'MIZU, Maria BC - Aveu (The Beginning Is a Farewell)',
    'Isik Kural - Stems of Water',
    'Adult Jazz - Dusk Song',
    'helen island - alice dj',
    't0ni - keepsake',
    'S8JFOU - Pebble B',
    'Clarissa Connelly - Wee Rosebud',
    'Holland Andrews - Wordless',
    'Salvia - True Star',
    'Maxime Denuc - Fat Old Sun',
    'Jazzboy - The Sound of Life',
    'Jonny Nash - Perfume Dream',
    'Romance - I Am Trying To Break Your Heart',
    'Oneohtrix Point Never - Zones Without People',
    'Isobel Waller-Bridge, 12 Ensemble - My Brain Distorts Again',
    'Tim Hecker - Monotony',
    'Dylan Henner - A New Living Being Opens Its Eyes',
    'Chantal Michelle - Departure of Light',
    'Giant Claw - Mir-Cam Startup',
    'Dylan Henner - Everyone I\'ve Ever Loved Lives Here',
    '7038634357 - Winded',
    'Rachika Nayar - No Future',
    'OHYUNG - symphonies sweeping!',
    'Sofie Birch, Antonina Nowacka - Morning Room I',
    'Nyokabi Kariuki - quiet face',
    'Daniela Lalita - Trececerotres',
    'Julianna Barwick - One Half',
    'Samuel Organ - Soil',
    'Sassy 009, Vegyn - Mystery Boy - Vegyn Remix',
    'Dialect - Late Fragment',
    'Sarah Meth - Computer Love',
    'Caroline Polachek - The Gate - Extended Mix',
    'Doon Kanda - welcome welcome',
    'Colin Stetson - The righteous wrath of an honorable man',
    'TWEAKS - Hills Have Eyes',
    'Ani Zakareishvili - At First',
    'Clarissa Connelly - Give it Back',
    'Soap&Skin - The end',
  ];

  const lines2023 = [
    'Bby Eco - *seeding*',
    'Money Lang - Loveless, Pt. 1',
    'HDMIRROR - ALWAYS TOO LATE',
    'Why Be - Impiety',
    'Taylor Deupree - wet',
    'Tomaga - Intimate Immensity',
    'Ssaliva - Cherry Stm',
    'LDS - Portal Merge',
    'Piper Toohey - and I will leave you with this',
    '24thankyou - Interlude i',
    'Vines - drive thru',
    'jjjacob - Solitary Defeat',
    'Wojciech Rusin - Speculum Veritatis',
    'OKRAA - Ola De Luz',
    'Ssaliva - Death Valley',
    'Space Afrika - Honest Labour',
    'Ouri - étude du marteau',
    'Orchid Mantis - transatlantic',
    'Robert Ouyang Rusli - Monument to Possibilities',
    'Lia Kohl - in a specific room',
    'Lia Kohl - Moon Bean',
    'Martyna Basta - Fragile',
    'Irena And Vojtech Havlovi - She Is Dissolving',
    'Michel Banabila - Cassette Loops',
    'Meitei - Shinkai',
    'Soho Rezanejad - One Of My Shades',
    'Bby Eco - Nights On Earth',
    'Julianna Barwick - Sunlight, Heaven',
    'Dialect - Teams',
  ];

  const lines2022 = [
    'Plaid - Perspex',
    'Oxhy - latest nights',
    'Henry Purcell - Dido & Aeneas, Act I, Z. 626: II. Ah! Belinda',
    'David Lang - Just (After Song of Songs) [Composer\'s Mix]',
    'Björk - Her Mother’s House',
    'Meredith Monk - Vessel: An Opera Epic: Epic',
    'Oliver Leith - Last Days: Non Voglio Mai Vedere Il Sole Tramontare',
    'TLF Trio - Passacaglia',
    'Marina Herlop - Doiloi',
    'Circuit des Yeux - Sculpting The Exodus - Claire Rousay Remix',
    'Clark - Sparrow Arc Tall',
    'Kate Bush - A Coral Room - 2018 Remaster',
    'Lucy Liyou - Unnie',
    'Oneohtrix Point Never - Tales From The Trash Stratum',
    'Hatis Noit - Aura',
    'Emile Mosseri - Darker Than This',
    'Rachika Nayar - Our Wretched Fantasy',
  ];

  const lines2021 = [
    'Ian William Craig - Before Meaning Comes',
    'Samuel Organ - Kindness',
    'Yawning Portal - The Burning Bridge',
    'Tim Hecker - No Drums',
    'Morton Feldman - Rothko Chapel 5',
    'Astrid Sonne - Mistakes',
    'Kaitlyn Aurelia Smith - Moon In Your Eye',
    'Oliver Coates - Soaring X (feat. Malibu)',
    'Björk - Frosti',
    'Colleen - November',
    'Saloli - Barcarolle',
    'Maarja Nuut - Une meeles',
    'Machinefabriek - Zucht 2',
    'Bing & Ruth - Reflector',
    'Holland Andrews - Gloss',
    'Arca - Andro',
    'Lotic - Always You',
    'Soap&Skin - What A Wonderful World',
    'Arca - Joya',
    'Rival Consoles - I Like',
    'Steve Hauschildt - Time We Have',
  ];

  const render2025 = (withBackButton = false) => (
    <div className="playlist-link">
      <motion.div variants={titleVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <FancyTitle>
          2025 <br /> we prayed to archangel algorithm for sugarcoated christmas reveries
        </FancyTitle>
      </motion.div>
      <PlaylistButton href="https://open.spotify.com/playlist/0E7NMDAxrEIz2vvQGgUUJq?si=ba14e73aeaf847b6" />
      <p className="postcard-label">Postkarte</p>
      <ScrollFlipCard
        front={process.env.PUBLIC_URL + '/2025v.png'}
        back={process.env.PUBLIC_URL + '/2025h.png'}
        altFront="2025 Postkarte Vorderseite"
        altBack="2025 Postkarte Rückseite"
        portrait
      />
      <motion.p {...textMotionProps} className="text">
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
        Your absence, like rain, opens the light, infinite – Duncan Bellamy,
        BZDB, MA.MOYO<br />
        Dust That Floats – Isabelle Lewis, Valgeir Sigurðsson, Benjamin Abel
        Meirhaeghe, Elisabeth Klinck<br />
        Sickly, Sweetly, Summer Movie – Lone<br />
        Eserver Ni Rehtaf (Edit) – The Vernon Spring, aden<br />
        Dream Baby Dream – NYX<br />
        Enter – MIZU<br />
        Gifts for the Surgeon – Wojciech Rusin<br />
        Fire Leap – NYX, Gazelle Twin<br />
        * . . * – NAIMA<br />
        Red Sun – Anna von Hausswolff<br />
        Space Inside Your Mind – Nico Niquo<br />
        Two Trains Came Through the Station at Once and It Felt Like a
        Hurricane – Dylan Henner<br />
        Reprise – DJRUM, Zosia Jagodzinska<br />
        Flesh Eater – Wojciech Rusin<br />
        Green Breaking – Clark<br />
        Dolore di Orsini – Anna von Hausswolff<br />
        Silent Union – NYX<br />
        Pescado – Vanessa Amara<br />
        Ascending – The Nunnery<br />
        The Other Side – These New Puritans<br />
        Escorial – μ-Ziq<br />
        Clouds – Desert Window<br />
        The Hollow – Keeley Forsyth<br />
        More finishes other things – Mhm<br />
        Ways Regained – Pye Corner Audio<br />
        Eyes – Vanessa Bedoret<br />
        Waiting for Sleep – Single Version – Jungstötter, Isabelle Pabst<br />
        Industrial Love Song – These New Puritans, Caroline Polachek<br />
        Photograph – Keeley Forsyth<br />
        Biafra – Tony Njoku<br />
        hindsight – Angie Halliwell, Js Donny<br />
        Alyosha Lying – Clark<br />
        Left For Tomorrow – Perfume Genius<br />
        The Secret Garden – μ-Ziq, Mrs Jynx<br />
        How Bright You Are – Mikey Enwright, Oklou<br />
        Swirling Like A Rocket – Torus<br />
        Gaviotas – Rival Consoles<br />
        Elemental Fear – Noémi Büchi<br />
        Cowboys and Angels – Remastered – George Michael<br />
        <AngelImage
          src={process.env.PUBLIC_URL + '/4.png'}
          alt="Engel 4"
          variant="big"
        />
      </motion.p>
      {withBackButton && (
        <button
          type="button"
          className="back-button"
          onClick={goBackToNew}
        >
          zurück zur neuen Playlist
        </button>
      )}
    </div>
  );

  return (
    <div className="content-layout">
      <div className="content-main">
        {/* Neue Playlist 2025 – nur wenn kein Archivjahr gewählt */}
        {openYear === null && render2025()}

        {/* Ausgewählte alte Playlist */}
        {openYear === 2025 && render2025(true)}

        {openYear === 2024 && (
          <div className="playlist-link">
      <motion.div variants={titleVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <FancyTitle>
          2024 <br /> U MIGHT BE THE REASON FOR THE CHRISTMAS SEASON
        </FancyTitle>
      </motion.div>
            <PlaylistButton href="https://open.spotify.com/playlist/1Y8WvSQlEhZDeFoPmQM6Os?si=ad8324c1898b48d8" />
            <p className="postcard-label">Postkarte</p>
            <ScrollFlipCard
              front={process.env.PUBLIC_URL + '/2024v.jpg'}
              back={process.env.PUBLIC_URL + '/2024r.jpg'}
              altFront="2024 Postkarte Vorderseite"
              altBack="2024 Postkarte Rückseite"
            />

            <motion.p {...textMotionProps} className="text">
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
            </motion.p>

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
            <motion.div variants={titleVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <FancyTitle>
                2023 <br /> House of Cherubim
              </FancyTitle>
            </motion.div>
            <PlaylistButton href="https://open.spotify.com/playlist/5rDEvWjqxY1HIkLZ6ebw4i?si=a02c2377804c4566" />
            <p className="postcard-label">Postkarte</p>
            <ScrollFlipCard
              front={process.env.PUBLIC_URL + '/2023v.jpg'}
              back={process.env.PUBLIC_URL + '/2023r.jpg'}
              altFront="2023 Postkarte Vorderseite"
              altBack="2023 Postkarte Rückseite"
            />

            <motion.p {...textMotionProps} className="text">
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
            </motion.p>

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
            <motion.div variants={titleVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <FancyTitle>
                2022 <br /> All Caroling (oh,ah,oh)
              </FancyTitle>
            </motion.div>
            <PlaylistButton href="https://open.spotify.com/playlist/4A7XXZMGnOdX1mOrsofQyw?si=2d74216f8a4748da" />
            <motion.p {...textMotionProps} className="text">
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
            </motion.p>
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
            <motion.div variants={titleVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <FancyTitle>
                2021 <br /> If I was a DJ sent from heaven to heal you
              </FancyTitle>
            </motion.div>
            <PlaylistButton href="https://open.spotify.com/playlist/3DQpDTb8kCe4gxNfOAg776?si=c3c2300d10ab4cde" />
            <motion.p {...textMotionProps} className="text">
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
            </motion.p>
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
  const { scrollYProgress } = useScroll();

  // Deutliche, aber begrenzte Verzerrung über den gesamten Scrollbereich
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -38, 12]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [0, 24, -18]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [0, -10, 6]);
  const skewX = useTransform(scrollYProgress, [0, 0.5, 1], [0, -12, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.28, 1.02]);
  const letterSpacing = useTransform(scrollYProgress, [0, 0.5, 1], ['0.16em', '0.36em', '0.22em']);

  return (
    <motion.h1
      className="title"
      style={{
        y,
        x,
        rotateZ,
        skewX,
        scale,
        letterSpacing,
        transformOrigin: 'center',
        translateZ: 0,
      }}
      transition={{ type: 'spring', stiffness: 55, damping: 18 }}
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

function ScrollFlipCard({ front, back, altFront, altBack, portrait = false }) {
  const { scrollYProgress } = useScroll();
  // Scroll-basierter Flip: bei ~ halber Seite einmal gedreht, darüber hinaus weiter
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 180, 360]);
  const handleLoad = (e) => {
    e.target.classList.add('loaded');
  };

  return (
    <div className="postcard">
      <div className={`postcard-card ${portrait ? 'postcard-card-portrait' : ''}`}>
        <motion.div
          className="postcard-inner"
          style={{ rotateY }}
          whileHover={{ rotateY: 180 }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        >
          <img
            className="postcard-face"
            src={front}
            alt={altFront}
            loading="lazy"
            onLoad={handleLoad}
          />
          <img
            className="postcard-face postcard-back"
            src={back}
            alt={altBack}
            loading="lazy"
            onLoad={handleLoad}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Content;
