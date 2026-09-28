import type { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSkipSearchToMediaRequest1790639100000 implements MigrationInterface {
  name = 'AddSkipSearchToMediaRequest1790639100000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "media_request" ADD "skipSearch" boolean NOT NULL DEFAULT false`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "media_request" DROP COLUMN "skipSearch"`
    );
  }
}
