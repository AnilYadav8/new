// document.getElementById('g{etLocationBtn').addEventListener('click',()=>{
// if (navigator.geolocation){
//     console.log(navigator.geolocation,"hehe");
//     navigator.geolocation.getCurrentPosition(showPosition, showError);

// }
// else{
//     alert("Geolocation is not supported by this browser.");

// }
// });

// function showPosition(position){
//     console.log(position,"location");
//     const latitude = position.coords.latitude;
//     const longitude = posintion.coords.longitude;
//     document.getElementById('latitude').textContent = latitude;
//     document.getElementById('longitude').textContent = longitude;
//     document.getElementById('locationInfo').style.display = 'block';
// }









document.addEventListener("DOMContentLoaded",()=>{
    const expenseForm =document.getElementById("expense-form");
    const expenseList =document.getElementById("expense-list");
    const totalamount =document.getElementById("total-amount");
    const filterCategory =document.getElementById("filter-category");
    
    
    let expense =[];
    expenseForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const name= document.getElementById("expense-name").value;
        const amount = parseFloat(document.getElementById("expense-amout").value);
        const category = document.getElementById("expense-category").value;
        const date = document.getElementById("expense-date").value;
        const expense = {
            id:
            date.now(),
            name,
            amount,
            category,
            date

        };
        expenseList.push(expense);
        displayExpense(expenses);
        updateTotalAmount();
        expenseForm.requestFullscreen();


    });

    expenseseList.addEventListener("click",(e)=>{
        if
        (e.target.classList.contains("delete-btn")){
            const id = parseInt(e.target.dataset.id);
            expenses = expenses.filter(expense => expense.id !==id);
            displayExpenses(expenses);
            updateTotalAmount();

        }  
        if
        (e.target.classsList.contains("edit-btn")){
            const id= parseInt(e.target.dataset.id);
            const expense=expenses.find(expense =>expense.id === id);
            document.getElementById("expenses-name").value = expense.name;
            document.getElementById("expenses-amount").value = expense.amount;
            document.getElementById("expenses-category").value = expense.category;
            document.getElementById("expenses-date").value = expense.date;
            expense = expense.filter(expense => expense.id !== id);
            displayExpenses(expenses);
            updateTotalAmount();

    
        }
    });
    filterCategory.addEventListener("change",(e) =>{
        const category = e.target.value;
        if(category ==="All"){
            displayExpenses(expenses);

        }
        else{
            const filteredExpense = expense.filter(expense=> expense.category ===category);
            displayExpenses(filteredExpenses);

        }
    });
         function
displayExpenses(expenses){
    expenseList.innerHTML ="";
    expenses.forEach(expense=>{
        const row = document.createElement("tr");
        row.innerHTML =''
        <td>$(expense.name)
        <td>$$(expense.amount.toFixed(2))
        <td>$(expense.category)
        <td>$(expense.date)
        <button class="edit-btn" data-id="${expense.id}">Edit</button>
        <button class="delete-btn" data-id="${expense.id}">Delete</button>
        </td>
        </td>
        
        expenseList.appendChild(row);

    });


function
updateTotalAmount(){
    const total = expense.reduce((sum,expense)=> sum +expense.amount,0);
    totalamount.textContent = total.toFixed(2);
}
    
    
});