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
        player.refillResource()
    }
    resolveCombat(){
        for (let i = 0; i < length(this.player1.lanes); i++) {
            
            // Get damage taken by both sides
            player1_damage_taken = 0;
            if (this.player2.lanes[i].unit != null) {
                player1_damage_taken = this.player2.lanes[i].unit.attack;
            }

            player2_damage_taken = 0;
            if (this.player1.lanes[i].unit != null) {
                player2_damage_taken = this.player1.lanes[i].unit.attack;
            }

            // Check if this damage hits a card or a player, apply damage
            if (this.player1.lanes[i].unit == null) {
                this.player1.life -= player1_damage_taken;
            }
            else {
                this.player1.lanes[i].unit -= player1_damage_taken;
            }

            if (this.player2.lanes[i].unit == null) {
                this.player2.life -= player2_damage_taken;
            }
            else {
                this.player2.lanes[i].unit -= player2_damage_taken;
            }

        }
    }
    checkWin(){
        if (this.player1.health <= 0 || this.player2.health <= 0) {
            return true;
        }
    }
};

