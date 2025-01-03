const URL="https://api.adviceslip.com/advice";
const button=document.querySelector("#btn")
const placeholder=document.querySelector("#getAdvice");

button.addEventListener("click",async () => {
    try {
        const response=await fetch(URL);
        if (!response.ok) {
            throw new Error(`Error Code :${response.status}`);
        }

        else {
            const result= await response.json();
            placeholder.innerText=result.slip.advice;
        }
    }
    
    catch(error) {
        placeholder.innerText=result.slip.advice;

    }
});
