const path_prefix = process.env.NODE_ENV === 'production' ? "/cal-mens-volleyball/" : '/'

const CurrentPlayers = () => {
    return (
      <>
        <header className="current-players-header-container header-container">
          <h1 className="header-banner-content display-1">
            Current Players
          </h1>
        </header>
        <main className="main">
          <h2 style={{fontWeight: 'bold'}}>
            Placeholder
          </h2>
          <p>
            No information
          </p>
        </main>
      </>
    )
}

export default CurrentPlayers;