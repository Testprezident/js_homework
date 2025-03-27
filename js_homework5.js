var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
   
     price : function  (){
            let sum = 0 
            for(let key in this){
                if (typeof this[key] === "string") { 
                    let num = parseFloat(this[key]);
                    
                        sum += num
                }
                    
                }

            return sum + " грн"
          
        },
        minPrice : function(){
            let min = 0;  

            for (let key in this) {
                if (typeof this[key] === "string" ) {
                    let num = parseFloat(this[key]);
                    if (  num < min || min === 0) {
                        min = num;  
                    }
                }
            }
    
            return min + " грн" ;
            
        },
        maxPrice : function(){
        let max = 0;
        for(let key in this){
            if(typeof this[key] ==="string"){
                let num = parseFloat(this[key]);
                if(  num > max || max === 0 ){
                    max=num
                }
            }
        }
          return max + "грн "
        }
        
    }

   

    
    services["Манікюр"] = "120.50 грн"
    console.log( "Загальна вартість послуг " + services.price())
    console.log("Ціна найдешевшої послуги " + services.minPrice())
    console.log("Ціна найдорощої  послуги " + services.maxPrice())