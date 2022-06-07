// Allow projects to update automatically

// List of projects to display on portfolio website
let projects_data = [
  {
    title: "Image Editor",
    icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-1024.png",
    description:
      "Image editing tool developed to apply filters and dithering to images",
    alt: "icon of a mountain and sun",
    link: "https://github.com/mahlpdx/Image-Editor",
  },
  {
    title: "N-Shot Learning for NLP",
    icon: "https://cdn-icons-png.flaticon.com/512/2103/2103611.png",
    description: "N-Shot Learning algorithm developed for sentiment analysis",
    alt: "icon of a head receiving information",
    link: "https://github.com/mahlpdx/n-shot-learning-sentiment/tree/master",
  },
  {
    title: "Wordle AI Solver",
    icon: "https://play-lh.googleusercontent.com/_9-9siVoJ6yCHLU3ttjnQJC0_WbUAKtsgLUmPFzV22GGQZZW9OaCuKtcYFx4H1vgkGI",
    description:
      "AI developed to play the Wordle game. Wins the game 97% of the time.",
    alt: "icon of the Wordle game",
    link: "https://github.com/mahlpdx/Wordle-AI-Solver",
  },
];

const projects = document.getElementById("projects");

let outermost_div = document.createElement("div");
outermost_div.classList.add("row");
outermost_div.classList.add("justify-content-center");

// Loop through the code list of projects and add to DOM
for (let i = 0; i < projects_data.length; i++) {
  let card_div = document.createElement("div");
  card_div.classList.add("card");
  card_div.classList.add("m-1");
  card_div.style.width = "18rem";
  let card_img = document.createElement("img");
  card_img.classList.add("m-1");
  card_img.src = projects_data[i].icon;
  card_img.alt = projects_data[i].alt;
  let card_body = document.createElement("div");
  card_body.classList.add("card-body");
  let card_title = document.createElement("p");
  card_title.style.fontWeight = "bold";
  card_title.innerText = projects_data[i].title;
  card_title.classList.add("card-title");
  let card_text = document.createElement("p");
  card_text.classList.add("card-text");
  card_text.innerText = projects_data[i].description;
  let card_button = document.createElement("a");
  card_button.classList.add("btn");
  card_button.classList.add("btn-primary");
  card_button.href = projects_data[i].link;
  card_button.innerText = "Source Code";

  card_body.appendChild(card_title);
  card_body.appendChild(card_text);
  card_body.appendChild(card_button);

  card_div.append(card_img);
  card_div.append(card_body);

  outermost_div.append(card_div);
}

projects.appendChild(outermost_div);
