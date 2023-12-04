import {MigrationInterface, QueryRunner} from "typeorm";

export class addRelationsNew1701656275945 implements MigrationInterface {
    name = 'addRelationsNew1701656275945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "professor-materia" ("id" SERIAL NOT NULL, "professor" integer, "materia" integer, CONSTRAINT "PK_07ce76855163b116942c2eabf32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "professor" ADD "universidade" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "professor" ADD "area-pesquisa" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "professor" ADD "idade" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "professor-materia" ADD CONSTRAINT "FK_1277edc99419b0d881edd91cce2" FOREIGN KEY ("professor") REFERENCES "professor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "professor-materia" ADD CONSTRAINT "FK_60ba460f99f3045082862ee9100" FOREIGN KEY ("materia") REFERENCES "materia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professor-materia" DROP CONSTRAINT "FK_60ba460f99f3045082862ee9100"`);
        await queryRunner.query(`ALTER TABLE "professor-materia" DROP CONSTRAINT "FK_1277edc99419b0d881edd91cce2"`);
        await queryRunner.query(`ALTER TABLE "professor" DROP COLUMN "idade"`);
        await queryRunner.query(`ALTER TABLE "professor" DROP COLUMN "area-pesquisa"`);
        await queryRunner.query(`ALTER TABLE "professor" DROP COLUMN "universidade"`);
        await queryRunner.query(`DROP TABLE "professor-materia"`);
    }

}
