import "./Home.css"
import sary from '../../assets/sarydokoteraaxemple.png'

const Home = () => {
    return (
      <section id="home">

        <div className="presentation">
          <div className="textPres">
            <h1>Horaire convenable avec le bon médecin</h1>
            <p>Lorem ipsum dolor sit, accusantium magni, unde voluptate quam pariatur suscipit, excepturi reprehenderit, voluptates asperiores est! Hic inventore accusantium illum quia numquam? Tempore voluptatibus soluta corporis ut reiciendis reprehenderit beatae facere. Molestias atque ab id neque.</p>
            <button>Nous Contacter</button>
          </div>
        <div className="imgPres">
          <img src={sary} alt="sary dokotera" />
        </div>
        </div>
        <div className="defrence">
          <div className="title">
            <h2>Solution Rapide</h2>
            <h1>Ce qui nous rend diférent</h1>
          </div>
        </div>
      </section>
    )
}

export default Home