import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { SignInUseCase } from "../../application/use-case/sign-in.use-case";
import { SignUpUseCase } from "../../application/use-case/sign-up.use-case";
import { UserSignInDto } from "../dto/user.sign-in.dto";
import { UserSignUpDto } from "../dto/user.sign-up.dto";

@Controller({ path: 'user', version: '1' })
export class UserController {
    constructor(
        private readonly signInUseCase: SignInUseCase,
        private readonly signUpUseCase: SignUpUseCase
    ) { }

    @Post('sign-up')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async signUp(@Body() data: UserSignUpDto) {
        return await this.signUpUseCase.execute(data);
    }

    @Post('sign-in')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async signIn(@Body() data: UserSignInDto) {
        return await this.signInUseCase.execute(data);         
    }
}
