import Item from "./Item"

function List() {
    return (
        <>
            <dt>
                <Item nacionalidade="brLOL" idade={10}  />
                <Item nacionalidade="brLOL" idade={20} etnia="black" />
                <Item nacionalidade="brLOL"  etnia="indio" />
                <Item nacionalidade="pra gringo e mais caro" idade={40} etnia="brancao" />
                <Item nacionalidade="pra gringo e mais caro" idade={50} etnia="yellow" />
            </dt>
        </>
    )
}

export default List