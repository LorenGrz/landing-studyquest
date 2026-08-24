import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StudyQuest ⚡ — Estudia. Compite. Gana.',
  description:
    'StudyQuest arma salas de estudio con matchmaking en tiempo real y genera quests con IA a partir de tus apuntes o PDFs. Portfolio preview.',
  openGraph: {
    title: 'StudyQuest',
    description: 'Matchmaking en tiempo real, quests generadas por IA y progreso gamificado para estudiar en grupo.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body text-on-surface antialiased">{children}</body>
    </html>
  );
}
