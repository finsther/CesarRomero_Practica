import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Repozitory } from "./repozitory.entity";

@Entity('metrics')
export class Metric {

    @PrimaryGeneratedColumn({ name: "id_metric" })
    public id: number;

    @Column({ nullable: false })
    public coverage: number;

    @Column({ nullable: false })
    public bugs: number;

    @Column({ nullable: false })
    public vulnerabilities: number;

    @Column({ nullable: false })
    public hotspot: number;

    @OneToOne(() => Repozitory)
    @JoinColumn({ name: 'id_repository' })
    repository: Repozitory;
}
