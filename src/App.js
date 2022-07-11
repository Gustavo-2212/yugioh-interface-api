import React from 'react'
import Layout from './components/layout'
import CardsInfo from './components/cards-info'
import useYugioh from './hooks/yugioh-hooks'
import NoSearch from './components/no-search'

const App = () => {
  const { yugiohState } = useYugioh();

  return (
    <Layout>
      {yugiohState.hasCard ? (<>
        {yugiohState.loading ? (<p>loading...</p>) : (<>
          {yugiohState.hasCardFound ? (<CardsInfo />) : (<NoSearch />)}
        </>)}
      </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;
