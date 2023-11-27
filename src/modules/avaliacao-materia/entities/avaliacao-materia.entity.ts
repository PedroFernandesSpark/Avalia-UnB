import { Materia } from "src/modules/materia/entities/materia.entity";
import { Professor } from "src/modules/professor/entities/professor.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'avaliacao-materia'})
export class AvaliacaoMateria {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'comentario', type: 'varchar', nullable: false})
  public comentario: string;

  @Column({ name: 'dificuldade', type: 'numeric', nullable: false})
  public dificuldade: Number;

  @Column({ name: 'ambiente', type: 'numeric', nullable: false})
  public ambiente: Number;

  @Column({ name: 'assessibilidade', type: 'numeric', nullable: false})
  public assessibilidade: Number;

  @Column({ name: 'exigencia', type: 'numeric', nullable: false})
  public exigencia: Number;

  @Column({ name: 'organizacao', type: 'numeric', nullable: false})
  public organizacao: Number;

  @Column({ name: 'materialApoio', type: 'numeric', nullable: false})
  public materialApoio: Number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user' })
  user: User | number;

  @OneToOne(() => Materia, (materia) => materia.id, {nullable: true, eager: true})
  @JoinColumn({ name: 'materia', referencedColumnName: 'id'})
  materia: number | Materia;

  constructor(dto:any){
    Object.assign(this,dto);
  }
}
