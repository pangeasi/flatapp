import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { rename } from "fs";
import { join } from "path";
import { Repository } from "typeorm";
import { ITEMS_PER_PAGE } from "../../constants";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Products } from "./entities/product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products)
    private repository: Repository<Products>
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.repository.save(createProductDto);
  }

  pic(resource: string) {
    return join(process.cwd(), "public", "uploads", resource);
  }
  async savePic(file) {
    await rename(
      `./public/uploads/${file.filename}`,
      `./public/uploads/${file.filename}.${file.originalname.split(".").pop()}`,
      () => null
    );
    return { file: `${file.filename}.${file.originalname.split(".").pop()}` };
  }

  async findAll(page = 1) {
    const found = await this.repository.findAndCount({
      skip: (page - 1) * ITEMS_PER_PAGE,
      take: ITEMS_PER_PAGE,
    });
    return { results: found[0], count: found[1], page };
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
