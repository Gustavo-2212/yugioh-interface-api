import { createContext, useCallback, useState } from 'react'
import api from '../services/api'

export const YugiohContext = createContext({
    loading: false,
    card_info: {},
    card_sets: []
});

const YugiohProvider = ({ children }) => {
    const [ yugiohState, setYugiohState ] = useState({
        hasCardFound: false,
        hasCard: false,
        loading: false,
        card_info: {
            id: undefined,
            image_url: undefined,
            image_url_small: undefined,
            name: undefined,
            desc: undefined,
            atk: "-",
            def: "-",
            level: "-",
            race: "-",
            attribute: "-",
        },
        card_sets: [],
    })

    const getCard = (name) => {     
        setYugiohState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api
        .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?", { params: { name: name}})
        .then(({ data }) => {
            setYugiohState((prevState) => ({
                ...prevState,
                hasCardFound: true,
                hasCard: true,
                card_info: {
                    id: data.data[0].id,
                    image_url: data.data[0].card_images[0].image_url,
                    image_url_small: data.data[0].card_images[0].image_url_small,
                    name: data.data[0].name,
                    desc: data.data[0].desc,
                    atk: data.data[0].atk,
                    def: data.data[0].def,
                    level: data.data[0].level,
                    race: data.data[0].race,
                    attribute: data.data[0].attribute,
                },
            }));
        })
        .catch((error) => {
            setYugiohState((prevState) => ({
                ...prevState,
                hasCardFound: false,
            }))
        })
        .finally(() => {
            setYugiohState((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }));
        });
    };

    const contextValue = {
        yugiohState,
        getCard: useCallback((name) => getCard(name), [])
    };

    return (
        <YugiohContext.Provider value={contextValue}>
            {children}
        </YugiohContext.Provider>
    );
};

export default YugiohProvider;