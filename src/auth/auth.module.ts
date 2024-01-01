import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportLocalStrategy } from './pass.local.strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Constants } from 'src/Constants';
import { AuthService } from './auth.service';
import { PassportJWTStrategy } from './jwt.strategy';


@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: Constants.jwtSecret,
        signOptions: { expiresIn: '30d' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [PassportLocalStrategy, PassportJWTStrategy, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
