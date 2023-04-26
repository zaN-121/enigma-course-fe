import Styled from "styled-components";

const H3 = Styled.h3`
    margin: "20px 0";`

const EmptyList = ({text}) => {
    return (
        <p>{text}</p>
    )
}

export default EmptyList;