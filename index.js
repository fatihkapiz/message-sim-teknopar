function tester() {
    console.log("fatih");
}

document.addEventListener("DOMContentLoaded", function () {
    const messageList = document.getElementById("message-list");

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
                card.setAttribute("id", "iterativeCard");
                card.classList.add("card-conteiner");
                card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p>Category: ${item.category}</p>
                `;

                const btn1 = document.createElement("input");
                btn1.type = "checkbox";
                card.appendChild(btn1);
                const former = document.createElement("form");
                former.method = "PUT";


                if (item.category === "A") {
                    console.log("category A");

                    const inp1 = document.createElement("input");
                    const inp2 = document.createElement("input");
                    const inp3 = document.createElement("input");
                    const inp4 = document.createElement("input");
                    const submitbtn = document.createElement("input");
                    submitbtn.type = "submit";

                    former.appendChild(inp1);
                    former.appendChild(inp2);
                    former.appendChild(inp3);
                    former.appendChild(inp4);
                    former.appendChild(submitbtn)
                    card.appendChild(former);
                    former.style.display = "none";

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

                    former.onsubmit = function(e) {
                        e.preventDefault();
                        sentData.col1 = inp1.value;
                        sentData.col2 = inp2.value;
                        sentData.col3 = inp3.value;
                        sentData.col4 = inp4.value;
                        sentData.col5 = inp5.value;
                        AddMessage(sentData);
                        return false;
                    }

                    btn1.onclick = function () {
                        if (btn1.checked) {
                            console.log("tıklandı");
                            former.style.display = "grid";
                        } else {
                            former.style.display = "none";
                        }
                    };
                }
                else if (item.category === "B") {
                    const inp1 = document.createElement("input");
                    const former = document.createElement("form");

                    former.appendChild(inp1);
                    const submitbtn = document.createElement("input");
                    submitbtn.type = "submit";
                    former.appendChild(submitbtn)
                    card.appendChild(former);
                    former.style.display = "none";

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

                    former.onsubmit = function() { return AddMessage(sentData); }

                    btn1.onclick = function () {
                        if (btn1.checked) {
                            console.log("tıklandı");
                            former.style.display = "grid";
                        } else {
                            former.style.display = "none";
                        }
                    };
                }
                else if (item.category === "A-B") {
                    console.log("category A");

                    const inp1 = document.createElement("input");
                    const inp2 = document.createElement("input");
                    const inp3 = document.createElement("input");
                    const inp4 = document.createElement("input");
                    const inp5 = document.createElement("input");
                    const former = document.createElement("form");
                    const submitbtn = document.createElement("input");
                    submitbtn.type = "submit";

                    former.appendChild(inp1);
                    former.appendChild(inp2);
                    former.appendChild(inp3);
                    former.appendChild(inp4);
                    former.appendChild(inp5);
                    former.appendChild(submitbtn)

                    card.appendChild(former);
                    former.style.display = "none";


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

                    former.onsubmit = function() { return AddMessage(sentData); }

                    btn1.onclick = function () {
                        if (btn1.checked) {
                            console.log("tıklandı");
                            former.style.display = "grid";
                        } else {
                            former.style.display = "none";
                        }
                    };
                }
                else if (item.category === "NO-A-B") {

                }

                // Append the card to the visualization container
                messageList.appendChild(card);
            });
        })
});

function AddMessage(newData) {
    const table = document.querySelector("#table");
    console.log(table);
    console.log(newData);
    const row = document.createElement("tr");
    const title = document.createElement("td");
    const descr = document.createElement("descr");
    const cat = document.createElement("cat");
    const d1 = document.createElement("d1");
    const d2 = document.createElement("d2");
    const d3 = document.createElement("d3");
    const d4 = document.createElement("d4");
    const d5 = document.createElement("d5");

    row.appendChild(title);
    row.appendChild(descr);
    row.appendChild(cat);
    row.appendChild(d1);
    row.appendChild(d2);
    row.appendChild(d3);
    row.appendChild(d4);
    row.appendChild(d5);

    title.innerText = newData.title;
    descr.innerText = newData.descr;
    cat.innerText = newData.cat;
    d1.innerText = newData.col1;
    d2.innerText = newData.col2;
    d3.innerText = newData.col3;
    d4.innerText = newData.col4;
    d5.innerText = newdata.col5;

    return false;
}