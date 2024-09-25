
let currentBalance = parseFloat(document.getElementById('balance').innerText);

document.getElementById('noakhali-btn').addEventListener('click', function(){
    //
    
    const noakhaliValue =  parseFloat(document.getElementById('noakhali-input').value);
    if(isNaN(noakhaliValue)  || noakhaliValue<=0){
        alert('Invalid Input');
        document.getElementById('noakhali-input').value='';
    }
    
    else{
        const noakhaliAmmount = parseFloat(document.getElementById('noakhali-current-ammount').innerText);
        const sumNoakhali = noakhaliValue + noakhaliAmmount;
        
    
        currentBalance = currentBalance - noakhaliValue;
        document.getElementById('noakhali-current-ammount').innerText=sumNoakhali;
        document.getElementById('balance').innerText = currentBalance;
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modal').style.transform ='translate(50px, 50px) scale(1.5)';
        document.getElementById('close-modal').addEventListener('click', function(){
            document.getElementById('modal').classList.add('hidden');
        })
        const newHistoy = document.createElement('div');
        newHistoy.classList = 'border-base-300 w-[max] mx-auto text-center  flex justify-center border-t px-4 py-16';
        newHistoy.innerHTML=`
            


            <p class="text-xl text-gray-900">${noakhaliValue} taka is donated for famine-2024 at Noakhali, Bangladesh</p>
            <p>Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}${new Date().toGMTString()}</p>
        `
        const historynewButton = document.getElementById('history-latest');
        historynewButton.insertBefore(newHistoy, historynewButton.firstChild);
        
    }
    
    
   
   

    
})
document.getElementById('feni-btn').addEventListener('click', function(){
    const feniValue = parseFloat(document.getElementById('feni-input').value);
    if(isNaN(feniValue) || feniValue<=0){
        alert('Invalid Input');
        document.getElementById('feni-input').value='';
    }
    else{
        const feniAmmount = parseFloat(document.getElementById('feni-current-ammount').innerText);
        const sumFeni = feniValue+ feniAmmount;
        currentBalance = currentBalance - feniValue;
        document.getElementById('feni-current-ammount').innerText=sumFeni;
        document.getElementById('balance').innerText = currentBalance;
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modal').style.transform ='translate(50px, 50px) scale(1.5)';
        document.getElementById('close-modal').addEventListener('click', function(){
            document.getElementById('modal').classList.add('hidden');
        })
        const newHistoy = document.createElement('div');
        newHistoy.classList = 'border-base-300 w-[max] mx-auto text-center flex justify-center border-t px-4 py-16';
        newHistoy.innerHTML=`
            


            <p class="text-xl text-gray-900">${feniValue} taka is donated for famine-2024 at Noakhali, Bangladesh</p>
            <p>Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}${new Date().toGMTString()}</p>
        `
        const historynewButton = document.getElementById('history-latest');
        historynewButton.insertBefore(newHistoy, historynewButton.firstChild);
        
        

    }
})
document.getElementById('quota-btn').addEventListener('click', function(){
    const quotaValue = parseFloat(document.getElementById('quota-input-value').value);
    if(isNaN(quotaValue) || quotaValue<=0){
        alert('Invalid Input');
        document.getElementById('quota-input-value').value = '';
    } 
    else{
        const quotaAmmount = parseFloat(document.getElementById('quota-current-ammount').innerText);
        const sumQuota = quotaValue + quotaAmmount;
        currentBalance = currentBalance - quotaValue;
        document.getElementById('quota-current-ammount').innerText=sumQuota;
        document.getElementById('balance').innerText = currentBalance;
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modal').style.transform ='translate(50px, 50px) scale(1.5)';
        document.getElementById('close-modal').addEventListener('click', function(){
            document.getElementById('modal').classList.add('hidden');
        })
        const newHistoy = document.createElement('div');
        newHistoy.classList = 'border-base-300 w-[max] mx-auto text-center flex justify-center border-t px-4 py-16';
        newHistoy.innerHTML=`
            


            <p class="text-xl text-gray-900">${quotaValue} taka is donated for Aid for Injured in the quota Movement ,2024, Bangladesh</p>
            <p>Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}${new Date().toGMTString()}</p>
        `
        const historynewButton = document.getElementById('history-latest');
        historynewButton.insertBefore(newHistoy, historynewButton.firstChild);
    }
})



document.getElementById('history-btn').addEventListener('click', function(){
    isClicked = false;
    document.getElementById('history-btn').style.backgroundColor ='green';
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('the-mainDonation-btn').style.backgroundColor= 'lightgray';
    document.getElementById('history-latest').classList.remove('hidden');
    
})
const buttonClicked = document.getElementById('the-mainDonation-btn');
let isClicked = false;
buttonClicked.addEventListener('click', function(){
    document.getElementById('history-latest').classList.add('hidden');
    isClicked =true;
    if(isClicked==true){
        document.getElementById('donation-page').classList.remove('hidden');
    }

    document.getElementById('the-mainDonation-btn').style.backgroundColor = 'green';
    document.getElementById('history-btn').style.backgroundColor = 'lightgray';
    historyBtn.classList.remove('btn');
   

    
})