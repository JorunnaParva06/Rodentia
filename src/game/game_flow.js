const GAME_STATE = {
  TURN_START: "TURN_START",
  P1_PLACEMENT: "P1_PLACEMENT",
  P2_PLACEMENT: "P2_PLACEMENT",
  COMBAT: "COMBAT",
  CHECK_WIN: "CHECK_WIN",
  GAME_OVER: "GAME_OVER",
};

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.turn = 0;
        this.state = GAME_STATE.TURN_START;
    }

    nextState() {
        switch (this.state) {
            case GAME_STATE.TURN_START:
                this.handleTurnStart();
                this.state = GAME_STATE.P1_PLACEMENT;
                break;

            case GAME_STATE.P1_PLACEMENT:
                this.handlePlacement(this.player1);
                this.state = GAME_STATE.P2_PLACEMENT;
                break;

            case GAME_STATE.P2_PLACEMENT:
                this.handlePlacement(this.player2);
                this.state = GAME_STATE.COMBAT;
                break;

            case GAME_STATE.COMBAT:
                this.resolveCombat();
                this.state = GAME_STATE.CHECK_WIN;
                break;

            case GAME_STATE.CHECK_WIN:
                if (this.checkWin()) {
                this.state = GAME_STATE.GAME_OVER;
                } 
                else {
                this.state = GAME_STATE.TURN_START;
                }
                break;
        }
    }
    handleTurnStart(){
        this.turn++
        this.player1.increaseResourceCap()
        this.player2.increaseResourceCap()
        
    }
    handlePlacement(player){

    }
    resolveCombat(){

    }
    checkWin(){

    }
};

