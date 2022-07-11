import * as S from './styled'
import { useState } from 'react'
import useYugioh from '../../hooks/yugioh-hooks'

const Header = () => {
    const { getCard } = useYugioh();
    const [ nameForSearch, setNameForSearch ] = useState();

    const submitGetCard = () => {
        if ( !nameForSearch ) return;
        return getCard( nameForSearch );
    }

    return (
        <header>
            <S.Wrapper>
                <input  
                    type="text"
                    placeholder="Type the card's name..." 
                    onChange={(event) => setNameForSearch(event.target.value)}
                />
                <button type="submit" onClick={submitGetCard}>
                    <span>Search</span>
                </button>
            </S.Wrapper>
        </header>
    );
}

export default Header;