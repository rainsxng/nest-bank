import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsersTable1594483474409 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
          name: "users",
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
                  length: "255"
              },
              {
                  name: "email",
                  type: "varchar",
                  length: "255",
                  isUnique: true,
              },
              {
                  name: "phone",
                  type: "varchar",
                  length: "255",
                  isUnique: true,
              },
              {
                  name: "password",
                  type: "text",
              },
              {
                  name: "created_at",
                  type: "datetime",
              },
              {
                  name: "updated_at",
                  type: "datetime",
              },
          ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
