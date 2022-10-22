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
        let symbols = `~,./;'[]-=<>?:"{}_+\|`
        return symbols[Math.floor(Math.random()*symbols.length)];
    }
    static getObjects(state){
        let passwordobj = {};
        for(let key of Object.keys(state)){
            if(typeof state[key] === 'boolean' && state[key]){
                passwordobj = {
                    ...passwordobj,
                    [key] : state[key]
                }
            }
        }
        return passwordobj;
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
