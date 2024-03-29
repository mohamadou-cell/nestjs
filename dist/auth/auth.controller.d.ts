import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { User } from './schemas/user.schema';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(signUpDto: SignUpDto): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
    getAllBooks(): Promise<User[]>;
    getBook(id: string): Promise<User>;
    deleteBook(id: string): Promise<User>;
}
