async function fetchPokemon(pokemon) {
	try {
		const response = await fetch(
			`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`
		);
		const data = await response.json();
		const typesDiv = document.getElementById("types");
		console.log(data);
		const sprite = data.sprites.front_default;
		document.getElementById("sprite").src = sprite;
		document.getElementById("sprite").style.display = "block";
		document.getElementById("pokemon-name").textContent =
			data.name.toUpperCase();
		document.getElementById("pokemon-id").textContent = '#' + data.id;
		document.getElementById("weight").textContent = 'Weight: ' + data.weight;
		document.getElementById("height").textContent = 'Height: ' + data.height;
		if (data.types.length == 2) {
			const type1 = document.createElement("span");
			const type2 = document.createElement("span");
			type1.textContent = data.types[0].type.name;
			type2.textContent = data.types[1].type.name;
			typesDiv.appendChild(type1);
			typesDiv.appendChild(type2);
		} else {
			const type1 = document.createElement("span");
			type1.textContent = data.types[0].type.name;
			typesDiv.appendChild(type1);
		}
		document.getElementById("hp").textContent = data.stats[0].base_stat;
		document.getElementById("attack").textContent = data.stats[1].base_stat;
		document.getElementById("defense").textContent = data.stats[2].base_stat;
		document.getElementById("special-attack").textContent =
			data.stats[3].base_stat;
		document.getElementById("special-defense").textContent =
			data.stats[4].base_stat;
		document.getElementById("speed").textContent = data.stats[5].base_stat;
	} catch (error) {
		console.log("Error fetching resource");
		console.log(error);
		alert("Pokémon not found");
	}
}

const searchBtn = document.getElementById("search-button");
const userInput = document.getElementById("search-input");
searchBtn.addEventListener ('click', () => {
	fetchPokemon(userInput.value.toLowerCase());
	userInput.value = "";
	document.getElementById("types").innerHTML = "";
});
