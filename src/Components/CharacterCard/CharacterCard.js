import './CharacterCard.css'

export default function CharacterCard({name, image}) {
	// displayed a character card with name and img
	return (
		<section>
        <p className='character-name' >{name}</p>
        <img src={image} alt={name} width={150} />
		</section>
	)
}