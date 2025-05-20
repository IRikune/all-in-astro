interface MacWindowProps {
	children: JSX.Element;
}
export function MacWindow({ children }: MacWindowProps) {
	return (
		<div>
			<header>
				<div>
					<div class="size-4 rounded full bg-red-600" />
					<div></div>
					<div></div>
				</div>
				<h1>Garnet</h1>
			</header>
			<main>{children}</main>
		</div>
	);
}
