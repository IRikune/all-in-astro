import type { NewUser, Result, User } from "../types/mod.ts";
import { monotonicUlid as ulid } from "@std/ulid/monotonic-ulid";
import { kv } from "../main.ts";

interface GetUserByIDOptions {
	userID: User["id"];
}

export async function getUserByID({
	userID,
}: GetUserByIDOptions): Promise<Result<User>> {
	const key = ["users", userID];
	const { value } = await kv.get<User>(key);
	const result = {
		data: value,
	} as Result<User>;
	return result;
}

export async function getUsers(): Promise<Result<User[]>> {
	const entries = kv.list<User>({ prefix: ["users"] });
	const listUsers = [];
	for await (const user of entries) {
		listUsers.push(user.value);
	}
	if (listUsers.length === 0) {
		const result = {
			ok: false,
			data: null,
			message: "No users found",
		} as Result<User[]>;
		return result;
	}
	const result = { ok: true, data: listUsers } as Result<User[]>;
	return result;
}

interface GetUserByEmailOptions {
	email: User["email"];
}

export async function getUserByEmail({
	email,
}: GetUserByEmailOptions): Promise<Result<User>> {
	const key = ["users", email];
	const entry = await kv.get<User>(key);
	const user = entry?.value;
	if (user === null) {
		const result = {
			ok: false,
			data: null,
			message: "User not found",
		} as Result<User>;
		return result;
	}
	const result = { ok: true, data: user } as Result<User>;
	return result;
}

interface CreateUserOptions {
	user: NewUser;
}

export async function createUser({ user }: CreateUserOptions) {
	const userID = ulid();
	const newUser = { ...user, id: userID };
	const userKey = ["users", userID];
	const emailKey = ["users", user.email];

	const res = await kv
		.atomic()
		.check({ key: userKey, versionstamp: null })
		.check({ key: emailKey, versionstamp: null })
		.set(userKey, newUser)
		.set(emailKey, newUser)
		.commit();
	const result = {
		...res,
		id: res.ok && userID,
	};
	return result;
}

interface UpdateUserOptions {
	userID: User["id"];
	newUser: NewUser;
}

export async function updateUser({ userID, newUser }: UpdateUserOptions) {
	const key = ["users", userID];
	const user = await kv.get<User>(key);
	const result = await kv.atomic().check(user).set(key, newUser).commit();
	return result;
}

interface deleteUserOptions {
	userID: User["id"];
}

export async function deleteUser({
	userID,
}: deleteUserOptions): Promise<Result<User>> {
	const key = ["users", userID];
	const user = await kv.get<User>(key);
	await kv.atomic().check(user).delete(key).commit();
	const result = { ok: true, data: user.value } as Result<User>;
	return result;
}
