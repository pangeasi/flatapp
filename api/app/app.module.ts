import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_SYNC,
  DATABASE_USERNAME,
} from "../config";
import { Products } from "../product/entities/product.entity";
import { ProductModule } from "../product/product.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mariadb",
      host: process.env.DATABASE_HOST || DATABASE_HOST,
      port: +process.env.DATABASE_PORT || DATABASE_PORT,
      username: process.env.DATABASE_USERNAME || DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD || DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME || DATABASE_NAME,
      entities: [Products],
      synchronize: process.env.DATABASE_SYNC === "true" || DATABASE_SYNC,
    }),
    ProductModule,
  ],
})
export class AppModule {}
