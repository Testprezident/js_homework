function checkProbabilityTheory(count){
let chet = 0;
let nechet = 0;

for(i=0; i<count; i++){
 
  let num = Math.round(Math.random() * (1000 - 100 + 1)) + 100;
  if(num % 2 ===0){
    chet++;
  }
  else{
    nechet++;
  }
}
let procentchet = (chet/count *100);
let procentnechet =(nechet/count *100);



    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${chet}`);
    console.log(`Непарних чисел: ${nechet}`);
    console.log(`Відсоток парних до непарних: ${procentchet}% / ${procentnechet}%`);

}

checkProbabilityTheory(20)