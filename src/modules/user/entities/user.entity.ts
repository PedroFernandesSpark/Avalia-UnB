import { AvaliacaoMateria } from "src/modules/avaliacao-materia/entities/avaliacao-materia.entity";
import { AvaliacaoProfessor } from "src/modules/avaliacao-professor/entities/avaliacao-professor.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user'})
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'nome', type: 'varchar', nullable: false})
  public nome: string;

  @Column({ name: 'semestre', type: 'varchar', nullable: false})
  public semestre: string;

  @Column({ name: 'curso', type: 'varchar', nullable: false})
  public curso: string;

  @Column({ name: 'emblemas', type: 'varchar', nullable: false, array: true})
  public emblemas: string[];

  @Column({ name: 'email', type: 'varchar', nullable: false})
  public email: string;

  @Column({name: 'salt', type: 'varchar'})
  salt: string;

  @Column({name: 'senha', type: 'varchar'})
  senha: string;

  @OneToMany(() => AvaliacaoMateria, (avaliacaoMateria) => avaliacaoMateria.id)
  public avaliacaoMateria?: AvaliacaoMateria[];

  @OneToMany(() => AvaliacaoProfessor, (avaliacaoProfessor) => avaliacaoProfessor.id)
  public avaliacaoProfessor?: AvaliacaoProfessor[];

  constructor(dto:any){
    Object.assign(this,dto);
  }
}
