import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Array matches actual filenames in public/img/poke-cursors/
const POKEMON_CURSORS = [
  'abra.png', 'aerodactyl.png', 'alakazam.png', 'arbok.png', 'arcanine.png',
  'articuno.png', 'bellsprout.png', 'chansey.png', 'clefable.png', 'clefairy.png',
  'cloyster.png', 'cubone.png', 'dewgong.png', 'diglett.png', 'dodrio.png',
  'doduo.png', 'dragonair.png', 'dragonite.png', 'dratini.png', 'drowzee.png',
  'dugtrio.png', 'ekans.png', 'electabuzz.png', 'Electrode.png', 'exeggcute.png',
  'exeggutor.png', "farfetch'd.png", 'fearow.png', 'geodude.png', 'ghastly.png',
  'Gloom.png', 'golbat.png', 'goldeen.png', 'golduck.png', 'golem.png',
  'graveler.png', 'grimer.png', 'growlithe.png', 'gyarados.png', 'haunter.png',
  'hitmonchan.png', 'hitmonlee.png', 'horsea.png', 'hypno.png', 'jigglypuff.png',
  'jynx.png', 'kabuto.png', 'kabutops.png', 'kadabra.png', 'kangaskhan.png',
  'kingler.png', 'koffing.png', 'krabby.png', 'lapras.png', 'lickitung.png',
  'machamp.png', 'machoke.png', 'machop.png', 'magikarp.png', 'magmar.png',
  'magnemite.png', 'magneton.png', 'mankey.png', 'marowak.png', 'meowth.png',
  'mewtwo.png', 'moltres.png', 'mr. mime.png', 'muk.png', 'nidoking.png',
  'nidoqueen.png', 'Nidoran.png', 'Nidoran2.png', 'nidorina.png', 'nidorino.png',
  'ninetails.png', 'oddish.png', 'omanyte.png', 'omastar.png', 'Paras.png',
  'parasect.png', 'persian.png', 'pinsir.png', 'poliwag.png', 'poliwhirl.png',
  'poliwrath.png', 'ponyta.png', 'primeape.png', 'psyduck.png', 'rapidash.png',
  'raticate.png', 'rhydon.png', 'rhyhorn.png', 'sandshrew.png', 'sandslash.png',
  'scyther.png', 'seadra.png', 'seaking.png', 'seel.png', 'shellder.png',
  'slowbro.png', 'slowpoke.png', 'snorlax.png', 'spearow.png', 'starmie.png',
  'staryu.png', 'tangela.png', 'tauros.png', 'tentacool.png', 'tentacrule.png',
  'venomoth.png', 'venonat.png', 'victreebell.png', 'vileplume.png', 'Voltorb.png',
  'vulpix.png', 'weepinbell.png', 'wigglytuff.png', 'zapdos.png', 'zubat.png'
];

function PokemonCursor() {
  const location = useLocation();

  useEffect(() => {
    const randomCursor = POKEMON_CURSORS[Math.floor(Math.random() * POKEMON_CURSORS.length)];
    // Add hotspot coordinates (0 0) for PNG cursors - this helps with cursor rendering
    const cursorUrl = `url('/img/poke-cursors/${randomCursor}') 0 0, auto`;

    // Set cursor on body (matches original implementation)
    document.body.style.cursor = cursorUrl;

    // Apply to all anchor tags (matches original implementation)
    const applyCursorToAnchors = () => {
      const anchorList = document.getElementsByTagName('a');
      for (let i = 0; i < anchorList.length; i++) {
        anchorList[i].style.cursor = cursorUrl;
      }
    };

    // Apply immediately
    applyCursorToAnchors();

    // Also apply to anchors that might be added dynamically
    const style = document.createElement('style');
    style.setAttribute('data-pokemon-cursor', 'true');
    style.innerHTML = `
      a {
        cursor: ${cursorUrl} !important;
      }
    `;
    document.head.appendChild(style);

    // Re-apply to anchors after a short delay to catch dynamically added elements
    const timeoutId = setTimeout(applyCursorToAnchors, 100);

    return () => {
      clearTimeout(timeoutId);
      document.body.style.cursor = '';
      // Reset all anchor tags
      const anchorList = document.getElementsByTagName('a');
      for (let i = 0; i < anchorList.length; i++) {
        anchorList[i].style.cursor = '';
      }
      // Remove style element
      const existingStyle = document.head.querySelector('style[data-pokemon-cursor]');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, [location.pathname]); // Refresh cursor on route change

  return null; // No visual output
}

export default PokemonCursor;
