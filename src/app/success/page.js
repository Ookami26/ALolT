'use client';

import Link from 'next/link';

export default function Success() {
  return (
    <main className="min-h-screen bg-[#050204] text-stone-100 relative overflow-hidden font-sans flex flex-col justify-between">
      
      {/* Halo d'ambiance violet et bordeaux */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-purple-950/30 via-rose-950/20 to-indigo-950/20 blur-[160px] pointer-events-none z-0" />

      {/* En-tête */}
      <header className="relative z-10 border-b border-purple-950/50 bg-[#050204]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-widest text-white font-serif drop-shadow-md">
              AL<span className="text-purple-400">o</span><span className="text-purple-400">l</span>T
            </span>
          </Link>
          <Link 
            href="/" 
            className="text-xs font-bold text-stone-300 hover:text-purple-400 transition-colors uppercase tracking-widest"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Contenu principal */}
      <section className="relative z-10 max-w-2xl mx-auto px-6 py-16 w-full flex-1 flex items-center justify-center">
        <div className="bg-[#0a0306]/85 border border-purple-900/40 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-2xl text-center space-y-6">
          
          {/* Icône de succès */}
          <div className="w-20 h-20 mx-auto rounded-full bg-purple-950/80 border border-purple-600/60 flex items-center justify-center shadow-[0_0_30px_rgba(126,34,206,0.5)]">
            <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-black uppercase text-white tracking-wider">
              Paiement validé !
            </h1>
            <p className="text-xs text-purple-400 uppercase tracking-widest font-bold">
              Votre équipe est officiellement inscrite au tournoi
            </p>
          </div>

          <p className="text-sm text-stone-300 leading-relaxed max-w-md mx-auto">
            Les frais d'inscription ont bien été réglés via Stripe. Votre slot est sécurisé. Pensez à rejoindre notre serveur Discord pour ne rien rater des annonces et du check-in.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/FQBG4HfTD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-xs px-6 py-3.5 rounded-md uppercase tracking-widest transition-all shadow-lg"
            >
              Rejoindre le Discord
            </a>
            
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs px-6 py-3.5 rounded-md uppercase tracking-widest transition-all border border-purple-600/60 shadow-[0_0_20px_rgba(126,34,206,0.3)]"
            >
              Retour à l'accueil
            </Link>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-950/50 py-8 text-center text-xs text-stone-500 bg-[#030102]">
        © 2026 ALoLT — League of Legends Tournois Amateurs. Projet indépendant non affilié à Riot Games.
      </footer>
    </main>
  );
}
