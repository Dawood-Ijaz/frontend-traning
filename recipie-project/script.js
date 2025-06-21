//that lets users search recipes, plan weekly meals, and save their plan.

const recipes = [
    {
        title: "Vegetable Stir Fry",
        ingredients: [
            "2 tablespoons vegetable oil",
            "1 clove garlic, minced",
            "1 teaspoon ginger, grated",
            "1 cup broccoli florets",
            "1 bell pepper, sliced",
            "1 carrot, sliced",
            "2 tablespoons soy sauce",
            "1 teaspoon sesame oil"
        ],
        cookingTime: 20,
        isVegetarian: true
    },
    {
        title: "Spaghetti Bolognese",
        ingredients: [
            "200g spaghetti",
            "100g ground beef",
            "1 cup tomato sauce",
            "1 onion, chopped",
            "1 clove garlic, minced",
            "Salt and pepper"
        ],
        cookingTime: 45,
        isVegetarian: false
    },
    {
        title: "Grilled Cheese Sandwich",
        ingredients: [
            "2 slices of bread",
            "2 slices of cheese",
            "Butter"
        ],
        cookingTime: 10,
        isVegetarian: true
    },
    {
        title: "Chicken Curry",
        ingredients: [
            "200g chicken breast",
            "1 onion, chopped",
            "1 tomato, chopped",
            "2 teaspoons curry powder",
            "1/2 cup yogurt",
            "Salt and oil"
        ],
        cookingTime: 40,
        isVegetarian: false
    },
    {
        title: "Pancakes",
        ingredients: [
            "1 cup flour",
            "1 egg",
            "1 cup milk",
            "1 tablespoon sugar",
            "1 teaspoon baking powder",
            "Butter for frying"
        ],
        cookingTime: 15,
        isVegetarian: true
    }
];



const button = document.getElementById('button')
const search = document.getElementById('search')
const container = document.getElementById('container')


function showRecipie() {
    container.innerHTML = '';
    
    const ul = document.createElement('ul')

    for (let i = 0; i < recipes.length; i++) {
        const li = document.createElement('li')
        li.innerHTML = `<h1>${recipes[i].title}</h1>`;
        ul.appendChild(li);

        for (let j = 0; j < recipes[i].ingredients.length; j++) {
            const p = document.createElement('p')

            p.innerText = recipes[i].ingredients[j]
            li.appendChild(p)
        }
    }
    container.appendChild(ul);

}

showRecipie();


button.addEventListener('click', () => {

    const item = document.querySelectorAll('li');
    const ser = search.value.toLowerCase();


    for (let i = 0; i < item.length; i++) {

        const text = item[i].textContent.toLowerCase();

        if (text.includes(ser)) {
        item[i].style.display = 'block'
        } else {
            item[i].style.display = 'none'
        }
    }
})


const option = document.getElementById('options');
const des = document.getElementById('des');
const add = document.getElementById('add');
const second = document.getElementById('second')

const week = JSON.parse(localStorage.getItem('planner')) || [
  { day: "Monday", tasks: [] },
  { day: "Tuesday", tasks: [] },
  { day: "Wednesday", tasks: [] },
  { day: "Thursday", tasks: [] },
  { day: "Friday", tasks: [] },
  { day: "Saturday", tasks: [] },
  { day: "Sunday", tasks: [] }
];

const ul = document.createElement('ul');

function planner() {
  const selectedDay = option.value;
  const taskText = des.value;


  for (let i = 0; i < week.length; i++) {

    if (week[i].day === selectedDay) {
      week[i].tasks.push(taskText); // ✅ Push task text to the correct day's tasks array

      const li = document.createElement('li');
      li.innerText = taskText; // ✅ Show the actual task, not the result of push()
      ul.appendChild(li);
    }
  }
  second.appendChild(ul)
  des.value = ""; // ✅ Clear the input after adding
}

add.addEventListener('click', planner);


