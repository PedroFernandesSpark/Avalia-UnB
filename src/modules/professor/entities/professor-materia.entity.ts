import { AvaliacaoProfessor } from "src/modules/avaliacao-professor/entities/avaliacao-professor.entity";
import { Materia } from "src/modules/materia/entities/materia.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Professor } from "./professor.entity";

@Entity({name: 'professor-materia'})
export class ProfessorMateria {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Professor, (professor) => professor.id)
  @JoinColumn({ name: 'professor' })
  professor: Professor | number;

  @ManyToOne(() => Materia, (materia) => materia.id)
  @JoinColumn({ name: 'materia' })
  materia: Materia | number;

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
}
