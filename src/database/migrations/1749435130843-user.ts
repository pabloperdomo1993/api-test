import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1749435130843 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "idUser",
                        type: "bigint",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "names",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "lastNames",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "documentNumber",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "phoneNumber",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        isNullable: false
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        isNullable: true
                    }
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
