let guest_Name:string [] = ["junaid","farhan","malik"];
for (let i=0; i<guest_Name.length; i++) {
    console.log("Dear Mr." + guest_Name[i] + ",\n\nit is our pleasure to invite you in our party.\n\nThank you\n\n")
    
}
let absent_Guest:string = "juniad";
let new_Guest:string = "ameen";
guest_Name[0] = new_Guest;
for (let i=0; i<guest_Name.length; i++) {
    console.log("Dear Mr." + guest_Name[i] + ",\n\nit is our pleasure to invite you in our party.\n\nThank you\n\n")   
}
console.log(`Mr.${absent_Guest} is not coming to the party`)