const URLApi = 'https://pokeapi.co/api/v2/pokemon/'
const Boton = document.getElementById('btn');
const Input = document.getElementById('inputId');

async function getPokemon (id) {
    const poke = await fetch(`${URLApi}${id}`).then(res => res.json());   
    
    var pokeid = document.getElementById('pokeid');
    var name = document.getElementById('name');
    var pokeimage = document.getElementById('pokeimage');

    pokeid.innerHTML = `#${poke.id}`;
    name.innerHTML = poke.name;

    // var img = document.createElement('img');
    pokeimage.src = poke.sprites.front_default;
    // pokeimage.appendChild(img);
} 

function cargarPoke() {   
    var PokeId = parseInt(Input.value);
    console.log(PokeId);
    getPokemon(PokeId);
}

Boton.addEventListener("click", cargarPoke);
Input.addEventListener("keypress", function(e) {
    if(e.key === 'Enter')
    {   e.preventDefault();   
        Boton.click();
    }
});
