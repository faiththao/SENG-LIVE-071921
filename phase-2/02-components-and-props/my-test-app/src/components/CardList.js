// Will accept an array of card objects
import Card from "./Card"

function CardList({ cards }) {
// cards => props object
// { cards } => props.cards

    return (
        // cards.map()
        <>
            {cards.map(card => {
                return (
                <Card 
                    key={card.id}
                    title={card.title}
                    content={card.content}
                />
                );
            })}
        </>
    )
}

export default CardList;