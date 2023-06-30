import Propstypes from "prop-types"


function Item({ nacionalidade, idade, etnia }) {
    return (

        <>
            <dd>
              {nacionalidade}
            </dd>
            <dd>
              {idade}
            </dd>
            <dd>
              {etnia}
            </dd>
        </>
    )

}

Item.propstypes = {
    nacionalidade: Propstypes.string.isRequired,
    idade: Propstypes.number.isRequired,
    etnia: Propstypes.string.isRequired,
}

Item.defaultProps = {
    idade: "000",
    etnia: "negao",
}

export default Item