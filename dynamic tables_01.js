let my_table = document.getElementById("my_table");

let fieldset_01=document.createElement("fieldset")

let legend_01=document.createElement("legend")
let legend_ctn=document.createTextNode("my_table")

legend_01.appendChild(legend_ctn)
fieldset_01.appendChild(legend_01)
my_table.appendChild(fieldset_01)
// my_table.appendChild(legend_01)




let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    },
    {
        "color": "gray",
        "type": "ambulance",
        "registration": new Date('2019-01-03'),
        "capacity": 10
    },
    {
        "color": "gray",
        "type": "fire-brigade",
        "registration": new Date('2020-01-03'),
        "capacity": 7
    },
]     

cars.map((item)=>{
   
    

    let tr=document.createElement("tr")
    let td=document.createElement("td")
    let ctn_01=document.createTextNode(`${item.color}`)
    
    // td.rowSpan=2;
    let td_02=document.createElement("td")
        // td.colSpan=2;
    let ctn_02=document.createTextNode(`${item.type}`)
    

    let td_03=document.createElement("td");
    let ctn_03=document.createTextNode(`${item.registration}`)

    let td_04=document.createElement("td")
    let ctn_04=document.createTextNode(`${item.capacity}`)
    

    // Now Connect all branches with appendChild() function.....

    td.appendChild(ctn_01);
    tr.appendChild(td);
    my_table.appendChild(tr);

    td_02.appendChild(ctn_02);
    tr.appendChild(td_02);
    my_table.appendChild(tr);

    td_03.appendChild(ctn_03);
    tr.appendChild(td_03);
    my_table.appendChild(tr);

    td_04.appendChild(ctn_04);
    tr.appendChild(td_04);
    my_table.appendChild(tr);




})