import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class RelationUserToTransaction1749473289329 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("transactions", new TableColumn({
            name: "userId",
            type: "bigint",
            isNullable: true
        }));

        await queryRunner.createForeignKey("transactions", new TableForeignKey({
            columnNames: ["userId"],
            referencedTableName: "users",
            referencedColumnNames: ["idUser"],
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("transactions");
        const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1) ?? '';
        await queryRunner.dropForeignKey("transactions", foreignKey);

        await queryRunner.dropColumn("transactions", "userId");
    }

}
