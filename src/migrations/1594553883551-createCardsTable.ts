import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createCardsTable1594553883551 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "cards",
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
                    name: "number",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "vendor",
                    type: "varchar",
                },
                {
                    name: "cvv",
                    type: "int",
                    unsigned: true,
                },
                {
                    name: "amount",
                    type: "int",
                    unsigned: true,
                },
                {
                    name: "currency_id",
                    type: "int",
                    unsigned: true,
                },
                {
                    name: "created_at",
                    type: "datetime",
                },
                {
                    name: "updated_at",
                    type: "datetime",
                },
            ],
            foreignKeys: [
                  {
                    name: 'cards_users',
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                  },
                {
                    name: 'cards_currency',
                    columnNames: ['currency_id'],
                    referencedTableName: 'currency',
                    referencedColumnNames: ['id'],
                },
                ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
