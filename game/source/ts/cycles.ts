import '../scss/style';

import Game from './game/game';
import Stage from './game/stage';
import KeyboardInput from './game/input/keyboard-input';

const stage = new Stage('body');
const input = new KeyboardInput();
const game = new Game(stage.context, input);

window.addEventListener('keydown', startHandler);

function startHandler(e: KeyboardEvent): void {
  if (e.keyCode == 13)
    game.start();
}
