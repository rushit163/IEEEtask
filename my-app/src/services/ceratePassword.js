export class createPassword{
    static getRandomLowerCase(){
        return String.fromCharCode(Math.floor(Math.random()*26) + 97);
    }
    static getRandomUpperCase(){
        return String.fromCharCode(Math.floor(Math.random()*26) + 65);  
    }
    static getRandomNumber(){
        return String.fromCharCode(Math.floor(Math.random()*10) + 48);    
    }
    static getRandomSymbol(){
        let symbols = `~,./;'[]-=<>?:"{}_+|`
        return symbols[Math.floor(Math.random()*symbols.length)];
    }
    static count = 0;
    static getObjects(state){
        let passwordobj = {};
        for(let key of Object.keys(state)){
            if(typeof state[key] === 'boolean' && state[key]){
                passwordobj = {
                    ...passwordobj,
                    [key] : state[key]
                }
                this.count = this.count + 1;
            }
        }
        return passwordobj;
    }
    static colorDivs(){
        for(let n = 1;n<=this.count;n++){
            let div = document.querySelector(`#colorDiv${n}`);
            div.style.backgroundColor = "greenyellow";
        }
        this.count = 0;
    }
    static reset(){
        for(let n = 1;n<=4;n++){
            let div = document.querySelector(`#colorDiv${n}`);
            div.style.backgroundColor = "white";
        }
    }
    static generatePassword(passwordobj, passwordLength){
       let rnadomPassword = '';
       for(let i=0; i<Number(passwordLength); i+= Object.keys(passwordobj).length){
             if(passwordobj.lower) rnadomPassword += `${this.getRandomLowerCase()}`;
             if(passwordobj.upper) rnadomPassword += `${this.getRandomUpperCase()}`;
             if(passwordobj.symbol) rnadomPassword += `${this.getRandomSymbol()}`;
             if(passwordobj.numbers) rnadomPassword += `${this.getRandomNumber()}`;
         }
         return rnadomPassword.substring(0,Number(passwordLength));
        }
}
