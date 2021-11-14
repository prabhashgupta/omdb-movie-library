import { PrimaryColumn, Column, Entity } from "typeorm";

@Entity()
export class Medialist {
    @PrimaryColumn()
    imdbID: string;

    @Column()
    title: string;

    @Column()
    year: string;

    @Column()
    type: string;

    @Column()
    poster: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    lastUpdated: Date | null;
}
