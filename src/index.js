import "./index.css";

/*
 Your solution here
 */
const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const errors = validateForm(formData);
    if(!errors) {
        const errorDiv = document.createElement("div");
        errorDiv.classList.add("error");
        errorDiv.setAttribute("id", "searchError");
        const errorMsg = "Please enter a search term";
        const content = 
        `<div class="error" id="searchError">${errorMsg}</div>`;

        errorDiv.innerHTML = content;
        document.querySelector("form").appendChild(errorDiv);
    } 

    const findArticle = document.querySelectorAll("article");
    findArticle.forEach((articles) => {
        if(!articles.innerHTML.toLowerCase().includes(formData.get("searchTerm").toLowerCase())) {
            articles.classList.add("hidden");
        } else {
            articles.classList.remove("hidden");
        }
    })
}

function validateExists(value) {
    return value && value.trim();
}

const validateForm = (formData) => {
    return validateExists(formData.get("searchTerm"));
}

const main = () => {
    const form = document.querySelector("#searchForm");
    form.addEventListener("submit", formSubmitHandler);
}

window.addEventListener("DOMContentLoaded", main)