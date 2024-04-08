import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_live_51LOAgCLocYDVe0iYBLe4CvZXD8rrR55x76RP0dwZXLPlvSOb00C24M8jlwdHsMFrra4d4rPUtrkAECsX4mi2JAaK00UJ6FhaxM"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}