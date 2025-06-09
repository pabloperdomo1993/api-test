import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(
        private readonly configService: ConfigService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        const token = this.getBearer(request);

        if (!token) {
            throw new UnauthorizedException('Token not found');
        }

        const KEY_JWT = this.configService.get<string>('JWT_KEY');
        
        try {
            const decoded = jwt.verify(token, KEY_JWT);
            request.headers['user-id'] = decoded.idUser;
            
            return true;
        } catch (err) {
            throw new UnauthorizedException('Invalid or expired token');
        }
    }

    private getBearer(request: any): string | null {
        if (request?.headers?.authorization?.startsWith('Bearer ')) {
            return request?.headers?.authorization?.split(' ')[1];
        }
        return null
    }
}