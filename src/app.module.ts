import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsModule } from "./products/products.module";
import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";
// 
@Module({
  imports: [
    ProductsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "client"),
    }),
    MongooseModule.forRoot(`mongodb+srv://abdulloev:0CSxryhOnWJEhipW@tojikonbookcl.jsrcsga.mongodb.net/?retryWrites=true&w=majority`),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// git remote add origin https://github.com/theabdulloev/testtest.git
// git branch -M main
// git push -u origin main
