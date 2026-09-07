'use client';

import Link from 'next/link';

export default function Deroulement() {
  return (
    <main className="min-h-screen bg-[#050204] text-stone-100 relative overflow-hidden font-sans flex flex-col justify-between">
      
      {/* Background & Halos ténébreux */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-purple-950/20 via-rose-950/10 to-transparent blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] pointer-events-none z-0 rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-rose-900/10 blur-[150px] pointer-events-none z-0 rounded-full" />

      {/* En-tête */}
      <header className="relative z-10 border-b border-purple-950/50 bg-[#050204]/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-widest text-white font-serif drop-shadow-md">
              AL<span className="text-purple-400">o</span><span className="text-purple-400">l</span>T
            </span>
          </Link>
          <div className="hidden sm:flex items-center gap-5 border-l border-purple-900/40 pl-6">
            <Link href="/reglement" className="text-xs font-bold text-stone-300 hover:text-purple-400 transition-colors uppercase tracking-widest">
              Règlement
            </Link>
          </div>
          <Link href="/" className="text-xs font-bold text-stone-300 hover:text-purple-400 transition-colors uppercase tracking-widest">
            ← Retour
          </Link>
        </div>
      </header>

      {/* Contenu principal */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12 w-full flex-1">
        
        {/* Titre de la page */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-800/40 bg-purple-950/40 backdrop-blur-md text-purple-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 shadow-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
            Informations Officielles
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-stone-400 tracking-tight drop-shadow-lg mb-4">
            Déroulement du Tournoi
          </h1>
        </div>

        {/* BENTO GRID (Mise en page asymétrique ultra-moderne) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARTE 1 : Le Format (Prend 2 colonnes) */}
          <div className="md:col-span-2 relative p-8 rounded-2xl bg-[#0a0306]/60 border border-purple-900/30 backdrop-blur-xl shadow-2xl overflow-hidden group">
            {/* Lueur au survol */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-rose-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h2 className="text-sm font-black uppercase tracking-widest text-purple-400 mb-6 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              Format & Matchs
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
              <div>
                <p className="text-3xl font-black text-white mb-2">Tous les matchs <span className="text-rose-500">BO3</span></p>
                <p className="text-sm text-stone-400 leading-relaxed mb-4">Le tournoi se joue dans un format à élimination directe. L'intégralité de l'arbre se joue en Best of 3, jusqu'à la Grande Finale qui se disputera en <strong>BO5</strong>.</p>
              </div>
              
              <div className="p-5 rounded-xl bg-[#050204]/80 border border-rose-900/30 shadow-[0_0_15px_rgba(225,29,72,0.1)]">
                <p className="text-xs font-black text-rose-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span>⚠️</span> Fearless Draft
                </p>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Au sein d'un même BO, <strong>une équipe ne peut plus sélectionner un champion qu'elle a déjà joué</strong> lors des parties précédentes. Préparez un champion pool solide !
                </p>
              </div>
            </div>
          </div>

          {/* CARTE 2 : En Bref (Prend 1 colonne) */}
          <div className="relative p-8 rounded-2xl bg-[#0a0306]/60 border border-purple-900/30 backdrop-blur-xl shadow-2xl flex flex-col justify-center gap-6">
            <div>
              <p className="text-[10px] uppercase text-purple-500 font-extrabold tracking-widest mb-1">Frais d'inscription</p>
              <p className="text-3xl font-black text-white">10 € <span className="text-sm font-medium text-stone-500">/ Équipe</span></p>
            </div>
            <div className="h-px w-full bg-purple-900/20" />
            <div>
              <p className="text-[10px] uppercase text-purple-500 font-extrabold tracking-widest mb-1">Niveau Requis</p>
              <p className="text-2xl font-black text-white">Platine IV <span className="text-sm font-medium text-stone-500">à</span> Diamant III</p>
            </div>
            <div className="h-px w-full bg-purple-900/20" />
            <div>
              <p className="text-[10px] uppercase text-purple-500 font-extrabold tracking-widest mb-1">Capacité</p>
              <p className="text-2xl font-black text-white">8 Équipes</p>
            </div>
          </div>

          {/* CARTE 3 : Planning (Prend 1 colonne) */}
          <div className="relative p-8 rounded-2xl bg-[#0a0306]/60 border border-purple-900/30 backdrop-blur-xl shadow-2xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-purple-400 mb-6 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Planning
            </h2>
            
            <div className="relative border-l-2 border-purple-900/50 pl-5 space-y-6">
              {/* Jour 1 */}
              <div className="relative">
                <span className="absolute -left-[27px] top-1 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                <p className="text-xs font-bold text-white uppercase tracking-wider">Samedi 21 Nov.</p>
                <p className="text-rose-400 text-sm font-black mb-1">17h00 - Minuit</p>
                <p className="text-xs text-stone-400">Quarts de finale (BO3)<br/>Début des demi-finales</p>
              </div>
              
              {/* Jour 2 */}
              <div className="relative">
                <span className="absolute -left-[27px] top-1 w-3 h-3 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
                <p className="text-xs font-bold text-white uppercase tracking-wider">Dimanche 22 Nov.</p>
                <p className="text-rose-400 text-sm font-black mb-1">14h00 - 23h00</p>
                <p className="text-xs text-stone-400">Fin des demi-finales<br/>Grande Finale (BO5)</p>
              </div>
            </div>
          </div>

          {/* CARTE 4 : Bracket (Prend 2 colonnes) */}
          <div className="md:col-span-2 relative p-8 rounded-2xl bg-[#0a0306]/60 border border-purple-900/30 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row gap-8 items-center">
            
            <div className="flex-1">
              <h2 className="text-sm font-black uppercase tracking-widest text-purple-400 mb-4 flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                Arbre du Tournoi
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed mb-4">
                Le bracket complet de 8 équipes sera défini par un <strong>tirage au sort intégral</strong> diffusé en direct avant le début de la compétition. Aucun seeding basé sur le rang ne sera appliqué.
              </p>
              <span className="inline-block px-3 py-1 bg-purple-950/50 border border-purple-700/50 text-purple-200 text-[10px] font-bold uppercase tracking-widest rounded">
                Tirage au sort en direct
              </span>
            </div>

            <div className="w-full sm:w-1/2 bg-[#050204] border border-purple-900/50 rounded-xl p-2 relative group overflow-hidden">
              {/* Lueur interne bracket */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="/bracket.png" 
                alt="Arbre du Tournoi" 
                className="w-full h-auto object-cover rounded-lg opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>

          </div>

          {/* CARTE 5 : Banner Twitch (Prend les 3 colonnes en bas) */}
          <div className="md:col-span-3 relative p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#180a29] via-[#240f42] to-[#180a29] border border-[#6441a5]/50 shadow-[0_0_30px_rgba(100,65,165,0.2)] flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
            
            {/* Logo Twitch géant en fond */}
            <svg className="absolute -right-10 -bottom-10 w-64 h-64 text-[#6441a5]/20 rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
            </svg>

            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-xl font-black uppercase tracking-widest text-white mb-2">
                Diffusion en Direct
              </h2>
              <p className="text-sm text-stone-300 max-w-2xl">
                Les matchs seront diffusés en <strong>simultané sur deux chaînes Twitch</strong> jusqu'en finale pour couvrir l'intégralité de l'arbre. La Grande Finale (BO5) sera diffusée exclusivement sur la chaîne principale.
              </p>
            </div>

            <a 
              href="https://twitch.tv/TON_LIEN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 whitespace-nowrap flex items-center gap-3 bg-[#6441a5] hover:bg-[#7d5bbe] text-white font-black text-sm px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(100,65,165,0.4)] uppercase tracking-[0.15em] transition-all transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
              </svg>
              Chaîne Principale
            </a>
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