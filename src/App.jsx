import './App.css'

function App() {

  return (
    <>
      <nav>
        <div className="left">
            <a href="/">Sajjad</a>
        </div>

        <div className="right">
            <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
                <span>Github</span>
            </a>

            <a href="mailto:sajjadmeydani1385@gmail.com">
                <i className="fa-solid fa-envelope"></i>
                <span>Email</span>
            </a>
        </div>
    </nav>

    <main>
        <section className="hero">
            <div className="text">
                <h2>Hi, I&apos;m Sajjad 👋</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam totam atque fuga commodi. Animi impedit amet repellat ad optio voluptas porro labore, facere, quis inventore iure nam eius assumenda ducimus ullam nihil officia! Quam omnis, molestias voluptatem nulla sequi soluta hic quod blanditiis nobis quaerat facilis beatae, ab laudantium deserunt vitae magni architecto rem ipsa dolore perferendis reiciendis.</p>

                <div className="links">
                    <a href="#skills">
                        <i className="fa-solid fa-code"></i>
                        <span>Skills</span>
                    </a>

                    <a href="#testimony">
                        <i className="fa-solid fa-pen"></i>
                        <span>Testimony</span>
                    </a>
                    <a href="#contact">
                        <i className="fa-solid fa-envelope"></i>
                        <span>Contact</span>
                    </a>
                </div>
            </div>

            <div className="mugshot">
                <img src="https://avatars.githubusercontent.com/u/189241188?v=4" alt="Avatar" />
            </div>
        </section>

        <section id="skills"></section>

        <section id="testimony"></section>

        <section id="contact"></section>
    </main>
    </>
  )
}

export default App
