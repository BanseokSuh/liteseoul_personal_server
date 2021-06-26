import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopsService {
	
	getAll() {
		console.log('--- shops/all')
		return 'this is get-all shops method'
	}
}
