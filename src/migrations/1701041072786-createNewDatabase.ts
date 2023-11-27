import {MigrationInterface, QueryRunner} from "typeorm";

export class createNewDatabase1701041072786 implements MigrationInterface {
    name = 'createNewDatabase1701041072786'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "materia" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "departamento" character varying NOT NULL, CONSTRAINT "PK_a8b21a045c6a7d9cfffc3a2ab26" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professor" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "departamento" character varying NOT NULL, "email" character varying NOT NULL, "professor" character varying, CONSTRAINT "PK_39a6c8f16280dc3bc3ffdc41e02" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "avaliacao-professor" ("id" SERIAL NOT NULL, "comentario" character varying NOT NULL, "formacao" numeric NOT NULL, "metodologia" numeric NOT NULL, "materialEnsino" numeric NOT NULL, "exigencia" numeric NOT NULL, "disponibilidade" numeric NOT NULL, "avaliacoes" numeric, "user" integer, "professor" integer, CONSTRAINT "REL_1fc23538ee6a425c7b880bb1aa" UNIQUE ("professor"), CONSTRAINT "PK_40527375402d9eccdff1280f23e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "semestre" character varying NOT NULL, "curso" character varying NOT NULL, "emblemas" character varying array NOT NULL, "email" character varying NOT NULL, "salt" character varying NOT NULL, "senha" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "avaliacao-materia" ("id" SERIAL NOT NULL, "comentario" character varying NOT NULL, "dificuldade" numeric NOT NULL, "ambiente" numeric NOT NULL, "assessibilidade" numeric NOT NULL, "exigencia" numeric NOT NULL, "organizacao" numeric NOT NULL, "materialApoio" numeric NOT NULL, "user" integer, "materia" integer, CONSTRAINT "REL_f18325a23388ebe71dfcd5df07" UNIQUE ("materia"), CONSTRAINT "PK_5751da755ce1242d8dc77c57185" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "avaliacao-professor" ADD CONSTRAINT "FK_b8d485e7edaf1000da1702bcebf" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliacao-professor" ADD CONSTRAINT "FK_1fc23538ee6a425c7b880bb1aa6" FOREIGN KEY ("professor") REFERENCES "professor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliacao-materia" ADD CONSTRAINT "FK_4b926140ad0fbe281291cf69927" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliacao-materia" ADD CONSTRAINT "FK_f18325a23388ebe71dfcd5df07d" FOREIGN KEY ("materia") REFERENCES "materia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avaliacao-materia" DROP CONSTRAINT "FK_f18325a23388ebe71dfcd5df07d"`);
        await queryRunner.query(`ALTER TABLE "avaliacao-materia" DROP CONSTRAINT "FK_4b926140ad0fbe281291cf69927"`);
        await queryRunner.query(`ALTER TABLE "avaliacao-professor" DROP CONSTRAINT "FK_1fc23538ee6a425c7b880bb1aa6"`);
        await queryRunner.query(`ALTER TABLE "avaliacao-professor" DROP CONSTRAINT "FK_b8d485e7edaf1000da1702bcebf"`);
        await queryRunner.query(`DROP TABLE "avaliacao-materia"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "avaliacao-professor"`);
        await queryRunner.query(`DROP TABLE "professor"`);
        await queryRunner.query(`DROP TABLE "materia"`);
    }

}
