import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsModule } from "./products/products.module";
import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";
import { TelegrafModule } from "nestjs-telegraf";
// mongodb+srv://abdulloev:0CSxryhOnWJEhipW@tojikonbookcl.jsrcsga.mongodb.net/?retryWrites=true&w=majority
@Module({
  imports: [
    ProductsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "client"),
    }),
    MongooseModule.forRoot(`mongodb://127.0.0.1:27017/admin`),
    TelegrafModule.forRoot({
      token: "6914168476:AAEyNpmUF1TkDf6E-I5m4eccVbvZ23T94Kw",
    }),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        token: configService.get<string>('6914168476:AAEyNpmUF1TkDf6E-I5m4eccVbvZ23T94Kw'),
        launchOptions: {
          webhook: {
            domain: 'https://ruznomatj.vercel.app',
            path: '/ismoiljonabdulloev',
          }
        }
      }),
      inject: [ConfigService],
    });
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
