-- AlterTable
ALTER TABLE `anime` ADD COLUMN `rating` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `episode` ADD COLUMN `rating` DOUBLE NOT NULL DEFAULT 0;
