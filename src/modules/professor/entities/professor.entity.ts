import { AvaliacaoProfessor } from "src/modules/avaliacao-professor/entities/avaliacao-professor.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProfessorMateria } from "./professor-materia.entity";

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

  @Column({ name: 'universidade', type: 'varchar', nullable: false})
  public universidade: string;

  @Column({ name: 'area-pesquisa', type: 'varchar', nullable: false})
  public areaPesquisa: string;

  @Column({ name: 'idade', type: 'varchar', nullable: false})
  public idade: number;

  @Column({ name: 'professor', type: 'varchar', nullable: true})
  public professor?: string;

  @OneToOne(() => AvaliacaoProfessor, (avaliacao) => avaliacao.id)
  avaliacaoProfessor: AvaliacaoProfessor;

  @OneToMany(() => ProfessorMateria, (materia) => materia.professor)
  public materia?: ProfessorMateria[] | number[];

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
