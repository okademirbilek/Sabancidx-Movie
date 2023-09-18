import { useState } from "react";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";

function Home() {
  const [currentMovieName, setCurrentMovieName] = useState("");
  const [seachOption, setSearchOption] = useState('year');
  // console.log(seachOption)
  
  const location = useLocation();

  return (
    <div className="bg-backColor height">
      <Header setCurrentMovieName={setCurrentMovieName} setSearchOption={setSearchOption} />
      <section className="container title">
        <div className="row display-f">
          <h1>Most Complete Movie information Search Engine</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            obcaecati adipisci, quidem cumque labore exercitationem officiis aut
            soluta nemo? Sed ullam dolore nam. Nobis laboriosam consectetur
            eligendi nesciunt, autem adipisci?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            officiis in. Quam vitae quos qui sequi. Quasi eum architecto hic?
            Eius similique veniam officia tempore repudiandae beatae ipsam culpa
            expedita? veniam officia tempore repudiandae beatae ipsam culpa
          </p>
        </div>
      </section>
      <main className="container">
        {location.pathname === "/" && (
          <img
            src="https://images4.alphacoders.com/130/1301437.jpg"
            alt=" guardians of galaxy"
            className="mt-1 mb-1"
          />
        )}
        <div className="row">
          <Outlet
            context={{
              currentMovieName,
              seachOption,
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
