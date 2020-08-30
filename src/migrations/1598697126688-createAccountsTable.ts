import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class createAccountsTable1598697126688 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "accounts",
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
                    name: "user_id",
                    type: "int",
                    unsigned: true,
                },
                {
                    name: "card_id",
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
            ],
            foreignKeys: [
                {
                    name: 'accounts_users',
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                },
                {
                    name: 'accounts_cards',
                    columnNames: ['card_id'],
                    referencedTableName: 'cards',
                    referencedColumnNames: ['id'],
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('accounts')
    }

}
