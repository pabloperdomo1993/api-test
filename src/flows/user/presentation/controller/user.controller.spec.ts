import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { SignInUseCase } from '../../application/use-case/sign-in.use-case';
import { SignUpUseCase } from '../../application/use-case/sign-up.use-case';
import { UserSignInDto } from '../dto/user.sign-in.dto';
import { UserSignUpDto } from '../dto/user.sign-up.dto';

describe('UserController', () => {
  let controller: UserController;
  let signInUseCase: SignInUseCase;
  let signUpUseCase: SignUpUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: SignInUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: SignUpUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    signInUseCase = module.get<SignInUseCase>(SignInUseCase);
    signUpUseCase = module.get<SignUpUseCase>(SignUpUseCase);
  });

  describe('signUp', () => {
    it('should call signUpUseCase.execute with correct data and return result', async () => {
      const dto: UserSignUpDto = {
        "names": "test 1",
        "lastNames": "test 2",
        "documentNumber": "123",
        "email": "test1@gmail.com",
        "phoneNumber": "3112738807",
        "password": "123453"
      };

      const expectedResult = { message: 'User registered', userId: 1 };
      jest.spyOn(signUpUseCase, 'execute').mockResolvedValue(expectedResult);

      const result = await controller.signUp(dto);
      expect(signUpUseCase.execute).toHaveBeenCalledWith(dto);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('signIn', () => {
    it('should call signInUseCase.execute with correct data and return token', async () => {
      const dto: UserSignInDto = {
        email: 'john@example.com',
        password: 'secure123',
      };

      const expectedResult = { accessToken: 'mock-token' };
      jest.spyOn(signInUseCase, 'execute').mockResolvedValue(expectedResult);

      const result = await controller.signIn(dto);
      expect(signInUseCase.execute).toHaveBeenCalledWith(dto);
      expect(result).toEqual(expectedResult);
    });
  });
});
