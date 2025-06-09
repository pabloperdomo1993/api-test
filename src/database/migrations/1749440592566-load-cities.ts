import { MigrationInterface, QueryRunner } from "typeorm";

export class LoadCities1749440592566 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO cities (name, code) VALUES
            ('New York', 'NYC'),
            ('Los Angeles', 'LAX'),
            ('Chicago', 'CHI'),
            ('Houston', 'HOU'),
            ('Phoenix', 'PHX'),
            ('Philadelphia', 'PHL'),
            ('San Antonio', 'SAT'),
            ('San Diego', 'SAN'),
            ('Dallas', 'DAL'),
            ('San Jose', 'SJC')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM cities
            WHERE code IN ('NYC', 'LAX', 'CHI', 'HOU', 'PHX', 'PHL', 'SAT', 'SAN', 'DAL', 'SJC')
        `);
    }

}
