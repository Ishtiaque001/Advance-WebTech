import { BadRequestException, Injectable ,NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,ILike } from 'typeorm';
import { Products } from './Entity/products.entity.js';
import { createproductdto } from './dto/create-product.dto.js';
import { promises } from 'dns';
import { isAscii } from 'buffer';
import { PartialUpdateProductDto } from './dto/update-product.dto.js';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepo: Repository<Products>,
  ) {}

  async create(product: createproductdto): Promise<Products> {
    try {
      const newProduct = this.productsRepo.create(product);
      return await this.productsRepo.save(newProduct);
      
     } catch {  
      throw new BadRequestException('Product failed to create');
    }
    
  }

  async findAll(): Promise <Products[]>{
return this.productsRepo.find({
 order: { createdAt: 'DESC' },
});


}


  async findOne(id: number): Promise<Products | string> {
    const pr = await this.productsRepo.findOne({
      where: {
        id: id,
      },
    });

    if (pr) {
      return pr;
    } else {
      return `product with id ${id} not found`;
    }
  }

 async update(id: number, product: PartialUpdateProductDto): Promise<string> {
    const up = await this.productsRepo.findOne({ where: { id: id } });
    if (up) {
      const res = (await this.productsRepo.update(id, product)).affected;
      if (res != null && res > 0) {
        return `user with id ${id} is updated`;
      } else {
        return `user with id ${id} failed to be updated`;
      }
    } else {
      return `user with id ${id} not found`;
    }
  }

  async replace(id: number, dto:PartialUpdateProductDto) {
    const product = await this.productsRepo.preload({
      id,
      ...dto,
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    const replacedProduct = await this.productsRepo.save(product);
    
    return { 
      message: 'Product replaced successfully', 
      
    }; 
  }

  async remove(id: number) {
    const product = await this.productsRepo.findOne({ where: { id:id } });
    
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`); //[cite: 9]
    }

    await this.productsRepo.remove(product);
    
    return { 
      message: 'Product deleted successfully', 
      id 
    };
  }

  async findByCategory(category: string) {
    const products = await this.productsRepo.findAndCount({
      where: { category },
    });
    
    return { 
      message: 'Category products retrieved successfully', 
      
      
    }; 
  }

 async search(keyword: string) {
  // 1. Just find the products that match the keyword
  const products = await this.productsRepo.find({
    where: { name: ILike(`%${keyword}%`) },
  });
  

  return { 
    message: 'Search completed successfully', 
    count: products.length, 
    data: products 
  };
}


async toggleActive(id: number) {
    const product = await this.productsRepo.findOne({ where: { id } });
    
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    product.isActive = !product.isActive; 
    const updatedProduct = await this.productsRepo.save(product); 
    
    return { 
      message: 'Product active status toggled', 
      data: updatedProduct 
    }; //[cite: 9]
  }
    
    


 }




















