import { useEffect, useState } from 'react'
import './App.css'
import Card from 'react-bootstrap/Card'

function App() {

  const [pokemon, setPokemon] = useState(null)

  const buscarPokemon = async () => {

    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/charmander'
    )

    const data = await response.json()

    setPokemon(data)

    console.log(data)
  }

  useEffect(() => {
    buscarPokemon()
  }, [])

  if (!pokemon) {
    return <p>Cargando...</p>
  }

  return (
    <div className="pokemon-container">

      <Card className="pokemon-card">

        <div className="card-header">

          <Card.Title className="pokemon-name">
            {pokemon.name.toUpperCase()}
          </Card.Title>

          <span className="pokemon-hp">
            HP {pokemon.id * 10}
          </span>

        </div>

        <div className="pokemon-image-container">

          <Card.Img
            className="pokemon-image"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />

        </div>

        <div className="pokemon-info">

          <span>
            #{String(pokemon.id).padStart(3, '0')}
          </span>

          <span>
            🔥 Pokémon
          </span>

        </div>

        <Card.Body>

          <Card.Title className="attack-title">
            🔥 {pokemon.name.toUpperCase()} EMBER
          </Card.Title>

          <Card.Text className="attack-description">
            Un Pokémon de tipo fuego que lanza pequeñas
            llamas desde su cola.
          </Card.Text>

          <div className="pokemon-stats">

            <div>
              <strong>Peso</strong>
              <span>
                {pokemon.weight / 10} kg
              </span>
            </div>

            <div>
              <strong>Altura</strong>
              <span>
                {pokemon.height / 10} m
              </span>
            </div>

          </div>

        </Card.Body>

        <div className="card-footer">
          Pokémon #{pokemon.id} · Carta de colección
        </div>

      </Card>

    </div>
  )
}

export default App
