import { AvaliacaoProfessor } from "src/modules/avaliacao-professor/entities/avaliacao-professor.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'professor'})
export class Professor {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'nome', type: 'varchar', nullable: false})
  public nome: string;

  @Column({ name: 'departamento', type: 'varchar', nullable: false})
  public departamento: string;

  @Column({ name: 'email', type: 'varchar', nullable: false})
  public email: string;

  @Column({ name: 'professor', type: 'varchar', nullable: true})
  public professor?: string;

  @OneToOne(() => AvaliacaoProfessor, (avaliacao) => avaliacao.id)
  avaliacaoProfessor: AvaliacaoProfessor;

  // @ManyToOne(() => Patient, (patient) => patient.id)
  // @JoinColumn({ name: 'patient' })
  // patient: Patient | number;

  // @ManyToOne(() => Medic, (medic) => medic.id, {nullable: true})
  // @JoinColumn({ name: 'medic'})
  // medic?: number;

  // @ManyToOne(() => Unit, (unit) => unit.id)
  // @JoinColumn({ name: 'unit' })
  // unit: Unit;

  // @OneToOne(() => Schedule, (schedule) => schedule.apointment)
  // schedule: Schedule;

  constructor(dto:any){
    Object.assign(this,dto);
  }
}
