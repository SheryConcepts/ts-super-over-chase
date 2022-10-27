class Innings{
    runs: number = 0;
    bowls: number = 0;
    this_over: (string | number)[] = [];
    wickets: number = 0;
    innings_over: boolean = false;

    forward() {
        let tmp = Math.floor(Math.random() * (7 - 0)) + 0;
        if (this.innings_over) {
            console.log("===== Innings Over =====")
        } else {
            if (this.bowls === 6){
                this.innings_over = true;
            } else if (this.wickets === 2){
                this.innings_over = true;
            } else {
                if (tmp === 5) {
                    this.this_over.push("w");
                    this.bowls++;
                    this.wickets++;
                } else {
                    this.this_over.push(tmp);
                    this.runs = this.runs + tmp;
                    this.bowls++;
                }
            }
        } 
        return {
            runs: this.runs,
            bowls: this.bowls,
            over: this.this_over,
            wickets: this.wickets,
            innings_over: this.innings_over,
        }
    }

    show_score(){
            console.log(`Bowls: ${this.bowls}\nRuns: ${this.runs}\nOver: [${this.this_over}, ]\nWickets: ${this.wickets}\n------------------\n----------------`)
    }

    fast_forward(){
        let result;
        while(!this.innings_over) {
            result = this.forward();
        }
        return result;
    }

}

export default Innings;