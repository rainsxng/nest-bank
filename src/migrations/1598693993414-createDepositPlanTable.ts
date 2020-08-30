import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class createDepositPlanTable1598693993414 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "deposit_plan",
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
                    name: "percentage",
                    type: "int",
                    unsigned: true,
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
        await queryRunner.dropTable('deposit_plan');
    }

}
