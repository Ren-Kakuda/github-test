function calculateAreaOfTriangle(x, y) {
    /* const bottom =x;
     const height =y;
     const area = bottom * height / 2;
     return area
      // Write here
      */
     return x * y / 2;
  }
  

  

  const x =1;
  const y =1;

  if (x === 1 && y === 1) {
      alert("両方1")
  } else {
      alert("xかyのどちらかが1以外です")
  }

  function evaluate(x, y) {
    // Write here
    
    if (x >= 1 && y >= 1) {
    alert("真")
    }else {
    alert("偽")
    }
    if (x>y) {
    alert (x);
    } else {
    alert (y);
    }
    
}


//じゃんけん03
function main(playerHand, npcHand) {
    // Write here
    if(playerHand === 1 && npcHand === 0){
    display("まけ")
    } else if (playerHand === 1 && npcHand === 1) {
    display("引き分け")
    }else if (playerHand === 1 && npcHand === 2) {
    display("かち")
    }else if (playerHand === 2 && npcHand === 0) {
    display("かち")
    }else if (playerHand === 2 && npcHand === 1) {
    display("まけ")
    }else if (playerHand === 2 && npcHand === 2) {
    display("引き分け")
    }else if (playerHand === 0 && npcHand === 0) {
    display("引き分け")
    }else if (playerHand === 0 && npcHand === 1) {
    display("かち")
    }else if (playerHand === 0 && npcHand === 2) {
    display("まけ")
    } 
}

//正解のじゃんけん03
function main(playerHand, npcHand){
　　const result = judge(playerHand, npcHand);
    if (result ===1 ){
        display("あなたのかち")
    } else if (result === 0){
        display("ひきわけ")
    } else {
        display("あなたの負け")
    }
}

function judge(playerHand, npcHand){
    if (playerHand === 0) {
        if(npcHand === 0) {
            return 0;
        } else if (npcHand === 1){
            return 1;
        } else {
            return -1;
        }
    } else if (playerHand === 1) {
        if(npcHand === 0) {
            return -1;
        } else if (npcHand === 1){
            return 0;
        } else {
            return 1;
        }
    } else {
        if(npcHand === 0) {
            return 1;
        } else if (npcHand === 1){
            return -1;
        } else {
            return 0;
        }
    }
}




//じゃんけん04
function main(playerHand, npcHand) {
    const game = new JankenGame();
    game.play(playerHand, npcHand);
    // Write here
}

class JankenGame {
    play(playerHand, npcHand) {
        const result = this.judge(playerHand, npcHand);
        if (result === 1) {
            display('あなたの勝ちです');
        } else if (result === 0) {
            display('引き分けです');
        } else {
            display('あなたの負けです');
        }
    }

    judge(playerHand, npcHand) {
        if (playerHand === 0) { // グー
            if (npcHand === 0) { // グー
                return 0;
            } else if (npcHand === 1) {// チョキ
                return 1;
            } else { // パー
                return -1;
            }
        } else if (playerHand === 1) { // チョキ
            if (npcHand === 0) { // グー
                return -1;
            } else if (npcHand === 1) { // チョキ
                return 0;
            } else { // パー
                return 1;
            }
        } else { // パー
            if (npcHand === 0) { // グー
                return 1;
            } else if (npcHand === 1) { // チョキ
                return -1;
            } else { // パー
                return 0;
            }
        }
    }
}


//じゃんけん05　英語


function main(playerHand, npcHand, lang){
    if (lang === 0){
    const game = new JankenGame();
    game.play(playerHand, npcHand);
    } else {
    const game = new EngJankenGame();
    game.play(playerHand, npcHand);
    }
    // ↓ Update to 'game.play(playerHand, npcHand, lang)'
}

class JankenGame {
    play(playerHand, npcHand) {
        const result = this.judge(playerHand, npcHand);
        if (result === 1) {
            display('あなたの勝ちです');
        } else if (result === 0) {
            display('引き分けです');
        } else {
            display('あなたの負けです');
        }
    }
    
    judge(playerHand, npcHand) {
        if (playerHand === 0) { // グー
            if (npcHand === 0) { // グー
                return 0;
            } else if (npcHand === 1) {// チョキ
                return 1;
            } else { // パー
                return -1;
            }
        } else if (playerHand === 1) { // チョキ
            if (npcHand === 0) { // グー
                return -1;
            } else if (npcHand === 1) { // チョキ
                return 0;
            } else { // パー
                return 1;
            }
        } else { // パー
            if (npcHand === 0) { // グー
                return 1;
            } else if (npcHand === 1) { // チョキ
                return -1;
            } else { // パー
                return 0;
            }
        }
    }
}


class EngJankenGame {
    play(playerHand, npcHand) {
        const result = this.judge(playerHand, npcHand);
        if (result === 1) {
            display('WIN');
        } else if (result === 0) {
            display('DRAW');
        } else {
            display('LOSE');
        }
    }
    
    judge(playerHand, npcHand) {
        if (playerHand === 0) { // グー
            if (npcHand === 0) { // グー
                return 0;
            } else if (npcHand === 1) {// チョキ
                return 1;
            } else { // パー
                return -1;
            }
        } else if (playerHand === 1) { // チョキ
            if (npcHand === 0) { // グー
                return -1;
            } else if (npcHand === 1) { // チョキ
                return 0;
            } else { // パー
                return 1;
            }
        } else { // パー
            if (npcHand === 0) { // グー
                return 1;
            } else if (npcHand === 1) { // チョキ
                return -1;
            } else { // パー
                return 0;
            }
        }
    }
}




//簡単にした英語表記

function main(playerHand, npcHand, lang){
    const game = new JankenGame();
    // ↓ Update to 'game.play(playerHand, npcHand, lang)'
    game.play(playerHand, npcHand, lang);
}

class JankenGame {
    play(playerHand, npcHand, lang) {
        const result = this.judge(playerHand, npcHand);
    if (lang === 0){
        if (result === 1) {
            display('あなたの勝ちです');
        } else if (result === 0) {
            display('引き分けです');
        } else {
            display('あなたの負けです');
        }
    } else {
        if (result === 1) {
            display('win');
        } else if (result === 0) {
            display('draw');
        } else {
            display('lose');
        }
    }
   }
    

    judge(playerHand, npcHand) {
        if (playerHand === 0) { // グー
            if (npcHand === 0) { // グー
                return 0;
            } else if (npcHand === 1) {// チョキ
                return 1;
            } else { // パー
                return -1;
            }
        } else if (playerHand === 1) { // チョキ
            if (npcHand === 0) { // グー
                return -1;
            } else if (npcHand === 1) { // チョキ
                return 0;
            } else { // パー
                return 1;
            }
        } else { // パー
            if (npcHand === 0) { // グー
                return 1;
            } else if (npcHand === 1) { // チョキ
                return -1;
            } else { // パー
                return 0;
            }
        }
    }
}



//未完成じゃんけん06

function main(result) {
    // Write here
    const display = new JapaneseDisplay();
    display.show(result);
}

class JapaneseDisplay{
    show(result) {
     if ( result === 1) {
       display("あなたのかち");
     } else if (result === 0){
       display("ひきわけ");
     } else {
       display("まけ");
     }
    }
}
class Engdisplay {
    show(result) {
     if ( result === 1) {
       display("win");
     } else if (result === 0){
       display("draw");
     } else {
       display("lose");
     }
    }
}
