const API_URL = "https://emoji-api.com/emojis?access_key=92a3db57457acd50f582d2d97f3ca60449dcd2d7";
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
  return [...new Set(emojis.map(emoji => emoji.group))];
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
  return allEmojis.filter(emoji => emoji.group === category);
}

// Function to display emojis
function displayEmojis(emojis) {
  emojiContainer.innerHTML = "";

  emojis.forEach(emoji => {
    const { character, unicodeName, group } = emoji;

    const emojiCard = document.createElement("div");
    emojiCard.classList.add("emoji-card");

    const emojiElement = document.createElement("span");
    emojiElement.classList.add("emoji");
    emojiElement.innerText = character;
    emojiCard.appendChild(emojiElement);

    const nameElement = document.createElement("p");
    nameElement.classList.add("emoji-name");
    nameElement.innerText = unicodeName;
    emojiCard.appendChild(nameElement);

    const categoryElement = document.createElement("p");
    categoryElement.classList.add("emoji-category");
    categoryElement.innerText = `Category: ${group}`;
    emojiCard.appendChild(categoryElement);

    emojiContainer.appendChild(emojiCard);
  });
}
