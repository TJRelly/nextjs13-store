import Stripe from "stripe"

export async function POST(req, res) {
  const body = JSON.parse(req.body)

  if (body.lineItes.length === 0) {
    return res.sendStatus(405)
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
      apiVersion: "2020-08-27",
    })

    const session = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      line_items: body.lineItems,
      mode: "payment",
    })

    return res.status(201).json({ session })
  } catch (err) {
    console.log("Error: " + err)
  }
}
