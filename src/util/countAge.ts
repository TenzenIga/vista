export function calculateAge(birthday:string) { 
    var ageDifMs = Date.now() - Date.parse(birthday); // parse string to miliseconds
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}