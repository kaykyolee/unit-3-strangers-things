const COHORT="2306-GHP-ET-WEB-FT-SF";
const baseUrl=`https://strangers-things.herokuapp.com/api/${COHORT}`;

export async function fetchAllPosts(){
    try{
        const response = await fetch (`${baseUrl}/posts`);
        const result = await response.json();
        return result;
    }   catch (error){
        console.error (error);
    }
}