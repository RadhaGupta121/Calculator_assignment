let btn = document.querySelectorAll('.btn');

let ans = document.getElementById('ans');
// let inans=ans.innerText;
let equal=document.getElementById('equal');
equal.addEventListener('click',()=>{
   ans.innerHTML=result;
 })
 let clear=document.getElementById('clear');
 clear.addEventListener('click',()=>{
  ans.innerHTML='';
  result='';
  inans="";
 })
let result=0;
let inans="";
btn.forEach(element=>{
  element.addEventListener('click',()=>{
      let val=element.innerHTML;
      console.log(element.innerHTML);
      if(element.innerHTML!='=')
        {
            ans.innerText=inans+element.innerHTML;
            inans=ans.innerText;
            
             result=eval(inans);
             console.log(result);
        }
       
  });
});
  

  // function calculateResult() {
  //   try {
  //     const result = eval(document.getElementById('ans').value);
  //     document.getElementById('ans').value = result;
  //     console.log(result);
  //   } catch (error) {
  //     document.getElementById('ans').value = 'Error';
  //   }
  // }
 