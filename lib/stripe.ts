import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_API_KEY!,{

  //@ts-ignore
  apiVersion: "2023-10-16",
  typescript: true,
})