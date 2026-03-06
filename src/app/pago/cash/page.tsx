"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Store } from "lucide-react";
import { Button } from "@/components/ui/button";

function PagoCashContent() {
	const params = useSearchParams();
	const orderId = params.get("orderId");

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
			<div className="bg-white p-8 rounded-2xl shadow-md max-w-md text-center">
				<Store size={60} className="mx-auto text-[#0B1D4C] mb-4" />

				<h1 className="text-2xl font-bold text-[#0B1D4C] mb-2">
					Pedido confirmado
				</h1>

				<p className="text-gray-600 mb-4">
					Seleccionaste pagar en efectivo y retirar en el local.
				</p>

				<p className="text-sm text-gray-500 mb-6">
					Presentá tu número de pedido al momento de retirar.
					{orderId ? ` #${orderId}` : ""}
				</p>

				<Link href="/">
					<Button className="bg-[#0B1D4C] hover:bg-[#152c69] text-white w-full">
						Volver al inicio
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default function PagoCashPage() {
	return (
		<Suspense fallback={null}>
			<PagoCashContent />
		</Suspense>
	);
}
