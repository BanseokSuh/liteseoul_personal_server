import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

	getAll() {
		return 'im get-all method'
	}
}
