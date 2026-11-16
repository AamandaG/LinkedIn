// Troque as URLs por imagens locais em /public (ex.: "/avatar.jpg") quando tiver os arquivos do Figma.
const img = (seed, w = 400, h = 400) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
const face = (n) => `https://i.pravatar.cc/120?img=${n}`;

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu...";

const experiences = [
  { title: "Início na Dança e Crew Cupcakes", period: "2012 – 2016" },
  { title: "Dançarino de Apoio do BTS e Entrada na JYP", period: "2017" },
  { title: "Estreia Oficial com o Stray Kids", period: "2018 – 2020" },
  { title: "Consolidação na TV e Sucesso Global", period: "2021 – 2023" },
  { title: "Reconhecimento Individual e Moda Internacional", period: "2024 – 2025" },
  { title: "Semanas de Moda e Preparação para Álbum Solo", period: "2026" },
];

const highlights = [
  {
    title: "Dançarino de Apoio do BTS e Entrada na JYP",
    period: "2017",
    image: "/predebut.jpg",
    description: (
      <>
        Atuou como <em>backup dancer</em> do BTS durante a turnê <em>The Wings Tour</em> (incluindo datas no Japão) e participou das gravações do videoclipe de <em>"Not Today"</em>. Em julho de 2017, ingressou oficialmente como <em>trainee</em> na <strong>JYP Entertainment</strong> e participou do reality show de sobrevivência <em>Stray Kids</em>.
      </>
    ),
  },
  {
    title: "Estreia Oficial com o Stray Kids",
    period: "2018 – 2020",
    image: "/I%20AM%20YOU.jpg",
    description: (
      <>
        Estreou em <strong>25 de março de 2018</strong> com o EP <em>I Am Not</em>, assumindo o papel de líder de dança (integrando a subunidade <strong>Dance Racha</strong>). Em 2019, lançou no YouTube o projeto de dança <em>"Dawn"</em>, coreografado por ele mesmo.
      </>
    ),
  },
  {
    title: "Reconhecimento Individual e Moda Internacional",
    period: "2024 – 2025",
    image: "/voguelee.jpg",
    description: (
      <>
        Alcançou o <strong>3º lugar</strong> na lista <em>Billboard K-Pop Artist 100</em> em 2024 e participou do programa vocal <em>LeeMujin Service</em>. Fez sua estreia solo na Semana de Moda de Milão (desfile feminino de outono da Gucci, em fevereiro de 2026), estampou a capa da <em>Marie Claire Korea</em> representando a joalheria <strong>Chaumet</strong> e tornou-se embaixador da marca sul-coreana <strong>Matin Kim</strong>. Com o Stray Kids, conquistou o nono topo na <em>Billboard 200</em> com o mini-álbum <em>THIS & THAT</em> e iniciou os preparativos finais para seu <strong>primeiro álbum solo</strong>, previsto para o início de 2027.
      </>
    ),
  },
];
const peopleAlsoViewed = [
  { name: "Bang Chan", image: "/chan.jpg" },
  { name: "I.N", image: "/I.N.jpg" },
  { name: "Hyunjin", image: "/hyunjin.png" },
  { name: "Han Jisung", image: "/han.jpg" },
  { name: "Seungmin", image: "/seungmin.jpg" },
  { name: "Changbin", image: "/changbin.jpg" },
  { name: "Félix", image: "/felix.jpg" },
];
const suggestedPeople = [14, 20, 25, 31, 52].map((image) => ({
  id: image,
  name: "Nome e sobrenome",
  image: face(image),
  description: "Título, cargo e tecnologias. Lorem Ipsum Dolor sit Amet",
}));
function Reactions() {
  return (
    <span className="reactions">
      <span className="dots" aria-hidden="true"><i /><i /><i /></span>
      124
    </span>
  );
}

