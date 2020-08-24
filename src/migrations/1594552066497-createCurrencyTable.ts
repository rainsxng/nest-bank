import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createCurrencyTable1594552066497 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "currency",
            columns: [
                {
                    name: "id",
                    type: "int",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "code",
                    type: "varchar",
                    length: "255",
                    isUnique: true,
                },
                {
                    name: "created_at",
                    type: "timestamp without time zone",
                },
                {
                    name: "updated_at",
                    type: "timestamp without time zone",
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('currency');
    }

}
