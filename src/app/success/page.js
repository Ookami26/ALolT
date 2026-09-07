'use client';

export const dynamic = 'force-dynamic';

import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

function SuccessContent() {
  const searchParams = useSearchParams();
  const teamId = searchParams.get('team_id');

  useEffect(() => {
    if (teamId) {
      const updateTeamStatus = async () => {
        await supabase
          .from('teams')
          .update({ status: 'paid' })
          .eq('id', teamId);
      };
      updateTeamStatus();
    }
  }, [teamId]);

  return (
    <div className="max-w-md w-full bg-stone-900/80 border border-amber-700/40 rounded-xl p-8 backdrop-blur-md shadow-2xl text-center">
      <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-400 text-2xl font-bold">
        ✓
      </div>
      
      <h1 className="text-2xl font-black uppercase text-amber-400 tracking-wider mb-2">
        Paiement Validé !
      </h1>
      <p className="text-stone-400 text-sm mb-8">
        Votre équipe est officiellement inscrite et validée pour le tournoi. Préparez vos champions !
      </p>

      <Link
        href="/"
        className="inline-block w-full bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-stone-950 font-black py-3 rounded-lg shadow-xl shadow-amber-600/20 border border-amber-300/40 uppercase tracking-wider transition-all"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 flex flex-col items-center justify-center px-6 relative overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-600/10 blur-3xl pointer-events-none -z-10" />
      <Suspense fallback={<div className="text-stone-400">Chargement...</div>}>
        <SuccessContent />
      </Suspense>
    </main>
  );
}
