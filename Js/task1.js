

document.getElementById('noakhali-btn').addEventListener('click', function(){
    //
    
    const noakhaliValue =  parseFloat(document.getElementById('noakhali-input').value);
    if(isNaN(noakhaliValue) || noakhaliValue<=0){
        alert('Invalid Input');
        document.getElementById('noakhali-input').value=''
    }
    
    else{
        const noakhaliAmmount = parseFloat(document.getElementById('noakhali-current-ammount').innerText);
        const sumNoakhali = noakhaliValue + noakhaliAmmount;
        const currentBalance = parseFloat(document.getElementById('balance').innerText);
    
        const sum = currentBalance - noakhaliValue;
        document.getElementById('noakhali-current-ammount').innerText=sumNoakhali;
        document.getElementById('balance').innerText = sum;
    }
    
    
   
   

    
})



document.getElementById('history-btn').addEventListener('click', function(){
    isClicked = false;
    document.getElementById('history-btn').style.backgroundColor ='green';
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('the-mainDonation-btn').style.backgroundColor= 'lightgray';
})
const buttonClicked = document.getElementById('the-mainDonation-btn');
let isClicked = false;
buttonClicked.addEventListener('click', function(){
    isClicked =true;
    if(isClicked==true){
        document.getElementById('donation-page').classList.remove('hidden');
    }

    document.getElementById('the-mainDonation-btn').style.backgroundColor = 'green';
    document.getElementById('history-btn').style.backgroundColor = 'lightgray';
    historyBtn.classList.remove('btn');

    
})