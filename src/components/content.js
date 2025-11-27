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
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="playlist-link"
          >
            <FancyTitle>
              2025 <br /> luminous shelves of reverie
            </FancyTitle>
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
            </p>
          </a>
        )}

        {/* Ausgewählte alte Playlist */}
        {openYear === 2025 && (
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="playlist-link"
          >
            <FancyTitle>
              2025 <br /> luminous shelves of reverie
            </FancyTitle>
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
            </p>
            <button
              type="button"
              className="back-button"
              onClick={goBackToNew}
            >
              zurück zur neuen Playlist
            </button>
          </a>
        )}

        {openYear === 2024 && (
          <a
            href="https://open.spotify.com/playlist/1Y8WvSQlEhZDeFoPmQM6Os?si=ad8324c1898b48d8"
            target="_blank"
            rel="noopener noreferrer"
            className="playlist-link"
          >
            <FancyTitle>
              2024 <br /> U MIGHT BE THE REASON FOR THE CHRISTMAS SEASON
            </FancyTitle>

            <p className="postcard-label">Postkarte</p>
            <div className="postcard">
              <div className="postcard-card">
                <div className="postcard-inner">
                  <img
                    className="postcard-face"
                    src={process.env.PUBLIC_URL + '/2024v.jpg'}
                    alt="2024 Postkarte Vorderseite"
                  />
                  <img
                    className="postcard-face postcard-back"
                    src={process.env.PUBLIC_URL + '/2024r.jpg'}
                    alt="2024 Postkarte Rückseite"
                  />
                </div>
              </div>
            </div>

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
          </a>
        )}

        {openYear === 2023 && (
          <a
            href="https://open.spotify.com/playlist/5rDEvWjqxY1HIkLZ6ebw4i?si=a02c2377804c4566"
            target="_blank"
            rel="noopener noreferrer"
            className="playlist-link"
          >
            <FancyTitle>
              2023 <br /> House of Cherubim
            </FancyTitle>

            <p className="postcard-label">Postkarte</p>
            <div className="postcard">
              <div className="postcard-card">
                <div className="postcard-inner">
                  <img
                    className="postcard-face"
                    src={process.env.PUBLIC_URL + '/2023v.jpg'}
                    alt="2023 Postkarte Vorderseite"
                  />
                  <img
                    className="postcard-face postcard-back"
                    src={process.env.PUBLIC_URL + '/2023r.jpg'}
                    alt="2023 Postkarte Rückseite"
                  />
                </div>
              </div>
            </div>

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
          </a>
        )}

        {openYear === 2022 && (
          <a
            href="https://open.spotify.com/playlist/4A7XXZMGnOdX1mOrsofQyw?si=2d74216f8a4748da"
            target="_blank"
            rel="noopener noreferrer"
            className="playlist-link"
          >
            <FancyTitle>
              2022 <br /> All Caroling (oh,ah,oh)
            </FancyTitle>
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
          </a>
        )}

        {openYear === 2021 && (
          <a
            href="https://open.spotify.com/playlist/3DQpDTb8kCe4gxNfOAg776?si=c3c2300d10ab4cde"
            target="_blank"
            rel="noopener noreferrer"
            className="playlist-link"
          >
            <FancyTitle>
              2021 <br /> If I was a DJ sent from heaven to heal you
            </FancyTitle>
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
          </a>
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
  const { scrollY } = useScroll();
  const skewX = useTransform(scrollY, [0, 400, 800], [-4, 0, 4]);
  const y = useTransform(scrollY, [0, 600], [0, -10]);
  const scaleX = useTransform(scrollY, [0, 500, 1000], [1, 1.25, 0.95]);
  const scaleY = useTransform(scrollY, [0, 500, 1000], [1, 0.9, 1.15]);
  const rotate = useTransform(scrollY, [0, 700, 1400], [0, 3, -3]);

  return (
    <motion.h1
      className="title"
      style={{
        skewX,
        y,
        scaleX,
        scaleY,
        rotate,
      }}
      transition={{ type: 'spring', stiffness: 60, damping: 18 }}
    >
      {children}
    </motion.h1>
  );
}

export default Content;
