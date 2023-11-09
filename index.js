document.addEventListener("DOMContentLoaded", function () {
  const messageList = document.getElementById("message-list");
  console.log(messageList.innerHTML);

  // Fetch data from data.json file
  fetch('data.json')
      .then(response => response.json())
      .then(data => {
          console.log(JSON.stringify(data));
          data.data.forEach(item => {
              // Create a card for each data item
              const card = document.createElement("div");
              card.classList.add("card");

              // Add content to the card
              card.innerHTML = `
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                  <p>Category: ${item.category}</p>
              `;

              // Append the card to the visualization container
              messageList.appendChild(card);
          });
      })
      .catch(error => console.error('Error fetching data:', error));
});
