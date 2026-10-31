import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  Put, 
  Query, 
  ParseIntPipe 
} from '@nestjs/common';

import { ProductsService } from './products.service.js';
import { createproductdto } from './dto/create-product.dto.js';
import { promises } from 'dns';
import { PartialUpdateProductDto } from './dto/update-product.dto.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  
@Post()
  create(@Body() dto: createproductdto) { //[cite: 12]
    return this.productsService.create(dto);
  }

  @Get()
    findAll(){
      return this.productsService.findAll()
    }

    @Get('search') // Route: GET /products/search[cite: 12]
  search(@Query('keyword') keyword: string) { //[cite: 12]
    return this.productsService.search(keyword);
  }

 @Get('category/:cat')
  findByCategory(@Param('cat') cat: string) { 
    return this.productsService.findByCategory(cat);
  }

  @Get(':id') 
  findOne(@Param('id', ParseIntPipe) id: number) { 
    return this.productsService.findOne(id);
  }

  @Patch(':id') 
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() partialUpdateDto:PartialUpdateProductDto 
  ) {
    return this.productsService.update(id, partialUpdateDto);
  }

  @Put(':id') 
  replace(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateProductDto: PartialUpdateProductDto 
  ) {
    return this.productsService.replace(id, updateProductDto);
  }

  @Delete(':id') 
  remove(@Param('id', ParseIntPipe) id: number) { 
    return this.productsService.remove(id);
  }

  @Patch(':id/toggle') 
  toggleActive(@Param('id', ParseIntPipe) id: number) { 
    return this.productsService.toggleActive(id);
  }
















}


