'use client';

import Link from 'next/link';

export default function Reglement() {
  return (
    <main className="min-h-screen bg-[#050204] text-stone-100 relative overflow-hidden font-sans flex flex-col justify-between">
      
      {/* Halo d'ambiance violet et bordeaux */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-purple-950/30 via-rose-950/20 to-indigo-950/20 blur-[160px] pointer-events-none z-0" />

      {/* En-tête */}
      <header className="relative z-10 border-b border-purple-950/50 bg-[#050204]/60 backdrop-blur-md sticky top-0 z-50">
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
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16 w-full flex-1">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black uppercase text-white tracking-widest drop-shadow-lg mb-4">
            Règlement Officiel
          </h1>
          <p className="text-sm text-purple-400 uppercase tracking-[0.2em] font-bold">
            Conditions de participation et règles du tournoi
          </p>
        </div>

        <div className="bg-[#0a0306]/85 border border-purple-900/40 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-2xl space-y-10">
          
          {/* Section 1 : Anti-Smurf */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-rose-600 font-black text-2xl font-mono">01.</span>
              <h2 className="text-lg font-bold uppercase tracking-widest text-purple-300">
                Éligibilité & Anti-Smurf
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-stone-300 leading-relaxed ml-10">
              <li><strong className="text-white">Rangs autorisés :</strong> Les joueurs doivent être classés entre Platine IV et Diamant III (Solo/Duo) lors de la saison en cours.</li>
              <li><strong className="text-rose-400">Tolérance Zéro pour le Smurf :</strong> Une enquête systématique (historique, winrate, nombre de games) sera effectuée sur chaque compte. Tout joueur suspecté de smurf entraînera la <strong>disqualification immédiate</strong> de toute son équipe, sans aucun remboursement possible.</li>
              <li><strong className="text-white">Comptes valides :</strong> Les comptes niveau 30 fraîchement classés avec très peu de parties ou des winrates anormaux se verront refuser l'inscription.</li>
            </ul>
          </div>

          <hr className="border-purple-900/30" />

          {/* Section 2 : Comportement */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-rose-600 font-black text-2xl font-mono">02.</span>
              <h2 className="text-lg font-bold uppercase tracking-widest text-purple-300">
                Comportement & Fair-Play
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-stone-300 leading-relaxed ml-10">
              <li><strong className="text-white">Respect mutuel :</strong> Les joueurs doivent rester polis en toute circonstance (dans les salons Discord et dans le /all chat en jeu).</li>
              <li><strong className="text-white">Toxicité :</strong> Les insultes, le spam, les provocations abusives (BM) ou tout comportement antisportif seront sanctionnés. Le tournoi se veut compétitif mais sain.</li>
              <li><strong className="text-white">Décisions du staff :</strong> Les administrateurs ont toujours le dernier mot en cas de litige. Contester de manière agressive une décision du staff entraînera un bannissement.</li>
            </ul>
          </div>

          <hr className="border-purple-900/30" />

          {/* Section 3 : Retards */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-rose-600 font-black text-2xl font-mono">03.</span>
              <h2 className="text-lg font-bold uppercase tracking-widest text-purple-300">
                Ponctualité & Retards
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-stone-300 leading-relaxed ml-10">
              <li><strong className="text-white">Check-in :</strong> Les capitaines doivent valider la présence de leur équipe sur le Discord au moins 30 minutes avant le début de leur premier match.</li>
              <li><strong className="text-white">Délai d'attente :</strong> Un retard maximum de 15 minutes est toléré à partir de l'heure prévue du match. Au-delà, l'équipe absente ou incomplète perd la partie par forfait (FF).</li>
            </ul>
          </div>

          <hr className="border-purple-900/30" />

          {/* Section 4 : Déconnexions */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-rose-600 font-black text-2xl font-mono">04.</span>
              <h2 className="text-lg font-bold uppercase tracking-widest text-purple-300">
                Déconnexions & Pauses
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-stone-300 leading-relaxed ml-10">
              <li><strong className="text-white">Règle de la pause :</strong> Chaque équipe dispose de <strong>10 minutes de pause maximum</strong> par partie en cas de problème technique ou de déconnexion d'un joueur.</li>
              <li><strong className="text-white">Reprise :</strong> L'équipe ayant mis le jeu en pause doit demander à l'équipe adverse si elle est prête avant de relancer la partie dans le chat (ex: "ready?").</li>
            </ul>
          </div>

          <hr className="border-purple-900/30" />

          {/* Section 5 : Remplacements */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-rose-600 font-black text-2xl font-mono">05.</span>
              <h2 className="text-lg font-bold uppercase tracking-widest text-purple-300">
                Remplacements & Joueurs Sub
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-stone-300 leading-relaxed ml-10">
              <li><strong className="text-white">Avant le tournoi :</strong> Tout remplacement de joueur effectué jusqu'à <strong>2 heures avant le début du tournoi</strong> doit être obligatoirement transmis au staff sur Discord par le capitaine de l'équipe. Il faudra fournir le Riot ID et le pseudo Discord du nouveau joueur, qui subira les mêmes vérifications anti-smurf que le reste des participants.</li>
              <li><strong className="text-white">Pendant le tournoi :</strong> Tout remplacement durant la période du tournoi est <strong>strictement interdit</strong>, à l'unique exception des joueurs remplaçants (subs) ayant été explicitement renseignés et validés lors de l'inscription initiale de l'équipe.</li>
            </ul>
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