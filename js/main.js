const pokemons = [
  {
    id: 1,
    image: "img/bullbasour.svg",
  },
  {
    id: 2,
    image: "img/meow.svg",
  },
  {
    id: 3,
    image: "img/pikachu.svg",
  },
  {
    id: 4,
    image: "img/snorlax.svg",
  },
];

const random_between = (ini, fin) => {
  return Math.floor(Math.random() * (fin - ini) + ini);
};

const generate_array = () => {
  let aux = [];

  for (let i = 0; i < 4; i++) {
    aux.push(pokemons[random_between(0, 4)]);
  }

  let res = [...aux];

  res[random_between(0, 4)].isAnswer = true;
  console.log(res);
  print_pokemons(aux.concat(res));
  console.log(aux.concat(res));
};

const serie_container = document.getElementById("serie-container");

const print_pokemons = (pokemons) => {
  serie_container.innerHTML = "";
  pokemons.forEach((e) => {
    serie_container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="figure-container">
            <img class="pokemon" src="${e.image}" />
          </div>
        `
    );
  });
};

generate_array();
