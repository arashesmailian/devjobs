export const includeText = (s1:string,s2:string) =>{
    s1 = s1.trim().toLowerCase()
    s2 = s2.trim().toLowerCase()
    return s1.includes(s2)
}