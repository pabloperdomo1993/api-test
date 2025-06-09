import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class RelationRestaurantToTransaction1749472749278 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("transactions", new TableColumn({
            name: "restaurantId",
            type: "bigint",
            isNullable: true
        }));

        await queryRunner.createForeignKey("transactions", new TableForeignKey({
            columnNames: ["restaurantId"],
            referencedTableName: "restaurants",
            referencedColumnNames: ["idRestaurant"],
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("transactions");
        const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.indexOf("restaurantId") !== -1) ?? '';
        await queryRunner.dropForeignKey("transactions", foreignKey);

        await queryRunner.dropColumn("transactions", "restaurantId");
    }

}
