import Image from 'next/image';
import Icon from '../components/Icon';

// next/image with `unoptimized: true` does not auto-prefix basePath for
// plain public/ files, so it's applied by hand here to match next.config.js.
const base = process.env.GITHUB_ACTIONS ? '/landing-studyquest' : '';

const FEATURES = [
  {
    icon: 'dashboard',
    title: 'Dashboard personalizado',
    body: 'Saludo con tu XP actual, acceso directo a tu party activa y las quests pendientes del día.',
  },
  {
    icon: 'groups',
    title: 'Matchmaking de salas',
    body: 'Descubrí "parties" de estudio por materia: nivel promedio, cantidad de miembros, líder y si tienen una quest activa.',
  },
  {
    icon: 'auto_awesome',
    title: 'Quests generadas por IA',
    body: 'Subí un PDF o tus apuntes y Google Gemini arma quizzes interactivos automáticamente.',
  },
  {
    icon: 'military_tech',
    title: 'Progreso gamificado',
    body: 'ELO competitivo, win rate, rachas de estudio e insignias desbloqueables en tu perfil.',
  },
  {
    icon: 'leaderboard',
    title: 'Torneos y leaderboard',
    body: 'Rankings globales o filtrados por materia, con torneos activos y próximos.',
  },
  {
    icon: 'forum',
    title: 'Tiempo real',
    body: 'Chat y estado de las salas vía WebSockets (Socket.IO) sobre un backend NestJS.',
  },
];

const STACK = [
  'NestJS 11',
  'PostgreSQL 16 + TypeORM',
  'Socket.IO',
  'Google Gemini API',
  'MarkItDown (PDF → texto)',
  'React 19 + Vite',
  'Tailwind CSS 4',
  'Zustand',
  'Framer Motion',
];

export default function Home() {
  return (
    <main className="bg-page-gradient">
      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-16 pt-20 text-center md:pt-28">
        <div className="flex items-center gap-2 rounded-full border border-outline-variant bg-surface px-4 py-1.5">
          <span className="text-lg leading-none">⚡</span>
          <span className="text-sm font-bold text-primary-light">StudyQuest</span>
        </div>
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-on-surface md:text-6xl">
          Estudia. Compite. Gana.
        </h1>
        <p className="max-w-2xl text-lg text-on-surface-variant">
          Plataforma de estudio colaborativo. Matchmaking en tiempo real arma &ldquo;parties&rdquo;
          (salas de estudio) por materia, un chat con WebSockets conecta a los miembros, y
          quests/quizzes se generan dinámicamente con IA a partir de tus propios apuntes o PDFs.
          Progreso gamificado: XP, ELO competitivo, rachas, insignias, torneos y leaderboards por
          materia.
        </p>
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://lorengrz.github.io/StudyQuest/"
              className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-on-primary shadow-md transition-transform hover:scale-[1.02]"
            >
              <Icon name="rocket_launch" />
              Probar la app
            </a>
            <a
              href="https://github.com/LorenGrz/StudyQuest"
              className="flex items-center gap-2 rounded-xl border border-outline-variant px-6 py-3 font-bold text-primary-light transition-colors hover:bg-surface"
            >
              <Icon name="code" />
              Ver el código
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 rounded-xl border border-outline-variant px-6 py-3 font-bold text-primary-light transition-colors hover:bg-surface"
            >
              Cómo funciona
            </a>
          </div>
          <p className="text-xs text-on-surface-variant">
            Te lleva a la pantalla de login — podés registrarte gratis para explorarla.
          </p>
        </div>
      </section>

      {/* Screenshot gallery */}
      <section className="bg-surface py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-center gap-10 px-6">
          <figure className="w-full max-w-[280px] overflow-hidden rounded-2xl border border-outline-variant bg-surface-alt shadow-lg">
            <Image
              src={`${base}/dashboard.png`}
              alt="Dashboard de StudyQuest con XP, party activa y quests del día"
              width={455}
              height={953}
              className="h-auto w-full"
            />
            <figcaption className="border-t border-outline-variant px-4 py-3 text-center text-sm font-semibold text-on-surface-variant">
              Dashboard
            </figcaption>
          </figure>
          <figure className="w-full max-w-[280px] overflow-hidden rounded-2xl border border-outline-variant bg-surface-alt shadow-lg">
            <Image
              src={`${base}/party-discovery.png`}
              alt="Descubrimiento de salas de estudio (Party Discovery) en StudyQuest"
              width={471}
              height={963}
              className="h-auto w-full"
            />
            <figcaption className="border-t border-outline-variant px-4 py-3 text-center text-sm font-semibold text-on-surface-variant">
              Party Discovery
            </figcaption>
          </figure>
        </div>
        <p className="mx-auto mt-8 max-w-xl px-6 text-center text-sm text-on-surface-variant">
          Más pantallas en la app: Perfil con estadísticas de gamificación, Torneos y Leaderboard.
        </p>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-3 text-center font-display text-3xl font-bold text-on-surface">
          Cómo funciona
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-on-surface-variant">
          Cada sesión de estudio se organiza como una party: te matcheás, generás una quest y
          progresás mientras jugás en equipo.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-outline-variant bg-surface p-6 shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20">
                <Icon name={f.icon} className="text-primary-light" />
              </div>
              <h3 className="mb-2 font-bold text-on-surface">{f.title}</h3>
              <p className="text-sm text-on-surface-variant">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold">Tiempo real + IA generativa</h2>
          <p className="mx-auto mb-10 max-w-2xl text-white/80">
            Un backend NestJS con WebSockets sostiene el matchmaking y el chat en vivo, mientras
            Google Gemini convierte tus apuntes en quests jugables.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {STACK.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center">
        <div className="flex items-center gap-1.5">
          <span className="text-lg leading-none">⚡</span>
          <span className="font-display font-bold text-primary-light">StudyQuest</span>
        </div>
        <p className="text-sm text-on-surface-variant">Proyecto de portfolio — Lorenzo Graizzaro.</p>
        <a
          href="mailto:lorenzograizzaro55@gmail.com"
          className="text-sm font-semibold text-primary-light underline underline-offset-4"
        >
          lorenzograizzaro55@gmail.com
        </a>
      </footer>
    </main>
  );
}
