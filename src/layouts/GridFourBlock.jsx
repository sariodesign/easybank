import styled, { css } from 'styled-components';

const GridContainer = styled.div`
    @media (min-width: 1280px) {
        display: grid;
        grid-gap: 32px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
    }

    ${props => props.icon && css`
        img {
            margin-bottom: 26px;
            height: 66px;
            width: 66px;

            @media (min-width: 1280px) {
                height: 72px;
                width: 72px
            }
        }
    `}
`;

const GridItem = styled.article`
    align-items: center;
    display: flex;
    flex-direction: column;

    h3 {
        color: var(--dark-blue);
        font-weight: 400;
        margin: 0 0 26px;

        &:hover {
            color: var(--lime-green);
        }

        @media (hover:hover) {
            cursor: pointer;
        } 
    }

    p {
        color: var(--grayish-blue);
        margin: 0 0 34px;

        @media (min-width: 1280px) {
            margin-bottom: 0;
        }
    }

    img {
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }
`

function GridFourBlock({items, icon}) {
    return (
        <GridContainer items={items} icon={icon}>
            {
                items.map((item, index) => 
                    <GridItem key={index}>
                        <img src={item.image} alt={item.title} />
                        { item.author && <span>{item.author}</span> }
                        <h3>{item.title}</h3>
                        <p>{item.abstract}</p>
                    </GridItem>
                )
            }
        </GridContainer>
    )
}

export default GridFourBlock;