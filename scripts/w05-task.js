/* W05: Programming Tasks */
document.addEventListener("DOMContentLoaded", function () {

/* Declare and initialize global variables */
const mainElement = document.querySelector("main");
const sortByElement = document.querySelector("#sortBy");
const templesElement = document.querySelector("#temples");
let templeList = [];

/* Apply CSS styles to elements */
mainElement.style.display = "flex";
mainElement.style.flexDirection = "column";
mainElement.style.alignItems = "center";
mainElement.style.marginTop = "125px";
sortByElement.style.marginTop = "10px";
templesElement.style.display = "flex";
templesElement.style.flexWrap = "wrap";
templesElement.style.justifyContent = "center";
templesElement.style.margin = "0 auto";

/* Function: displayTemples */
const displayTemples = (temples) => {
    templesElement.innerHTML = ''; // Clear the content before adding new elements

    temples.forEach((temple) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        h3.style.textAlign = "center"; // Center the text
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        img.style.maxWidth = "400px"; 
        img.style.maxHeight = "225px";
        img.style.margin = "10px"; 
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* Function: getTemples using fetch() */
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        templeList = await response.json();
        displayTemples(templeList);
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
};

/* Function: reset */
const reset = () => {
    templesElement.innerHTML = ''; // Clear the content
};

/* Function: sortBy */
const sortBy = (temples) => {
    reset();
    const filter = sortByElement.value;
    switch (filter) {
        case "utah":
            displayTemples(templeList.filter((temple) => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(templeList.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(templeList.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(templeList);
            break;
    }
};

/* Event Listener for the sortBy element */
sortByElement.addEventListener("change", () => {
    sortBy(templeList);
});

/* Initial call to getTemples to load the data */
getTemples();
});