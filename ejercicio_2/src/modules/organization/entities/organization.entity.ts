import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('organizations')
export class Organization {

    @PrimaryGeneratedColumn({ name: "id_organization"})
    public id: number;

    @Column({ unique: true, nullable: false })
    public name: string;

    @Column({ nullable: false })
    public status: number;
}
