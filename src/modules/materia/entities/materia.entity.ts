import { AvaliacaoMateria } from "src/modules/avaliacao-materia/entities/avaliacao-materia.entity";
import { ProfessorMateria } from "src/modules/professor/entities/professor-materia.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'materia'})
export class Materia {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'nome', type: 'varchar', nullable: false})
  public nome: string;

  @Column({ name: 'departamento', type: 'varchar', nullable: false})
  public departamento: string;

  @OneToOne(() => AvaliacaoMateria, (avaliacao) => avaliacao.id)
  avaliacaoMateria: AvaliacaoMateria;

  @OneToMany(() => ProfessorMateria, (professor) => professor.id, {eager: true, cascade: true})
  public professor?: ProfessorMateria[];

  constructor(dto:any){
    Object.assign(this,dto);
  }
}
