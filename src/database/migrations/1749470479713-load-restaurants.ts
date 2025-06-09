import { MigrationInterface, QueryRunner } from "typeorm";

export class LoadRestaurants1749470479713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO restaurants (name, cityId) VALUES
            ('Joes Pizza NYC', 'NYC'),
            ('Katzs Delicatessen', 'NYC'),
            ('Shake Shack Madison', 'NYC'),
            ('Le Bernardin', 'NYC'),
            ('The Halal Guys', 'NYC'),

            ('In-N-Out Burger LA', 'LAX'),
            ('Guelaguetza', 'LAX'),
            ('Bestia', 'LAX'),
            ('Musso & Frank Grill', 'LAX'),
            ('Philippe The Original', 'LAX'),

            ('Giordanos', 'CHI'),
            ('Lou Malnatis', 'CHI'),
            ('Portillos', 'CHI'),
            ('Girl & the Goat', 'CHI'),
            ('The Purple Pig', 'CHI'),

            ('The Breakfast Klub', 'HOU'),
            ('Hugos Houston', 'HOU'),
            ('Brennans of Houston', 'HOU'),
            ('Truth BBQ', 'HOU'),
            ('Xochi', 'HOU'),

            ('Pizzeria Bianco', 'PHX'),
            ('The Arrogant Butcher', 'PHX'),
            ('Little Miss BBQ', 'PHX'),
            ('Matts Big Breakfast', 'PHX'),
            ('Binkleys Restaurant', 'PHX'),

            ('Pats King of Steaks', 'PHL'),
            ('Genos Steaks', 'PHL'),
            ('Zahav', 'PHL'),
            ('Reading Terminal Market', 'PHL'),
            ('Barbuzzo', 'PHL'),

            ('Mi Tierra Café', 'SAT'),
            ('The Esquire Tavern', 'SAT'),
            ('Cured', 'SAT'),
            ('La Panadería', 'SAT'),
            ('Rosarios', 'SAT'),

            ('Hodads', 'SAN'),
            ('The Crack Shack', 'SAN'),
            ('Born and Raised', 'SAN'),
            ('Trust Restaurant', 'SAN'),
            ('Las Cuatro Milpas', 'SAN'),

            ('Pecan Lodge', 'DAL'),
            ('Velvet Taco', 'DAL'),
            ('The Rustic', 'DAL'),
            ('Nick & Sams', 'DAL'),
            ('E Bar Tex-Mex', 'DAL'),

            ('Falafel Drive In', 'SJC'),
            ('La Victoria Taqueria', 'SJC'),
            ('Back A Yard', 'SJC'),
            ('The Table SJ', 'SJC'),
            ('Original Joes San Jose', 'SJC');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM restaurants WHERE name IN (
                'Joe''s Pizza NYC',
                'Katz''s Delicatessen',
                'Shake Shack Madison',
                'Le Bernardin',
                'The Halal Guys',

                'In-N-Out Burger LA',
                'Guelaguetza',
                'Bestia',
                'Musso & Frank Grill',
                'Philippe The Original',

                'Giordano''s',
                'Lou Malnati''s',
                'Portillo''s',
                'Girl & the Goat',
                'The Purple Pig',

                'The Breakfast Klub',
                'Hugo''s Houston',
                'Brennan''s of Houston',
                'Truth BBQ',
                'Xochi',

                'Pizzeria Bianco',
                'The Arrogant Butcher',
                'Little Miss BBQ',
                'Matt''s Big Breakfast',
                'Binkley''s Restaurant',

                'Pat''s King of Steaks',
                'Geno''s Steaks',
                'Zahav',
                'Reading Terminal Market',
                'Barbuzzo',

                'Mi Tierra Café',
                'The Esquire Tavern',
                'Cured',
                'La Panadería',
                'Rosario''s',

                'Hodad''s',
                'The Crack Shack',
                'Born and Raised',
                'Trust Restaurant',
                'Las Cuatro Milpas',

                'Pecan Lodge',
                'Velvet Taco',
                'The Rustic',
                'Nick & Sam''s',
                'E Bar Tex-Mex',

                'Falafel Drive In',
                'La Victoria Taqueria',
                'Back A Yard',
                'The Table SJ',
                'Original Joe''s San Jose'
            );
        `);
    }

}
