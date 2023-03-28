import * as mongoose from 'mongoose';
import { CreateClimatDto } from './dto/create-climat.dto';
import { UpdateClimatDto } from './dto/update-climat.dto';
import { Climat } from './entities/climat.entity';
export declare class ClimatService {
    private climatModel;
    constructor(climatModel: mongoose.Model<Climat>);
    create(createClimatDto: CreateClimatDto): Promise<mongoose.Document<unknown, any, Climat> & Climat & {
        _id: mongoose.Types.ObjectId;
    }>;
    findAll(): Promise<(mongoose.Document<unknown, any, Climat> & Climat & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<mongoose.Document<unknown, any, Climat> & Climat & {
        _id: mongoose.Types.ObjectId;
    }>;
    update(id: string, updateClimatDto: UpdateClimatDto): Promise<mongoose.Document<unknown, any, Climat> & Climat & {
        _id: mongoose.Types.ObjectId;
    }>;
    remove(id: string): Promise<mongoose.Document<unknown, any, Climat> & Climat & {
        _id: mongoose.Types.ObjectId;
    }>;
}
