function discountCalc(senior: boolean, vetOrRes: boolean,members: boolean): number {
    if (senior && vetOrRes && members) return 0.25;
    if ((senior && members) || (vetOrRes && members)) return 0.15
    if (senior || vetOrRes || members) return 0.10 
        return 0 

}

console.log ("All three discounts work", discountCalc(true, true, true))
console.log("senior and member",discountCalc(true, false, true))
console.log("vetOrRes works", discountCalc(false, true, false))
console.log("Members work", discountCalc(false,false, true))
console.log("No discount works", discountCalc(false, false, false))