import inquirer from "inquirer";

import Innings from "./Innings.js";


class Player {
    batting?: boolean;
    bowling?: boolean;
    innings: Innings = new Innings();
    target = new Innings().fast_forward();
    won?: boolean;


   start() {
        console.log(`           ======= You need to chase ${this.target?.runs} Runs =======              `);
        const {bowls, over, wickets, runs} = this.target!;

        this.display(runs, wickets, over, bowls)
        this.bat();
   } 

   bat() {
    if (this.target!.runs < this.innings.runs ){
        console.log("\n\t\t\t===== You won congratulatons ======")
    }else if (this.innings.wickets === 2){
        console.log("\n\t\t\t===== You Lost Try Again Next Time======")
    }else if (this.target!.runs > this.innings.runs && this.innings.innings_over){
        console.log("\n\t\t\t===== You Lost Try Again Next Time ======")
    }else if(this.target!.runs === this.innings.runs && this.innings.innings_over){
        console.log("\n\t\t\t===== Match Tied ======")
    }
     else {
        inquirer.prompt([
            {
                type: "list", 
                name: "shot",
                message: "Choose your shot direction",
                choices: ["Straight", "Mid Wicket", "Leg", "Fine Leg", "Third Man", "Off", "Cover"]
            }
        ]).then(
            a => {
                    const {bowls, runs, over, wickets}= this.innings.forward();
                    this.display(runs, wickets, over, bowls)
                    this.bat();
                }
        )
    }
   }

   display(runs: number, wickets: number, over: (string | number)[], balls: number){
                console.log(`
                    ========================================================
                    \t\t\  \t THE SUPER OVER GAME
                    \t\t\  \t\t\t\t\t Target: ${this.target!.runs - runs} off ${6 - balls} balls
                    \t\t\  \t \t${over[over.length - 1]}!
                    \n
                    \tScore: ${runs}-${wickets}\t\t\t\tThis Over: ${over}
                `)
   }
}

new Player().start()