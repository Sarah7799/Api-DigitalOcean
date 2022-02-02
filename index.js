async function getData() {
    try{
    let resp = await fetch("https://wandbox.org/api/list.json");
    let data = await resp.json();
    createTable(data)
    console.log(data);
    return data;
    }
    catch(error){
        console.log(error);
    }
}

getData();

function createTable(data){
    console.log('data', data)
 let tBody = document.getElementById('tbody')

    data.forEach((element) => {
      let row = document.createElement('tr');
      let td1 = document.createElement("td");
      td1.innerHTML = element["name"];
      let td2 = document.createElement('td');
      td2.innerHTML=element["language"];
      let td3 = document.createElement('td');
      td3.innerHTML = element["display-compile-command"];
      let td4 = document.createElement('td');
      td4.innerHTML = element.version;
      row.append(td1,td2,td3,td4);
      tBody.append(row);
    });
}
