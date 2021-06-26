import { Controller, Get } from '@nestjs/common';
import { ShopsService } from './shops.service';

@Controller('shops')
export class ShopsController {

	constructor(private readonly shopsService: ShopsService) {}
	
	@Get('all')
	getAll() {
		return this.shopsService.getAll();
	}
}
