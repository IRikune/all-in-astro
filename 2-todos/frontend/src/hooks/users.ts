import { Endpoints } from '../stores/mod';
import type { Result, User } from '../types/mod';

interface GetUserProps {
	userID: User['id'];
}
// GET http://localhost:8000/users/01JSQ04F625GGVDV5ZNENSDRRZ

export async function useGetUser({
	userID,
}: GetUserProps): Promise<Result<User>> {
	const res = await fetch(`${Endpoints.users}${userID}`);
	const data = await res.json();
	return data;
}
