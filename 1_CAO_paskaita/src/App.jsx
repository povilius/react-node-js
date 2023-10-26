import "./App.css"

function App() {
  return (
  
  <div className="container">
  <header>
    <div className="logo-wrapper">
      <img src="./assets/generic-logo.svg" alt="" />
      <p>Hello, World</p>
    </div>
    <div className="nav-wrapper">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Product</li>
          <li className="nav-item">Company</li>
          <li className="nav-item">Contact</li>
        </ul>
    </div>
  </header>
  <main>
    <section className="hero-box-wrapper">
      <div className="hero-box">
          <p className="header-image">Header Image</p>
      </div>
    </section>

    <section className="info-wrapper">
      <div className="info-cards-wrapper">
        <div className="info-card">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque libero adipisci odio ipsa culpa magnam repellendus dolores fuga explicabo. Soluta autem explicabo vel ipsam beatae, dolores similique voluptas laborum!</p>
        </div>
        <div className="info-card">
          <h2>Company</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque libero adipisci odio ipsa culpa magnam repellendus dolores fuga explicabo. Soluta autem explicabo vel ipsam beatae, dolores similique voluptas laborum!</p>
        </div>
        <div className="info-card">
          <h2>Services</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque libero adipisci odio ipsa culpa magnam repellendus dolores fuga explicabo. Soluta autem explicabo vel ipsam beatae, dolores similique voluptas laborum!</p>
        </div>
      </div>
    </section>

    <div className="main-content-wrapper">
      <section className="content-wrapper">
        <div className="main-content">
          <h2>Content</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, cum porro rem nesciunt magnam voluptates, fuga atque numquam sit ullam accusantium illo animi id tenetur! Illo est non veniam tempore.</p>
        </div>
        <div className="secondary-content">
          <h3>Sub Header</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aliquid a. Accusamus iusto reiciendis ut ullam incidunt unde consectetur quaerat, quam cupiditate minima quae quo quia molestiae! Illo, sit beatae!</p>
        </div>
      </section>

      <aside className="aside-nav-wrapper">
        <h3>Navigation</h3>
        <ul className="aside-nav-list">
          <li className="aside-nav-item">Home</li>
          <li className="aside-nav-item">Product</li>
          <li className="aside-nav-item">Company</li>
          <li className="aside-nav-item">Contact</li>
        </ul>
      </aside>
    </div>
  </main>
  </div>
  )
}

export default App