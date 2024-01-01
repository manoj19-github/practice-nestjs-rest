import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { ChatModule } from './chat/chat.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodsModule } from './foods/foods.module';
@Module({
  imports: [
    UserModule,
    OrderModule,
    ChatModule,
    AuthModule,
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: (configService) => ({
        uri: configService.get('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.local.env',
    }),
    FoodsModule],
    
  controllers: [],
  providers: [],
})
export class AppModule {}
