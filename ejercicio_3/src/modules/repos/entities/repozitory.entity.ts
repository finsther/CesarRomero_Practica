import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Metric } from "./metrics.entity";
import { Tribe } from "./tribe.entity";

enum State {
    E = 'Enable',
    D = 'Disable',
    A = 'Archived',
}

enum Status {
    A = 'Active',
    I = 'Inactive',
}

@Entity('repositories')
export class Repozitory {

    @PrimaryGeneratedColumn({ name: "id_repository" })
    public id: number;

    @Column({ unique: true, nullable: false })
    public name: string;

    @Column({ unique: true, nullable: false, enum: State })
    public state: State;

    @Column({ unique: true, nullable: false, name: "create_time" })
    public created: string;

    @Column({ nullable: false, enum: Status })
    public status: Status;

    @OneToOne(() => Metric, (metric) => metric.repository)
    metric: Metric;

    @ManyToOne(() => Tribe, (tribe) => tribe.repositories)
    @JoinColumn({ name: 'id_tribe' })
    tribe: Tribe;
}
