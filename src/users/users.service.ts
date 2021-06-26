import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

	getAll() {
		console.log('--- users/all')
		return 'im get-all method'
	}
}