function PeopleCard({ title, action, people }) {
  return (
    <section className="card side-card">
      <h2>{title}</h2>
      {people.map((person) => (
        <div className="person" key={person.id || person.name}>
          <img src={person.image} alt="" />
          <div>
            <strong>{person.name}</strong>
            {person.description && <p>{person.description}</p>}
            <button className="btn">{action}</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default function Page() {
  return (
    <main className="page">
      <div className="col">
        {/* Cabeçalho do perfil */}
        <section className="card profile">
          <img className="cover" src="/banner2.jpg" alt="" />
          <div className="profile-body">
            <img className="avatar" src="/minho2.jpg" alt="Foto de Lee Min-ho" />
            <div className="profile-info">
              <div>
                <h1>Lee Min-ho</h1>
                <p className="headline">Main Dancer, Dance Leader, Vocalista</p>
                <p className="muted">Sou coreógrafo e bailarino profissional, Apresentador (MC) e Televisão em programas como Music Core e programas de variedade. Embaixador Global da grife italiana Gucci. E É membro do Bob Pierce Honor Club, da organização World Vision International.</p>
                <p className="muted">
                  Daegot-myeon, Gimpo-si, Coreia do Sul · <a className="link" href="#">informações de contato</a>
                </p>
                <p><a className="link" href="#">1879 seguidores</a> · <a className="link" href="#">567 conexões</a></p>
                <div className="actions">
                  <button className="btn primary">Mensagem</button>
                  <button className="btn blue">Mais</button>
                </div>
              </div>
              <div className="orgs">
                <div className="org"><img src="/jyp.webp" alt="Logo da JYP Entertainment" />JYP Entertainment</div>
                <div className="org"><img src="/school.jpeg" alt="Foto da Gimpo Jeil Technical High School" />Gimpo Jeil Technical High School (김포제일공업고등학교)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Destaques */}
        <section className="card">
          <h2>Destaques</h2>
          <div className="highlights">
            {highlights.map(({ title, period, image, description }) => (
              <article className="post" key={title}>
                <header>
                  <small>Publicação · {period}</small>
                  <strong>{title}</strong>
                </header>
                <p className="post-description">{description}</p>
                <img src={image} alt={`Imagem da publicação: ${title}`} />
                <div className="meta"><Reactions /><span>5 comentários</span></div>
              </article>
            ))}
          </div>
        </section>

        {/* Atividades */}
        <section className="card activities">
          <h2>Atividades de Lazer e Hobbies</h2>
          <p className="hobbies-intro">
            Fora dos palcos, Lee Know tem uma rotina marcada por interesses tranquilos e atividades físicas variadas:
          </p>
          <ul className="hobbies-list">
            <li>
              <strong>Cuidar de seus gatos:</strong> É muito apegado aos seus três gatos — <strong>Soonie, Doongie e Dori</strong> —, que vivem com seus pais e frequentemente aparecem em seus vlogs e publicações.
            </li>
            <li>
              <strong>Caminhadas e trilhas:</strong> Gosta de caminhar na natureza, fazer trilhas em montanhas ou passear próximo ao Rio Han, em Seul.
            </li>
            <li>
              <strong>Artes marciais e boxe:</strong> Praticou artes marciais desde a infância (possui faixa preta de segundo grau em taekwondo e artes marciais mistas) e usa o boxe como forma de aliviar o estresse.
            </li>
            <li>
              <strong>Culinária:</strong> Cozinha bem e costuma preparar pratos para si e para os colegas de grupo.
            </li>
            <li>
              <strong>Leitura, filmes e animes:</strong> Aprecia ler romances e mistérios (tendo o autor japonês Keigo Higashino entre seus favoritos), assistir a animes e ir ao cinema — muitas vezes sozinho.
            </li>
          </ul>
        </section>

        {/* Sobre */}
        <section className="card about">
          <h2>Sobre</h2>
          <ul className="about-list">
            <li>
              <strong>Busca por Tranquilidade:</strong> Assim como as trilhas solitárias em montanhas e as caminhadas noturnas pelo Rio Han, pescar oferece um contraste silencioso à rotina intensa de ensaios, gravações e turnês mundiais.
            </li>
            <li>
              <strong>Conexão com a Culinária:</strong> Como gosta muito de cozinhar e preparar refeições para os colegas de grupo, a pesca une o lazer ao ar livre com o prazer de lidar com ingredientes frescos.
            </li>
          </ul>
        </section>

        {/* Experiências */}
        <section className="card">
          <h2>Experiências</h2>
          <ul className="timeline">
            {experiences.map((e) => (
              <li key={e.title}>
                <h3>{e.title}</h3>
                <p className="muted">{e.period}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Formação */}
        <section className="card">
          <h2>Formação acadêmica</h2>
          <div className="item">
            <img src="/school.jpeg" alt="Foto da Gimpo Jeil Technical High School" />
            <div><h3>Gimpo Jeil Technical High School (김포제일공업고등학교)</h3><p>Ano de conclusão</p><p>2016</p></div>
          </div>
        </section>

        {/* Idiomas */}
        <section className="card">
          <h2>Idiomas</h2>
          <div className="lang"><h3>Coreano</h3><p className="muted">Nativo</p></div>
          <div className="lang"><h3>Inglês</h3><p className="muted">Intermediário</p></div>
        </section>
      </div>

      <aside className="col">
        <PeopleCard title="As pessoas também viram" action="Enviar mensagem" people={peopleAlsoViewed} />
        <PeopleCard title="Pessoas que talvez você conheça" action="Conectar" people={suggestedPeople} />
      </aside>
    </main>
  );
}
