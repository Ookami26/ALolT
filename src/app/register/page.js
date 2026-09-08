const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      // 1. Insérer l'équipe dans la table "teams"
      const { data: teamData, error: teamError } = await supabase
        .from('teams')
        .insert([
          {
            name: formData.teamName,
            email: formData.contactEmail,
            paid: false,
          },
        ])
        .select()
        .single();

      if (teamError) throw teamError;

      const teamId = teamData.id;

      // 2. Préparer les 5 joueurs avec les bons noms de colonnes de votre table "players"
      const playersToInsert = [
        {
          team_id: teamId,
          role: formData.captainRole,
          riot_id: formData.captainRiotId,
          discord_tag: formData.captainDiscord,
        },
        {
          team_id: teamId,
          role: formData.player2Role,
          riot_id: formData.player2RiotId,
          discord_tag: formData.player2Discord,
        },
        {
          team_id: teamId,
          role: formData.player3Role,
          riot_id: formData.player3RiotId,
          discord_tag: formData.player3Discord,
        },
        {
          team_id: teamId,
          role: formData.player4Role,
          riot_id: formData.player4RiotId,
          discord_tag: formData.player4Discord,
        },
        {
          team_id: teamId,
          role: formData.player5Role,
          riot_id: formData.player5RiotId,
          discord_tag: formData.player5Discord,
        },
      ];

      // 3. Insérer les joueurs dans la table "players"
      const { error: playersError } = await supabase
        .from('players')
        .insert(playersToInsert);

      if (playersError) throw playersError;

      // 4. Redirection vers le paiement Stripe
      window.location.href = `/api/checkout?teamId=${teamId}`;

    } catch (err) {
      console.error("Erreur d'inscription :", err);
      setErrorMsg(err.message || 'Une erreur est survenue lors de l\'inscription.');
    } finally {
      setLoading(false);
    }
  };
