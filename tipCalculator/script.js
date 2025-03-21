function calculateTip(){
    const bill=document.getElementById('billAmount').value;
    const tip=document.getElementById('tipPercentage').value;
    const num=document.getElementById('numPeople').value;
    const ttip=document.getElementById('totalTip');
    const tpp=document.getElementById('tipPerPerson');
    
    let totalTip= (parseFloat(bill)*(parseFloat(tip/100))).toFixed(2);
    console.log(totalTip);
    
    ttip.innerText=`Total Tip:$${totalTip}`
    
    let tipPerPerson= parseFloat(totalTip/num).toFixed(2);
    console.log(tipPerPerson);
     tpp.innerText=`Tip Per Person:"$"${tipPerPerson}`;
    

}