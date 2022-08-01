import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tribe } from "./tribe.entity";

@Entity('organizations')
export class Organization {

    @PrimaryGeneratedColumn({ name: "id_organization" })
    public id: number;

    @Column({ unique: true, nullable: false })
    public name: string;

    @Column({ nullable: false })
    public status: number;

    @OneToMany(() => Tribe, (tribe) => tribe.organization)
    tribes: Tribe[];
}
