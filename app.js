const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit',e =>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value , form.q2.value, form.q3.value, form.q4.value]

    //check answers

    userAnswers.forEach((answer,i)=>{
         if(answer=== correctAnswers[i]){
            score += 25;
         }
    })

    //show result in page
    scrollTo(0,0);
    
    result.classList.remove('d-none');

    let output = 0;

    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`
        if (output === score){
            clearInterval(timer)
        }
        else{
            output++;
        }

    }, 15);


});
// let i = 0;
// setInterval(() => {
  
//     i++;
//     console.log(i);
    
// }, 1000);

// setTimeout(()=>{
//     alert('Hello')
// },3000)