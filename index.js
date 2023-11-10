function tester() {
    console.log("fatih");
}

document.addEventListener("DOMContentLoaded", function () {
    const messageList = document.getElementById("message-list");
    const clearButton = document.getElementById("clear");
    clearButton.onclick = function() { ClearTable(); }

    const selectAll = document.getElementById("select-all");
    const sendAll = document.getElementById("send-all");
    const deselectAll = document.getElementById("deselect-all");

    selectAll.onclick = function() { SelectAll(); }
    sendAll.onclick = function() { SendAll(); }
    deselectAll.onclick = function() { DeselectAll(); }
    // Fetch data from data.json file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data));
            data.data.sort((a, b) => {
                let fa = a.category.toLowerCase(),
                    fb = b.category.toLowerCase();

                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
            }); 

            data.data.forEach(item => {
                // Create a card for each data item
                const card = document.createElement("div");
                card.classList.add("card-container");
                card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p>Category: ${item.category}</p>
                `;

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                card.appendChild(checkbox);
                const holder = document.createElement("div");
                holder.classList.add("holder-div");
                
                checkbox.onclick = function () {
                    if (checkbox.checked) {
                        console.log("tıklandı");
                        holder.style.display = "grid";
                    } else {
                        holder.style.display = "none";
                    }
                };

                if (item.category === "A") {
                    console.log("category A");

                    const inp1 = document.createElement("input");
                    const inp2 = document.createElement("input");
                    const inp3 = document.createElement("input");
                    const inp4 = document.createElement("input");
                    const submitbtn = document.createElement("input");
                    submitbtn.type = "submit";
                    submitbtn.value = "Submit";
                    holder.appendChild(inp1);
                    holder.appendChild(inp2);
                    holder.appendChild(inp3);
                    holder.appendChild(inp4);
                    holder.appendChild(submitbtn)
                    holder.style.display = "none";
                    card.appendChild(holder);


                    // add onclick functionality to submit button
                    submitbtn.onclick = function(e) {
                        const sentData = {
                            title: item.title,
                            description: item.description,
                            category: item.category,
                            col1: inp1.value,
                            col2: inp2.value,
                            col3: inp3.value,
                            col4: inp4.value,
                            col5: ""
                        }
                        // check if the input is not full
                        if (!(sentData.col1 != "" && sentData.col2 != ""  && sentData.col3 != "" && sentData.col4 != "")) {
                            alert("empty input field");
                            return false;
                        }
                        // send message if above doesn't return false
                        AddMessage(sentData);
                    }
                }
                else if (item.category === "B") {
                    const inp1 = document.createElement("input");

                    holder.appendChild(inp1);
                    const submitbtn = document.createElement("input");
                    submitbtn.type = "submit";
                    holder.appendChild(submitbtn)
                    holder.style.display = "none";
                    card.appendChild(holder);

                    submitbtn.onclick = function(e) { 
                        const sentData = {
                            title: item.title,
                            description: item.description,
                            category: item.category,
                            col1: inp1.value,
                            col2: "",
                            col3: "",
                            col4: "",
                            col5: ""
                        }
                        // check if the input is not full
                        if (!(sentData.col1 != "")) {
                            alert("empty input field");
                            return false;
                        }
                        // send message if above doesn't return false
                        AddMessage(sentData);
                    }
                }
                else if (item.category === "A-B") {
                    console.log("category A-B");

                    const inp1 = document.createElement("input");
                    const inp2 = document.createElement("input");
                    const inp3 = document.createElement("input");
                    const inp4 = document.createElement("input");
                    const inp5 = document.createElement("input");
                    const submitbtn = document.createElement("button");

                    holder.appendChild(inp1);
                    holder.appendChild(inp2);
                    holder.appendChild(inp3);
                    holder.appendChild(inp4);
                    holder.appendChild(inp5);
                    holder.appendChild(submitbtn)

                    holder.style.display = "none";
                    card.appendChild(holder);

                    submitbtn.onclick = function(e) {
                        const sentData = {
                            title: item.title,
                            description: item.description,
                            category: item.category,
                            col1: inp1.value,
                            col2: inp2.value,
                            col3: inp3.value,
                            col4: inp4.value,
                            col5: inp5.value
                        }
                        // check if the input is not full
                        if (!(sentData.col1 != "" && sentData.col2 != ""  && sentData.col3 != "" && sentData.col4 != "" && sendData.col5 != "")) {
                            alert("empty input field");
                            return false;
                        }
                        // send message if above doesn't return false
                        AddMessage(sentData);
                    }
                }
                else if (item.category === "NO-A-B") {
                    console.log("no-a-b");
                    const submitbtn = document.createElement("button");
                    submitbtn.innerText = "Submit";
                    submitbtn.style.height = "2em";
                    holder.appendChild(submitbtn);
                    holder.style.display = "none";
                    card.appendChild(holder);

                    submitbtn.onclick = function(e) {
                        const sentData = {
                            title: item.title,
                            description: item.description,
                            category: item.category,
                            col1: "",
                            col2: "",
                            col3: "",
                            col4: "",
                            col5: ""
                        }

                        // send message if above doesn't return false
                        AddMessage(sentData);
                    }
                }

                // Append the card to the visualization container
                messageList.appendChild(card);
            });
        })
});

function DeselectAll() {
    console.log("select all clicked");

    // Get all checkbox elements
    var checkboxElements = document.querySelectorAll('input[type="checkbox"]');

    // Iterate through the input holder containers and make them visible
    checkboxElements.forEach(function(checkbox) {
        checkbox.checked = false;
        var holderCards = document.querySelectorAll('.holder-div');
        holderCards.forEach(function(item) {
            item.style.display = "none";
        })
        console.log(checkbox);
    });
}

function SelectAll() {
    console.log("select all clicked");

    // Get all checkbox elements
    var checkboxElements = document.querySelectorAll('input[type="checkbox"]');

    // Iterate through the input holder containers and make them visible
    checkboxElements.forEach(function(checkbox) {
        checkbox.checked = true;
        var holderCards = document.querySelectorAll('.holder-div');
        holderCards.forEach(function(item) {
            item.style.display = "grid";
        })
        console.log(checkbox);
    });

}

function SendAll() {

}

function ClearTable(e) {
    messageTable = document.getElementById("message-table");
    messageTable.innerHTML = `
    <thead><tr><th scope="col" id="title">Title</th>
    <th scope="col" id="desc">Description</th>
      <th scope="col" id="cat">Category</th>
      <th scope="col" id="th1">Column 1</th>
      <th scope="col" id="th2">Column 2</th>
      <th scope="col" id="th3">Column 3</th>
      <th scope="col" id="th4">Column 4</th>
      <th scope="col" id="th5">Column 5</th>
    </tr>
  </thead>
  <tbody id="main-table">
    
  </tbody>
  `;
}

function AddMessage(message) {
    messageTable = document.getElementById("message-table");

    row = document.createElement("tr");
    tit = document.createElement("td");
    descr = document.createElement("td");
    cat = document.createElement("td");
    col1 = document.createElement("td");
    col2 = document.createElement("td");
    col3 = document.createElement("td");
    col4 = document.createElement("td");
    col5 = document.createElement("td");

    row.appendChild(tit)
    row.appendChild(descr)
    row.appendChild(cat)
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    row.appendChild(col5)

    tit.innerText = message.title;
    descr.innerText = message.description;
    cat.innerHTML = message.category;
    col1.innerHTML = message.col1;
    col2.innerHTML = message.col2;
    col3.innerHTML = message.col3;
    col4.innerHTML = message.col4;
    col5.innerHTML = message.col5;

    messageTable.appendChild(row);
}