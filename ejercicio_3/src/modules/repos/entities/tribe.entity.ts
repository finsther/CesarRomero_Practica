import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Organization } from "./organization.entity";
import { Repozitory } from "./repozitory.entity";


@Entity('tribes')
export class Tribe {
    @PrimaryGeneratedColumn({ name: "id_tribe" })
    public id: number;

    @Column({ unique: true, nullable: false })
    public name: string;

    @Column({ nullable: false })
    public status: number;

    @OneToMany(() => Repozitory, (repository) => repository.tribe)
    repositories: Repozitory[];

    @ManyToOne(() => Organization, (organization) => organization.tribes)
    @JoinColumn({ name: 'id_organization'})
    organization: Organization;
}
