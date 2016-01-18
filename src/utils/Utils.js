export default class Utils {
    
    constructor(seed) {
        if(seed) {
            this.seed = seed;
            this.random = (min, max) => {
                let x = Math.sin(this.seed++) * 10000;
                return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min;
            };
        } else {
            this.random = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
        }
    }

}
