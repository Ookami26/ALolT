'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

const LOL_ROLES = [
  { label: 'Top Lane', value: 'TOP' },
  { label: 'Jungle', value: 'JGL' },
  { label: 'Mid Lane', value: 'MID' },
  { label: 'ADC / Bot', value: 'ADC' },
  { label: 'Support', value: 'SUP' },
];

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [formData, setFormData] = useState({
    teamName: '',
    contactEmail: '',
    captainRiotId: '',
    captainDiscord: '',
    captainRole: 'TOP',
    player2RiotId: '',
    player2Discord: '',
    player2Role: 'JGL',
    player3RiotId: '',
    player3Discord: '',
    player3Role: 'MID',
    player4RiotId: '',
    player4Discord: '',
    player4Role: 'ADC',
    player5RiotId: '',
    player5Discord: '',
    player5Role: 'SUP',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const { data, error } = await supabase
        .from('teams')
        .insert([
          {
            name: formData.teamName,
            email: formData.contactEmail,
            captain_riot: formData.captainRiotId,
            captain_discord: formData.captainDiscord,
            captain_role: formData.captainRole,
            player_2_riot: formData.player2RiotId,
            player_2_discord: formData.player2Discord,
            player_2_role: formData.player2Role,
            player_3_riot: formData.player3RiotId,
            player_3_discord: formData.player3Discord,
            player_3_role: formData.player3Role,
            player_4_riot: formData.player4RiotId,
            player_4_discord: formData.player4Discord,
            player_4_role: formData.player4Role,
            player_5_riot: formData.player5RiotId,
            player_5_discord: formData.player5Discord,
            player_5_role: formData.player5Role,
            paid: false,
          },
        ])
        .select();

      if (error) throw error;

      if (data && data[0]) {
        window.location.href = `/api/checkout?teamId=${data[0].id}`;
      }
    } catch (err) {
      setErrorMsg(err.message || 'Une erreur est survenue lors de l\'inscription.');
    } finally {
      setLoading(false);
    }
  };

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
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-12 w-full">
        <div className="bg-[#0a0306]/85 border border-purple-900/40 backdrop-blur-md rounded-xl p-8 md:p-10 shadow-2xl">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-black uppercase text-white tracking-wider">
              Inscription de l'équipe
            </h1>
            <p className="text-xs text-purple-400 uppercase tracking-widest font-bold mt-2">
              Frais d'engagement : 10 € par équipe · Cashprize 350 €
            </p>
          </div>

          {errorMsg && (
            <div className="mb-6 p-4 rounded-md bg-rose-950/60 border border-rose-800 text-rose-200 text-xs text-center font-semibold">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Infos Équipe & Contact */}
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-purple-300 border-b border-purple-900/40 pb-2">
                1. Informations Générales de l'Équipe
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-300 mb-1">
                    Nom de l'équipe *
                  </label>
                  <input
                    type="text"
                    name="teamName"
                    required
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="Ex: Red Knights"
                    className="w-full px-4 py-3 bg-[#050204]/80 border border-purple-900/50 rounded-md text-stone-100 placeholder-stone-600 focus:outline-none focus:border-purple-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-300 mb-1">
                    Email de contact *
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    required
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="contact@exemple.com"
                    className="w-full px-4 py-3 bg-[#050204]/80 border border-purple-900/50 rounded-md text-stone-100 placeholder-stone-600 focus:outline-none focus:border-purple-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Joueurs de l'équipe */}
            <div className="space-y-6 pt-2">
              <h2 className="text-sm font-bold uppercase tracking-widest text-purple-300 border-b border-purple-900/40 pb-2">
                2. Composition de l'équipe (Rôle, Riot ID & Discord)
              </h2>

              {/* Capitaine */}
              <div className="p-4 rounded-lg bg-[#050204]/60 border border-purple-900/30 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-rose-500">Capitaine (Joueur 1)</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Rôle *</label>
                    <select
                      name="captainRole"
                      value={formData.captainRole}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 focus:outline-none focus:border-purple-500 text-sm"
                    >
                      {LOL_ROLES.map((role) => (
                        <option key={role.value} value={role.value}>{role.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Riot ID + #TAG *</label>
                    <input
                      type="text"
                      name="captainRiotId"
                      required
                      value={formData.captainRiotId}
                      onChange={handleChange}
                      placeholder="Pseudo#EUW"
                      className="w-full px-4 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 placeholder-stone-600 focus:outline-none focus:border-purple-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Pseudo Discord *</label>
                    <input
                      type="text"
                      name="captainDiscord"
                      required
                      value={formData.captainDiscord}
                      onChange={handleChange}
                      placeholder="discord_pseudo"
                      className="w-full px-4 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 placeholder-stone-600 focus:outline-none focus:border-purple-500 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Joueur 2 */}
              <div className="p-4 rounded-lg bg-[#050204]/60 border border-purple-900/30 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-purple-400">Joueur 2</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Rôle *</label>
                    <select
                      name="player2Role"
                      value={formData.player2Role}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 focus:outline-none focus:border-purple-500 text-sm"
                    >
                      {LOL_ROLES.map((role) => (
                        <option key={role.value} value={role.value}>{role.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Riot ID + #TAG *</label>
                    <input
                      type="text"
                      name="player2RiotId"
                      required
                      value={formData.player2RiotId}
                      onChange={handleChange}
                      placeholder="Pseudo#EUW"
                      className="w-full px-4 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 placeholder-stone-600 focus:outline-none focus:border-purple-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Pseudo Discord *</label>
                    <input
                      type="text"
                      name="player2Discord"
                      required
                      value={formData.player2Discord}
                      onChange={handleChange}
                      placeholder="discord_pseudo"
                      className="w-full px-4 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 placeholder-stone-600 focus:outline-none focus:border-purple-500 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Joueur 3 */}
              <div className="p-4 rounded-lg bg-[#050204]/60 border border-purple-900/30 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-purple-400">Joueur 3</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Rôle *</label>
                    <select
                      name="player3Role"
                      value={formData.player3Role}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 focus:outline-none focus:border-purple-500 text-sm"
                    >
                      {LOL_ROLES.map((role) => (
                        <option key={role.value} value={role.value}>{role.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Riot ID + #TAG *</label>
                    <input
                      type="text"
                      name="player3RiotId"
                      required
                      value={formData.player3RiotId}
                      onChange={handleChange}
                      placeholder="Pseudo#EUW"
                      className="w-full px-4 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 placeholder-stone-600 focus:outline-none focus:border-purple-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Pseudo Discord *</label>
                    <input
                      type="text"
                      name="player3Discord"
                      required
                      value={formData.player3Discord}
                      onChange={handleChange}
                      placeholder="discord_pseudo"
                      className="w-full px-4 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 placeholder-stone-600 focus:outline-none focus:border-purple-500 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Joueur 4 */}
              <div className="p-4 rounded-lg bg-[#050204]/60 border border-purple-900/30 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-purple-400">Joueur 4</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Rôle *</label>
                    <select
                      name="player4Role"
                      value={formData.player4Role}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 focus:outline-none focus:border-purple-500 text-sm"
                    >
                      {LOL_ROLES.map((role) => (
                        <option key={role.value} value={role.value}>{role.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Riot ID + #TAG *</label>
                    <input
                      type="text"
                      name="player4RiotId"
                      required
                      value={formData.player4RiotId}
                      onChange={handleChange}
                      placeholder="Pseudo#EUW"
                      className="w-full px-4 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 placeholder-stone-600 focus:outline-none focus:border-purple-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Pseudo Discord *</label>
                    <input
                      type="text"
                      name="player4Discord"
                      required
                      value={formData.player4Discord}
                      onChange={handleChange}
                      placeholder="discord_pseudo"
                      className="w-full px-4 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 placeholder-stone-600 focus:outline-none focus:border-purple-500 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Joueur 5 */}
              <div className="p-4 rounded-lg bg-[#050204]/60 border border-purple-900/30 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-purple-400">Joueur 5</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Rôle *</label>
                    <select
                      name="player5Role"
                      value={formData.player5Role}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 focus:outline-none focus:border-purple-500 text-sm"
                    >
                      {LOL_ROLES.map((role) => (
                        <option key={role.value} value={role.value}>{role.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Riot ID + #TAG *</label>
                    <input
                      type="text"
                      name="player5RiotId"
                      required
                      value={formData.player5RiotId}
                      onChange={handleChange}
                      placeholder="Pseudo#EUW"
                      className="w-full px-4 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 placeholder-stone-600 focus:outline-none focus:border-purple-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase text-stone-400 mb-1">Pseudo Discord *</label>
                    <input
                      type="text"
                      name="player5Discord"
                      required
                      value={formData.player5Discord}
                      onChange={handleChange}
                      placeholder="discord_pseudo"
                      className="w-full px-4 py-2.5 bg-[#0a0306] border border-purple-900/50 rounded-md text-stone-100 placeholder-stone-600 focus:outline-none focus:border-purple-500 text-sm"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Bouton de soumission */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-900 hover:bg-purple-800 disabled:opacity-50 text-white font-black text-sm py-4 rounded-md shadow-[0_0_25px_rgba(126,34,206,0.3)] uppercase tracking-[0.2em] transition-all border border-purple-600/60"
              >
                {loading ? 'Validation en cours...' : 'Procéder au paiement (10 €)'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-950/50 py-8 text-center text-xs text-stone-500 bg-[#030102]">
        © 2026 ALoLT — League of Legends Tournois Amateurs. Projet indépendant non affilié à Riot Games.
      </footer>
    </main>
  );
}
