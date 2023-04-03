const sizes = {
    "": 0,
    'pp': 1,
    'p': 2,
    'm': 3,
    'g': 4,
    'gg': 6,
}

document.getElementById("size").addEventListener("change", function (e) {
    const currentSize = document.getElementById("size").value;
    document.getElementById("limitFlavors").innerText = sizes[currentSize];
    
    const checkboxList = document.querySelectorAll("input[type=checkbox]");
    checkboxList.forEach(checkbox => {
        checkbox.checked = false;
    });

    document.getElementById("selectedFlavors").innerText = 0;    
});

function updateSelected () {
    currentSize = document.getElementById("size").value;
    countSelectedFlavors = countFlavors();
    document.getElementById("selectedFlavors").innerText = countSelectedFlavors;

    if(countSelectedFlavors > sizes[currentSize])
      alert("Você ultrapassou o número de sabores permitido!");
}

function countFlavors() {
    var count = 0;
    const checkboxList = document.querySelectorAll("input[type=checkbox]");
    for (i = 0; i < checkboxList.length; i++)
        if(checkboxList[i].checked)   
          count++;      
    return count;      
}

document.querySelector('.form').addEventListener("submit", function(e){
    currentSize = document.getElementById("size").value;
    countSelected = countFlavors();

    if (currentSize == ""){
        alert("Selecione o sabor da sua pizza!");
        e.preventDefault();
        return;
    }

    if(countSelected > sizes[currentSize]){
      alert("Você ultrapassou o número de sabores permitido!");
      e.preventDefault();
      return;
    }  
});