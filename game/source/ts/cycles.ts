import '../scss/style';

import Game from './game/game';
import Stage from './game/stage';

const stage = new Stage('body');
const game = new Game(stage.context);

window.addEventListener('keydown', startHandler);

function startHandler(e: KeyboardEvent): void {
  if (e.keyCode == 13)
    game.start();
}
