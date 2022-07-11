import { useContext } from 'react'
import { YugiohContext } from '../providers/yugioh-provider'

const useYugioh = () => {
    const { yugiohState, getCard } = useContext(YugiohContext);

    return { yugiohState, getCard };
};

export default useYugioh;