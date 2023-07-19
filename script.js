// // script.js
// const API_URL = "https://emojihub.yurace.pro/api/all";
// const emojiContainer = document.getElementById("emoji-container");
// const categorySelect = document.getElementById("category-select");

// // Fetch emoji details from the API
// fetch(API_URL)
//   .then(response => response.json())
//   .then(data => {
//     const emojis = data;
//     // Display all emojis initially
//     displayEmojis(emojis);
//     // Handle category filtering
//     categorySelect.addEventListener("change", () => {
//       const selectedCategory = categorySelect.value;
//       const filteredEmojis = filterEmojisByCategory(emojis, selectedCategory);
//       displayEmojis(filteredEmojis);
//     });
//   })
//   .catch(error => {
//     console.error("Error fetching emoji data:", error);
//   });

// // Function to filter emojis by category
// function filterEmojisByCategory(emojis, category) {
//   if (category === "") {
//     return emojis;
//   }
//   return emojis.filter(emoji => emoji.category === category);
// }

// // Function to display emojis
// function displayEmojis(emojis) {
//   emojiContainer.innerHTML = "";

//   emojis.forEach(emoji => {
//     const { name, category, group, htmlCode } = emoji;

//     const emojiCard = document.createElement("div");
//     emojiCard.classList.add("emoji-card");

//     const emojiElement = document.createElement("span");
//     emojiElement.classList.add("emoji");
//     emojiElement.innerHTML = htmlCode;
//     emojiCard.appendChild(emojiElement);

//     const nameElement = document.createElement("p");
//     nameElement.innerText = name;
//     emojiCard.appendChild(nameElement);

//     const categoryElement = document.createElement("p");
//     categoryElement.innerText = `Category: ${category}`;
//     emojiCard.appendChild(categoryElement);

//     const groupElement = document.createElement("p");
//     groupElement.innerText = `Group: ${group}`;
//     emojiCard.appendChild(groupElement);

//     emojiContainer.appendChild(emojiCard);
//   });
// }
// script.js
// const API_URL = "https://emojihub.yurace.pro/api/all";
// const emojiContainer = document.getElementById("emoji-container");
// const categorySelect = document.getElementById("category-select");

// let allEmojis = []; // Store all emojis data

// // Fetch emoji details from the API
// fetch(API_URL)
//   .then(response => response.json())
//   .then(data => {
//     allEmojis = data;
//     // Display all emojis initially
//     displayEmojis(allEmojis);
//     // Handle category filtering
//     categorySelect.addEventListener("change", () => {
//       const selectedCategory = categorySelect.value;
//       const filteredEmojis = filterEmojisByCategory(selectedCategory);
//       displayEmojis(filteredEmojis);
//     });
//   })
//   .catch(error => {
//     console.error("Error fetching emoji data:", error);
//   });

// // Function to filter emojis by category
// function filterEmojisByCategory(category) {
//   if (category === "") {
//     return allEmojis;
//   }
//   return allEmojis.filter(emoji => emoji.category.toLowerCase() === category.toLowerCase());
// }

// // Function to display emojis
// function displayEmojis(emojis) {
//   emojiContainer.innerHTML = "";

//   emojis.forEach(emoji => {
//     const { name, category, group, htmlCode } = emoji;

//     const emojiCard = document.createElement("div");
//     emojiCard.classList.add("emoji-card");

//     const emojiElement = document.createElement("span");
//     emojiElement.classList.add("emoji");
//     emojiElement.innerHTML = htmlCode;
//     emojiCard.appendChild(emojiElement);

//     const nameElement = document.createElement("p");
//     nameElement.innerText = name;
//     emojiCard.appendChild(nameElement);

//     const categoryElement = document.createElement("p");
//     categoryElement.innerText = `Category: ${category}`;
//     emojiCard.appendChild(categoryElement);

//     const groupElement = document.createElement("p");
//     groupElement.innerText = `Group: ${group}`;
//     emojiCard.appendChild(groupElement);

//     emojiContainer.appendChild(emojiCard);
//   });
// }





// script.js
const API_URL = "https://emojihub.yurace.pro/api/all";
const emojiContainer = document.getElementById("emoji-container");
const categorySelect = document.getElementById("category-select");

let allEmojis = []; // Store all emojis data
let categories = []; // Store unique categories

// Fetch emoji details from the API
fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    allEmojis = data;
    categories = extractCategories(allEmojis);
    populateCategorySelect(categories);
    // Display all emojis initially
    displayEmojis(allEmojis);
    // Handle category filtering
    categorySelect.addEventListener("change", () => {
      const selectedCategory = categorySelect.value;
      const filteredEmojis = filterEmojisByCategory(selectedCategory);
      displayEmojis(filteredEmojis);
    });
  })
  .catch(error => {
    console.error("Error fetching emoji data:", error);
  });

// Function to extract unique categories from emojis
function extractCategories(emojis) {
  return [...new Set(emojis.map(emoji => emoji.category))];
}

// Function to populate the category select dropdown
function populateCategorySelect(categories) {
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.innerText = category.charAt(0).toUpperCase() + category.slice(1);
    categorySelect.appendChild(option);
  });
}

// Function to filter emojis by category
function filterEmojisByCategory(category) {
  if (category === "all") {
    return allEmojis;
  }
  return allEmojis.filter(emoji => emoji.category === category);
}

// Function to display emojis
function displayEmojis(emojis) {
  emojiContainer.innerHTML = "";

  emojis.forEach(emoji => {
    const { name, category, group, htmlCode } = emoji;

    const emojiCard = document.createElement("div");
    emojiCard.classList.add("emoji-card");

    const emojiElement = document.createElement("span");
    emojiElement.classList.add("emoji");
    emojiElement.innerHTML = htmlCode[0];
    emojiCard.appendChild(emojiElement);

    const nameElement = document.createElement("p");
    nameElement.innerText = name;
    emojiCard.appendChild(nameElement);

    const categoryElement = document.createElement("p");
    categoryElement.innerText = `Category: ${category}`;
    emojiCard.appendChild(categoryElement);

    const groupElement = document.createElement("p");
    groupElement.innerText = `Group: ${group}`;
    emojiCard.appendChild(groupElement);

    emojiContainer.appendChild(emojiCard);
  });
}
