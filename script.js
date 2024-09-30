function getChange(totalAmount, denominations) {
    // Sort the denominations in descending order
    denominations.sort((a, b) => b - a);
    
    const change = {}; 
    let remainingAmount = totalAmount;

    for (let denom of denominations) {
        if (remainingAmount <= 0) break; 

        
        const count = Math.floor(remainingAmount / denom);
        
        if (count > 0) {
            change[denom] = count; 
            remainingAmount -= count * denom; 
        }
    }

    // Check if we were able to provide exact change
    if (remainingAmount > 0) {
        return "Cannot provide exact change with the available denominations.";
    }

    return change; 
}


const totalChange = 47;
const availableDenominations = [1, 5, 10, 20];
const result = getChange(totalChange, availableDenominations);

console.log(result); 

