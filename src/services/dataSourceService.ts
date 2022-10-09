import { CONFIG } from 'src/config';
import { DataSource } from 'typeorm';

export default class DataSourceService {
    private readonly ds: DataSource;
    constructor() {
        this.ds = new DataSource({
            type: 'mysql',
            host: CONFIG.DB.HOST,
            port: CONFIG.DB.PORT,
            username: CONFIG.DB.USER,
            password: CONFIG.DB.PASS,
            database: CONFIG.DB.BASE,
            synchronize: true,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
        });
    }
}
