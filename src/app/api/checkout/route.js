import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { teamId, teamName } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `Inscription Tournoi LoL — Équipe : ${teamName}`,
            },
            unit_amount: 1000, // 10,00 € en centimes
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
     success_url: `${req.headers.get('origin') || 'https://alolt.fr'}/success?team_id=${teamId}`,
      cancel_url: `${req.headers.get('origin') || 'https://alolt.fr'}/register`,
      metadata: {
        teamId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
