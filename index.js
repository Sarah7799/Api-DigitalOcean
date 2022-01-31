async function getData() {
    try{
    let resp = await fetch("https://wandbox.org/api/list.json");
    let data = await resp.json();
    createTable(data)
    return data;
    }
    catch(error){
        console.log(error);
    }
}

getData();



function createTable(data){
 let tBody = document.getElementById('tbody')

    data.forEach((element) => {
      let row = document.createElement('tr');
      let td1 = document.createElement("td");
      td1.innerHTML = element.compiler-option-raw;
      let td2 = document.createElement('td');
      td2.innerHTML=element.runtime-option-raw;
      let td3 = document.createElement('td');
      td3.innerHTML = element.display-compile-command;
      
      row.append(td1,td2,td3);
      tBody.append(row);
    });
}

