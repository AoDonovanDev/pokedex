const Pokecard = ({id, name, type, exp}) => (
  <div className="card">
    <h3 className="Pokecard-name">{name}</h3>
    <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt='pokeman' className="Pokecard-img"></img>
    <p className="Pokecard-btmtxt">Type: {type}</p>
    <p className="Pokecard-btmtxt">EXP: {exp}</p>

  </div>
)

export {Pokecard}