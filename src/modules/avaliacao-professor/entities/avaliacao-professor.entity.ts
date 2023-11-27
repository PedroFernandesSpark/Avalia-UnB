import { Professor } from "src/modules/professor/entities/professor.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'avaliacao-professor'})
export class AvaliacaoProfessor {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'comentario', type: 'varchar', nullable: false})
  public comentario: string;

  @Column({ name: 'formacao', type: 'numeric', nullable: false})
  public formacao: Number;

  @Column({ name: 'metodologia', type: 'numeric', nullable: false})
  public metodologia: Number;

  @Column({ name: 'materialEnsino', type: 'numeric', nullable: false})
  public materialEnsino: Number;

  @Column({ name: 'exigencia', type: 'numeric', nullable: false})
  public exigencia: Number;

  @Column({ name: 'disponibilidade', type: 'numeric', nullable: false})
  public disponibilidade: Number;

  @Column({ name: 'avaliacoes', type: 'numeric', nullable: true})
  public avaliacoes?: Number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user' })
  patient: User | number;

  // @ManyToOne(() => Medic, (medic) => medic.id, {nullable: true})
  // @JoinColumn({ name: 'medic'})
  // medic?: number;

  // @ManyToOne(() => Unit, (unit) => unit.id)
  // @JoinColumn({ name: 'unit' })
  // unit: Unit;

  @OneToOne(() => Professor, (professor) => professor.id, {nullable: true, eager: true})
  @JoinColumn({ name: 'professor', referencedColumnName: 'id'})
  professor: number;

  constructor(dto:any){
    Object.assign(this,dto);
  }
}
