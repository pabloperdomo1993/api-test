import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class RelationCityToRestaurant1749469951084 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("restaurants", new TableColumn({
            name: "cityId",
            type: "varchar",
            isNullable: true
        }));

        await queryRunner.createForeignKey("restaurants", new TableForeignKey({
            columnNames: ["cityId"],
            referencedTableName: "cities",
            referencedColumnNames: ["code"],
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("restaurants");
        const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.indexOf("cityId") !== -1) ?? '';
        await queryRunner.dropForeignKey("restaurants", foreignKey);

        await queryRunner.dropColumn("restaurants", "cityId");
    }

}
