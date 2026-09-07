'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const YOUTUBE_VIDEO_ID = 'WHTCprqzexo'; 
  const MAX_SLOTS = 8;
  
  const [registeredCount, setRegisteredCount] = useState(0);

  useEffect(() => {
    async function fetchTeamCount() {
      const { count, error } = await supabase
        .from('teams')
        .select('*', { count: 'exact', head: true });
      
      if (!error && count !== null) {
        setRegisteredCount(count);
      }
    }
    fetchTeamCount();
  }, []);

  const remainingSlots = Math.max(0, MAX_SLOTS - registeredCount);

  return (
    <main className="relative font-sans text-stone-100 bg-[#050204]">
      
      {/* 1. BACKGROUND VIDÉO FIXE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw] opacity-40 pointer-events-none"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0`}
          title="Background Video"
          allow="autoplay; encrypted-media"
        />
        {/* Voile sombre bordeaux/violet */}
        <div className="absolute inset-0 bg-[#050204]/60 bg-gradient-to-b from-[#0a0306]/80 via-[#050204]/60 to-[#0f0408]/90" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-purple-950/30 via-rose-950/20 to-indigo-950/20 blur-[160px]" />
      </div>

      {/* 2. PREMIÈRE PAGE (Hauteur de l'écran 100vh) */}
      <div className="relative z-10 flex flex-col justify-between h-[100dvh]">
        
        {/* En-tête */}
        <header className="border-b border-purple-950/50 bg-[#050204]/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Gauche : Logo + Boutons Règlement & Déroulement */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-3">
                <span className="text-2xl font-black tracking-widest text-white font-serif drop-shadow-md">
                  AL<span className="text-purple-400">o</span><span className="text-purple-400">l</span>T
                </span>
              </Link>

              <div className="hidden sm:flex items-center gap-5 border-l border-purple-900/40 pl-6">
                <Link 
                  href="/reglement" 
                  className="text-xs font-bold text-stone-300 hover:text-purple-400 transition-colors uppercase tracking-widest drop-shadow"
                >
                  Règlement
                </Link>
                <Link 
                  href="/deroulement" 
                  className="text-xs font-bold text-stone-300 hover:text-purple-400 transition-colors uppercase tracking-widest drop-shadow"
                >
                  Déroulement
                </Link>
              </div>
            </div>

            {/* Droite : Réseaux sociaux + Navigation */}
            <nav className="flex items-center gap-4 md:gap-6">
              
              {/* Icônes Réseaux Sociaux */}
              <div className="flex items-center gap-3.5 border-r border-purple-900/40 pr-4 md:pr-6">
                
                {/* Discord */}
                <a 
                  href="https://discord.gg/TON_LIEN_DISCORD" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-[#5865F2] transition-all transform hover:scale-110"
                  title="Discord"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </a>

                {/* Twitch */}
                <a 
                  href="https://twitch.tv/TON_LIEN_TWITCH" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-[#9146FF] transition-all transform hover:scale-110"
                  title="Twitch"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/TON_LIEN_INSTAGRAM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-[#E4405F] transition-all transform hover:scale-110"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a 
                  href="https://tiktok.com/@TON_LIEN_TIKTOK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-white transition-all transform hover:scale-110"
                  title="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.5.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.42-1.11 1.04-1.36 1.75-.21.61-.15 1.3.18 1.84.45.75 1.25 1.25 2.1 1.31 1.07.08 2.15-.31 2.83-1.07.56-.63.85-1.45.89-2.31.07-4.5.03-9 0-13.51z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="https://youtube.com/@TON_LIEN_YOUTUBE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-[#FF0000] transition-all transform hover:scale-110"
                  title="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

              </div>

              <Link href="#infos" className="hidden sm:block text-xs font-bold text-stone-300 hover:text-purple-400 transition-colors uppercase tracking-widest drop-shadow">
                Infos
              </Link>
              <Link
                href="/register"
                className="relative group overflow-hidden rounded-md p-[1px] font-bold text-xs"
              >
                <span className="absolute inset-0 bg-purple-900 rounded-md"></span>
                <span className="relative block px-4 md:px-5 py-2 md:py-2.5 bg-[#050204]/90 rounded-[5px] text-purple-300 group-hover:bg-purple-900 group-hover:text-white transition-all uppercase tracking-widest font-extrabold whitespace-nowrap">
                  Inscrire <span className="hidden lg:inline">une équipe</span>
                </span>
              </Link>
            </nav>
          </div>
        </header>

        {/* Centre de la page : Logo + Cashprize + Légende + Bouton */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 -mt-6">
          
          {/* Logo */}
          <img 
            src="/logo.png" 
            alt="Logo ALoLT" 
            className="w-80 md:w-96 h-auto object-contain mb-4 drop-shadow-[0_0_25px_rgba(126,34,206,0.6)]" 
          />
          
          {/* Gros texte Cashprize */}
          <h1 className="text-4xl md:text-6xl font-black tracking-widest uppercase text-white mb-6 text-center drop-shadow-lg">
            350 € à gagner
          </h1>

          {/* Légende */}
          <p className="text-base md:text-lg text-stone-200 font-medium tracking-wide mb-8 text-center max-w-2xl drop-shadow-lg [text-shadow:_0px_2px_10px_rgba(0,0,0,0.8)]">
            <em>Affronte des équipes amateurs entre <strong>platine IV</strong> et <strong>diamant III</strong> en 5v5. Inscription instantanée, cashprize garanti avec la répartition : 1er 250€ et 2eme 100€.</em>
          </p>

          {/* Gros Bouton */}
          <Link
            href="/register"
            className="inline-flex items-center gap-3 bg-purple-900 hover:bg-purple-800 text-white font-black text-lg px-12 py-5 rounded-md shadow-[0_0_30px_rgba(126,34,206,0.4)] uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 border border-purple-600/60"
          >
            Rejoindre la compétition
          </Link>
        </div>

        {/* Le bas de la page : Début de la section noire avec bordure violette */}
        <div className="w-full bg-[#030102] border-t-2 border-purple-600 shadow-[0_-10px_40px_rgba(126,34,206,0.2)]">
          <div 
            className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between cursor-pointer" 
            onClick={() => document.getElementById('infos').scrollIntoView({ behavior: 'smooth' })}
          >
            <h2 className="text-xl font-black text-white uppercase tracking-widest text-left drop-shadow-md">
              Informations sur le tournoi
            </h2>
            <span className="text-purple-500 animate-bounce text-xl">↓</span>
          </div>
        </div>
      </div>

      {/* 3. PAGE DÉROULANTE (Fond noir complet) */}
      <div id="infos" className="relative z-10 w-full bg-[#030102] pb-24">
        <div className="max-w-7xl mx-auto px-6 pt-12">
          
          {/* Grille des statistiques */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-16">
            <div className="relative p-6 rounded-lg bg-[#0a0306] border border-purple-900/40 shadow-xl group hover:border-purple-600/60 transition-all">
              <p className="text-[10px] uppercase text-purple-400 font-extrabold tracking-[0.25em]">Cout de participation</p>
              <p className="text-4xl font-black text-white mt-2 tracking-tight drop-shadow">10 € </p>
              <p className="text-xs text-stone-400 mt-1">prix par équipe</p>
            </div>

            <div className="relative p-6 rounded-lg bg-[#0a0306] border border-purple-900/40 shadow-xl group hover:border-purple-600/60 transition-all">
              <p className="text-[10px] uppercase text-purple-400 font-extrabold tracking-[0.25em]">Date</p>
              <p className="text-4xl font-black text-white mt-2 tracking-tight drop-shadow">21 et 22 novembre</p>
              <p className="text-xs text-stone-400 mt-1">Samedi et dimanche</p>
            </div>

            <div className="relative p-6 rounded-lg bg-[#0a0306] border border-purple-900/40 shadow-xl group hover:border-purple-600/60 transition-all">
              <p className="text-[10px] uppercase text-purple-400 font-extrabold tracking-[0.25em]">Disponibilité</p>
              <p className="text-4xl font-black text-white mt-2 tracking-tight drop-shadow">{remainingSlots} / {MAX_SLOTS}</p>
              <p className="text-xs text-stone-400 mt-1">Slots restants</p>
            </div>
          </div>

          {/* Section Comment Participer */}
          <div className="border-t border-purple-950/50 pt-16">
            <h2 className="text-xl font-bold uppercase text-center text-white tracking-[0.2em] mb-10">
              Comment participer ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-[#0a0306] border border-purple-900/40">
                <span className="text-purple-400 font-black text-xl font-mono">01</span>
                <h3 className="font-bold text-sm text-stone-200 mt-2 uppercase tracking-wider">Crée ton équipe</h3>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">Renseigne le nom de ton équipe et les pseudos de tes 5 joueurs.</p>
              </div>
              <div className="p-6 rounded-lg bg-[#0a0306] border border-purple-900/40">
                <span className="text-purple-400 font-black text-xl font-mono">02</span>
                <h3 className="font-bold text-sm text-stone-200 mt-2 uppercase tracking-wider">Valide ton slot</h3>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">Règle les frais d'inscription de manière sécurisée via Stripe.</p>
              </div>
              <div className="p-6 rounded-lg bg-[#0a0306] border border-purple-900/40">
                <span className="text-purple-400 font-black text-xl font-mono">03</span>
                <h3 className="font-bold text-sm text-stone-200 mt-2 uppercase tracking-wider">Entre dans l'arène</h3>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">Rejoins le serveur pour le check-in et le lancement des matchs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative z-10 border-t border-purple-950/50 py-8 text-center text-xs text-stone-500 bg-[#030102]">
        © 2026 ALoLT — League of Legends Tournois Amateurs. Projet indépendant non affilié à Riot Games.
      </footer>
    </main>
  );
}