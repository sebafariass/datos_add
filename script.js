/*
fetch('https://pokeapi.co/api/v2/pokemon/') 
.then( res => res.json())
.then(data => {
   // console.log(data.results)
  data.results.forEach(pokemones => {
       console.log(pokemones)
   });
}) */



const obtenerPokemones = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/') 
        const data = await res.json()
        console.log(data.results)
        const holaPokemones = data.results.map( poke => poke.name)
       console.log(holaPokemones)
    }
     catch (error) {
        console.log(error)
        
    }
}
obtenerPokemones()