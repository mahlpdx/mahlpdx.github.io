// Allow projects to update automatically

// List of projects to display on portfolio website
let projects_data = [
    {
        "title":"Image Editor",
        "icon": "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-1024.png",
        "description": "Image editing tool developed in my Computer Graphics course",
        "link": "https://github.com/maudul3/CS547-Project-1"
    },
    {
        "title":"n-Shot Learning",
        "icon": "https://cdn-icons-png.flaticon.com/512/2103/2103611.png",
        "description": "n-Shot Learning algorithm for object classification",
        "link": "https://github.com/lacedwithcode/urban-octo-parakeet"
    },
    {
        "title":"Image Editor",
        "icon": "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-1024.png",
        "description": "Image editing tool developed in my Computer Graphics course",
        "link": "https://github.com/maudul3/CS547-Project-1"
    }
]

const projects = document.getElementById("projects");

let outermost_div = document.createElement("div");
outermost_div.classList.add("row");
outermost_div.classList.add("justify-content-center")

// Loop through the code list of projects and add to DOM
for (let i = 0; i < projects_data.length; i++) {
    let card_div = document.createElement("div");
    card_div.classList.add("card");
    card_div.classList.add("m-1")
    card_div.style.width = "18rem";
    let card_img = document.createElement("img");
    card_img.classList.add("m-1")
    card_img.src = projects_data[i].icon
    let card_body = document.createElement("div");
    card_body.classList.add("card-body");
    let card_title = document.createElement("h5");
    card_title.innerText = projects_data[i].title;
    card_title.classList.add("card-title");
    let card_text = document.createElement("p");
    card_text.classList.add("card-text");
    card_text.innerText = projects_data[i].description;
    let card_button = document.createElement("a");
    card_button.classList.add("btn");
    card_button.classList.add("btn-primary")
    card_button.href = projects_data[i].link
    card_button.innerText = "Source Code"

    card_body.appendChild(card_title);
    card_body.appendChild(card_text);
    card_body.appendChild(card_button);

    card_div.append(card_img);
    card_div.append(card_body);

    outermost_div.append(card_div);
}

projects.appendChild(outermost_div)

// Handle the contact form submission
/*let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // Empty form check
  if (
    !(
      form.elements.username.value.length ||
      form.elements.password.value.length ||
      form.elements.email.value.length ||
      form.elements.radio1.checked ||
      form.elements.radio2.checked ||
      form.elements.date1.value.length
    )
  ) {
    console.warn("You must enter some data to submit this form");
    return;
  }

  console.group("========= FORM SUBMISSION =========");
  // Username
  if (form.elements.username.value.length) {
    console.log("Username:", form.elements.username.value);
  } else {
    console.log("Username: no submission");
  }

  // Email
  if (form.elements.email.value.length) {
    console.log("Email:", form.elements.email.value);
  } else {
    console.log("Email: no submission");
  }

  // Newsletter
  if (form.elements.radio1.checked) {
    console.log("Newsletter: Yes");
  } else if (form.elements.radio2.checked) {
    console.log("Newsletter: No");
  } else {
    console.log("Newsletter: no submission");
  }

  // Date
  if (form.elements.date1.value.length) {
    console.log("Date:", form.elements.date1.value);
  } else {
    console.log("Date: no submission");
  }
  console.groupEnd();
}*/