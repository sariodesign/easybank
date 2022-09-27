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
    margin-bottom: 34px;

    img {
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }
`

const GridItemContent = styled.div`
    background-color: ${props => props.bg || 'transparent'};
    padding: ${props => props.pad || 'transparent'};

    ${props => props.centered && css`
        text-align: center;
    `}

    span {
        color: var(--dark-blue);
        font-size: 12px;
    }

    h3 {
        color: var(--dark-blue);
        font-weight: 400;
        margin: 0 0 16px;
        transition: all .25s ease-in-out;

        &:hover {
            color: var(--lime-green);
        }

        @media (hover:hover) {
            cursor: pointer;
        } 
    }

    p {
        color: var(--grayish-blue);
        margin: 0
    }
`

function GridFourBlock({items, limit, icon, bg, pad, centered = false}) {
    return (
        <GridContainer items={items} icon={icon} limit={limit}>
            {
                items.map((item, index) => 
                    { limit <= index && (
                            <GridItem>
                                <img src={item.image} alt={item.title} />
                                <GridItemContent bg={bg} pad={pad} centered={centered}>
                                    { item.author && <span>{item.author}</span> }
                                    <h3>{item.title}</h3>
                                    <p>{item.abstract}</p>
                                </GridItemContent>
                            </GridItem>
                        )
                    }
                )
            }
        </GridContainer>
    )
}

export default GridFourBlock;