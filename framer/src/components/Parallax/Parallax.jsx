function Parallax() {
  return (
    <>
      <section class="section section-hero">
        <div class="parallax-bg bg1"></div>
        <div class="content">
          <h1 class="section-title">Sekcja 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>

      <section class="section section-dark">
        <div class="parallax-bg bg2"></div>
        <div class="content">
          <h1 class="section-title">Sekcja 2</h1>
          <p>Proin sit amet justo eget est feugiat laoreet.</p>
        </div>
      </section>

      <section class="section section-light">
        <div class="parallax-bg bg3"></div>
        <div class="content">
          <h1 class="section-title">Sekcja 3</h1>
          <p>
            Donec euismod risus in ipsum fermentum, eget porttitor sapien
            feugiat.
          </p>
        </div>
      </section>
    </>
  );
}

export default Parallax;
