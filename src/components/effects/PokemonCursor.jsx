import { useEffect } from 'react';

const POKEMON_CURSORS = [
  'abra.png', 'aerodactyl.png', 'alakazam.png', 'arbok.png', 'arcanine.png',
  'articuno.png', 'beedrill.png', 'bellsprout.png', 'blastoise.png', 'bulbasaur.png',
  'butterfree.png', 'caterpie.png', 'chansey.png', 'charizard.png', 'charmander.png',
  'charmeleon.png', 'clefable.png', 'clefairy.png', 'cloyster.png', 'cubone.png',
  'dewgong.png', 'diglett.png', 'ditto.png', 'dodrio.png', 'doduo.png',
  'dragonair.png', 'dragonite.png', 'dratini.png', 'drowzee.png', 'dugtrio.png',
  'eevee.png', 'ekans.png', 'electabuzz.png', 'electrode.png', 'exeggcute.png',
  'exeggutor.png', 'farfetchd.png', 'fearow.png', 'flareon.png', 'gastly.png',
  'gengar.png', 'geodude.png', 'gloom.png', 'golbat.png', 'goldeen.png',
  'golduck.png', 'golem.png', 'graveler.png', 'grimer.png', 'growlithe.png',
  'gyarados.png', 'haunter.png', 'hitmonchan.png', 'hitmonlee.png', 'horsea.png',
  'hypno.png', 'ivysaur.png', 'jigglypuff.png', 'jolteon.png', 'jynx.png',
  'kabuto.png', 'kabutops.png', 'kadabra.png', 'kakuna.png', 'kangaskhan.png',
  'kingler.png', 'koffing.png', 'krabby.png', 'lapras.png', 'lickitung.png',
  'machamp.png', 'machoke.png', 'machop.png', 'magikarp.png', 'magmar.png',
  'magnemite.png', 'magneton.png', 'mankey.png', 'marowak.png', 'meowth.png',
  'metapod.png', 'mew.png', 'mewtwo.png', 'moltres.png', 'mrmime.png',
  'muk.png', 'nidoking.png', 'nidoqueen.png', 'nidoran-f.png', 'nidoran-m.png',
  'nidorina.png', 'nidorino.png', 'ninetales.png', 'oddish.png', 'omanyte.png',
  'omastar.png', 'onix.png', 'paras.png', 'parasect.png', 'persian.png',
  'pidgeot.png', 'pidgeotto.png', 'pidgey.png', 'pikachu.png', 'pinsir.png',
  'poliwag.png', 'poliwhirl.png', 'poliwrath.png', 'ponyta.png', 'porygon.png',
  'primeape.png', 'psyduck.png', 'raichu.png', 'rapidash.png', 'raticate.png',
  'rattata.png', 'rhydon.png', 'rhyhorn.png', 'sandshrew.png', 'sandslash.png',
  'scyther.png', 'seadra.png', 'seaking.png', 'seel.png', 'shellder.png',
  'slowbro.png', 'slowpoke.png', 'snorlax.png', 'spearow.png', 'squirtle.png',
  'starmie.png', 'staryu.png', 'tangela.png', 'tauros.png', 'tentacool.png',
  'tentacruel.png', 'vaporeon.png', 'venomoth.png', 'venonat.png', 'venusaur.png',
  'victreebel.png', 'vileplume.png', 'voltorb.png', 'vulpix.png', 'wartortle.png',
  'weedle.png', 'weepinbell.png', 'weezing.png', 'wigglytuff.png', 'zapdos.png',
  'zubat.png'
];

function PokemonCursor() {
  useEffect(() => {
    const randomCursor = POKEMON_CURSORS[Math.floor(Math.random() * POKEMON_CURSORS.length)];
    const cursorUrl = `url('/img/poke-cursors/${randomCursor}'), auto`;

    document.body.style.cursor = cursorUrl;

    // Apply to all links
    const style = document.createElement('style');
    style.innerHTML = `
      a {
        cursor: ${cursorUrl} !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.style.cursor = '';
      document.head.removeChild(style);
    };
  }, []);

  return null; // No visual output
}

export default PokemonCursor;
