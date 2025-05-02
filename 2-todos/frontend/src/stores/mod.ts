import { signal } from "@preact/signals";

export const authInfo = signal({
	name: "",
	email: "",
	password: "",
	avatar: "",
});

export const isOpenNavbar = signal(false);