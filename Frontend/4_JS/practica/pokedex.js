const pokeName = document.querySelector('[Name]')
const pokeImg = document.querySelector('[Img]')
const pokeId = document.querySelector('[Id]')
const pokeTypes = document.querySelector('[Types]')
const pokeStats = document.querySelector('[Stats]')

const colors = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

const searchPoke = event =>{
    event.preventDefault();
    const {value} = event.target.pokemon;
    const url = `https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`;
    fetch(url).then(data => data.json())
              .then((response) => obtainData(response))
}

const obtainData = data => {
    const image = data.sprites.front_default;
    const {stats, types} = data;
    
    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', image);
    pokeId.textContent = `Number: ${data.id}`;

    showStats(stats);
    colorsType(types);   
}

const showStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat =>{
        const statW = document.createElement("div");
        const statName = document.createElement("div");
        const statQuantity = document.createElement("div");
        statName.textContent = stat.stat.name;
        statQuantity.textContent = stat.base_stat;

        statW.appendChild(statName);
        statW.appendChild(statQuantity);
        pokeStats.appendChild(statW);
    });
}

const colorsType = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type =>{
        const typeColor = document.createElement("div");
        typeColor.style.color = colors[type.type.name];
        typeColor.textContent = type.type.name;
        pokeTypes.appendChild(typeColor)
    });
}