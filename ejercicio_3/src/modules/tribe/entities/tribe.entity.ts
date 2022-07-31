import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Tribe {
    @PrimaryGeneratedColumn({ name: "id_tribe" })
    public id: number;

    @Column({ unique: true, nullable: false })
    public name: string;

    @Column({ nullable: false })
    public status: number;
}
