/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Vitor Del Frari",
    photo: "placeholder.png",
    favoriteFoods: [
        "Barbecue", 
        "Burguer", 
        "Pizza"
        ],
    hobbies: [
        "Basketball", 
        "Swimming"
    ],
    placesLived: [
        
    ]
  };

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    { place: "Franca, Brazil", length: "16 year" },
    { place: "Chicago, Illinois", length: "2 years" },
    { place: "Natal, Brazil", length: "2 years" });


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
  });
  