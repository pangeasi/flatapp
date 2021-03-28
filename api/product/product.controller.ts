import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
  Query,
} from "@nestjs/common";
import { Response } from "express";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Post("pic")
  @UseInterceptors(FileInterceptor("pic", { dest: "./public/uploads" }))
  uploadPic(@UploadedFile() file) {
    return this.productService.savePic(file);
  }

  @Get()
  findAll(@Query("page") page: number) {
    return this.productService.findAll(page);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productService.findOne(id);
  }

  @Get("pic/:resource")
  getPic(@Param("resource") resource: string, @Res() res: Response) {
    return res.sendFile(this.productService.pic(resource));
  }
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productService.remove(+id);
  }
}
