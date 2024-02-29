let guest_Name:string [] = ["junaid","farhan","malik"];
// for (let i=0; i<guest_Name.length; i++) {
    // console.log("Dear Mr." + guest_Name[i] + ",\n\nit is our pleasure to invite you in our party.\n\nThank you\n\n")
// }
let absent_Guest:string = "juniad";
let new_Guest:string = "ameen";
guest_Name[0] = new_Guest;
// for (let i=0; i<guest_Name.length; i++) {
//     console.log("Dear Mr." + guest_Name[i] + ",\n\nit is our pleasure to invite you in our party.\n\nThank you\n\n")   
// }
console.log(`Mr.${absent_Guest} is not coming to the party`);
console.log("Good news! We found big table so we are inviting 3 more guest.");
guest_Name.unshift("sher ali");
guest_Name.splice(2 , 0 , "adeel farooq");
guest_Name.push("kashif munir");
for (let i=0; i<guest_Name.length; i++) {
    console.log("Dear Mr." + guest_Name[i] + ",\n\nit is our pleasure to invite you in our party.\n\nThank you\n\n")   
}
console.log("\nSorry we can not arrange big table,only two people will be invited.");
while(guest_Name.length > 2){
   let remove_guest = guest_Name.pop();
   console.log(`Sorry Mr. ${remove_guest},You are not invited for dinner.`);
}
for (let i=0; i<guest_Name.length; i++) {
    console.log("Dear Mr." + guest_Name[i] + ",\n\nYou are still invited.\n\nThank you\n\n")   
}
guest_Name.splice(0, 2);
console.log(guest_Name);
