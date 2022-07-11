import * as S from './styled'
import useYugioh from '../../hooks/yugioh-hooks'

const CardsInfo = () => {

    const { yugiohState } = useYugioh();

    return (
    <S.Wrapper>
        <S.WrapperImage src={yugiohState.card_info.image_url} alt="card" />
        <S.WrapperCardInfo>
            <h1>{yugiohState.card_info.name}</h1>
            <p>{yugiohState.card_info.desc}</p>
            <S.WrapperStatusCount>
                <div>
                    <h4>Level</h4>
                    <span>{yugiohState.card_info.level}</span>
                </div>
                <div>
                    <h4>Attack</h4>
                    <span>{yugiohState.card_info.atk}</span>
                </div>
                <div>
                    <h4>Defense</h4>
                    <span>{yugiohState.card_info.def}</span>
                </div>
                <div>
                    <h4>Attribute</h4>
                    <span>{yugiohState.card_info.attribute}</span>
                </div>
                <div>
                    <h4>Race</h4>
                    <span>{yugiohState.card_info.race}</span>
                </div>
            </S.WrapperStatusCount>
        </S.WrapperCardInfo>
    </S.Wrapper>
    );
}

export default CardsInfo;