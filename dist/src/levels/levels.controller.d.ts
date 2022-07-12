import { LevelsService } from './levels.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { GetLevelsDto } from './dto/get-levels.dto';
export declare class LevelsController {
    private readonly levelsService;
    constructor(levelsService: LevelsService);
    create(query: GetLevelsDto, createLevelDto: CreateLevelDto): Promise<import("./schemas/level.schema").Level>;
    findAll(query: GetLevelsDto): Promise<import("./schemas/level.schema").Level[]>;
    getTotal(): Promise<{
        en: number;
        vi: number;
    }>;
    findOne(id: string): Promise<import("./schemas/level.schema").Level>;
    update(id: string, updateLevelDto: UpdateLevelDto): Promise<import("./schemas/level.schema").Level>;
    remove(id: string): Promise<import("./schemas/level.schema").Level>;
}
