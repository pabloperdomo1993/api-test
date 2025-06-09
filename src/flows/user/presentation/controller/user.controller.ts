import { Body, Controller, Post } from "@nestjs/common";
import { SignInUseCase } from "../../application/use-case/sign-in.use-case";
import { SignUpUseCase } from "../../application/use-case/sign-up.use-case";

@Controller({ path: 'user', version: '1' })
export class UserController {
    constructor(
        private readonly signInUseCase: SignInUseCase,
        private readonly signUpUseCase: SignUpUseCase
    ) { }

    @Post('sign-up')
    async signUp(@Body() data: any) {
        return await this.signUpUseCase.execute(data);
    }

    @Post('sign-in')
    async signIn(@Body() data: any) {
        return await this.signInUseCase.execute(data);         
    }
}
