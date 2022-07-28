const coinCombo = function(denominations, amount) {
    
    let remainingAmt = amount;
    let breakdown = new Array();

    if ( !Array.isArray(denominations) || isNaN(amount) || denominations.length === 0 )
        return `Invalid arguments passed.`;
        
    denominations = denominations.reverse(denominations.sort());

    if ( amount < denominations[denominations.length-1] ) 
        return `Unable to dispense the amount with given denominations!`;

    denominations.forEach(element => {
        
        if (remainingAmt >= element) {

            for (let i = 1; i <= remainingAmt / element; i++)
                breakdown.push(element);
            
            remainingAmt = remainingAmt % element;
        
        }

    });

    if (remainingAmt === 0)
        return breakdown;
    
        return `Unable to dispense the amount with given denominations!`;
}


let coins = [2,4,5,7,9,1];
let amount = 8; 
// console.log(coinCombo([500, 200, 100, 50], 6670));
console.log(coinCombo(coins, amount));