import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="h-[90vh] flex gap-8 p-8 pt-0">
        <Sidebar />
        <div className="flex-1 h-full overflow-y-">
          {/*Portada*/}
          <div className="rounded-2xl mb-4">
            <img
              src="https://editors.dexerto.com/wp-content/uploads/2021/06/15/apex-legends-arenas-balancing-new-legend.jpg"
              alt=""
              className="w-full h-[500px] object-cover object-top rounded-2xl"
            />
          </div>
          <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-8">
            <Card
              img="https://preview.redd.it/bueqtztxmnj81.png?auto=webp&s=692ee8026d707e035977daf27c5ef6298e019718"
              title="Elden Ring"
              category="PC"
              price="60"
            />
            <Card
              img="https://realgaming101.es/wp-content/uploads/2022/05/cal-lof-duty-modern-warfare-2-2022-portada-oficial.jpg"
              title="Call of Dutty MW II"
              category="PS5"
              price="51"
            />
            <Card
              img="https://www.lavanguardia.com/files/article_main_microformat/uploads/2022/09/28/633374d106b46.jpeg"
              title="FIFA 2023"
              category="PS5"
              price="70"
            />
            <Card
              img="https://cl.buscafs.com/www.levelup.com/public/uploads/images/610047/610047.jpg"
              title="Doom Eternal"
              category="PS4"
              price="62"
            />
            <Card
              img="https://static.wikia.nocookie.net/esharrypotter/images/f/fe/HL_Portada_b%C3%A1sica.jpg/"
              title="Howarts Legacy"
              category="PS5"
              price="58"
              />
              <Card
              img="https://i.3djuegos.com/juegos/15956/starfield/fotos/ficha/starfield-5462900.jpg"
              title="Starfield"
              category="XBOX"
              price="62"              
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
